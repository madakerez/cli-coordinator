export interface App3UiPanelsHandler2Event {
  type: string;
  payload: unknown;
  timestamp: number;
  source: string;
}

export interface App3UiPanelsHandler2Handler {
  canHandle(event: App3UiPanelsHandler2Event): boolean;
  handle(event: App3UiPanelsHandler2Event): Promise<void>;
  priority: number;
}

export class App3UiPanelsHandler2EventBus {
  private handlers: App3UiPanelsHandler2Handler[] = [];
  private history: App3UiPanelsHandler2Event[] = [];
  private maxHistory = 120;

  register(handler: App3UiPanelsHandler2Handler): () => void {
    this.handlers.push(handler);
    this.handlers.sort((a, b) => b.priority - a.priority);
    return () => {
      this.handlers = this.handlers.filter(h => h !== handler);
    };
  }

  async dispatch(event: App3UiPanelsHandler2Event): Promise<void> {
    this.history.push(event);
    if (this.history.length > this.maxHistory) {
      this.history = this.history.slice(-this.maxHistory);
    }
    const applicable = this.handlers.filter(h => h.canHandle(event));
    for (const handler of applicable) {
      await handler.handle(event);
    }
  }

  getHistory(): ReadonlyArray<App3UiPanelsHandler2Event> {
    return [...this.history];
  }

  clearHistory(): void {
    this.history = [];
  }
}

export function createApp3UiPanelsHandler2Handler(
  type: string,
  fn: (event: App3UiPanelsHandler2Event) => Promise<void>,
  priority = 0
): App3UiPanelsHandler2Handler {
  return {
    canHandle: (event) => event.type === type,
    handle: fn,
    priority,
  };
}