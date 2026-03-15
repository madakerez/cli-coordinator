export interface App2FeatureSharingHandler3Event {
  type: string;
  payload: unknown;
  timestamp: number;
  source: string;
}

export interface App2FeatureSharingHandler3Handler {
  canHandle(event: App2FeatureSharingHandler3Event): boolean;
  handle(event: App2FeatureSharingHandler3Event): Promise<void>;
  priority: number;
}

export class App2FeatureSharingHandler3EventBus {
  private handlers: App2FeatureSharingHandler3Handler[] = [];
  private history: App2FeatureSharingHandler3Event[] = [];
  private maxHistory = 130;

  register(handler: App2FeatureSharingHandler3Handler): () => void {
    this.handlers.push(handler);
    this.handlers.sort((a, b) => b.priority - a.priority);
    return () => {
      this.handlers = this.handlers.filter(h => h !== handler);
    };
  }

  async dispatch(event: App2FeatureSharingHandler3Event): Promise<void> {
    this.history.push(event);
    if (this.history.length > this.maxHistory) {
      this.history = this.history.slice(-this.maxHistory);
    }
    const applicable = this.handlers.filter(h => h.canHandle(event));
    for (const handler of applicable) {
      await handler.handle(event);
    }
  }

  getHistory(): ReadonlyArray<App2FeatureSharingHandler3Event> {
    return [...this.history];
  }

  clearHistory(): void {
    this.history = [];
  }
}

export function createApp2FeatureSharingHandler3Handler(
  type: string,
  fn: (event: App2FeatureSharingHandler3Event) => Promise<void>,
  priority = 0
): App2FeatureSharingHandler3Handler {
  return {
    canHandle: (event) => event.type === type,
    handle: fn,
    priority,
  };
}