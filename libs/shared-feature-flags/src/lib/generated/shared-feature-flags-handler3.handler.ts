export interface SharedFeatureFlagsHandler3Event {
  type: string;
  payload: unknown;
  timestamp: number;
  source: string;
}

export interface SharedFeatureFlagsHandler3Handler {
  canHandle(event: SharedFeatureFlagsHandler3Event): boolean;
  handle(event: SharedFeatureFlagsHandler3Event): Promise<void>;
  priority: number;
}

export class SharedFeatureFlagsHandler3EventBus {
  private handlers: SharedFeatureFlagsHandler3Handler[] = [];
  private history: SharedFeatureFlagsHandler3Event[] = [];
  private maxHistory = 130;

  register(handler: SharedFeatureFlagsHandler3Handler): () => void {
    this.handlers.push(handler);
    this.handlers.sort((a, b) => b.priority - a.priority);
    return () => {
      this.handlers = this.handlers.filter(h => h !== handler);
    };
  }

  async dispatch(event: SharedFeatureFlagsHandler3Event): Promise<void> {
    this.history.push(event);
    if (this.history.length > this.maxHistory) {
      this.history = this.history.slice(-this.maxHistory);
    }
    const applicable = this.handlers.filter(h => h.canHandle(event));
    for (const handler of applicable) {
      await handler.handle(event);
    }
  }

  getHistory(): ReadonlyArray<SharedFeatureFlagsHandler3Event> {
    return [...this.history];
  }

  clearHistory(): void {
    this.history = [];
  }
}

export function createSharedFeatureFlagsHandler3Handler(
  type: string,
  fn: (event: SharedFeatureFlagsHandler3Event) => Promise<void>,
  priority = 0
): SharedFeatureFlagsHandler3Handler {
  return {
    canHandle: (event) => event.type === type,
    handle: fn,
    priority,
  };
}