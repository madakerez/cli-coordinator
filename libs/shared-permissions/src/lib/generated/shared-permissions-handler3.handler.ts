export interface SharedPermissionsHandler3Event {
  type: string;
  payload: unknown;
  timestamp: number;
  source: string;
}

export interface SharedPermissionsHandler3Handler {
  canHandle(event: SharedPermissionsHandler3Event): boolean;
  handle(event: SharedPermissionsHandler3Event): Promise<void>;
  priority: number;
}

export class SharedPermissionsHandler3EventBus {
  private handlers: SharedPermissionsHandler3Handler[] = [];
  private history: SharedPermissionsHandler3Event[] = [];
  private maxHistory = 130;

  register(handler: SharedPermissionsHandler3Handler): () => void {
    this.handlers.push(handler);
    this.handlers.sort((a, b) => b.priority - a.priority);
    return () => {
      this.handlers = this.handlers.filter(h => h !== handler);
    };
  }

  async dispatch(event: SharedPermissionsHandler3Event): Promise<void> {
    this.history.push(event);
    if (this.history.length > this.maxHistory) {
      this.history = this.history.slice(-this.maxHistory);
    }
    const applicable = this.handlers.filter(h => h.canHandle(event));
    for (const handler of applicable) {
      await handler.handle(event);
    }
  }

  getHistory(): ReadonlyArray<SharedPermissionsHandler3Event> {
    return [...this.history];
  }

  clearHistory(): void {
    this.history = [];
  }
}

export function createSharedPermissionsHandler3Handler(
  type: string,
  fn: (event: SharedPermissionsHandler3Event) => Promise<void>,
  priority = 0
): SharedPermissionsHandler3Handler {
  return {
    canHandle: (event) => event.type === type,
    handle: fn,
    priority,
  };
}