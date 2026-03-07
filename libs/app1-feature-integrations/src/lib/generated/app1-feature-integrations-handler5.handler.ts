export interface App1FeatureIntegrationsHandler5Event {
  type: string;
  payload: unknown;
  timestamp: number;
  source: string;
}

export interface App1FeatureIntegrationsHandler5Handler {
  canHandle(event: App1FeatureIntegrationsHandler5Event): boolean;
  handle(event: App1FeatureIntegrationsHandler5Event): Promise<void>;
  priority: number;
}

export class App1FeatureIntegrationsHandler5EventBus {
  private handlers: App1FeatureIntegrationsHandler5Handler[] = [];
  private history: App1FeatureIntegrationsHandler5Event[] = [];
  private maxHistory = 150;

  register(handler: App1FeatureIntegrationsHandler5Handler): () => void {
    this.handlers.push(handler);
    this.handlers.sort((a, b) => b.priority - a.priority);
    return () => {
      this.handlers = this.handlers.filter(h => h !== handler);
    };
  }

  async dispatch(event: App1FeatureIntegrationsHandler5Event): Promise<void> {
    this.history.push(event);
    if (this.history.length > this.maxHistory) {
      this.history = this.history.slice(-this.maxHistory);
    }
    const applicable = this.handlers.filter(h => h.canHandle(event));
    for (const handler of applicable) {
      await handler.handle(event);
    }
  }

  getHistory(): ReadonlyArray<App1FeatureIntegrationsHandler5Event> {
    return [...this.history];
  }

  clearHistory(): void {
    this.history = [];
  }
}

export function createApp1FeatureIntegrationsHandler5Handler(
  type: string,
  fn: (event: App1FeatureIntegrationsHandler5Event) => Promise<void>,
  priority = 0
): App1FeatureIntegrationsHandler5Handler {
  return {
    canHandle: (event) => event.type === type,
    handle: fn,
    priority,
  };
}