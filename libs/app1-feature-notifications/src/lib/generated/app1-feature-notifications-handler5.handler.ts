export interface App1FeatureNotificationsHandler5Event {
  type: string;
  payload: unknown;
  timestamp: number;
  source: string;
}

export interface App1FeatureNotificationsHandler5Handler {
  canHandle(event: App1FeatureNotificationsHandler5Event): boolean;
  handle(event: App1FeatureNotificationsHandler5Event): Promise<void>;
  priority: number;
}

export class App1FeatureNotificationsHandler5EventBus {
  private handlers: App1FeatureNotificationsHandler5Handler[] = [];
  private history: App1FeatureNotificationsHandler5Event[] = [];
  private maxHistory = 150;

  register(handler: App1FeatureNotificationsHandler5Handler): () => void {
    this.handlers.push(handler);
    this.handlers.sort((a, b) => b.priority - a.priority);
    return () => {
      this.handlers = this.handlers.filter(h => h !== handler);
    };
  }

  async dispatch(event: App1FeatureNotificationsHandler5Event): Promise<void> {
    this.history.push(event);
    if (this.history.length > this.maxHistory) {
      this.history = this.history.slice(-this.maxHistory);
    }
    const applicable = this.handlers.filter(h => h.canHandle(event));
    for (const handler of applicable) {
      await handler.handle(event);
    }
  }

  getHistory(): ReadonlyArray<App1FeatureNotificationsHandler5Event> {
    return [...this.history];
  }

  clearHistory(): void {
    this.history = [];
  }
}

export function createApp1FeatureNotificationsHandler5Handler(
  type: string,
  fn: (event: App1FeatureNotificationsHandler5Event) => Promise<void>,
  priority = 0
): App1FeatureNotificationsHandler5Handler {
  return {
    canHandle: (event) => event.type === type,
    handle: fn,
    priority,
  };
}