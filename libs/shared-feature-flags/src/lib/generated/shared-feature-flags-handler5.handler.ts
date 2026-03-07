export interface SharedFeatureFlagsHandler5Event {
  type: string;
  payload: unknown;
  timestamp: number;
  source: string;
}

export interface SharedFeatureFlagsHandler5Handler {
  canHandle(event: SharedFeatureFlagsHandler5Event): boolean;
  handle(event: SharedFeatureFlagsHandler5Event): Promise<void>;
  priority: number;
}

export class SharedFeatureFlagsHandler5EventBus {
  private handlers: SharedFeatureFlagsHandler5Handler[] = [];
  private history: SharedFeatureFlagsHandler5Event[] = [];
  private maxHistory = 150;

  register(handler: SharedFeatureFlagsHandler5Handler): () => void {
    this.handlers.push(handler);
    this.handlers.sort((a, b) => b.priority - a.priority);
    return () => {
      this.handlers = this.handlers.filter(h => h !== handler);
    };
  }

  async dispatch(event: SharedFeatureFlagsHandler5Event): Promise<void> {
    this.history.push(event);
    if (this.history.length > this.maxHistory) {
      this.history = this.history.slice(-this.maxHistory);
    }
    const applicable = this.handlers.filter(h => h.canHandle(event));
    for (const handler of applicable) {
      await handler.handle(event);
    }
  }

  getHistory(): ReadonlyArray<SharedFeatureFlagsHandler5Event> {
    return [...this.history];
  }

  clearHistory(): void {
    this.history = [];
  }
}

export function createSharedFeatureFlagsHandler5Handler(
  type: string,
  fn: (event: SharedFeatureFlagsHandler5Event) => Promise<void>,
  priority = 0
): SharedFeatureFlagsHandler5Handler {
  return {
    canHandle: (event) => event.type === type,
    handle: fn,
    priority,
  };
}