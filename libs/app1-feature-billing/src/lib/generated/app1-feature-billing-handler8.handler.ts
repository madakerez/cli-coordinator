export interface App1FeatureBillingHandler8Event {
  type: string;
  payload: unknown;
  timestamp: number;
  source: string;
}

export interface App1FeatureBillingHandler8Handler {
  canHandle(event: App1FeatureBillingHandler8Event): boolean;
  handle(event: App1FeatureBillingHandler8Event): Promise<void>;
  priority: number;
}

export class App1FeatureBillingHandler8EventBus {
  private handlers: App1FeatureBillingHandler8Handler[] = [];
  private history: App1FeatureBillingHandler8Event[] = [];
  private maxHistory = 180;

  register(handler: App1FeatureBillingHandler8Handler): () => void {
    this.handlers.push(handler);
    this.handlers.sort((a, b) => b.priority - a.priority);
    return () => {
      this.handlers = this.handlers.filter(h => h !== handler);
    };
  }

  async dispatch(event: App1FeatureBillingHandler8Event): Promise<void> {
    this.history.push(event);
    if (this.history.length > this.maxHistory) {
      this.history = this.history.slice(-this.maxHistory);
    }
    const applicable = this.handlers.filter(h => h.canHandle(event));
    for (const handler of applicable) {
      await handler.handle(event);
    }
  }

  getHistory(): ReadonlyArray<App1FeatureBillingHandler8Event> {
    return [...this.history];
  }

  clearHistory(): void {
    this.history = [];
  }
}

export function createApp1FeatureBillingHandler8Handler(
  type: string,
  fn: (event: App1FeatureBillingHandler8Event) => Promise<void>,
  priority = 0
): App1FeatureBillingHandler8Handler {
  return {
    canHandle: (event) => event.type === type,
    handle: fn,
    priority,
  };
}