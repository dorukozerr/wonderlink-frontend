// ## Chart section ideas
//
// - D1,D7,D30 Retentions => Funnel
// - Extended Retentions => Circle Packing
// - Platform statistics => Waffle
// - Daily usage statistics => Calendar
// - Country statistics => Tree Map

import { ViewState } from '@/types';
import { useViewStateStore } from '@/store/use-view-state-store';
import { Consecutive } from '@/components/view-states/consecutive';
import { Country } from '@/components/view-states/country';
import { DailyUsage } from '@/components/view-states/daily-usage';
import { Platform } from '@/components/view-states/platform';
import { Retention } from '@/components/view-states/retention';
import { Button } from '@/components/ui/button';

export const App = () => {
  const { viewState, changeViewState } = useViewStateStore();

  const viewStates = {
    consecutive: <Consecutive />,
    country: <Country />,
    dailyUsage: <DailyUsage />,
    platform: <Platform />,
    retention: <Retention />
  };

  return (
    <div className='flex h-full w-full flex-col items-start justify-start'>
      <div className='flex h-max w-full items-center justify-start gap-2 border-b border-border py-4'>
        {Object.keys(viewStates).map((state, index) => (
          <Button
            key={`viewStateLink-${index}`}
            variant={viewState === state ? 'default' : 'link'}
            className='capitalize'
            onClick={() => changeViewState(state as ViewState)}
          >
            {state.replace(/([A-Z])/g, ' $1').trim()}
          </Button>
        ))}
      </div>
      {viewStates[viewState]}
    </div>
  );
};
