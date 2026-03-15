export interface SharedMetricsHandler2Event {
  type: string;
  payload: unknown;
  timestamp: number;
  source: string;
}

export interface SharedMetricsHandler2Handler {
  canHandle(event: SharedMetricsHandler2Event): boolean;
  handle(event: SharedMetricsHandler2Event): Promise<void>;
  priority: number;
}

export class SharedMetricsHandler2EventBus {
  private handlers: SharedMetricsHandler2Handler[] = [];
  private history: SharedMetricsHandler2Event[] = [];
  private maxHistory = 120;

  register(handler: SharedMetricsHandler2Handler): () => void {
    this.handlers.push(handler);
    this.handlers.sort((a, b) => b.priority - a.priority);
    return () => {
      this.handlers = this.handlers.filter(h => h !== handler);
    };
  }

  async dispatch(event: SharedMetricsHandler2Event): Promise<void> {
    this.history.push(event);
    if (this.history.length > this.maxHistory) {
      this.history = this.history.slice(-this.maxHistory);
    }
    const applicable = this.handlers.filter(h => h.canHandle(event));
    for (const handler of applicable) {
      await handler.handle(event);
    }
  }

  getHistory(): ReadonlyArray<SharedMetricsHandler2Event> {
    return [...this.history];
  }

  clearHistory(): void {
    this.history = [];
  }
}

export function createSharedMetricsHandler2Handler(
  type: string,
  fn: (event: SharedMetricsHandler2Event) => Promise<void>,
  priority = 0
): SharedMetricsHandler2Handler {
  return {
    canHandle: (event) => event.type === type,
    handle: fn,
    priority,
  };
}