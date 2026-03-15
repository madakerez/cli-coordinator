export interface SharedFeatureFlagsHandler7Event {
  type: string;
  payload: unknown;
  timestamp: number;
  source: string;
}

export interface SharedFeatureFlagsHandler7Handler {
  canHandle(event: SharedFeatureFlagsHandler7Event): boolean;
  handle(event: SharedFeatureFlagsHandler7Event): Promise<void>;
  priority: number;
}

export class SharedFeatureFlagsHandler7EventBus {
  private handlers: SharedFeatureFlagsHandler7Handler[] = [];
  private history: SharedFeatureFlagsHandler7Event[] = [];
  private maxHistory = 170;

  register(handler: SharedFeatureFlagsHandler7Handler): () => void {
    this.handlers.push(handler);
    this.handlers.sort((a, b) => b.priority - a.priority);
    return () => {
      this.handlers = this.handlers.filter(h => h !== handler);
    };
  }

  async dispatch(event: SharedFeatureFlagsHandler7Event): Promise<void> {
    this.history.push(event);
    if (this.history.length > this.maxHistory) {
      this.history = this.history.slice(-this.maxHistory);
    }
    const applicable = this.handlers.filter(h => h.canHandle(event));
    for (const handler of applicable) {
      await handler.handle(event);
    }
  }

  getHistory(): ReadonlyArray<SharedFeatureFlagsHandler7Event> {
    return [...this.history];
  }

  clearHistory(): void {
    this.history = [];
  }
}

export function createSharedFeatureFlagsHandler7Handler(
  type: string,
  fn: (event: SharedFeatureFlagsHandler7Event) => Promise<void>,
  priority = 0
): SharedFeatureFlagsHandler7Handler {
  return {
    canHandle: (event) => event.type === type,
    handle: fn,
    priority,
  };
}