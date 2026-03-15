export interface SharedMetricsWidget1Props {
  id: string;
  title: string;
  description?: string;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  disabled?: boolean;
  loading?: boolean;
  className?: string;
  onClick?: (id: string) => void;
  onHover?: (id: string) => void;
  onChange?: (value: unknown) => void;
}

export interface SharedMetricsWidget1State {
  isOpen: boolean;
  isLoading: boolean;
  error: string | null;
  selectedIndex: number;
  searchQuery: string;
  items: Array<{ id: string; label: string; value: unknown }>;
  filters: Record<string, unknown>;
}

export class SharedMetricsWidget1Controller {
  private state: SharedMetricsWidget1State = {
    isOpen: false,
    isLoading: false,
    error: null,
    selectedIndex: -1,
    searchQuery: '',
    items: [],
    filters: {},
  };

  private listeners = new Set<(state: SharedMetricsWidget1State) => void>();

  getState(): Readonly<SharedMetricsWidget1State> {
    return { ...this.state };
  }

  subscribe(listener: (state: SharedMetricsWidget1State) => void): () => void {
    this.listeners.add(listener);
    return () => this.listeners.delete(listener);
  }

  private emit(): void {
    const snapshot = this.getState();
    this.listeners.forEach(fn => fn(snapshot));
  }

  open(): void {
    this.state = { ...this.state, isOpen: true };
    this.emit();
  }

  close(): void {
    this.state = { ...this.state, isOpen: false, searchQuery: '' };
    this.emit();
  }

  toggle(): void {
    this.state.isOpen ? this.close() : this.open();
  }

  setLoading(loading: boolean): void {
    this.state = { ...this.state, isLoading: loading };
    this.emit();
  }

  setError(error: string | null): void {
    this.state = { ...this.state, error, isLoading: false };
    this.emit();
  }

  setSearch(query: string): void {
    this.state = { ...this.state, searchQuery: query };
    this.emit();
  }

  selectIndex(index: number): void {
    this.state = { ...this.state, selectedIndex: index };
    this.emit();
  }

  setItems(items: SharedMetricsWidget1State['items']): void {
    this.state = { ...this.state, items, isLoading: false };
    this.emit();
  }

  updateFilter(key: string, value: unknown): void {
    this.state = {
      ...this.state,
      filters: { ...this.state.filters, [key]: value },
    };
    this.emit();
  }

  reset(): void {
    this.state = {
      isOpen: false,
      isLoading: false,
      error: null,
      selectedIndex: -1,
      searchQuery: '',
      items: [],
      filters: {},
    };
    this.emit();
  }

  destroy(): void {
    this.listeners.clear();
  }
}

export function createSharedMetricsWidget1(props: SharedMetricsWidget1Props): SharedMetricsWidget1Controller {
  const controller = new SharedMetricsWidget1Controller();
  if (props.loading) controller.setLoading(true);
  return controller;
}