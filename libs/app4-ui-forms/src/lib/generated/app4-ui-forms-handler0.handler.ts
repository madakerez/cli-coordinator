export interface App4UiFormsHandler0Event {
  type: string;
  payload: unknown;
  timestamp: number;
  source: string;
}

export interface App4UiFormsHandler0Handler {
  canHandle(event: App4UiFormsHandler0Event): boolean;
  handle(event: App4UiFormsHandler0Event): Promise<void>;
  priority: number;
}

export class App4UiFormsHandler0EventBus {
  private handlers: App4UiFormsHandler0Handler[] = [];
  private history: App4UiFormsHandler0Event[] = [];
  private maxHistory = 100;

  register(handler: App4UiFormsHandler0Handler): () => void {
    this.handlers.push(handler);
    this.handlers.sort((a, b) => b.priority - a.priority);
    return () => {
      this.handlers = this.handlers.filter(h => h !== handler);
    };
  }

  async dispatch(event: App4UiFormsHandler0Event): Promise<void> {
    this.history.push(event);
    if (this.history.length > this.maxHistory) {
      this.history = this.history.slice(-this.maxHistory);
    }
    const applicable = this.handlers.filter(h => h.canHandle(event));
    for (const handler of applicable) {
      await handler.handle(event);
    }
  }

  getHistory(): ReadonlyArray<App4UiFormsHandler0Event> {
    return [...this.history];
  }

  clearHistory(): void {
    this.history = [];
  }
}

export function createApp4UiFormsHandler0Handler(
  type: string,
  fn: (event: App4UiFormsHandler0Event) => Promise<void>,
  priority = 0
): App4UiFormsHandler0Handler {
  return {
    canHandle: (event) => event.type === type,
    handle: fn,
    priority,
  };
}