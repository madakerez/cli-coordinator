export interface SharedFeatureFlagsHandler2Event {
  type: string;
  payload: unknown;
  timestamp: number;
  source: string;
}

export interface SharedFeatureFlagsHandler2Handler {
  canHandle(event: SharedFeatureFlagsHandler2Event): boolean;
  handle(event: SharedFeatureFlagsHandler2Event): Promise<void>;
  priority: number;
}

export class SharedFeatureFlagsHandler2EventBus {
  private handlers: SharedFeatureFlagsHandler2Handler[] = [];
  private history: SharedFeatureFlagsHandler2Event[] = [];
  private maxHistory = 120;

  register(handler: SharedFeatureFlagsHandler2Handler): () => void {
    this.handlers.push(handler);
    this.handlers.sort((a, b) => b.priority - a.priority);
    return () => {
      this.handlers = this.handlers.filter(h => h !== handler);
    };
  }

  async dispatch(event: SharedFeatureFlagsHandler2Event): Promise<void> {
    this.history.push(event);
    if (this.history.length > this.maxHistory) {
      this.history = this.history.slice(-this.maxHistory);
    }
    const applicable = this.handlers.filter(h => h.canHandle(event));
    for (const handler of applicable) {
      await handler.handle(event);
    }
  }

  getHistory(): ReadonlyArray<SharedFeatureFlagsHandler2Event> {
    return [...this.history];
  }

  clearHistory(): void {
    this.history = [];
  }
}

export function createSharedFeatureFlagsHandler2Handler(
  type: string,
  fn: (event: SharedFeatureFlagsHandler2Event) => Promise<void>,
  priority = 0
): SharedFeatureFlagsHandler2Handler {
  return {
    canHandle: (event) => event.type === type,
    handle: fn,
    priority,
  };
}