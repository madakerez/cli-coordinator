export interface App2FeatureNotificationsHandler1Event {
  type: string;
  payload: unknown;
  timestamp: number;
  source: string;
}

export interface App2FeatureNotificationsHandler1Handler {
  canHandle(event: App2FeatureNotificationsHandler1Event): boolean;
  handle(event: App2FeatureNotificationsHandler1Event): Promise<void>;
  priority: number;
}

export class App2FeatureNotificationsHandler1EventBus {
  private handlers: App2FeatureNotificationsHandler1Handler[] = [];
  private history: App2FeatureNotificationsHandler1Event[] = [];
  private maxHistory = 110;

  register(handler: App2FeatureNotificationsHandler1Handler): () => void {
    this.handlers.push(handler);
    this.handlers.sort((a, b) => b.priority - a.priority);
    return () => {
      this.handlers = this.handlers.filter(h => h !== handler);
    };
  }

  async dispatch(event: App2FeatureNotificationsHandler1Event): Promise<void> {
    this.history.push(event);
    if (this.history.length > this.maxHistory) {
      this.history = this.history.slice(-this.maxHistory);
    }
    const applicable = this.handlers.filter(h => h.canHandle(event));
    for (const handler of applicable) {
      await handler.handle(event);
    }
  }

  getHistory(): ReadonlyArray<App2FeatureNotificationsHandler1Event> {
    return [...this.history];
  }

  clearHistory(): void {
    this.history = [];
  }
}

export function createApp2FeatureNotificationsHandler1Handler(
  type: string,
  fn: (event: App2FeatureNotificationsHandler1Event) => Promise<void>,
  priority = 0
): App2FeatureNotificationsHandler1Handler {
  return {
    canHandle: (event) => event.type === type,
    handle: fn,
    priority,
  };
}