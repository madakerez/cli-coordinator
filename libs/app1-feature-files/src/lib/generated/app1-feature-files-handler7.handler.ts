export interface App1FeatureFilesHandler7Event {
  type: string;
  payload: unknown;
  timestamp: number;
  source: string;
}

export interface App1FeatureFilesHandler7Handler {
  canHandle(event: App1FeatureFilesHandler7Event): boolean;
  handle(event: App1FeatureFilesHandler7Event): Promise<void>;
  priority: number;
}

export class App1FeatureFilesHandler7EventBus {
  private handlers: App1FeatureFilesHandler7Handler[] = [];
  private history: App1FeatureFilesHandler7Event[] = [];
  private maxHistory = 170;

  register(handler: App1FeatureFilesHandler7Handler): () => void {
    this.handlers.push(handler);
    this.handlers.sort((a, b) => b.priority - a.priority);
    return () => {
      this.handlers = this.handlers.filter(h => h !== handler);
    };
  }

  async dispatch(event: App1FeatureFilesHandler7Event): Promise<void> {
    this.history.push(event);
    if (this.history.length > this.maxHistory) {
      this.history = this.history.slice(-this.maxHistory);
    }
    const applicable = this.handlers.filter(h => h.canHandle(event));
    for (const handler of applicable) {
      await handler.handle(event);
    }
  }

  getHistory(): ReadonlyArray<App1FeatureFilesHandler7Event> {
    return [...this.history];
  }

  clearHistory(): void {
    this.history = [];
  }
}

export function createApp1FeatureFilesHandler7Handler(
  type: string,
  fn: (event: App1FeatureFilesHandler7Event) => Promise<void>,
  priority = 0
): App1FeatureFilesHandler7Handler {
  return {
    canHandle: (event) => event.type === type,
    handle: fn,
    priority,
  };
}