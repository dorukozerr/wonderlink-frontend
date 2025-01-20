// ## Chart section ideas
//
// - D1,D7,D30 Retentions => Funnel
// - Extended Retentions => Circle Packing
// - Platform statistics => Waffle
// - Daily usage statistics => Calendar
// - Country statistics => Tree Map

export const App = () => (
  <div>
    {[1, 1, 1, 1, 1, 1, 1].map((section, index) => (
      <div key={`section-${index}`} className='h-[500px]'>
        section {section} {index}
      </div>
    ))}
  </div>
);
