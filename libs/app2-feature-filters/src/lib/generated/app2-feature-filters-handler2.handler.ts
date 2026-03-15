export interface App2FeatureFiltersHandler2Event {
  type: string;
  payload: unknown;
  timestamp: number;
  source: string;
}

export interface App2FeatureFiltersHandler2Handler {
  canHandle(event: App2FeatureFiltersHandler2Event): boolean;
  handle(event: App2FeatureFiltersHandler2Event): Promise<void>;
  priority: number;
}

export class App2FeatureFiltersHandler2EventBus {
  private handlers: App2FeatureFiltersHandler2Handler[] = [];
  private history: App2FeatureFiltersHandler2Event[] = [];
  private maxHistory = 120;

  register(handler: App2FeatureFiltersHandler2Handler): () => void {
    this.handlers.push(handler);
    this.handlers.sort((a, b) => b.priority - a.priority);
    return () => {
      this.handlers = this.handlers.filter(h => h !== handler);
    };
  }

  async dispatch(event: App2FeatureFiltersHandler2Event): Promise<void> {
    this.history.push(event);
    if (this.history.length > this.maxHistory) {
      this.history = this.history.slice(-this.maxHistory);
    }
    const applicable = this.handlers.filter(h => h.canHandle(event));
    for (const handler of applicable) {
      await handler.handle(event);
    }
  }

  getHistory(): ReadonlyArray<App2FeatureFiltersHandler2Event> {
    return [...this.history];
  }

  clearHistory(): void {
    this.history = [];
  }
}

export function createApp2FeatureFiltersHandler2Handler(
  type: string,
  fn: (event: App2FeatureFiltersHandler2Event) => Promise<void>,
  priority = 0
): App2FeatureFiltersHandler2Handler {
  return {
    canHandle: (event) => event.type === type,
    handle: fn,
    priority,
  };
}