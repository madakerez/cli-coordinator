export interface SharedPermissionsHandler7Event {
  type: string;
  payload: unknown;
  timestamp: number;
  source: string;
}

export interface SharedPermissionsHandler7Handler {
  canHandle(event: SharedPermissionsHandler7Event): boolean;
  handle(event: SharedPermissionsHandler7Event): Promise<void>;
  priority: number;
}

export class SharedPermissionsHandler7EventBus {
  private handlers: SharedPermissionsHandler7Handler[] = [];
  private history: SharedPermissionsHandler7Event[] = [];
  private maxHistory = 170;

  register(handler: SharedPermissionsHandler7Handler): () => void {
    this.handlers.push(handler);
    this.handlers.sort((a, b) => b.priority - a.priority);
    return () => {
      this.handlers = this.handlers.filter(h => h !== handler);
    };
  }

  async dispatch(event: SharedPermissionsHandler7Event): Promise<void> {
    this.history.push(event);
    if (this.history.length > this.maxHistory) {
      this.history = this.history.slice(-this.maxHistory);
    }
    const applicable = this.handlers.filter(h => h.canHandle(event));
    for (const handler of applicable) {
      await handler.handle(event);
    }
  }

  getHistory(): ReadonlyArray<SharedPermissionsHandler7Event> {
    return [...this.history];
  }

  clearHistory(): void {
    this.history = [];
  }
}

export function createSharedPermissionsHandler7Handler(
  type: string,
  fn: (event: SharedPermissionsHandler7Event) => Promise<void>,
  priority = 0
): SharedPermissionsHandler7Handler {
  return {
    canHandle: (event) => event.type === type,
    handle: fn,
    priority,
  };
}