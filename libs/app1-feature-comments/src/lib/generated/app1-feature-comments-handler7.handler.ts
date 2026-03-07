export interface App1FeatureCommentsHandler7Event {
  type: string;
  payload: unknown;
  timestamp: number;
  source: string;
}

export interface App1FeatureCommentsHandler7Handler {
  canHandle(event: App1FeatureCommentsHandler7Event): boolean;
  handle(event: App1FeatureCommentsHandler7Event): Promise<void>;
  priority: number;
}

export class App1FeatureCommentsHandler7EventBus {
  private handlers: App1FeatureCommentsHandler7Handler[] = [];
  private history: App1FeatureCommentsHandler7Event[] = [];
  private maxHistory = 170;

  register(handler: App1FeatureCommentsHandler7Handler): () => void {
    this.handlers.push(handler);
    this.handlers.sort((a, b) => b.priority - a.priority);
    return () => {
      this.handlers = this.handlers.filter(h => h !== handler);
    };
  }

  async dispatch(event: App1FeatureCommentsHandler7Event): Promise<void> {
    this.history.push(event);
    if (this.history.length > this.maxHistory) {
      this.history = this.history.slice(-this.maxHistory);
    }
    const applicable = this.handlers.filter(h => h.canHandle(event));
    for (const handler of applicable) {
      await handler.handle(event);
    }
  }

  getHistory(): ReadonlyArray<App1FeatureCommentsHandler7Event> {
    return [...this.history];
  }

  clearHistory(): void {
    this.history = [];
  }
}

export function createApp1FeatureCommentsHandler7Handler(
  type: string,
  fn: (event: App1FeatureCommentsHandler7Event) => Promise<void>,
  priority = 0
): App1FeatureCommentsHandler7Handler {
  return {
    canHandle: (event) => event.type === type,
    handle: fn,
    priority,
  };
}