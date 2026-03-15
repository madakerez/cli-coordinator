export interface App1FeatureAuditHandler4Event {
  type: string;
  payload: unknown;
  timestamp: number;
  source: string;
}

export interface App1FeatureAuditHandler4Handler {
  canHandle(event: App1FeatureAuditHandler4Event): boolean;
  handle(event: App1FeatureAuditHandler4Event): Promise<void>;
  priority: number;
}

export class App1FeatureAuditHandler4EventBus {
  private handlers: App1FeatureAuditHandler4Handler[] = [];
  private history: App1FeatureAuditHandler4Event[] = [];
  private maxHistory = 140;

  register(handler: App1FeatureAuditHandler4Handler): () => void {
    this.handlers.push(handler);
    this.handlers.sort((a, b) => b.priority - a.priority);
    return () => {
      this.handlers = this.handlers.filter(h => h !== handler);
    };
  }

  async dispatch(event: App1FeatureAuditHandler4Event): Promise<void> {
    this.history.push(event);
    if (this.history.length > this.maxHistory) {
      this.history = this.history.slice(-this.maxHistory);
    }
    const applicable = this.handlers.filter(h => h.canHandle(event));
    for (const handler of applicable) {
      await handler.handle(event);
    }
  }

  getHistory(): ReadonlyArray<App1FeatureAuditHandler4Event> {
    return [...this.history];
  }

  clearHistory(): void {
    this.history = [];
  }
}

export function createApp1FeatureAuditHandler4Handler(
  type: string,
  fn: (event: App1FeatureAuditHandler4Event) => Promise<void>,
  priority = 0
): App1FeatureAuditHandler4Handler {
  return {
    canHandle: (event) => event.type === type,
    handle: fn,
    priority,
  };
}