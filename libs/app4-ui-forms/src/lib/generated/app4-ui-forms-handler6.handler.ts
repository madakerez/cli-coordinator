export interface App4UiFormsHandler6Event {
  type: string;
  payload: unknown;
  timestamp: number;
  source: string;
}

export interface App4UiFormsHandler6Handler {
  canHandle(event: App4UiFormsHandler6Event): boolean;
  handle(event: App4UiFormsHandler6Event): Promise<void>;
  priority: number;
}

export class App4UiFormsHandler6EventBus {
  private handlers: App4UiFormsHandler6Handler[] = [];
  private history: App4UiFormsHandler6Event[] = [];
  private maxHistory = 160;

  register(handler: App4UiFormsHandler6Handler): () => void {
    this.handlers.push(handler);
    this.handlers.sort((a, b) => b.priority - a.priority);
    return () => {
      this.handlers = this.handlers.filter(h => h !== handler);
    };
  }

  async dispatch(event: App4UiFormsHandler6Event): Promise<void> {
    this.history.push(event);
    if (this.history.length > this.maxHistory) {
      this.history = this.history.slice(-this.maxHistory);
    }
    const applicable = this.handlers.filter(h => h.canHandle(event));
    for (const handler of applicable) {
      await handler.handle(event);
    }
  }

  getHistory(): ReadonlyArray<App4UiFormsHandler6Event> {
    return [...this.history];
  }

  clearHistory(): void {
    this.history = [];
  }
}

export function createApp4UiFormsHandler6Handler(
  type: string,
  fn: (event: App4UiFormsHandler6Event) => Promise<void>,
  priority = 0
): App4UiFormsHandler6Handler {
  return {
    canHandle: (event) => event.type === type,
    handle: fn,
    priority,
  };
}