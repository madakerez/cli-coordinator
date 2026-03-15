export interface App1FeatureProfileHandler7Event {
  type: string;
  payload: unknown;
  timestamp: number;
  source: string;
}

export interface App1FeatureProfileHandler7Handler {
  canHandle(event: App1FeatureProfileHandler7Event): boolean;
  handle(event: App1FeatureProfileHandler7Event): Promise<void>;
  priority: number;
}

export class App1FeatureProfileHandler7EventBus {
  private handlers: App1FeatureProfileHandler7Handler[] = [];
  private history: App1FeatureProfileHandler7Event[] = [];
  private maxHistory = 170;

  register(handler: App1FeatureProfileHandler7Handler): () => void {
    this.handlers.push(handler);
    this.handlers.sort((a, b) => b.priority - a.priority);
    return () => {
      this.handlers = this.handlers.filter(h => h !== handler);
    };
  }

  async dispatch(event: App1FeatureProfileHandler7Event): Promise<void> {
    this.history.push(event);
    if (this.history.length > this.maxHistory) {
      this.history = this.history.slice(-this.maxHistory);
    }
    const applicable = this.handlers.filter(h => h.canHandle(event));
    for (const handler of applicable) {
      await handler.handle(event);
    }
  }

  getHistory(): ReadonlyArray<App1FeatureProfileHandler7Event> {
    return [...this.history];
  }

  clearHistory(): void {
    this.history = [];
  }
}

export function createApp1FeatureProfileHandler7Handler(
  type: string,
  fn: (event: App1FeatureProfileHandler7Event) => Promise<void>,
  priority = 0
): App1FeatureProfileHandler7Handler {
  return {
    canHandle: (event) => event.type === type,
    handle: fn,
    priority,
  };
}