export interface App3FeatureHomeHandler0Event {
  type: string;
  payload: unknown;
  timestamp: number;
  source: string;
}

export interface App3FeatureHomeHandler0Handler {
  canHandle(event: App3FeatureHomeHandler0Event): boolean;
  handle(event: App3FeatureHomeHandler0Event): Promise<void>;
  priority: number;
}

export class App3FeatureHomeHandler0EventBus {
  private handlers: App3FeatureHomeHandler0Handler[] = [];
  private history: App3FeatureHomeHandler0Event[] = [];
  private maxHistory = 100;

  register(handler: App3FeatureHomeHandler0Handler): () => void {
    this.handlers.push(handler);
    this.handlers.sort((a, b) => b.priority - a.priority);
    return () => {
      this.handlers = this.handlers.filter(h => h !== handler);
    };
  }

  async dispatch(event: App3FeatureHomeHandler0Event): Promise<void> {
    this.history.push(event);
    if (this.history.length > this.maxHistory) {
      this.history = this.history.slice(-this.maxHistory);
    }
    const applicable = this.handlers.filter(h => h.canHandle(event));
    for (const handler of applicable) {
      await handler.handle(event);
    }
  }

  getHistory(): ReadonlyArray<App3FeatureHomeHandler0Event> {
    return [...this.history];
  }

  clearHistory(): void {
    this.history = [];
  }
}

export function createApp3FeatureHomeHandler0Handler(
  type: string,
  fn: (event: App3FeatureHomeHandler0Event) => Promise<void>,
  priority = 0
): App3FeatureHomeHandler0Handler {
  return {
    canHandle: (event) => event.type === type,
    handle: fn,
    priority,
  };
}