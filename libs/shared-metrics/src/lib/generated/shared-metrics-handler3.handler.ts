export interface SharedMetricsHandler3Event {
  type: string;
  payload: unknown;
  timestamp: number;
  source: string;
}

export interface SharedMetricsHandler3Handler {
  canHandle(event: SharedMetricsHandler3Event): boolean;
  handle(event: SharedMetricsHandler3Event): Promise<void>;
  priority: number;
}

export class SharedMetricsHandler3EventBus {
  private handlers: SharedMetricsHandler3Handler[] = [];
  private history: SharedMetricsHandler3Event[] = [];
  private maxHistory = 130;

  register(handler: SharedMetricsHandler3Handler): () => void {
    this.handlers.push(handler);
    this.handlers.sort((a, b) => b.priority - a.priority);
    return () => {
      this.handlers = this.handlers.filter(h => h !== handler);
    };
  }

  async dispatch(event: SharedMetricsHandler3Event): Promise<void> {
    this.history.push(event);
    if (this.history.length > this.maxHistory) {
      this.history = this.history.slice(-this.maxHistory);
    }
    const applicable = this.handlers.filter(h => h.canHandle(event));
    for (const handler of applicable) {
      await handler.handle(event);
    }
  }

  getHistory(): ReadonlyArray<SharedMetricsHandler3Event> {
    return [...this.history];
  }

  clearHistory(): void {
    this.history = [];
  }
}

export function createSharedMetricsHandler3Handler(
  type: string,
  fn: (event: SharedMetricsHandler3Event) => Promise<void>,
  priority = 0
): SharedMetricsHandler3Handler {
  return {
    canHandle: (event) => event.type === type,
    handle: fn,
    priority,
  };
}