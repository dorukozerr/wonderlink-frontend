import { create } from 'zustand';

type FilterStore = {
  platforms: string[];
  countries: string[];
  filters: {
    date: { from: string | undefined; to: string | undefined };
    platforms: string[];
    countries: string[];
  };
  setOptions: (option: 'platforms' | 'countries', data: string[]) => void;
  setFilters: (
    field: 'date' | 'platforms' | 'countries',
    newState: string[] | { from: string | undefined; to: string | undefined }
  ) => void;
  resetFilters: () => void;
};

const initialState = {
  date: { from: undefined, to: undefined },
  platforms: [],
  countries: []
};

export const useFilterStore = create<FilterStore>()((set) => ({
  platforms: [],
  countries: [],
  setOptions: (option, data) => set((state) => ({ ...state, [option]: data })),
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
