export interface SharedNotificationsHandler0Event {
  type: string;
  payload: unknown;
  timestamp: number;
  source: string;
}

export interface SharedNotificationsHandler0Handler {
  canHandle(event: SharedNotificationsHandler0Event): boolean;
  handle(event: SharedNotificationsHandler0Event): Promise<void>;
  priority: number;
}

export class SharedNotificationsHandler0EventBus {
  private handlers: SharedNotificationsHandler0Handler[] = [];
  private history: SharedNotificationsHandler0Event[] = [];
  private maxHistory = 100;

  register(handler: SharedNotificationsHandler0Handler): () => void {
    this.handlers.push(handler);
    this.handlers.sort((a, b) => b.priority - a.priority);
    return () => {
      this.handlers = this.handlers.filter(h => h !== handler);
    };
  }

  async dispatch(event: SharedNotificationsHandler0Event): Promise<void> {
    this.history.push(event);
    if (this.history.length > this.maxHistory) {
      this.history = this.history.slice(-this.maxHistory);
    }
    const applicable = this.handlers.filter(h => h.canHandle(event));
    for (const handler of applicable) {
      await handler.handle(event);
    }
  }

  getHistory(): ReadonlyArray<SharedNotificationsHandler0Event> {
    return [...this.history];
  }

  clearHistory(): void {
    this.history = [];
  }
}

export function createSharedNotificationsHandler0Handler(
  type: string,
  fn: (event: SharedNotificationsHandler0Event) => Promise<void>,
  priority = 0
): SharedNotificationsHandler0Handler {
  return {
    canHandle: (event) => event.type === type,
    handle: fn,
    priority,
  };
}