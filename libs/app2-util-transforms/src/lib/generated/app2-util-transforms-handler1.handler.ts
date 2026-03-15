export interface App2UtilTransformsHandler1Event {
  type: string;
  payload: unknown;
  timestamp: number;
  source: string;
}

export interface App2UtilTransformsHandler1Handler {
  canHandle(event: App2UtilTransformsHandler1Event): boolean;
  handle(event: App2UtilTransformsHandler1Event): Promise<void>;
  priority: number;
}

export class App2UtilTransformsHandler1EventBus {
  private handlers: App2UtilTransformsHandler1Handler[] = [];
  private history: App2UtilTransformsHandler1Event[] = [];
  private maxHistory = 110;

  register(handler: App2UtilTransformsHandler1Handler): () => void {
    this.handlers.push(handler);
    this.handlers.sort((a, b) => b.priority - a.priority);
    return () => {
      this.handlers = this.handlers.filter(h => h !== handler);
    };
  }

  async dispatch(event: App2UtilTransformsHandler1Event): Promise<void> {
    this.history.push(event);
    if (this.history.length > this.maxHistory) {
      this.history = this.history.slice(-this.maxHistory);
    }
    const applicable = this.handlers.filter(h => h.canHandle(event));
    for (const handler of applicable) {
      await handler.handle(event);
    }
  }

  getHistory(): ReadonlyArray<App2UtilTransformsHandler1Event> {
    return [...this.history];
  }

  clearHistory(): void {
    this.history = [];
  }
}

export function createApp2UtilTransformsHandler1Handler(
  type: string,
  fn: (event: App2UtilTransformsHandler1Event) => Promise<void>,
  priority = 0
): App2UtilTransformsHandler1Handler {
  return {
    canHandle: (event) => event.type === type,
    handle: fn,
    priority,
  };
}