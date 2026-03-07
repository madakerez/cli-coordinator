export interface App4UiModalsHandler1Event {
  type: string;
  payload: unknown;
  timestamp: number;
  source: string;
}

export interface App4UiModalsHandler1Handler {
  canHandle(event: App4UiModalsHandler1Event): boolean;
  handle(event: App4UiModalsHandler1Event): Promise<void>;
  priority: number;
}

export class App4UiModalsHandler1EventBus {
  private handlers: App4UiModalsHandler1Handler[] = [];
  private history: App4UiModalsHandler1Event[] = [];
  private maxHistory = 110;

  register(handler: App4UiModalsHandler1Handler): () => void {
    this.handlers.push(handler);
    this.handlers.sort((a, b) => b.priority - a.priority);
    return () => {
      this.handlers = this.handlers.filter(h => h !== handler);
    };
  }

  async dispatch(event: App4UiModalsHandler1Event): Promise<void> {
    this.history.push(event);
    if (this.history.length > this.maxHistory) {
      this.history = this.history.slice(-this.maxHistory);
    }
    const applicable = this.handlers.filter(h => h.canHandle(event));
    for (const handler of applicable) {
      await handler.handle(event);
    }
  }

  getHistory(): ReadonlyArray<App4UiModalsHandler1Event> {
    return [...this.history];
  }

  clearHistory(): void {
    this.history = [];
  }
}

export function createApp4UiModalsHandler1Handler(
  type: string,
  fn: (event: App4UiModalsHandler1Event) => Promise<void>,
  priority = 0
): App4UiModalsHandler1Handler {
  return {
    canHandle: (event) => event.type === type,
    handle: fn,
    priority,
  };
}