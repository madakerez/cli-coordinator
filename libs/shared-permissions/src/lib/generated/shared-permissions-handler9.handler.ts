export interface SharedPermissionsHandler9Event {
  type: string;
  payload: unknown;
  timestamp: number;
  source: string;
}

export interface SharedPermissionsHandler9Handler {
  canHandle(event: SharedPermissionsHandler9Event): boolean;
  handle(event: SharedPermissionsHandler9Event): Promise<void>;
  priority: number;
}

export class SharedPermissionsHandler9EventBus {
  private handlers: SharedPermissionsHandler9Handler[] = [];
  private history: SharedPermissionsHandler9Event[] = [];
  private maxHistory = 190;

  register(handler: SharedPermissionsHandler9Handler): () => void {
    this.handlers.push(handler);
    this.handlers.sort((a, b) => b.priority - a.priority);
    return () => {
      this.handlers = this.handlers.filter(h => h !== handler);
    };
  }

  async dispatch(event: SharedPermissionsHandler9Event): Promise<void> {
    this.history.push(event);
    if (this.history.length > this.maxHistory) {
      this.history = this.history.slice(-this.maxHistory);
    }
    const applicable = this.handlers.filter(h => h.canHandle(event));
    for (const handler of applicable) {
      await handler.handle(event);
    }
  }

  getHistory(): ReadonlyArray<SharedPermissionsHandler9Event> {
    return [...this.history];
  }

  clearHistory(): void {
    this.history = [];
  }
}

export function createSharedPermissionsHandler9Handler(
  type: string,
  fn: (event: SharedPermissionsHandler9Event) => Promise<void>,
  priority = 0
): SharedPermissionsHandler9Handler {
  return {
    canHandle: (event) => event.type === type,
    handle: fn,
    priority,
  };
}