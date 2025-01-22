import { create } from 'zustand';

type PlatformFilter = 'all' | 'ios' | 'android';
type DateFilter = { from?: string; to?: string };
type CountryFilter = 'turkey' | 'unitedStates' | 'brazil' | 'india';

type ViewStateStore = {
  filters: {
    platform: PlatformFilter;
    date: DateFilter;
    country: CountryFilter;
  };
  updateFiltersState: (
    field: 'platform' | 'date' | 'country',
    newState: PlatformFilter | DateFilter | CountryFilter
  ) => void;
};

export const useViewStateStore = create<ViewStateStore>()((set) => ({
  filters: {
    platform: 'all',
    date: {},
    country: 'turkey'
  },
  updateFiltersState: (field, newState) =>
    set((state) => ({
      filters: {
        ...state.filters,
        [field]: newState
      }
    }))
}));
