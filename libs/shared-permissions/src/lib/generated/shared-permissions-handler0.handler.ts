export interface SharedPermissionsHandler0Event {
  type: string;
  payload: unknown;
  timestamp: number;
  source: string;
}

export interface SharedPermissionsHandler0Handler {
  canHandle(event: SharedPermissionsHandler0Event): boolean;
  handle(event: SharedPermissionsHandler0Event): Promise<void>;
  priority: number;
}

export class SharedPermissionsHandler0EventBus {
  private handlers: SharedPermissionsHandler0Handler[] = [];
  private history: SharedPermissionsHandler0Event[] = [];
  private maxHistory = 100;

  register(handler: SharedPermissionsHandler0Handler): () => void {
    this.handlers.push(handler);
    this.handlers.sort((a, b) => b.priority - a.priority);
    return () => {
      this.handlers = this.handlers.filter(h => h !== handler);
    };
  }

  async dispatch(event: SharedPermissionsHandler0Event): Promise<void> {
    this.history.push(event);
    if (this.history.length > this.maxHistory) {
      this.history = this.history.slice(-this.maxHistory);
    }
    const applicable = this.handlers.filter(h => h.canHandle(event));
    for (const handler of applicable) {
      await handler.handle(event);
    }
  }

  getHistory(): ReadonlyArray<SharedPermissionsHandler0Event> {
    return [...this.history];
  }

  clearHistory(): void {
    this.history = [];
  }
}

export function createSharedPermissionsHandler0Handler(
  type: string,
  fn: (event: SharedPermissionsHandler0Event) => Promise<void>,
  priority = 0
): SharedPermissionsHandler0Handler {
  return {
    canHandle: (event) => event.type === type,
    handle: fn,
    priority,
  };
}