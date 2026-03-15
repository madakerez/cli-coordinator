export interface App4UtilJsonHandler0Event {
  type: string;
  payload: unknown;
  timestamp: number;
  source: string;
}

export interface App4UtilJsonHandler0Handler {
  canHandle(event: App4UtilJsonHandler0Event): boolean;
  handle(event: App4UtilJsonHandler0Event): Promise<void>;
  priority: number;
}

export class App4UtilJsonHandler0EventBus {
  private handlers: App4UtilJsonHandler0Handler[] = [];
  private history: App4UtilJsonHandler0Event[] = [];
  private maxHistory = 100;

  register(handler: App4UtilJsonHandler0Handler): () => void {
    this.handlers.push(handler);
    this.handlers.sort((a, b) => b.priority - a.priority);
    return () => {
      this.handlers = this.handlers.filter(h => h !== handler);
    };
  }

  async dispatch(event: App4UtilJsonHandler0Event): Promise<void> {
    this.history.push(event);
    if (this.history.length > this.maxHistory) {
      this.history = this.history.slice(-this.maxHistory);
    }
    const applicable = this.handlers.filter(h => h.canHandle(event));
    for (const handler of applicable) {
      await handler.handle(event);
    }
  }

  getHistory(): ReadonlyArray<App4UtilJsonHandler0Event> {
    return [...this.history];
  }

  clearHistory(): void {
    this.history = [];
  }
}

export function createApp4UtilJsonHandler0Handler(
  type: string,
  fn: (event: App4UtilJsonHandler0Event) => Promise<void>,
  priority = 0
): App4UtilJsonHandler0Handler {
  return {
    canHandle: (event) => event.type === type,
    handle: fn,
    priority,
  };
}