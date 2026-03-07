export interface App3FeatureCollaborationHandler1Event {
  type: string;
  payload: unknown;
  timestamp: number;
  source: string;
}

export interface App3FeatureCollaborationHandler1Handler {
  canHandle(event: App3FeatureCollaborationHandler1Event): boolean;
  handle(event: App3FeatureCollaborationHandler1Event): Promise<void>;
  priority: number;
}

export class App3FeatureCollaborationHandler1EventBus {
  private handlers: App3FeatureCollaborationHandler1Handler[] = [];
  private history: App3FeatureCollaborationHandler1Event[] = [];
  private maxHistory = 110;

  register(handler: App3FeatureCollaborationHandler1Handler): () => void {
    this.handlers.push(handler);
    this.handlers.sort((a, b) => b.priority - a.priority);
    return () => {
      this.handlers = this.handlers.filter(h => h !== handler);
    };
  }

  async dispatch(event: App3FeatureCollaborationHandler1Event): Promise<void> {
    this.history.push(event);
    if (this.history.length > this.maxHistory) {
      this.history = this.history.slice(-this.maxHistory);
    }
    const applicable = this.handlers.filter(h => h.canHandle(event));
    for (const handler of applicable) {
      await handler.handle(event);
    }
  }

  getHistory(): ReadonlyArray<App3FeatureCollaborationHandler1Event> {
    return [...this.history];
  }

  clearHistory(): void {
    this.history = [];
  }
}

export function createApp3FeatureCollaborationHandler1Handler(
  type: string,
  fn: (event: App3FeatureCollaborationHandler1Event) => Promise<void>,
  priority = 0
): App3FeatureCollaborationHandler1Handler {
  return {
    canHandle: (event) => event.type === type,
    handle: fn,
    priority,
  };
}