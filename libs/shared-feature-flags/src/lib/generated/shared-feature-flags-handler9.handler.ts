export interface SharedFeatureFlagsHandler9Event {
  type: string;
  payload: unknown;
  timestamp: number;
  source: string;
}

export interface SharedFeatureFlagsHandler9Handler {
  canHandle(event: SharedFeatureFlagsHandler9Event): boolean;
  handle(event: SharedFeatureFlagsHandler9Event): Promise<void>;
  priority: number;
}

export class SharedFeatureFlagsHandler9EventBus {
  private handlers: SharedFeatureFlagsHandler9Handler[] = [];
  private history: SharedFeatureFlagsHandler9Event[] = [];
  private maxHistory = 190;

  register(handler: SharedFeatureFlagsHandler9Handler): () => void {
    this.handlers.push(handler);
    this.handlers.sort((a, b) => b.priority - a.priority);
    return () => {
      this.handlers = this.handlers.filter(h => h !== handler);
    };
  }

  async dispatch(event: SharedFeatureFlagsHandler9Event): Promise<void> {
    this.history.push(event);
    if (this.history.length > this.maxHistory) {
      this.history = this.history.slice(-this.maxHistory);
    }
    const applicable = this.handlers.filter(h => h.canHandle(event));
    for (const handler of applicable) {
      await handler.handle(event);
    }
  }

  getHistory(): ReadonlyArray<SharedFeatureFlagsHandler9Event> {
    return [...this.history];
  }

  clearHistory(): void {
    this.history = [];
  }
}

export function createSharedFeatureFlagsHandler9Handler(
  type: string,
  fn: (event: SharedFeatureFlagsHandler9Event) => Promise<void>,
  priority = 0
): SharedFeatureFlagsHandler9Handler {
  return {
    canHandle: (event) => event.type === type,
    handle: fn,
    priority,
  };
}