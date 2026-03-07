export interface App4UiCardsHandler5Event {
  type: string;
  payload: unknown;
  timestamp: number;
  source: string;
}

export interface App4UiCardsHandler5Handler {
  canHandle(event: App4UiCardsHandler5Event): boolean;
  handle(event: App4UiCardsHandler5Event): Promise<void>;
  priority: number;
}

export class App4UiCardsHandler5EventBus {
  private handlers: App4UiCardsHandler5Handler[] = [];
  private history: App4UiCardsHandler5Event[] = [];
  private maxHistory = 150;

  register(handler: App4UiCardsHandler5Handler): () => void {
    this.handlers.push(handler);
    this.handlers.sort((a, b) => b.priority - a.priority);
    return () => {
      this.handlers = this.handlers.filter(h => h !== handler);
    };
  }

  async dispatch(event: App4UiCardsHandler5Event): Promise<void> {
    this.history.push(event);
    if (this.history.length > this.maxHistory) {
      this.history = this.history.slice(-this.maxHistory);
    }
    const applicable = this.handlers.filter(h => h.canHandle(event));
    for (const handler of applicable) {
      await handler.handle(event);
    }
  }

  getHistory(): ReadonlyArray<App4UiCardsHandler5Event> {
    return [...this.history];
  }

  clearHistory(): void {
    this.history = [];
  }
}

export function createApp4UiCardsHandler5Handler(
  type: string,
  fn: (event: App4UiCardsHandler5Event) => Promise<void>,
  priority = 0
): App4UiCardsHandler5Handler {
  return {
    canHandle: (event) => event.type === type,
    handle: fn,
    priority,
  };
}