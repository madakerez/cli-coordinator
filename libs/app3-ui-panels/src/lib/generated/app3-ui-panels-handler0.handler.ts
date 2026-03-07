export interface App3UiPanelsHandler0Event {
  type: string;
  payload: unknown;
  timestamp: number;
  source: string;
}

export interface App3UiPanelsHandler0Handler {
  canHandle(event: App3UiPanelsHandler0Event): boolean;
  handle(event: App3UiPanelsHandler0Event): Promise<void>;
  priority: number;
}

export class App3UiPanelsHandler0EventBus {
  private handlers: App3UiPanelsHandler0Handler[] = [];
  private history: App3UiPanelsHandler0Event[] = [];
  private maxHistory = 100;

  register(handler: App3UiPanelsHandler0Handler): () => void {
    this.handlers.push(handler);
    this.handlers.sort((a, b) => b.priority - a.priority);
    return () => {
      this.handlers = this.handlers.filter(h => h !== handler);
    };
  }

  async dispatch(event: App3UiPanelsHandler0Event): Promise<void> {
    this.history.push(event);
    if (this.history.length > this.maxHistory) {
      this.history = this.history.slice(-this.maxHistory);
    }
    const applicable = this.handlers.filter(h => h.canHandle(event));
    for (const handler of applicable) {
      await handler.handle(event);
    }
  }

  getHistory(): ReadonlyArray<App3UiPanelsHandler0Event> {
    return [...this.history];
  }

  clearHistory(): void {
    this.history = [];
  }
}

export function createApp3UiPanelsHandler0Handler(
  type: string,
  fn: (event: App3UiPanelsHandler0Event) => Promise<void>,
  priority = 0
): App3UiPanelsHandler0Handler {
  return {
    canHandle: (event) => event.type === type,
    handle: fn,
    priority,
  };
}