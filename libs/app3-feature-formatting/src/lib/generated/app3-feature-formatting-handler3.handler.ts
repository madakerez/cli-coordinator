export interface App3FeatureFormattingHandler3Event {
  type: string;
  payload: unknown;
  timestamp: number;
  source: string;
}

export interface App3FeatureFormattingHandler3Handler {
  canHandle(event: App3FeatureFormattingHandler3Event): boolean;
  handle(event: App3FeatureFormattingHandler3Event): Promise<void>;
  priority: number;
}

export class App3FeatureFormattingHandler3EventBus {
  private handlers: App3FeatureFormattingHandler3Handler[] = [];
  private history: App3FeatureFormattingHandler3Event[] = [];
  private maxHistory = 130;

  register(handler: App3FeatureFormattingHandler3Handler): () => void {
    this.handlers.push(handler);
    this.handlers.sort((a, b) => b.priority - a.priority);
    return () => {
      this.handlers = this.handlers.filter(h => h !== handler);
    };
  }

  async dispatch(event: App3FeatureFormattingHandler3Event): Promise<void> {
    this.history.push(event);
    if (this.history.length > this.maxHistory) {
      this.history = this.history.slice(-this.maxHistory);
    }
    const applicable = this.handlers.filter(h => h.canHandle(event));
    for (const handler of applicable) {
      await handler.handle(event);
    }
  }

  getHistory(): ReadonlyArray<App3FeatureFormattingHandler3Event> {
    return [...this.history];
  }

  clearHistory(): void {
    this.history = [];
  }
}

export function createApp3FeatureFormattingHandler3Handler(
  type: string,
  fn: (event: App3FeatureFormattingHandler3Event) => Promise<void>,
  priority = 0
): App3FeatureFormattingHandler3Handler {
  return {
    canHandle: (event) => event.type === type,
    handle: fn,
    priority,
  };
}