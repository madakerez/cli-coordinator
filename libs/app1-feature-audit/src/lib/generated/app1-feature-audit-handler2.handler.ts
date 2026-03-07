export interface App1FeatureAuditHandler2Event {
  type: string;
  payload: unknown;
  timestamp: number;
  source: string;
}

export interface App1FeatureAuditHandler2Handler {
  canHandle(event: App1FeatureAuditHandler2Event): boolean;
  handle(event: App1FeatureAuditHandler2Event): Promise<void>;
  priority: number;
}

export class App1FeatureAuditHandler2EventBus {
  private handlers: App1FeatureAuditHandler2Handler[] = [];
  private history: App1FeatureAuditHandler2Event[] = [];
  private maxHistory = 120;

  register(handler: App1FeatureAuditHandler2Handler): () => void {
    this.handlers.push(handler);
    this.handlers.sort((a, b) => b.priority - a.priority);
    return () => {
      this.handlers = this.handlers.filter(h => h !== handler);
    };
  }

  async dispatch(event: App1FeatureAuditHandler2Event): Promise<void> {
    this.history.push(event);
    if (this.history.length > this.maxHistory) {
      this.history = this.history.slice(-this.maxHistory);
    }
    const applicable = this.handlers.filter(h => h.canHandle(event));
    for (const handler of applicable) {
      await handler.handle(event);
    }
  }

  getHistory(): ReadonlyArray<App1FeatureAuditHandler2Event> {
    return [...this.history];
  }

  clearHistory(): void {
    this.history = [];
  }
}

export function createApp1FeatureAuditHandler2Handler(
  type: string,
  fn: (event: App1FeatureAuditHandler2Event) => Promise<void>,
  priority = 0
): App1FeatureAuditHandler2Handler {
  return {
    canHandle: (event) => event.type === type,
    handle: fn,
    priority,
  };
}