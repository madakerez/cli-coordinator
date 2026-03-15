export interface SharedPermissionsHandler2Event {
  type: string;
  payload: unknown;
  timestamp: number;
  source: string;
}

export interface SharedPermissionsHandler2Handler {
  canHandle(event: SharedPermissionsHandler2Event): boolean;
  handle(event: SharedPermissionsHandler2Event): Promise<void>;
  priority: number;
}

export class SharedPermissionsHandler2EventBus {
  private handlers: SharedPermissionsHandler2Handler[] = [];
  private history: SharedPermissionsHandler2Event[] = [];
  private maxHistory = 120;

  register(handler: SharedPermissionsHandler2Handler): () => void {
    this.handlers.push(handler);
    this.handlers.sort((a, b) => b.priority - a.priority);
    return () => {
      this.handlers = this.handlers.filter(h => h !== handler);
    };
  }

  async dispatch(event: SharedPermissionsHandler2Event): Promise<void> {
    this.history.push(event);
    if (this.history.length > this.maxHistory) {
      this.history = this.history.slice(-this.maxHistory);
    }
    const applicable = this.handlers.filter(h => h.canHandle(event));
    for (const handler of applicable) {
      await handler.handle(event);
    }
  }

  getHistory(): ReadonlyArray<SharedPermissionsHandler2Event> {
    return [...this.history];
  }

  clearHistory(): void {
    this.history = [];
  }
}

export function createSharedPermissionsHandler2Handler(
  type: string,
  fn: (event: SharedPermissionsHandler2Event) => Promise<void>,
  priority = 0
): SharedPermissionsHandler2Handler {
  return {
    canHandle: (event) => event.type === type,
    handle: fn,
    priority,
  };
}