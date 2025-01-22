import { create } from 'zustand';

import { platforms, countries } from '@/lib/constants';

type FilterStore = {
  filters: {
    date: { from: string | undefined; to: string | undefined };
    platforms: (typeof platforms)[number][];
    countries: (typeof countries)[number][];
  };
  setFilters: (
    field: 'date' | 'platforms' | 'countries',
    newState:
      | (typeof platforms)[number][]
      | (typeof countries)[number][]
      | { from: string | undefined; to: string | undefined }
  ) => void;
  resetFilters: () => void;
};

const initialState = {
  date: { from: undefined, to: undefined },
  platforms: [],
  countries: []
};

export const useFilterStore = create<FilterStore>()((set) => ({
  filters: initialState,
  setFilters: (field, newState) =>
    set((state) => ({
      filters: {
        ...state.filters,
        [field]: newState
      }
    })),
  resetFilters: () => set({ filters: initialState })
}));
