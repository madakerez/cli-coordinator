export interface SharedNotificationsHandler2Event {
  type: string;
  payload: unknown;
  timestamp: number;
  source: string;
}

export interface SharedNotificationsHandler2Handler {
  canHandle(event: SharedNotificationsHandler2Event): boolean;
  handle(event: SharedNotificationsHandler2Event): Promise<void>;
  priority: number;
}

export class SharedNotificationsHandler2EventBus {
  private handlers: SharedNotificationsHandler2Handler[] = [];
  private history: SharedNotificationsHandler2Event[] = [];
  private maxHistory = 120;

  register(handler: SharedNotificationsHandler2Handler): () => void {
    this.handlers.push(handler);
    this.handlers.sort((a, b) => b.priority - a.priority);
    return () => {
      this.handlers = this.handlers.filter(h => h !== handler);
    };
  }

  async dispatch(event: SharedNotificationsHandler2Event): Promise<void> {
    this.history.push(event);
    if (this.history.length > this.maxHistory) {
      this.history = this.history.slice(-this.maxHistory);
    }
    const applicable = this.handlers.filter(h => h.canHandle(event));
    for (const handler of applicable) {
      await handler.handle(event);
    }
  }

  getHistory(): ReadonlyArray<SharedNotificationsHandler2Event> {
    return [...this.history];
  }

  clearHistory(): void {
    this.history = [];
  }
}

export function createSharedNotificationsHandler2Handler(
  type: string,
  fn: (event: SharedNotificationsHandler2Event) => Promise<void>,
  priority = 0
): SharedNotificationsHandler2Handler {
  return {
    canHandle: (event) => event.type === type,
    handle: fn,
    priority,
  };
}