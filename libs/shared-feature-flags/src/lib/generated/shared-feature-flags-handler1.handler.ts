export interface SharedFeatureFlagsHandler1Event {
  type: string;
  payload: unknown;
  timestamp: number;
  source: string;
}

export interface SharedFeatureFlagsHandler1Handler {
  canHandle(event: SharedFeatureFlagsHandler1Event): boolean;
  handle(event: SharedFeatureFlagsHandler1Event): Promise<void>;
  priority: number;
}

export class SharedFeatureFlagsHandler1EventBus {
  private handlers: SharedFeatureFlagsHandler1Handler[] = [];
  private history: SharedFeatureFlagsHandler1Event[] = [];
  private maxHistory = 110;

  register(handler: SharedFeatureFlagsHandler1Handler): () => void {
    this.handlers.push(handler);
    this.handlers.sort((a, b) => b.priority - a.priority);
    return () => {
      this.handlers = this.handlers.filter(h => h !== handler);
    };
  }

  async dispatch(event: SharedFeatureFlagsHandler1Event): Promise<void> {
    this.history.push(event);
    if (this.history.length > this.maxHistory) {
      this.history = this.history.slice(-this.maxHistory);
    }
    const applicable = this.handlers.filter(h => h.canHandle(event));
    for (const handler of applicable) {
      await handler.handle(event);
    }
  }

  getHistory(): ReadonlyArray<SharedFeatureFlagsHandler1Event> {
    return [...this.history];
  }

  clearHistory(): void {
    this.history = [];
  }
}

export function createSharedFeatureFlagsHandler1Handler(
  type: string,
  fn: (event: SharedFeatureFlagsHandler1Event) => Promise<void>,
  priority = 0
): SharedFeatureFlagsHandler1Handler {
  return {
    canHandle: (event) => event.type === type,
    handle: fn,
    priority,
  };
}