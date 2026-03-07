export interface App4UiBadgesHandler0Event {
  type: string;
  payload: unknown;
  timestamp: number;
  source: string;
}

export interface App4UiBadgesHandler0Handler {
  canHandle(event: App4UiBadgesHandler0Event): boolean;
  handle(event: App4UiBadgesHandler0Event): Promise<void>;
  priority: number;
}

export class App4UiBadgesHandler0EventBus {
  private handlers: App4UiBadgesHandler0Handler[] = [];
  private history: App4UiBadgesHandler0Event[] = [];
  private maxHistory = 100;

  register(handler: App4UiBadgesHandler0Handler): () => void {
    this.handlers.push(handler);
    this.handlers.sort((a, b) => b.priority - a.priority);
    return () => {
      this.handlers = this.handlers.filter(h => h !== handler);
    };
  }

  async dispatch(event: App4UiBadgesHandler0Event): Promise<void> {
    this.history.push(event);
    if (this.history.length > this.maxHistory) {
      this.history = this.history.slice(-this.maxHistory);
    }
    const applicable = this.handlers.filter(h => h.canHandle(event));
    for (const handler of applicable) {
      await handler.handle(event);
    }
  }

  getHistory(): ReadonlyArray<App4UiBadgesHandler0Event> {
    return [...this.history];
  }

  clearHistory(): void {
    this.history = [];
  }
}

export function createApp4UiBadgesHandler0Handler(
  type: string,
  fn: (event: App4UiBadgesHandler0Event) => Promise<void>,
  priority = 0
): App4UiBadgesHandler0Handler {
  return {
    canHandle: (event) => event.type === type,
    handle: fn,
    priority,
  };
}