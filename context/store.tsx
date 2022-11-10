import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useRef,
  useSyncExternalStore,
} from 'react';

export function createAStore<Store>(
  initalState: Store,
  displayName = 'StoreContext'
) {
  function useStoreData(): {
    get: () => Store;
    set: (value: Partial<Store>) => void;
    subscribe: (onStoreChange: () => void) => () => void;
  } {
    const store = useRef(initalState);

    const get = useCallback(() => {
      return store?.current;
    }, []);

    const subscribers = useRef(new Set<() => void>());

    const set = useCallback((value: Partial<Store>) => {
      store.current = { ...store?.current, ...value };
      subscribers?.current?.forEach((callback) => callback());
    }, []);

    const subscribe = useCallback((callback: () => void) => {
      subscribers?.current?.add(callback);
      return () => subscribers?.current?.delete(callback);
    }, []);

    return {
      get,
      set,
      subscribe,
    };
  }

  type UseStoreDataType = ReturnType<typeof useStoreData>;

  const StoreContext = createContext<UseStoreDataType | null>(null);
  StoreContext.displayName = displayName;

  type ProviderProps = {
    children: ReactNode;
  };

  const StoreProvider = ({ children }: ProviderProps) => {
    return (
      <StoreContext.Provider value={useStoreData()}>
        {children}
      </StoreContext.Provider>
    );
  };

  function useStore<T>(
    selector: (store: Store) => T
  ): [T, (value: Partial<Store>) => void] {
    const store = useContext(StoreContext);
    if (!store)
      throw new Error(
        'Store not found. useStore must be used in a StoreProvider'
      );
    const state = useSyncExternalStore(store.subscribe, () =>
      selector(store.get())
    );

    return [state, store.set];
  }

  return { StoreProvider, useStore };
}
