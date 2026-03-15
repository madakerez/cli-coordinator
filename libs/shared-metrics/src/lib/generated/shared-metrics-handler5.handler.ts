export interface SharedMetricsHandler5Event {
  type: string;
  payload: unknown;
  timestamp: number;
  source: string;
}

export interface SharedMetricsHandler5Handler {
  canHandle(event: SharedMetricsHandler5Event): boolean;
  handle(event: SharedMetricsHandler5Event): Promise<void>;
  priority: number;
}

export class SharedMetricsHandler5EventBus {
  private handlers: SharedMetricsHandler5Handler[] = [];
  private history: SharedMetricsHandler5Event[] = [];
  private maxHistory = 150;

  register(handler: SharedMetricsHandler5Handler): () => void {
    this.handlers.push(handler);
    this.handlers.sort((a, b) => b.priority - a.priority);
    return () => {
      this.handlers = this.handlers.filter(h => h !== handler);
    };
  }

  async dispatch(event: SharedMetricsHandler5Event): Promise<void> {
    this.history.push(event);
    if (this.history.length > this.maxHistory) {
      this.history = this.history.slice(-this.maxHistory);
    }
    const applicable = this.handlers.filter(h => h.canHandle(event));
    for (const handler of applicable) {
      await handler.handle(event);
    }
  }

  getHistory(): ReadonlyArray<SharedMetricsHandler5Event> {
    return [...this.history];
  }

  clearHistory(): void {
    this.history = [];
  }
}

export function createSharedMetricsHandler5Handler(
  type: string,
  fn: (event: SharedMetricsHandler5Event) => Promise<void>,
  priority = 0
): SharedMetricsHandler5Handler {
  return {
    canHandle: (event) => event.type === type,
    handle: fn,
    priority,
  };
}