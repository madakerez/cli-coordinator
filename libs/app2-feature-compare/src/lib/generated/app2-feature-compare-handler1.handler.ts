export interface App2FeatureCompareHandler1Event {
  type: string;
  payload: unknown;
  timestamp: number;
  source: string;
}

export interface App2FeatureCompareHandler1Handler {
  canHandle(event: App2FeatureCompareHandler1Event): boolean;
  handle(event: App2FeatureCompareHandler1Event): Promise<void>;
  priority: number;
}

export class App2FeatureCompareHandler1EventBus {
  private handlers: App2FeatureCompareHandler1Handler[] = [];
  private history: App2FeatureCompareHandler1Event[] = [];
  private maxHistory = 110;

  register(handler: App2FeatureCompareHandler1Handler): () => void {
    this.handlers.push(handler);
    this.handlers.sort((a, b) => b.priority - a.priority);
    return () => {
      this.handlers = this.handlers.filter(h => h !== handler);
    };
  }

  async dispatch(event: App2FeatureCompareHandler1Event): Promise<void> {
    this.history.push(event);
    if (this.history.length > this.maxHistory) {
      this.history = this.history.slice(-this.maxHistory);
    }
    const applicable = this.handlers.filter(h => h.canHandle(event));
    for (const handler of applicable) {
      await handler.handle(event);
    }
  }

  getHistory(): ReadonlyArray<App2FeatureCompareHandler1Event> {
    return [...this.history];
  }

  clearHistory(): void {
    this.history = [];
  }
}

export function createApp2FeatureCompareHandler1Handler(
  type: string,
  fn: (event: App2FeatureCompareHandler1Event) => Promise<void>,
  priority = 0
): App2FeatureCompareHandler1Handler {
  return {
    canHandle: (event) => event.type === type,
    handle: fn,
    priority,
  };
}