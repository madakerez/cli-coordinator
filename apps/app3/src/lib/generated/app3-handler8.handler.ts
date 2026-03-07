export interface App3Handler8Event {
  type: string;
  payload: unknown;
  timestamp: number;
  source: string;
}

export interface App3Handler8Handler {
  canHandle(event: App3Handler8Event): boolean;
  handle(event: App3Handler8Event): Promise<void>;
  priority: number;
}

export class App3Handler8EventBus {
  private handlers: App3Handler8Handler[] = [];
  private history: App3Handler8Event[] = [];
  private maxHistory = 180;

  register(handler: App3Handler8Handler): () => void {
    this.handlers.push(handler);
    this.handlers.sort((a, b) => b.priority - a.priority);
    return () => {
      this.handlers = this.handlers.filter(h => h !== handler);
    };
  }

  async dispatch(event: App3Handler8Event): Promise<void> {
    this.history.push(event);
    if (this.history.length > this.maxHistory) {
      this.history = this.history.slice(-this.maxHistory);
    }
    const applicable = this.handlers.filter(h => h.canHandle(event));
    for (const handler of applicable) {
      await handler.handle(event);
    }
  }

  getHistory(): ReadonlyArray<App3Handler8Event> {
    return [...this.history];
  }

  clearHistory(): void {
    this.history = [];
  }
}

export function createApp3Handler8Handler(
  type: string,
  fn: (event: App3Handler8Event) => Promise<void>,
  priority = 0
): App3Handler8Handler {
  return {
    canHandle: (event) => event.type === type,
    handle: fn,
    priority,
  };
}