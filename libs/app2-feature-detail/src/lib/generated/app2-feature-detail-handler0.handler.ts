export interface App2FeatureDetailHandler0Event {
  type: string;
  payload: unknown;
  timestamp: number;
  source: string;
}

export interface App2FeatureDetailHandler0Handler {
  canHandle(event: App2FeatureDetailHandler0Event): boolean;
  handle(event: App2FeatureDetailHandler0Event): Promise<void>;
  priority: number;
}

export class App2FeatureDetailHandler0EventBus {
  private handlers: App2FeatureDetailHandler0Handler[] = [];
  private history: App2FeatureDetailHandler0Event[] = [];
  private maxHistory = 100;

  register(handler: App2FeatureDetailHandler0Handler): () => void {
    this.handlers.push(handler);
    this.handlers.sort((a, b) => b.priority - a.priority);
    return () => {
      this.handlers = this.handlers.filter(h => h !== handler);
    };
  }

  async dispatch(event: App2FeatureDetailHandler0Event): Promise<void> {
    this.history.push(event);
    if (this.history.length > this.maxHistory) {
      this.history = this.history.slice(-this.maxHistory);
    }
    const applicable = this.handlers.filter(h => h.canHandle(event));
    for (const handler of applicable) {
      await handler.handle(event);
    }
  }

  getHistory(): ReadonlyArray<App2FeatureDetailHandler0Event> {
    return [...this.history];
  }

  clearHistory(): void {
    this.history = [];
  }
}

export function createApp2FeatureDetailHandler0Handler(
  type: string,
  fn: (event: App2FeatureDetailHandler0Event) => Promise<void>,
  priority = 0
): App2FeatureDetailHandler0Handler {
  return {
    canHandle: (event) => event.type === type,
    handle: fn,
    priority,
  };
}