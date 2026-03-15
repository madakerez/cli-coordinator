export interface SharedPermissionsHandler4Event {
  type: string;
  payload: unknown;
  timestamp: number;
  source: string;
}

export interface SharedPermissionsHandler4Handler {
  canHandle(event: SharedPermissionsHandler4Event): boolean;
  handle(event: SharedPermissionsHandler4Event): Promise<void>;
  priority: number;
}

export class SharedPermissionsHandler4EventBus {
  private handlers: SharedPermissionsHandler4Handler[] = [];
  private history: SharedPermissionsHandler4Event[] = [];
  private maxHistory = 140;

  register(handler: SharedPermissionsHandler4Handler): () => void {
    this.handlers.push(handler);
    this.handlers.sort((a, b) => b.priority - a.priority);
    return () => {
      this.handlers = this.handlers.filter(h => h !== handler);
    };
  }

  async dispatch(event: SharedPermissionsHandler4Event): Promise<void> {
    this.history.push(event);
    if (this.history.length > this.maxHistory) {
      this.history = this.history.slice(-this.maxHistory);
    }
    const applicable = this.handlers.filter(h => h.canHandle(event));
    for (const handler of applicable) {
      await handler.handle(event);
    }
  }

  getHistory(): ReadonlyArray<SharedPermissionsHandler4Event> {
    return [...this.history];
  }

  clearHistory(): void {
    this.history = [];
  }
}

export function createSharedPermissionsHandler4Handler(
  type: string,
  fn: (event: SharedPermissionsHandler4Event) => Promise<void>,
  priority = 0
): SharedPermissionsHandler4Handler {
  return {
    canHandle: (event) => event.type === type,
    handle: fn,
    priority,
  };
}