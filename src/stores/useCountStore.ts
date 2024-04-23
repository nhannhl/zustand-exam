import { create } from "zustand";
import { useUserStore } from ".";

type State = {
  count: number
}

type Actions = {
  increment: (qty: number) => void
  decrement: (qty: number) => void
  showUser: () => void
  reset: () => void
}

const initialState: State = {
  count: 0
}

const useCountStore = create<State & Actions>()((set, get) => ({
  ...initialState,
  increment: (qty: number) => set(() => ({ count: get().count + qty })),
  decrement: (qty: number) => set((state) => ({ count: state.count - qty })),
  showUser: () => useUserStore.getState().test(),
  reset: () => set(initialState)
}));

export default useCountStore;
