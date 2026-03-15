export interface SharedMetricsHandler1Event {
  type: string;
  payload: unknown;
  timestamp: number;
  source: string;
}

export interface SharedMetricsHandler1Handler {
  canHandle(event: SharedMetricsHandler1Event): boolean;
  handle(event: SharedMetricsHandler1Event): Promise<void>;
  priority: number;
}

export class SharedMetricsHandler1EventBus {
  private handlers: SharedMetricsHandler1Handler[] = [];
  private history: SharedMetricsHandler1Event[] = [];
  private maxHistory = 110;

  register(handler: SharedMetricsHandler1Handler): () => void {
    this.handlers.push(handler);
    this.handlers.sort((a, b) => b.priority - a.priority);
    return () => {
      this.handlers = this.handlers.filter(h => h !== handler);
    };
  }

  async dispatch(event: SharedMetricsHandler1Event): Promise<void> {
    this.history.push(event);
    if (this.history.length > this.maxHistory) {
      this.history = this.history.slice(-this.maxHistory);
    }
    const applicable = this.handlers.filter(h => h.canHandle(event));
    for (const handler of applicable) {
      await handler.handle(event);
    }
  }

  getHistory(): ReadonlyArray<SharedMetricsHandler1Event> {
    return [...this.history];
  }

  clearHistory(): void {
    this.history = [];
  }
}

export function createSharedMetricsHandler1Handler(
  type: string,
  fn: (event: SharedMetricsHandler1Event) => Promise<void>,
  priority = 0
): SharedMetricsHandler1Handler {
  return {
    canHandle: (event) => event.type === type,
    handle: fn,
    priority,
  };
}