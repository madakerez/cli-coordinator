export interface SharedNotificationsHandler3Event {
  type: string;
  payload: unknown;
  timestamp: number;
  source: string;
}

export interface SharedNotificationsHandler3Handler {
  canHandle(event: SharedNotificationsHandler3Event): boolean;
  handle(event: SharedNotificationsHandler3Event): Promise<void>;
  priority: number;
}

export class SharedNotificationsHandler3EventBus {
  private handlers: SharedNotificationsHandler3Handler[] = [];
  private history: SharedNotificationsHandler3Event[] = [];
  private maxHistory = 130;

  register(handler: SharedNotificationsHandler3Handler): () => void {
    this.handlers.push(handler);
    this.handlers.sort((a, b) => b.priority - a.priority);
    return () => {
      this.handlers = this.handlers.filter(h => h !== handler);
    };
  }

  async dispatch(event: SharedNotificationsHandler3Event): Promise<void> {
    this.history.push(event);
    if (this.history.length > this.maxHistory) {
      this.history = this.history.slice(-this.maxHistory);
    }
    const applicable = this.handlers.filter(h => h.canHandle(event));
    for (const handler of applicable) {
      await handler.handle(event);
    }
  }

  getHistory(): ReadonlyArray<SharedNotificationsHandler3Event> {
    return [...this.history];
  }

  clearHistory(): void {
    this.history = [];
  }
}

export function createSharedNotificationsHandler3Handler(
  type: string,
  fn: (event: SharedNotificationsHandler3Event) => Promise<void>,
  priority = 0
): SharedNotificationsHandler3Handler {
  return {
    canHandle: (event) => event.type === type,
    handle: fn,
    priority,
  };
}