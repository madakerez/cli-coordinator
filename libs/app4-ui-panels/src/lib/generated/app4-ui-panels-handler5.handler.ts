export interface App4UiPanelsHandler5Event {
  type: string;
  payload: unknown;
  timestamp: number;
  source: string;
}

export interface App4UiPanelsHandler5Handler {
  canHandle(event: App4UiPanelsHandler5Event): boolean;
  handle(event: App4UiPanelsHandler5Event): Promise<void>;
  priority: number;
}

export class App4UiPanelsHandler5EventBus {
  private handlers: App4UiPanelsHandler5Handler[] = [];
  private history: App4UiPanelsHandler5Event[] = [];
  private maxHistory = 150;

  register(handler: App4UiPanelsHandler5Handler): () => void {
    this.handlers.push(handler);
    this.handlers.sort((a, b) => b.priority - a.priority);
    return () => {
      this.handlers = this.handlers.filter(h => h !== handler);
    };
  }

  async dispatch(event: App4UiPanelsHandler5Event): Promise<void> {
    this.history.push(event);
    if (this.history.length > this.maxHistory) {
      this.history = this.history.slice(-this.maxHistory);
    }
    const applicable = this.handlers.filter(h => h.canHandle(event));
    for (const handler of applicable) {
      await handler.handle(event);
    }
  }

  getHistory(): ReadonlyArray<App4UiPanelsHandler5Event> {
    return [...this.history];
  }

  clearHistory(): void {
    this.history = [];
  }
}

export function createApp4UiPanelsHandler5Handler(
  type: string,
  fn: (event: App4UiPanelsHandler5Event) => Promise<void>,
  priority = 0
): App4UiPanelsHandler5Handler {
  return {
    canHandle: (event) => event.type === type,
    handle: fn,
    priority,
  };
}