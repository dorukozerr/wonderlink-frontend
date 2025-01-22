import { ResponsiveFunnel } from '@nivo/funnel';

export const Retention = () => (
  <div className='flex h-full w-full flex-col items-center justify-center p-4'>
    <ResponsiveFunnel
      data={[
        {
          id: 'total-users',
          value: 100000,
          label: 'Total Users'
        },
        {
          id: 'd1-retention',
          value: 75000,
          label: 'Day 1 Retention'
        },
        {
          id: 'd7-retention',
          value: 45000,
          label: 'Day 7 Retention'
        },
        {
          id: 'd14-retention',
          value: 30000,
          label: 'Day 14 Retention'
        },
        {
          id: 'd21-retention',
          value: 22000,
          label: 'Day 21 Retention'
        },
        {
          id: 'd30-retention',
          value: 18000,
          label: 'Day 30 Retention'
        }
      ]}
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
  </div>
);
