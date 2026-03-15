export interface SharedFeatureFlagsHandler6Event {
  type: string;
  payload: unknown;
  timestamp: number;
  source: string;
}

export interface SharedFeatureFlagsHandler6Handler {
  canHandle(event: SharedFeatureFlagsHandler6Event): boolean;
  handle(event: SharedFeatureFlagsHandler6Event): Promise<void>;
  priority: number;
}

export class SharedFeatureFlagsHandler6EventBus {
  private handlers: SharedFeatureFlagsHandler6Handler[] = [];
  private history: SharedFeatureFlagsHandler6Event[] = [];
  private maxHistory = 160;

  register(handler: SharedFeatureFlagsHandler6Handler): () => void {
    this.handlers.push(handler);
    this.handlers.sort((a, b) => b.priority - a.priority);
    return () => {
      this.handlers = this.handlers.filter(h => h !== handler);
    };
  }

  async dispatch(event: SharedFeatureFlagsHandler6Event): Promise<void> {
    this.history.push(event);
    if (this.history.length > this.maxHistory) {
      this.history = this.history.slice(-this.maxHistory);
    }
    const applicable = this.handlers.filter(h => h.canHandle(event));
    for (const handler of applicable) {
      await handler.handle(event);
    }
  }

  getHistory(): ReadonlyArray<SharedFeatureFlagsHandler6Event> {
    return [...this.history];
  }

  clearHistory(): void {
    this.history = [];
  }
}

export function createSharedFeatureFlagsHandler6Handler(
  type: string,
  fn: (event: SharedFeatureFlagsHandler6Event) => Promise<void>,
  priority = 0
): SharedFeatureFlagsHandler6Handler {
  return {
    canHandle: (event) => event.type === type,
    handle: fn,
    priority,
  };
}