export interface App2FeatureSearchHandler0Event {
  type: string;
  payload: unknown;
  timestamp: number;
  source: string;
}

export interface App2FeatureSearchHandler0Handler {
  canHandle(event: App2FeatureSearchHandler0Event): boolean;
  handle(event: App2FeatureSearchHandler0Event): Promise<void>;
  priority: number;
}

export class App2FeatureSearchHandler0EventBus {
  private handlers: App2FeatureSearchHandler0Handler[] = [];
  private history: App2FeatureSearchHandler0Event[] = [];
  private maxHistory = 100;

  register(handler: App2FeatureSearchHandler0Handler): () => void {
    this.handlers.push(handler);
    this.handlers.sort((a, b) => b.priority - a.priority);
    return () => {
      this.handlers = this.handlers.filter(h => h !== handler);
    };
  }

  async dispatch(event: App2FeatureSearchHandler0Event): Promise<void> {
    this.history.push(event);
    if (this.history.length > this.maxHistory) {
      this.history = this.history.slice(-this.maxHistory);
    }
    const applicable = this.handlers.filter(h => h.canHandle(event));
    for (const handler of applicable) {
      await handler.handle(event);
    }
  }

  getHistory(): ReadonlyArray<App2FeatureSearchHandler0Event> {
    return [...this.history];
  }

  clearHistory(): void {
    this.history = [];
  }
}

export function createApp2FeatureSearchHandler0Handler(
  type: string,
  fn: (event: App2FeatureSearchHandler0Event) => Promise<void>,
  priority = 0
): App2FeatureSearchHandler0Handler {
  return {
    canHandle: (event) => event.type === type,
    handle: fn,
    priority,
  };
}