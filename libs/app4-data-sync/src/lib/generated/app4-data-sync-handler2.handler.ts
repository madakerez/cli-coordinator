export interface App4DataSyncHandler2Event {
  type: string;
  payload: unknown;
  timestamp: number;
  source: string;
}

export interface App4DataSyncHandler2Handler {
  canHandle(event: App4DataSyncHandler2Event): boolean;
  handle(event: App4DataSyncHandler2Event): Promise<void>;
  priority: number;
}

export class App4DataSyncHandler2EventBus {
  private handlers: App4DataSyncHandler2Handler[] = [];
  private history: App4DataSyncHandler2Event[] = [];
  private maxHistory = 120;

  register(handler: App4DataSyncHandler2Handler): () => void {
    this.handlers.push(handler);
    this.handlers.sort((a, b) => b.priority - a.priority);
    return () => {
      this.handlers = this.handlers.filter(h => h !== handler);
    };
  }

  async dispatch(event: App4DataSyncHandler2Event): Promise<void> {
    this.history.push(event);
    if (this.history.length > this.maxHistory) {
      this.history = this.history.slice(-this.maxHistory);
    }
    const applicable = this.handlers.filter(h => h.canHandle(event));
    for (const handler of applicable) {
      await handler.handle(event);
    }
  }

  getHistory(): ReadonlyArray<App4DataSyncHandler2Event> {
    return [...this.history];
  }

  clearHistory(): void {
    this.history = [];
  }
}

export function createApp4DataSyncHandler2Handler(
  type: string,
  fn: (event: App4DataSyncHandler2Event) => Promise<void>,
  priority = 0
): App4DataSyncHandler2Handler {
  return {
    canHandle: (event) => event.type === type,
    handle: fn,
    priority,
  };
}