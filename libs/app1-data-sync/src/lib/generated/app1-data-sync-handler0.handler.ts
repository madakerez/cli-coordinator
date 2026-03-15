export interface App1DataSyncHandler0Event {
  type: string;
  payload: unknown;
  timestamp: number;
  source: string;
}

export interface App1DataSyncHandler0Handler {
  canHandle(event: App1DataSyncHandler0Event): boolean;
  handle(event: App1DataSyncHandler0Event): Promise<void>;
  priority: number;
}

export class App1DataSyncHandler0EventBus {
  private handlers: App1DataSyncHandler0Handler[] = [];
  private history: App1DataSyncHandler0Event[] = [];
  private maxHistory = 100;

  register(handler: App1DataSyncHandler0Handler): () => void {
    this.handlers.push(handler);
    this.handlers.sort((a, b) => b.priority - a.priority);
    return () => {
      this.handlers = this.handlers.filter(h => h !== handler);
    };
  }

  async dispatch(event: App1DataSyncHandler0Event): Promise<void> {
    this.history.push(event);
    if (this.history.length > this.maxHistory) {
      this.history = this.history.slice(-this.maxHistory);
    }
    const applicable = this.handlers.filter(h => h.canHandle(event));
    for (const handler of applicable) {
      await handler.handle(event);
    }
  }

  getHistory(): ReadonlyArray<App1DataSyncHandler0Event> {
    return [...this.history];
  }

  clearHistory(): void {
    this.history = [];
  }
}

export function createApp1DataSyncHandler0Handler(
  type: string,
  fn: (event: App1DataSyncHandler0Event) => Promise<void>,
  priority = 0
): App1DataSyncHandler0Handler {
  return {
    canHandle: (event) => event.type === type,
    handle: fn,
    priority,
  };
}