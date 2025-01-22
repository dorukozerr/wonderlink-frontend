// ## Chart section ideas
//
// - D1,D7,D30 Retentions => Funnel
// - Extended Retentions => Circle Packing
// - Platform statistics => Waffle
// - Daily usage statistics => Calendar
// - Country statistics => Tree Map

import { useViewStateStore } from '@/store/use-view-state-store';
import { FilterRow } from '@/components/filter-row';
import { Consecutive } from '@/components/view-states/consecutive';
import { Country } from '@/components/view-states/country';
import { DailyUsage } from '@/components/view-states/daily-usage';
import { Platform } from '@/components/view-states/platform';
import { Retention } from '@/components/view-states/retention';

export const App = () => {
  const { viewState } = useViewStateStore();

  const viewStates = {
    consecutive: <Consecutive />,
    country: <Country />,
    dailyUsage: <DailyUsage />,
    platform: <Platform />,
    retention: <Retention />
  };

  return (
    <div className='flex h-full w-full flex-col items-start justify-start'>
      <FilterRow />
      {viewStates[viewState]}
    </div>
  );
};
