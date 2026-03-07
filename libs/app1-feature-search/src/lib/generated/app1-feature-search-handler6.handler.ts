export interface App1FeatureSearchHandler6Event {
  type: string;
  payload: unknown;
  timestamp: number;
  source: string;
}

export interface App1FeatureSearchHandler6Handler {
  canHandle(event: App1FeatureSearchHandler6Event): boolean;
  handle(event: App1FeatureSearchHandler6Event): Promise<void>;
  priority: number;
}

export class App1FeatureSearchHandler6EventBus {
  private handlers: App1FeatureSearchHandler6Handler[] = [];
  private history: App1FeatureSearchHandler6Event[] = [];
  private maxHistory = 160;

  register(handler: App1FeatureSearchHandler6Handler): () => void {
    this.handlers.push(handler);
    this.handlers.sort((a, b) => b.priority - a.priority);
    return () => {
      this.handlers = this.handlers.filter(h => h !== handler);
    };
  }

  async dispatch(event: App1FeatureSearchHandler6Event): Promise<void> {
    this.history.push(event);
    if (this.history.length > this.maxHistory) {
      this.history = this.history.slice(-this.maxHistory);
    }
    const applicable = this.handlers.filter(h => h.canHandle(event));
    for (const handler of applicable) {
      await handler.handle(event);
    }
  }

  getHistory(): ReadonlyArray<App1FeatureSearchHandler6Event> {
    return [...this.history];
  }

  clearHistory(): void {
    this.history = [];
  }
}

export function createApp1FeatureSearchHandler6Handler(
  type: string,
  fn: (event: App1FeatureSearchHandler6Event) => Promise<void>,
  priority = 0
): App1FeatureSearchHandler6Handler {
  return {
    canHandle: (event) => event.type === type,
    handle: fn,
    priority,
  };
}