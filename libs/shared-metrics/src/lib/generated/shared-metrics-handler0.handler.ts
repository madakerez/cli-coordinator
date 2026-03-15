export interface SharedMetricsHandler0Event {
  type: string;
  payload: unknown;
  timestamp: number;
  source: string;
}

export interface SharedMetricsHandler0Handler {
  canHandle(event: SharedMetricsHandler0Event): boolean;
  handle(event: SharedMetricsHandler0Event): Promise<void>;
  priority: number;
}

export class SharedMetricsHandler0EventBus {
  private handlers: SharedMetricsHandler0Handler[] = [];
  private history: SharedMetricsHandler0Event[] = [];
  private maxHistory = 100;

  register(handler: SharedMetricsHandler0Handler): () => void {
    this.handlers.push(handler);
    this.handlers.sort((a, b) => b.priority - a.priority);
    return () => {
      this.handlers = this.handlers.filter(h => h !== handler);
    };
  }

  async dispatch(event: SharedMetricsHandler0Event): Promise<void> {
    this.history.push(event);
    if (this.history.length > this.maxHistory) {
      this.history = this.history.slice(-this.maxHistory);
    }
    const applicable = this.handlers.filter(h => h.canHandle(event));
    for (const handler of applicable) {
      await handler.handle(event);
    }
  }

  getHistory(): ReadonlyArray<SharedMetricsHandler0Event> {
    return [...this.history];
  }

  clearHistory(): void {
    this.history = [];
  }
}

export function createSharedMetricsHandler0Handler(
  type: string,
  fn: (event: SharedMetricsHandler0Event) => Promise<void>,
  priority = 0
): SharedMetricsHandler0Handler {
  return {
    canHandle: (event) => event.type === type,
    handle: fn,
    priority,
  };
}