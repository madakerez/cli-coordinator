export interface App3UiFormsHandler2Event {
  type: string;
  payload: unknown;
  timestamp: number;
  source: string;
}

export interface App3UiFormsHandler2Handler {
  canHandle(event: App3UiFormsHandler2Event): boolean;
  handle(event: App3UiFormsHandler2Event): Promise<void>;
  priority: number;
}

export class App3UiFormsHandler2EventBus {
  private handlers: App3UiFormsHandler2Handler[] = [];
  private history: App3UiFormsHandler2Event[] = [];
  private maxHistory = 120;

  register(handler: App3UiFormsHandler2Handler): () => void {
    this.handlers.push(handler);
    this.handlers.sort((a, b) => b.priority - a.priority);
    return () => {
      this.handlers = this.handlers.filter(h => h !== handler);
    };
  }

  async dispatch(event: App3UiFormsHandler2Event): Promise<void> {
    this.history.push(event);
    if (this.history.length > this.maxHistory) {
      this.history = this.history.slice(-this.maxHistory);
    }
    const applicable = this.handlers.filter(h => h.canHandle(event));
    for (const handler of applicable) {
      await handler.handle(event);
    }
  }

  getHistory(): ReadonlyArray<App3UiFormsHandler2Event> {
    return [...this.history];
  }

  clearHistory(): void {
    this.history = [];
  }
}

export function createApp3UiFormsHandler2Handler(
  type: string,
  fn: (event: App3UiFormsHandler2Event) => Promise<void>,
  priority = 0
): App3UiFormsHandler2Handler {
  return {
    canHandle: (event) => event.type === type,
    handle: fn,
    priority,
  };
}