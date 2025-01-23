import { ResponsiveFunnel } from '@nivo/funnel';

import { trpc } from '@/utils/trpc';
import { useFilterStore } from '@/store/use-filter-store';
import { Button } from '@/components/ui/button';

export const Retention = () => {
  const filters = useFilterStore((state) => state.filters);

  const { data, isFetching, isError, error, refetch } =
    trpc.analytics.retentionMetrics.useQuery(filters, {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      retry: false
    });

  return (
    <div className='flex h-full w-full flex-col items-center justify-center gap-4 p-4'>
      {isFetching ? (
        'Loading...'
      ) : isError || !data ? (
        <>
          <h3 className='text-2xl font-bold'>Server Error</h3>
          <h5 className='tet-lg text-muted-foreground'>{error?.message}</h5>
          <Button onClick={() => refetch()}>Retry</Button>
        </>
      ) : (
        <ResponsiveFunnel
          data={data}
          margin={{ top: 0, left: 10, right: 10, bottom: 0 }}
          valueFormat='>-.2s'
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
              {part.data.ratio ? (
                <span className='text-muted-foreground'>
                  Total Users Ratio - {part.data.ratio}%
                </span>
              ) : null}
            </div>
          )}
          currentPartSizeExtension={20}
          currentBorderWidth={40}
          motionConfig='wobbly'
          interpolation='linear'
          enableAfterSeparators={false}
          enableBeforeSeparators={false}
        />
      )}
    </div>
  );
};
