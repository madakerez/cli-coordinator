export interface App1FeatureCommentsHandler5Event {
  type: string;
  payload: unknown;
  timestamp: number;
  source: string;
}

export interface App1FeatureCommentsHandler5Handler {
  canHandle(event: App1FeatureCommentsHandler5Event): boolean;
  handle(event: App1FeatureCommentsHandler5Event): Promise<void>;
  priority: number;
}

export class App1FeatureCommentsHandler5EventBus {
  private handlers: App1FeatureCommentsHandler5Handler[] = [];
  private history: App1FeatureCommentsHandler5Event[] = [];
  private maxHistory = 150;

  register(handler: App1FeatureCommentsHandler5Handler): () => void {
    this.handlers.push(handler);
    this.handlers.sort((a, b) => b.priority - a.priority);
    return () => {
      this.handlers = this.handlers.filter(h => h !== handler);
    };
  }

  async dispatch(event: App1FeatureCommentsHandler5Event): Promise<void> {
    this.history.push(event);
    if (this.history.length > this.maxHistory) {
      this.history = this.history.slice(-this.maxHistory);
    }
    const applicable = this.handlers.filter(h => h.canHandle(event));
    for (const handler of applicable) {
      await handler.handle(event);
    }
  }

  getHistory(): ReadonlyArray<App1FeatureCommentsHandler5Event> {
    return [...this.history];
  }

  clearHistory(): void {
    this.history = [];
  }
}

export function createApp1FeatureCommentsHandler5Handler(
  type: string,
  fn: (event: App1FeatureCommentsHandler5Event) => Promise<void>,
  priority = 0
): App1FeatureCommentsHandler5Handler {
  return {
    canHandle: (event) => event.type === type,
    handle: fn,
    priority,
  };
}