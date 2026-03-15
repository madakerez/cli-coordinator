export interface App1FeatureCalendarHandler2Event {
  type: string;
  payload: unknown;
  timestamp: number;
  source: string;
}

export interface App1FeatureCalendarHandler2Handler {
  canHandle(event: App1FeatureCalendarHandler2Event): boolean;
  handle(event: App1FeatureCalendarHandler2Event): Promise<void>;
  priority: number;
}

export class App1FeatureCalendarHandler2EventBus {
  private handlers: App1FeatureCalendarHandler2Handler[] = [];
  private history: App1FeatureCalendarHandler2Event[] = [];
  private maxHistory = 120;

  register(handler: App1FeatureCalendarHandler2Handler): () => void {
    this.handlers.push(handler);
    this.handlers.sort((a, b) => b.priority - a.priority);
    return () => {
      this.handlers = this.handlers.filter(h => h !== handler);
    };
  }

  async dispatch(event: App1FeatureCalendarHandler2Event): Promise<void> {
    this.history.push(event);
    if (this.history.length > this.maxHistory) {
      this.history = this.history.slice(-this.maxHistory);
    }
    const applicable = this.handlers.filter(h => h.canHandle(event));
    for (const handler of applicable) {
      await handler.handle(event);
    }
  }

  getHistory(): ReadonlyArray<App1FeatureCalendarHandler2Event> {
    return [...this.history];
  }

  clearHistory(): void {
    this.history = [];
  }
}

export function createApp1FeatureCalendarHandler2Handler(
  type: string,
  fn: (event: App1FeatureCalendarHandler2Event) => Promise<void>,
  priority = 0
): App1FeatureCalendarHandler2Handler {
  return {
    canHandle: (event) => event.type === type,
    handle: fn,
    priority,
  };
}