import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

type Auth = {
  current: {
    userName: string;
    userId: string;
    role: string;
  } | null;
  token: string | null;
};

type State = {
  auth: Auth;
};

const initialState: State = {
  auth: {
    current: null,
    token: null
  }
};

type Actions = {
  setAuth: (auth: Auth) => void;
  reset: () => void;
  test: () => void;
};

const useUserStore = create<State & Actions>()(persist(
  (set, get) => ({
    ...initialState,
    setAuth: (auth: Auth) => set({ auth }),
    reset: () => set(initialState),
    test: () => console.log(get().auth.current)
  }),
  { name: 'user-store', storage: createJSONStorage(() => sessionStorage) }
));

export default useUserStore;
