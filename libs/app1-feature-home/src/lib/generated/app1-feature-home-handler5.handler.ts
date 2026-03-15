export interface App1FeatureHomeHandler5Event {
  type: string;
  payload: unknown;
  timestamp: number;
  source: string;
}

export interface App1FeatureHomeHandler5Handler {
  canHandle(event: App1FeatureHomeHandler5Event): boolean;
  handle(event: App1FeatureHomeHandler5Event): Promise<void>;
  priority: number;
}

export class App1FeatureHomeHandler5EventBus {
  private handlers: App1FeatureHomeHandler5Handler[] = [];
  private history: App1FeatureHomeHandler5Event[] = [];
  private maxHistory = 150;

  register(handler: App1FeatureHomeHandler5Handler): () => void {
    this.handlers.push(handler);
    this.handlers.sort((a, b) => b.priority - a.priority);
    return () => {
      this.handlers = this.handlers.filter(h => h !== handler);
    };
  }

  async dispatch(event: App1FeatureHomeHandler5Event): Promise<void> {
    this.history.push(event);
    if (this.history.length > this.maxHistory) {
      this.history = this.history.slice(-this.maxHistory);
    }
    const applicable = this.handlers.filter(h => h.canHandle(event));
    for (const handler of applicable) {
      await handler.handle(event);
    }
  }

  getHistory(): ReadonlyArray<App1FeatureHomeHandler5Event> {
    return [...this.history];
  }

  clearHistory(): void {
    this.history = [];
  }
}

export function createApp1FeatureHomeHandler5Handler(
  type: string,
  fn: (event: App1FeatureHomeHandler5Event) => Promise<void>,
  priority = 0
): App1FeatureHomeHandler5Handler {
  return {
    canHandle: (event) => event.type === type,
    handle: fn,
    priority,
  };
}