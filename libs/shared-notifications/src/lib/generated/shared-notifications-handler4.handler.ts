export interface SharedNotificationsHandler4Event {
  type: string;
  payload: unknown;
  timestamp: number;
  source: string;
}

export interface SharedNotificationsHandler4Handler {
  canHandle(event: SharedNotificationsHandler4Event): boolean;
  handle(event: SharedNotificationsHandler4Event): Promise<void>;
  priority: number;
}

export class SharedNotificationsHandler4EventBus {
  private handlers: SharedNotificationsHandler4Handler[] = [];
  private history: SharedNotificationsHandler4Event[] = [];
  private maxHistory = 140;

  register(handler: SharedNotificationsHandler4Handler): () => void {
    this.handlers.push(handler);
    this.handlers.sort((a, b) => b.priority - a.priority);
    return () => {
      this.handlers = this.handlers.filter(h => h !== handler);
    };
  }

  async dispatch(event: SharedNotificationsHandler4Event): Promise<void> {
    this.history.push(event);
    if (this.history.length > this.maxHistory) {
      this.history = this.history.slice(-this.maxHistory);
    }
    const applicable = this.handlers.filter(h => h.canHandle(event));
    for (const handler of applicable) {
      await handler.handle(event);
    }
  }

  getHistory(): ReadonlyArray<SharedNotificationsHandler4Event> {
    return [...this.history];
  }

  clearHistory(): void {
    this.history = [];
  }
}

export function createSharedNotificationsHandler4Handler(
  type: string,
  fn: (event: SharedNotificationsHandler4Event) => Promise<void>,
  priority = 0
): SharedNotificationsHandler4Handler {
  return {
    canHandle: (event) => event.type === type,
    handle: fn,
    priority,
  };
}