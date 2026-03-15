export interface SharedMetricsHandler6Event {
  type: string;
  payload: unknown;
  timestamp: number;
  source: string;
}

export interface SharedMetricsHandler6Handler {
  canHandle(event: SharedMetricsHandler6Event): boolean;
  handle(event: SharedMetricsHandler6Event): Promise<void>;
  priority: number;
}

export class SharedMetricsHandler6EventBus {
  private handlers: SharedMetricsHandler6Handler[] = [];
  private history: SharedMetricsHandler6Event[] = [];
  private maxHistory = 160;

  register(handler: SharedMetricsHandler6Handler): () => void {
    this.handlers.push(handler);
    this.handlers.sort((a, b) => b.priority - a.priority);
    return () => {
      this.handlers = this.handlers.filter(h => h !== handler);
    };
  }

  async dispatch(event: SharedMetricsHandler6Event): Promise<void> {
    this.history.push(event);
    if (this.history.length > this.maxHistory) {
      this.history = this.history.slice(-this.maxHistory);
    }
    const applicable = this.handlers.filter(h => h.canHandle(event));
    for (const handler of applicable) {
      await handler.handle(event);
    }
  }

  getHistory(): ReadonlyArray<SharedMetricsHandler6Event> {
    return [...this.history];
  }

  clearHistory(): void {
    this.history = [];
  }
}

export function createSharedMetricsHandler6Handler(
  type: string,
  fn: (event: SharedMetricsHandler6Event) => Promise<void>,
  priority = 0
): SharedMetricsHandler6Handler {
  return {
    canHandle: (event) => event.type === type,
    handle: fn,
    priority,
  };
}