export interface App3UtilMarkdownHandler2Event {
  type: string;
  payload: unknown;
  timestamp: number;
  source: string;
}

export interface App3UtilMarkdownHandler2Handler {
  canHandle(event: App3UtilMarkdownHandler2Event): boolean;
  handle(event: App3UtilMarkdownHandler2Event): Promise<void>;
  priority: number;
}

export class App3UtilMarkdownHandler2EventBus {
  private handlers: App3UtilMarkdownHandler2Handler[] = [];
  private history: App3UtilMarkdownHandler2Event[] = [];
  private maxHistory = 120;

  register(handler: App3UtilMarkdownHandler2Handler): () => void {
    this.handlers.push(handler);
    this.handlers.sort((a, b) => b.priority - a.priority);
    return () => {
      this.handlers = this.handlers.filter(h => h !== handler);
    };
  }

  async dispatch(event: App3UtilMarkdownHandler2Event): Promise<void> {
    this.history.push(event);
    if (this.history.length > this.maxHistory) {
      this.history = this.history.slice(-this.maxHistory);
    }
    const applicable = this.handlers.filter(h => h.canHandle(event));
    for (const handler of applicable) {
      await handler.handle(event);
    }
  }

  getHistory(): ReadonlyArray<App3UtilMarkdownHandler2Event> {
    return [...this.history];
  }

  clearHistory(): void {
    this.history = [];
  }
}

export function createApp3UtilMarkdownHandler2Handler(
  type: string,
  fn: (event: App3UtilMarkdownHandler2Event) => Promise<void>,
  priority = 0
): App3UtilMarkdownHandler2Handler {
  return {
    canHandle: (event) => event.type === type,
    handle: fn,
    priority,
  };
}