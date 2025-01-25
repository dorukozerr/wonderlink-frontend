import { trpc } from '@/utils/trpc';
import { useFilterStore } from '@/store/use-filter-store';
import { FilterRow } from '@/components/filter-row';
import { Retention } from '@/components/view-states/retention';

export const App = () => {
  const setOptions = useFilterStore((state) => state.setOptions);

  trpc['filter-fields'].getUniqueFilters.useQuery(undefined, {
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    retry: false,
    onSuccess: (data) => {
      setOptions('platforms', data.platforms);
      setOptions('countries', data.countries);
    }
  });

  trpc['filter-fields'].getSessionDateRange.useQuery(undefined, {
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    retry: false,
    onSuccess: (data) => setOptions('dateRange', data)
  });

  return (
    <div className='flex h-full w-full flex-col items-start justify-start'>
      <FilterRow />
      <Retention />
    </div>
  );
};
