export interface App1FeatureCalendarHandler6Event {
  type: string;
  payload: unknown;
  timestamp: number;
  source: string;
}

export interface App1FeatureCalendarHandler6Handler {
  canHandle(event: App1FeatureCalendarHandler6Event): boolean;
  handle(event: App1FeatureCalendarHandler6Event): Promise<void>;
  priority: number;
}

export class App1FeatureCalendarHandler6EventBus {
  private handlers: App1FeatureCalendarHandler6Handler[] = [];
  private history: App1FeatureCalendarHandler6Event[] = [];
  private maxHistory = 160;

  register(handler: App1FeatureCalendarHandler6Handler): () => void {
    this.handlers.push(handler);
    this.handlers.sort((a, b) => b.priority - a.priority);
    return () => {
      this.handlers = this.handlers.filter(h => h !== handler);
    };
  }

  async dispatch(event: App1FeatureCalendarHandler6Event): Promise<void> {
    this.history.push(event);
    if (this.history.length > this.maxHistory) {
      this.history = this.history.slice(-this.maxHistory);
    }
    const applicable = this.handlers.filter(h => h.canHandle(event));
    for (const handler of applicable) {
      await handler.handle(event);
    }
  }

  getHistory(): ReadonlyArray<App1FeatureCalendarHandler6Event> {
    return [...this.history];
  }

  clearHistory(): void {
    this.history = [];
  }
}

export function createApp1FeatureCalendarHandler6Handler(
  type: string,
  fn: (event: App1FeatureCalendarHandler6Event) => Promise<void>,
  priority = 0
): App1FeatureCalendarHandler6Handler {
  return {
    canHandle: (event) => event.type === type,
    handle: fn,
    priority,
  };
}