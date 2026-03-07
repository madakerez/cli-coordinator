export interface App4FeatureIntegrationsHandler0Event {
  type: string;
  payload: unknown;
  timestamp: number;
  source: string;
}

export interface App4FeatureIntegrationsHandler0Handler {
  canHandle(event: App4FeatureIntegrationsHandler0Event): boolean;
  handle(event: App4FeatureIntegrationsHandler0Event): Promise<void>;
  priority: number;
}

export class App4FeatureIntegrationsHandler0EventBus {
  private handlers: App4FeatureIntegrationsHandler0Handler[] = [];
  private history: App4FeatureIntegrationsHandler0Event[] = [];
  private maxHistory = 100;

  register(handler: App4FeatureIntegrationsHandler0Handler): () => void {
    this.handlers.push(handler);
    this.handlers.sort((a, b) => b.priority - a.priority);
    return () => {
      this.handlers = this.handlers.filter(h => h !== handler);
    };
  }

  async dispatch(event: App4FeatureIntegrationsHandler0Event): Promise<void> {
    this.history.push(event);
    if (this.history.length > this.maxHistory) {
      this.history = this.history.slice(-this.maxHistory);
    }
    const applicable = this.handlers.filter(h => h.canHandle(event));
    for (const handler of applicable) {
      await handler.handle(event);
    }
  }

  getHistory(): ReadonlyArray<App4FeatureIntegrationsHandler0Event> {
    return [...this.history];
  }

  clearHistory(): void {
    this.history = [];
  }
}

export function createApp4FeatureIntegrationsHandler0Handler(
  type: string,
  fn: (event: App4FeatureIntegrationsHandler0Event) => Promise<void>,
  priority = 0
): App4FeatureIntegrationsHandler0Handler {
  return {
    canHandle: (event) => event.type === type,
    handle: fn,
    priority,
  };
}