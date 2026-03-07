export interface SharedMetricsHandler4Event {
  type: string;
  payload: unknown;
  timestamp: number;
  source: string;
}

export interface SharedMetricsHandler4Handler {
  canHandle(event: SharedMetricsHandler4Event): boolean;
  handle(event: SharedMetricsHandler4Event): Promise<void>;
  priority: number;
}

export class SharedMetricsHandler4EventBus {
  private handlers: SharedMetricsHandler4Handler[] = [];
  private history: SharedMetricsHandler4Event[] = [];
  private maxHistory = 140;

  register(handler: SharedMetricsHandler4Handler): () => void {
    this.handlers.push(handler);
    this.handlers.sort((a, b) => b.priority - a.priority);
    return () => {
      this.handlers = this.handlers.filter(h => h !== handler);
    };
  }

  async dispatch(event: SharedMetricsHandler4Event): Promise<void> {
    this.history.push(event);
    if (this.history.length > this.maxHistory) {
      this.history = this.history.slice(-this.maxHistory);
    }
    const applicable = this.handlers.filter(h => h.canHandle(event));
    for (const handler of applicable) {
      await handler.handle(event);
    }
  }

  getHistory(): ReadonlyArray<SharedMetricsHandler4Event> {
    return [...this.history];
  }

  clearHistory(): void {
    this.history = [];
  }
}

export function createSharedMetricsHandler4Handler(
  type: string,
  fn: (event: SharedMetricsHandler4Event) => Promise<void>,
  priority = 0
): SharedMetricsHandler4Handler {
  return {
    canHandle: (event) => event.type === type,
    handle: fn,
    priority,
  };
}