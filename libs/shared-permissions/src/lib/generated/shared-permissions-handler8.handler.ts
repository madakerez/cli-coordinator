export interface SharedPermissionsHandler8Event {
  type: string;
  payload: unknown;
  timestamp: number;
  source: string;
}

export interface SharedPermissionsHandler8Handler {
  canHandle(event: SharedPermissionsHandler8Event): boolean;
  handle(event: SharedPermissionsHandler8Event): Promise<void>;
  priority: number;
}

export class SharedPermissionsHandler8EventBus {
  private handlers: SharedPermissionsHandler8Handler[] = [];
  private history: SharedPermissionsHandler8Event[] = [];
  private maxHistory = 180;

  register(handler: SharedPermissionsHandler8Handler): () => void {
    this.handlers.push(handler);
    this.handlers.sort((a, b) => b.priority - a.priority);
    return () => {
      this.handlers = this.handlers.filter(h => h !== handler);
    };
  }

  async dispatch(event: SharedPermissionsHandler8Event): Promise<void> {
    this.history.push(event);
    if (this.history.length > this.maxHistory) {
      this.history = this.history.slice(-this.maxHistory);
    }
    const applicable = this.handlers.filter(h => h.canHandle(event));
    for (const handler of applicable) {
      await handler.handle(event);
    }
  }

  getHistory(): ReadonlyArray<SharedPermissionsHandler8Event> {
    return [...this.history];
  }

  clearHistory(): void {
    this.history = [];
  }
}

export function createSharedPermissionsHandler8Handler(
  type: string,
  fn: (event: SharedPermissionsHandler8Event) => Promise<void>,
  priority = 0
): SharedPermissionsHandler8Handler {
  return {
    canHandle: (event) => event.type === type,
    handle: fn,
    priority,
  };
}