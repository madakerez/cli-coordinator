export interface SharedFeatureFlagsHandler4Event {
  type: string;
  payload: unknown;
  timestamp: number;
  source: string;
}

export interface SharedFeatureFlagsHandler4Handler {
  canHandle(event: SharedFeatureFlagsHandler4Event): boolean;
  handle(event: SharedFeatureFlagsHandler4Event): Promise<void>;
  priority: number;
}

export class SharedFeatureFlagsHandler4EventBus {
  private handlers: SharedFeatureFlagsHandler4Handler[] = [];
  private history: SharedFeatureFlagsHandler4Event[] = [];
  private maxHistory = 140;

  register(handler: SharedFeatureFlagsHandler4Handler): () => void {
    this.handlers.push(handler);
    this.handlers.sort((a, b) => b.priority - a.priority);
    return () => {
      this.handlers = this.handlers.filter(h => h !== handler);
    };
  }

  async dispatch(event: SharedFeatureFlagsHandler4Event): Promise<void> {
    this.history.push(event);
    if (this.history.length > this.maxHistory) {
      this.history = this.history.slice(-this.maxHistory);
    }
    const applicable = this.handlers.filter(h => h.canHandle(event));
    for (const handler of applicable) {
      await handler.handle(event);
    }
  }

  getHistory(): ReadonlyArray<SharedFeatureFlagsHandler4Event> {
    return [...this.history];
  }

  clearHistory(): void {
    this.history = [];
  }
}

export function createSharedFeatureFlagsHandler4Handler(
  type: string,
  fn: (event: SharedFeatureFlagsHandler4Event) => Promise<void>,
  priority = 0
): SharedFeatureFlagsHandler4Handler {
  return {
    canHandle: (event) => event.type === type,
    handle: fn,
    priority,
  };
}