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

export const useFilterStore = create<FilterStore>()((set) => ({
  filters: {
    platforms: [],
    date: { from: undefined, to: undefined },
    countries: []
  },
  setFilters: (field, newState) =>
    set((state) => ({
      filters: {
        ...state.filters,
        [field]: newState
      }
    })),
  resetFilters: () =>
    set({
      filters: {
        platforms: [],
        date: { from: undefined, to: undefined },
        countries: []
      }
    })
}));
