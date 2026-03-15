export interface SharedPermissionsHandler6Event {
  type: string;
  payload: unknown;
  timestamp: number;
  source: string;
}

export interface SharedPermissionsHandler6Handler {
  canHandle(event: SharedPermissionsHandler6Event): boolean;
  handle(event: SharedPermissionsHandler6Event): Promise<void>;
  priority: number;
}

export class SharedPermissionsHandler6EventBus {
  private handlers: SharedPermissionsHandler6Handler[] = [];
  private history: SharedPermissionsHandler6Event[] = [];
  private maxHistory = 160;

  register(handler: SharedPermissionsHandler6Handler): () => void {
    this.handlers.push(handler);
    this.handlers.sort((a, b) => b.priority - a.priority);
    return () => {
      this.handlers = this.handlers.filter(h => h !== handler);
    };
  }

  async dispatch(event: SharedPermissionsHandler6Event): Promise<void> {
    this.history.push(event);
    if (this.history.length > this.maxHistory) {
      this.history = this.history.slice(-this.maxHistory);
    }
    const applicable = this.handlers.filter(h => h.canHandle(event));
    for (const handler of applicable) {
      await handler.handle(event);
    }
  }

  getHistory(): ReadonlyArray<SharedPermissionsHandler6Event> {
    return [...this.history];
  }

  clearHistory(): void {
    this.history = [];
  }
}

export function createSharedPermissionsHandler6Handler(
  type: string,
  fn: (event: SharedPermissionsHandler6Event) => Promise<void>,
  priority = 0
): SharedPermissionsHandler6Handler {
  return {
    canHandle: (event) => event.type === type,
    handle: fn,
    priority,
  };
}