export interface SharedFeatureFlagsHandler8Event {
  type: string;
  payload: unknown;
  timestamp: number;
  source: string;
}

export interface SharedFeatureFlagsHandler8Handler {
  canHandle(event: SharedFeatureFlagsHandler8Event): boolean;
  handle(event: SharedFeatureFlagsHandler8Event): Promise<void>;
  priority: number;
}

export class SharedFeatureFlagsHandler8EventBus {
  private handlers: SharedFeatureFlagsHandler8Handler[] = [];
  private history: SharedFeatureFlagsHandler8Event[] = [];
  private maxHistory = 180;

  register(handler: SharedFeatureFlagsHandler8Handler): () => void {
    this.handlers.push(handler);
    this.handlers.sort((a, b) => b.priority - a.priority);
    return () => {
      this.handlers = this.handlers.filter(h => h !== handler);
    };
  }

  async dispatch(event: SharedFeatureFlagsHandler8Event): Promise<void> {
    this.history.push(event);
    if (this.history.length > this.maxHistory) {
      this.history = this.history.slice(-this.maxHistory);
    }
    const applicable = this.handlers.filter(h => h.canHandle(event));
    for (const handler of applicable) {
      await handler.handle(event);
    }
  }

  getHistory(): ReadonlyArray<SharedFeatureFlagsHandler8Event> {
    return [...this.history];
  }

  clearHistory(): void {
    this.history = [];
  }
}

export function createSharedFeatureFlagsHandler8Handler(
  type: string,
  fn: (event: SharedFeatureFlagsHandler8Event) => Promise<void>,
  priority = 0
): SharedFeatureFlagsHandler8Handler {
  return {
    canHandle: (event) => event.type === type,
    handle: fn,
    priority,
  };
}