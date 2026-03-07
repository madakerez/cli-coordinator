export interface App1FeatureIntegrationsHandler2Event {
  type: string;
  payload: unknown;
  timestamp: number;
  source: string;
}

export interface App1FeatureIntegrationsHandler2Handler {
  canHandle(event: App1FeatureIntegrationsHandler2Event): boolean;
  handle(event: App1FeatureIntegrationsHandler2Event): Promise<void>;
  priority: number;
}

export class App1FeatureIntegrationsHandler2EventBus {
  private handlers: App1FeatureIntegrationsHandler2Handler[] = [];
  private history: App1FeatureIntegrationsHandler2Event[] = [];
  private maxHistory = 120;

  register(handler: App1FeatureIntegrationsHandler2Handler): () => void {
    this.handlers.push(handler);
    this.handlers.sort((a, b) => b.priority - a.priority);
    return () => {
      this.handlers = this.handlers.filter(h => h !== handler);
    };
  }

  async dispatch(event: App1FeatureIntegrationsHandler2Event): Promise<void> {
    this.history.push(event);
    if (this.history.length > this.maxHistory) {
      this.history = this.history.slice(-this.maxHistory);
    }
    const applicable = this.handlers.filter(h => h.canHandle(event));
    for (const handler of applicable) {
      await handler.handle(event);
    }
  }

  getHistory(): ReadonlyArray<App1FeatureIntegrationsHandler2Event> {
    return [...this.history];
  }

  clearHistory(): void {
    this.history = [];
  }
}

export function createApp1FeatureIntegrationsHandler2Handler(
  type: string,
  fn: (event: App1FeatureIntegrationsHandler2Event) => Promise<void>,
  priority = 0
): App1FeatureIntegrationsHandler2Handler {
  return {
    canHandle: (event) => event.type === type,
    handle: fn,
    priority,
  };
}