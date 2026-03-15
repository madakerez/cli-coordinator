export interface App3FeatureFormattingHandler5Event {
  type: string;
  payload: unknown;
  timestamp: number;
  source: string;
}

export interface App3FeatureFormattingHandler5Handler {
  canHandle(event: App3FeatureFormattingHandler5Event): boolean;
  handle(event: App3FeatureFormattingHandler5Event): Promise<void>;
  priority: number;
}

export class App3FeatureFormattingHandler5EventBus {
  private handlers: App3FeatureFormattingHandler5Handler[] = [];
  private history: App3FeatureFormattingHandler5Event[] = [];
  private maxHistory = 150;

  register(handler: App3FeatureFormattingHandler5Handler): () => void {
    this.handlers.push(handler);
    this.handlers.sort((a, b) => b.priority - a.priority);
    return () => {
      this.handlers = this.handlers.filter(h => h !== handler);
    };
  }

  async dispatch(event: App3FeatureFormattingHandler5Event): Promise<void> {
    this.history.push(event);
    if (this.history.length > this.maxHistory) {
      this.history = this.history.slice(-this.maxHistory);
    }
    const applicable = this.handlers.filter(h => h.canHandle(event));
    for (const handler of applicable) {
      await handler.handle(event);
    }
  }

  getHistory(): ReadonlyArray<App3FeatureFormattingHandler5Event> {
    return [...this.history];
  }

  clearHistory(): void {
    this.history = [];
  }
}

export function createApp3FeatureFormattingHandler5Handler(
  type: string,
  fn: (event: App3FeatureFormattingHandler5Event) => Promise<void>,
  priority = 0
): App3FeatureFormattingHandler5Handler {
  return {
    canHandle: (event) => event.type === type,
    handle: fn,
    priority,
  };
}