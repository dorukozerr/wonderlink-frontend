import { ResponsiveFunnel } from '@nivo/funnel';

import { trpc } from '@/utils/trpc';
import { useFilterStore } from '@/store/use-filter-store';

export const Retention = () => {
  const filters = useFilterStore((state) => state.filters);

  const { data, isFetching } =
    trpc.analytics.retentionMetrics.useQuery(filters);

  return (
    <div className='flex h-full w-full flex-col items-center justify-center p-4'>
      {isFetching ? (
        'Loading...'
      ) : data ? (
        <ResponsiveFunnel
          data={data}
          margin={{ top: 0, left: 10, right: 10, bottom: 0 }}
          valueFormat='>-.4s'
          colors={{ scheme: 'nivo' }}
          borderWidth={20}
          labelColor={{
            from: 'color',
            modifiers: [['darker', 10]]
          }}
          enableLabel={true}
          tooltip={({ part }) => (
            <div className='flex flex-col items-start justify-start gap-4 rounded-lg border border-border bg-card p-4'>
              <h5>{part.data.label}</h5>
              <span>{part.data.value.toLocaleString()}</span>
            </div>
          )}
          currentPartSizeExtension={20}
          currentBorderWidth={40}
          motionConfig='wobbly'
          interpolation='linear'
          enableAfterSeparators={false}
          enableBeforeSeparators={false}
        />
      ) : (
        'There was a error'
      )}
    </div>
  );
};
