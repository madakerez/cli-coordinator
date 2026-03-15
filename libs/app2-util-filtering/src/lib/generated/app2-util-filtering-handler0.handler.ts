export interface App2UtilFilteringHandler0Event {
  type: string;
  payload: unknown;
  timestamp: number;
  source: string;
}

export interface App2UtilFilteringHandler0Handler {
  canHandle(event: App2UtilFilteringHandler0Event): boolean;
  handle(event: App2UtilFilteringHandler0Event): Promise<void>;
  priority: number;
}

export class App2UtilFilteringHandler0EventBus {
  private handlers: App2UtilFilteringHandler0Handler[] = [];
  private history: App2UtilFilteringHandler0Event[] = [];
  private maxHistory = 100;

  register(handler: App2UtilFilteringHandler0Handler): () => void {
    this.handlers.push(handler);
    this.handlers.sort((a, b) => b.priority - a.priority);
    return () => {
      this.handlers = this.handlers.filter(h => h !== handler);
    };
  }

  async dispatch(event: App2UtilFilteringHandler0Event): Promise<void> {
    this.history.push(event);
    if (this.history.length > this.maxHistory) {
      this.history = this.history.slice(-this.maxHistory);
    }
    const applicable = this.handlers.filter(h => h.canHandle(event));
    for (const handler of applicable) {
      await handler.handle(event);
    }
  }

  getHistory(): ReadonlyArray<App2UtilFilteringHandler0Event> {
    return [...this.history];
  }

  clearHistory(): void {
    this.history = [];
  }
}

export function createApp2UtilFilteringHandler0Handler(
  type: string,
  fn: (event: App2UtilFilteringHandler0Event) => Promise<void>,
  priority = 0
): App2UtilFilteringHandler0Handler {
  return {
    canHandle: (event) => event.type === type,
    handle: fn,
    priority,
  };
}