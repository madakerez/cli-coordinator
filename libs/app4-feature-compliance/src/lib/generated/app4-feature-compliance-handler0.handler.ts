export interface App4FeatureComplianceHandler0Event {
  type: string;
  payload: unknown;
  timestamp: number;
  source: string;
}

export interface App4FeatureComplianceHandler0Handler {
  canHandle(event: App4FeatureComplianceHandler0Event): boolean;
  handle(event: App4FeatureComplianceHandler0Event): Promise<void>;
  priority: number;
}

export class App4FeatureComplianceHandler0EventBus {
  private handlers: App4FeatureComplianceHandler0Handler[] = [];
  private history: App4FeatureComplianceHandler0Event[] = [];
  private maxHistory = 100;

  register(handler: App4FeatureComplianceHandler0Handler): () => void {
    this.handlers.push(handler);
    this.handlers.sort((a, b) => b.priority - a.priority);
    return () => {
      this.handlers = this.handlers.filter(h => h !== handler);
    };
  }

  async dispatch(event: App4FeatureComplianceHandler0Event): Promise<void> {
    this.history.push(event);
    if (this.history.length > this.maxHistory) {
      this.history = this.history.slice(-this.maxHistory);
    }
    const applicable = this.handlers.filter(h => h.canHandle(event));
    for (const handler of applicable) {
      await handler.handle(event);
    }
  }

  getHistory(): ReadonlyArray<App4FeatureComplianceHandler0Event> {
    return [...this.history];
  }

  clearHistory(): void {
    this.history = [];
  }
}

export function createApp4FeatureComplianceHandler0Handler(
  type: string,
  fn: (event: App4FeatureComplianceHandler0Event) => Promise<void>,
  priority = 0
): App4FeatureComplianceHandler0Handler {
  return {
    canHandle: (event) => event.type === type,
    handle: fn,
    priority,
  };
}