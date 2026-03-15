export interface SharedTestingWidget3Props {
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

export interface SharedTestingWidget3State {
  isOpen: boolean;
  isLoading: boolean;
  error: string | null;
  selectedIndex: number;
  searchQuery: string;
  items: Array<{ id: string; label: string; value: unknown }>;
  filters: Record<string, unknown>;
}

export class SharedTestingWidget3Controller {
  private state: SharedTestingWidget3State = {
    isOpen: false,
    isLoading: false,
    error: null,
    selectedIndex: -1,
    searchQuery: '',
    items: [],
    filters: {},
  };

  private listeners = new Set<(state: SharedTestingWidget3State) => void>();

  getState(): Readonly<SharedTestingWidget3State> {
    return { ...this.state };
  }

  subscribe(listener: (state: SharedTestingWidget3State) => void): () => void {
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

  setItems(items: SharedTestingWidget3State['items']): void {
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

export function createSharedTestingWidget3(props: SharedTestingWidget3Props): SharedTestingWidget3Controller {
  const controller = new SharedTestingWidget3Controller();
  if (props.loading) controller.setLoading(true);
  return controller;
}