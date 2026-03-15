export interface App2FeatureSharingHandler1Event {
  type: string;
  payload: unknown;
  timestamp: number;
  source: string;
}

export interface App2FeatureSharingHandler1Handler {
  canHandle(event: App2FeatureSharingHandler1Event): boolean;
  handle(event: App2FeatureSharingHandler1Event): Promise<void>;
  priority: number;
}

export class App2FeatureSharingHandler1EventBus {
  private handlers: App2FeatureSharingHandler1Handler[] = [];
  private history: App2FeatureSharingHandler1Event[] = [];
  private maxHistory = 110;

  register(handler: App2FeatureSharingHandler1Handler): () => void {
    this.handlers.push(handler);
    this.handlers.sort((a, b) => b.priority - a.priority);
    return () => {
      this.handlers = this.handlers.filter(h => h !== handler);
    };
  }

  async dispatch(event: App2FeatureSharingHandler1Event): Promise<void> {
    this.history.push(event);
    if (this.history.length > this.maxHistory) {
      this.history = this.history.slice(-this.maxHistory);
    }
    const applicable = this.handlers.filter(h => h.canHandle(event));
    for (const handler of applicable) {
      await handler.handle(event);
    }
  }

  getHistory(): ReadonlyArray<App2FeatureSharingHandler1Event> {
    return [...this.history];
  }

  clearHistory(): void {
    this.history = [];
  }
}

export function createApp2FeatureSharingHandler1Handler(
  type: string,
  fn: (event: App2FeatureSharingHandler1Event) => Promise<void>,
  priority = 0
): App2FeatureSharingHandler1Handler {
  return {
    canHandle: (event) => event.type === type,
    handle: fn,
    priority,
  };
}