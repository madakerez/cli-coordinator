export interface App1FeatureCommentsHandler1Event {
  type: string;
  payload: unknown;
  timestamp: number;
  source: string;
}

export interface App1FeatureCommentsHandler1Handler {
  canHandle(event: App1FeatureCommentsHandler1Event): boolean;
  handle(event: App1FeatureCommentsHandler1Event): Promise<void>;
  priority: number;
}

export class App1FeatureCommentsHandler1EventBus {
  private handlers: App1FeatureCommentsHandler1Handler[] = [];
  private history: App1FeatureCommentsHandler1Event[] = [];
  private maxHistory = 110;

  register(handler: App1FeatureCommentsHandler1Handler): () => void {
    this.handlers.push(handler);
    this.handlers.sort((a, b) => b.priority - a.priority);
    return () => {
      this.handlers = this.handlers.filter(h => h !== handler);
    };
  }

  async dispatch(event: App1FeatureCommentsHandler1Event): Promise<void> {
    this.history.push(event);
    if (this.history.length > this.maxHistory) {
      this.history = this.history.slice(-this.maxHistory);
    }
    const applicable = this.handlers.filter(h => h.canHandle(event));
    for (const handler of applicable) {
      await handler.handle(event);
    }
  }

  getHistory(): ReadonlyArray<App1FeatureCommentsHandler1Event> {
    return [...this.history];
  }

  clearHistory(): void {
    this.history = [];
  }
}

export function createApp1FeatureCommentsHandler1Handler(
  type: string,
  fn: (event: App1FeatureCommentsHandler1Event) => Promise<void>,
  priority = 0
): App1FeatureCommentsHandler1Handler {
  return {
    canHandle: (event) => event.type === type,
    handle: fn,
    priority,
  };
}