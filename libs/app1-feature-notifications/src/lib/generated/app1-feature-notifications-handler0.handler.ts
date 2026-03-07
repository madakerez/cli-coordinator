export interface App1FeatureNotificationsHandler0Event {
  type: string;
  payload: unknown;
  timestamp: number;
  source: string;
}

export interface App1FeatureNotificationsHandler0Handler {
  canHandle(event: App1FeatureNotificationsHandler0Event): boolean;
  handle(event: App1FeatureNotificationsHandler0Event): Promise<void>;
  priority: number;
}

export class App1FeatureNotificationsHandler0EventBus {
  private handlers: App1FeatureNotificationsHandler0Handler[] = [];
  private history: App1FeatureNotificationsHandler0Event[] = [];
  private maxHistory = 100;

  register(handler: App1FeatureNotificationsHandler0Handler): () => void {
    this.handlers.push(handler);
    this.handlers.sort((a, b) => b.priority - a.priority);
    return () => {
      this.handlers = this.handlers.filter(h => h !== handler);
    };
  }

  async dispatch(event: App1FeatureNotificationsHandler0Event): Promise<void> {
    this.history.push(event);
    if (this.history.length > this.maxHistory) {
      this.history = this.history.slice(-this.maxHistory);
    }
    const applicable = this.handlers.filter(h => h.canHandle(event));
    for (const handler of applicable) {
      await handler.handle(event);
    }
  }

  getHistory(): ReadonlyArray<App1FeatureNotificationsHandler0Event> {
    return [...this.history];
  }

  clearHistory(): void {
    this.history = [];
  }
}

export function createApp1FeatureNotificationsHandler0Handler(
  type: string,
  fn: (event: App1FeatureNotificationsHandler0Event) => Promise<void>,
  priority = 0
): App1FeatureNotificationsHandler0Handler {
  return {
    canHandle: (event) => event.type === type,
    handle: fn,
    priority,
  };
}