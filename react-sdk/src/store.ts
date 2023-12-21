import { createStore } from "zustand/vanilla";

type State = {
  flags: Record<string, boolean>;
  setFlags: (flags: Record<string, boolean>) => void;
  getFlag: (flag: string) => boolean | undefined;
};

export const store = createStore<State>((set, get) => ({
  flags: {},
  setFlags: (flags) => set({ flags }),
  getFlag: (flag) => get().flags[flag] ?? undefined,
}));
