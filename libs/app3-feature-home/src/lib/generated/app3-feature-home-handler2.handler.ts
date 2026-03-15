export interface App3FeatureHomeHandler2Event {
  type: string;
  payload: unknown;
  timestamp: number;
  source: string;
}

export interface App3FeatureHomeHandler2Handler {
  canHandle(event: App3FeatureHomeHandler2Event): boolean;
  handle(event: App3FeatureHomeHandler2Event): Promise<void>;
  priority: number;
}

export class App3FeatureHomeHandler2EventBus {
  private handlers: App3FeatureHomeHandler2Handler[] = [];
  private history: App3FeatureHomeHandler2Event[] = [];
  private maxHistory = 120;

  register(handler: App3FeatureHomeHandler2Handler): () => void {
    this.handlers.push(handler);
    this.handlers.sort((a, b) => b.priority - a.priority);
    return () => {
      this.handlers = this.handlers.filter(h => h !== handler);
    };
  }

  async dispatch(event: App3FeatureHomeHandler2Event): Promise<void> {
    this.history.push(event);
    if (this.history.length > this.maxHistory) {
      this.history = this.history.slice(-this.maxHistory);
    }
    const applicable = this.handlers.filter(h => h.canHandle(event));
    for (const handler of applicable) {
      await handler.handle(event);
    }
  }

  getHistory(): ReadonlyArray<App3FeatureHomeHandler2Event> {
    return [...this.history];
  }

  clearHistory(): void {
    this.history = [];
  }
}

export function createApp3FeatureHomeHandler2Handler(
  type: string,
  fn: (event: App3FeatureHomeHandler2Event) => Promise<void>,
  priority = 0
): App3FeatureHomeHandler2Handler {
  return {
    canHandle: (event) => event.type === type,
    handle: fn,
    priority,
  };
}