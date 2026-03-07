export interface App1FeatureAuditHandler7Event {
  type: string;
  payload: unknown;
  timestamp: number;
  source: string;
}

export interface App1FeatureAuditHandler7Handler {
  canHandle(event: App1FeatureAuditHandler7Event): boolean;
  handle(event: App1FeatureAuditHandler7Event): Promise<void>;
  priority: number;
}

export class App1FeatureAuditHandler7EventBus {
  private handlers: App1FeatureAuditHandler7Handler[] = [];
  private history: App1FeatureAuditHandler7Event[] = [];
  private maxHistory = 170;

  register(handler: App1FeatureAuditHandler7Handler): () => void {
    this.handlers.push(handler);
    this.handlers.sort((a, b) => b.priority - a.priority);
    return () => {
      this.handlers = this.handlers.filter(h => h !== handler);
    };
  }

  async dispatch(event: App1FeatureAuditHandler7Event): Promise<void> {
    this.history.push(event);
    if (this.history.length > this.maxHistory) {
      this.history = this.history.slice(-this.maxHistory);
    }
    const applicable = this.handlers.filter(h => h.canHandle(event));
    for (const handler of applicable) {
      await handler.handle(event);
    }
  }

  getHistory(): ReadonlyArray<App1FeatureAuditHandler7Event> {
    return [...this.history];
  }

  clearHistory(): void {
    this.history = [];
  }
}

export function createApp1FeatureAuditHandler7Handler(
  type: string,
  fn: (event: App1FeatureAuditHandler7Event) => Promise<void>,
  priority = 0
): App1FeatureAuditHandler7Handler {
  return {
    canHandle: (event) => event.type === type,
    handle: fn,
    priority,
  };
}