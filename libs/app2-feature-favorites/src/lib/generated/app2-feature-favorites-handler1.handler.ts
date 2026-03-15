export interface App2FeatureFavoritesHandler1Event {
  type: string;
  payload: unknown;
  timestamp: number;
  source: string;
}

export interface App2FeatureFavoritesHandler1Handler {
  canHandle(event: App2FeatureFavoritesHandler1Event): boolean;
  handle(event: App2FeatureFavoritesHandler1Event): Promise<void>;
  priority: number;
}

export class App2FeatureFavoritesHandler1EventBus {
  private handlers: App2FeatureFavoritesHandler1Handler[] = [];
  private history: App2FeatureFavoritesHandler1Event[] = [];
  private maxHistory = 110;

  register(handler: App2FeatureFavoritesHandler1Handler): () => void {
    this.handlers.push(handler);
    this.handlers.sort((a, b) => b.priority - a.priority);
    return () => {
      this.handlers = this.handlers.filter(h => h !== handler);
    };
  }

  async dispatch(event: App2FeatureFavoritesHandler1Event): Promise<void> {
    this.history.push(event);
    if (this.history.length > this.maxHistory) {
      this.history = this.history.slice(-this.maxHistory);
    }
    const applicable = this.handlers.filter(h => h.canHandle(event));
    for (const handler of applicable) {
      await handler.handle(event);
    }
  }

  getHistory(): ReadonlyArray<App2FeatureFavoritesHandler1Event> {
    return [...this.history];
  }

  clearHistory(): void {
    this.history = [];
  }
}

export function createApp2FeatureFavoritesHandler1Handler(
  type: string,
  fn: (event: App2FeatureFavoritesHandler1Event) => Promise<void>,
  priority = 0
): App2FeatureFavoritesHandler1Handler {
  return {
    canHandle: (event) => event.type === type,
    handle: fn,
    priority,
  };
}