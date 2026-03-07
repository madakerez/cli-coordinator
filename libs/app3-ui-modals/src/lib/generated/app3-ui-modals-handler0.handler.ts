export interface App3UiModalsHandler0Event {
  type: string;
  payload: unknown;
  timestamp: number;
  source: string;
}

export interface App3UiModalsHandler0Handler {
  canHandle(event: App3UiModalsHandler0Event): boolean;
  handle(event: App3UiModalsHandler0Event): Promise<void>;
  priority: number;
}

export class App3UiModalsHandler0EventBus {
  private handlers: App3UiModalsHandler0Handler[] = [];
  private history: App3UiModalsHandler0Event[] = [];
  private maxHistory = 100;

  register(handler: App3UiModalsHandler0Handler): () => void {
    this.handlers.push(handler);
    this.handlers.sort((a, b) => b.priority - a.priority);
    return () => {
      this.handlers = this.handlers.filter(h => h !== handler);
    };
  }

  async dispatch(event: App3UiModalsHandler0Event): Promise<void> {
    this.history.push(event);
    if (this.history.length > this.maxHistory) {
      this.history = this.history.slice(-this.maxHistory);
    }
    const applicable = this.handlers.filter(h => h.canHandle(event));
    for (const handler of applicable) {
      await handler.handle(event);
    }
  }

  getHistory(): ReadonlyArray<App3UiModalsHandler0Event> {
    return [...this.history];
  }

  clearHistory(): void {
    this.history = [];
  }
}

export function createApp3UiModalsHandler0Handler(
  type: string,
  fn: (event: App3UiModalsHandler0Event) => Promise<void>,
  priority = 0
): App3UiModalsHandler0Handler {
  return {
    canHandle: (event) => event.type === type,
    handle: fn,
    priority,
  };
}