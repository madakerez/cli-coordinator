export interface SharedNotificationsHandler5Event {
  type: string;
  payload: unknown;
  timestamp: number;
  source: string;
}

export interface SharedNotificationsHandler5Handler {
  canHandle(event: SharedNotificationsHandler5Event): boolean;
  handle(event: SharedNotificationsHandler5Event): Promise<void>;
  priority: number;
}

export class SharedNotificationsHandler5EventBus {
  private handlers: SharedNotificationsHandler5Handler[] = [];
  private history: SharedNotificationsHandler5Event[] = [];
  private maxHistory = 150;

  register(handler: SharedNotificationsHandler5Handler): () => void {
    this.handlers.push(handler);
    this.handlers.sort((a, b) => b.priority - a.priority);
    return () => {
      this.handlers = this.handlers.filter(h => h !== handler);
    };
  }

  async dispatch(event: SharedNotificationsHandler5Event): Promise<void> {
    this.history.push(event);
    if (this.history.length > this.maxHistory) {
      this.history = this.history.slice(-this.maxHistory);
    }
    const applicable = this.handlers.filter(h => h.canHandle(event));
    for (const handler of applicable) {
      await handler.handle(event);
    }
  }

  getHistory(): ReadonlyArray<SharedNotificationsHandler5Event> {
    return [...this.history];
  }

  clearHistory(): void {
    this.history = [];
  }
}

export function createSharedNotificationsHandler5Handler(
  type: string,
  fn: (event: SharedNotificationsHandler5Event) => Promise<void>,
  priority = 0
): SharedNotificationsHandler5Handler {
  return {
    canHandle: (event) => event.type === type,
    handle: fn,
    priority,
  };
}