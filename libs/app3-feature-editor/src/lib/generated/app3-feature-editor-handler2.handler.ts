export interface App3FeatureEditorHandler2Event {
  type: string;
  payload: unknown;
  timestamp: number;
  source: string;
}

export interface App3FeatureEditorHandler2Handler {
  canHandle(event: App3FeatureEditorHandler2Event): boolean;
  handle(event: App3FeatureEditorHandler2Event): Promise<void>;
  priority: number;
}

export class App3FeatureEditorHandler2EventBus {
  private handlers: App3FeatureEditorHandler2Handler[] = [];
  private history: App3FeatureEditorHandler2Event[] = [];
  private maxHistory = 120;

  register(handler: App3FeatureEditorHandler2Handler): () => void {
    this.handlers.push(handler);
    this.handlers.sort((a, b) => b.priority - a.priority);
    return () => {
      this.handlers = this.handlers.filter(h => h !== handler);
    };
  }

  async dispatch(event: App3FeatureEditorHandler2Event): Promise<void> {
    this.history.push(event);
    if (this.history.length > this.maxHistory) {
      this.history = this.history.slice(-this.maxHistory);
    }
    const applicable = this.handlers.filter(h => h.canHandle(event));
    for (const handler of applicable) {
      await handler.handle(event);
    }
  }

  getHistory(): ReadonlyArray<App3FeatureEditorHandler2Event> {
    return [...this.history];
  }

  clearHistory(): void {
    this.history = [];
  }
}

export function createApp3FeatureEditorHandler2Handler(
  type: string,
  fn: (event: App3FeatureEditorHandler2Event) => Promise<void>,
  priority = 0
): App3FeatureEditorHandler2Handler {
  return {
    canHandle: (event) => event.type === type,
    handle: fn,
    priority,
  };
}