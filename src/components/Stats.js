import React from 'react';

const Stats = () => {
  const stats = [
    {
      number: '92%',
      label: 'Client satisfaction rate'
    },
    {
      number: '50+',
      label: 'Projects completed'
    },
    {
      number: '30k+',
      label: 'Lines of code written'
    },
    {
      number: '100%',
      label: 'On-time delivery'
    }
  ];

  return (
    <section className="bg-white py-12">
      <div className="container-custom">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 text-sm lg:text-base">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;