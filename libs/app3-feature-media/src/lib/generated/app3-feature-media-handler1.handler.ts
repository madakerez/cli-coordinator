export interface App3FeatureMediaHandler1Event {
  type: string;
  payload: unknown;
  timestamp: number;
  source: string;
}

export interface App3FeatureMediaHandler1Handler {
  canHandle(event: App3FeatureMediaHandler1Event): boolean;
  handle(event: App3FeatureMediaHandler1Event): Promise<void>;
  priority: number;
}

export class App3FeatureMediaHandler1EventBus {
  private handlers: App3FeatureMediaHandler1Handler[] = [];
  private history: App3FeatureMediaHandler1Event[] = [];
  private maxHistory = 110;

  register(handler: App3FeatureMediaHandler1Handler): () => void {
    this.handlers.push(handler);
    this.handlers.sort((a, b) => b.priority - a.priority);
    return () => {
      this.handlers = this.handlers.filter(h => h !== handler);
    };
  }

  async dispatch(event: App3FeatureMediaHandler1Event): Promise<void> {
    this.history.push(event);
    if (this.history.length > this.maxHistory) {
      this.history = this.history.slice(-this.maxHistory);
    }
    const applicable = this.handlers.filter(h => h.canHandle(event));
    for (const handler of applicable) {
      await handler.handle(event);
    }
  }

  getHistory(): ReadonlyArray<App3FeatureMediaHandler1Event> {
    return [...this.history];
  }

  clearHistory(): void {
    this.history = [];
  }
}

export function createApp3FeatureMediaHandler1Handler(
  type: string,
  fn: (event: App3FeatureMediaHandler1Event) => Promise<void>,
  priority = 0
): App3FeatureMediaHandler1Handler {
  return {
    canHandle: (event) => event.type === type,
    handle: fn,
    priority,
  };
}