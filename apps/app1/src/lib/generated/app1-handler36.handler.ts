export interface App1Handler36Event {
  type: string;
  payload: unknown;
  timestamp: number;
  source: string;
}

export interface App1Handler36Handler {
  canHandle(event: App1Handler36Event): boolean;
  handle(event: App1Handler36Event): Promise<void>;
  priority: number;
}

export class App1Handler36EventBus {
  private handlers: App1Handler36Handler[] = [];
  private history: App1Handler36Event[] = [];
  private maxHistory = 460;

  register(handler: App1Handler36Handler): () => void {
    this.handlers.push(handler);
    this.handlers.sort((a, b) => b.priority - a.priority);
    return () => {
      this.handlers = this.handlers.filter(h => h !== handler);
    };
  }

  async dispatch(event: App1Handler36Event): Promise<void> {
    this.history.push(event);
    if (this.history.length > this.maxHistory) {
      this.history = this.history.slice(-this.maxHistory);
    }
    const applicable = this.handlers.filter(h => h.canHandle(event));
    for (const handler of applicable) {
      await handler.handle(event);
    }
  }

  getHistory(): ReadonlyArray<App1Handler36Event> {
    return [...this.history];
  }

  clearHistory(): void {
    this.history = [];
  }
}

export function createApp1Handler36Handler(
  type: string,
  fn: (event: App1Handler36Event) => Promise<void>,
  priority = 0
): App1Handler36Handler {
  return {
    canHandle: (event) => event.type === type,
    handle: fn,
    priority,
  };
}