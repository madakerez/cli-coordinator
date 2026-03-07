export interface SharedNotificationsHandler6Event {
  type: string;
  payload: unknown;
  timestamp: number;
  source: string;
}

export interface SharedNotificationsHandler6Handler {
  canHandle(event: SharedNotificationsHandler6Event): boolean;
  handle(event: SharedNotificationsHandler6Event): Promise<void>;
  priority: number;
}

export class SharedNotificationsHandler6EventBus {
  private handlers: SharedNotificationsHandler6Handler[] = [];
  private history: SharedNotificationsHandler6Event[] = [];
  private maxHistory = 160;

  register(handler: SharedNotificationsHandler6Handler): () => void {
    this.handlers.push(handler);
    this.handlers.sort((a, b) => b.priority - a.priority);
    return () => {
      this.handlers = this.handlers.filter(h => h !== handler);
    };
  }

  async dispatch(event: SharedNotificationsHandler6Event): Promise<void> {
    this.history.push(event);
    if (this.history.length > this.maxHistory) {
      this.history = this.history.slice(-this.maxHistory);
    }
    const applicable = this.handlers.filter(h => h.canHandle(event));
    for (const handler of applicable) {
      await handler.handle(event);
    }
  }

  getHistory(): ReadonlyArray<SharedNotificationsHandler6Event> {
    return [...this.history];
  }

  clearHistory(): void {
    this.history = [];
  }
}

export function createSharedNotificationsHandler6Handler(
  type: string,
  fn: (event: SharedNotificationsHandler6Event) => Promise<void>,
  priority = 0
): SharedNotificationsHandler6Handler {
  return {
    canHandle: (event) => event.type === type,
    handle: fn,
    priority,
  };
}