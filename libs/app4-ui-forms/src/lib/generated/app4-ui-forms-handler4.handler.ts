export interface App4UiFormsHandler4Event {
  type: string;
  payload: unknown;
  timestamp: number;
  source: string;
}

export interface App4UiFormsHandler4Handler {
  canHandle(event: App4UiFormsHandler4Event): boolean;
  handle(event: App4UiFormsHandler4Event): Promise<void>;
  priority: number;
}

export class App4UiFormsHandler4EventBus {
  private handlers: App4UiFormsHandler4Handler[] = [];
  private history: App4UiFormsHandler4Event[] = [];
  private maxHistory = 140;

  register(handler: App4UiFormsHandler4Handler): () => void {
    this.handlers.push(handler);
    this.handlers.sort((a, b) => b.priority - a.priority);
    return () => {
      this.handlers = this.handlers.filter(h => h !== handler);
    };
  }

  async dispatch(event: App4UiFormsHandler4Event): Promise<void> {
    this.history.push(event);
    if (this.history.length > this.maxHistory) {
      this.history = this.history.slice(-this.maxHistory);
    }
    const applicable = this.handlers.filter(h => h.canHandle(event));
    for (const handler of applicable) {
      await handler.handle(event);
    }
  }

  getHistory(): ReadonlyArray<App4UiFormsHandler4Event> {
    return [...this.history];
  }

  clearHistory(): void {
    this.history = [];
  }
}

export function createApp4UiFormsHandler4Handler(
  type: string,
  fn: (event: App4UiFormsHandler4Event) => Promise<void>,
  priority = 0
): App4UiFormsHandler4Handler {
  return {
    canHandle: (event) => event.type === type,
    handle: fn,
    priority,
  };
}