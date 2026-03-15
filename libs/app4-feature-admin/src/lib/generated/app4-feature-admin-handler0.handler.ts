export interface App4FeatureAdminHandler0Event {
  type: string;
  payload: unknown;
  timestamp: number;
  source: string;
}

export interface App4FeatureAdminHandler0Handler {
  canHandle(event: App4FeatureAdminHandler0Event): boolean;
  handle(event: App4FeatureAdminHandler0Event): Promise<void>;
  priority: number;
}

export class App4FeatureAdminHandler0EventBus {
  private handlers: App4FeatureAdminHandler0Handler[] = [];
  private history: App4FeatureAdminHandler0Event[] = [];
  private maxHistory = 100;

  register(handler: App4FeatureAdminHandler0Handler): () => void {
    this.handlers.push(handler);
    this.handlers.sort((a, b) => b.priority - a.priority);
    return () => {
      this.handlers = this.handlers.filter(h => h !== handler);
    };
  }

  async dispatch(event: App4FeatureAdminHandler0Event): Promise<void> {
    this.history.push(event);
    if (this.history.length > this.maxHistory) {
      this.history = this.history.slice(-this.maxHistory);
    }
    const applicable = this.handlers.filter(h => h.canHandle(event));
    for (const handler of applicable) {
      await handler.handle(event);
    }
  }

  getHistory(): ReadonlyArray<App4FeatureAdminHandler0Event> {
    return [...this.history];
  }

  clearHistory(): void {
    this.history = [];
  }
}

export function createApp4FeatureAdminHandler0Handler(
  type: string,
  fn: (event: App4FeatureAdminHandler0Event) => Promise<void>,
  priority = 0
): App4FeatureAdminHandler0Handler {
  return {
    canHandle: (event) => event.type === type,
    handle: fn,
    priority,
  };
}