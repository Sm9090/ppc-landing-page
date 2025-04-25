import React from 'react';

const counters = [
  {
    count: 650,
    speed: 3000,
    title: 'Applications Developed and Designed',
    delay: '0ms',
  },
  {
    count: 590,
    speed: 5000,
    title: 'In-house App Development Team & Software Engineers',
    delay: '300ms',
  },
  {
    count: 10,
    speed: 2000,
    title: 'Providing Mobile App Service in USA Since 2008',
    delay: '600ms',
  },
  {
    count: 450,
    speed: 3500,
    title: 'Satisfied Mobile App Clients in All Over Globe',
    delay: '900ms',
  },
];

const CounterSection = () => {
  return (
    <section className="counter-section mt-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="inner-container">
          {/* Fact Counter */}
          <div className="fact-counter">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {counters.map(({ count, speed, title, delay }, index) => (
                <div className="counter-column" key={index}>
                  <div
                    className="inner animate-fadeInLeft"
                    style={{
                      visibility: 'visible',
                      animationDuration: '1500ms',
                      animationDelay: delay,
                      animationName: 'fadeInLeft',
                    }}
                  >
                    <div className="content">
                      <div className="count-outer count-box counted">
                        <span
                          className="count-text"
                          data-speed={speed}
                          data-stop={count}
                        >
                          {count}
                        </span>
                        +
                      </div>
                      <h4 className="counter-title">{title}</h4>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CounterSection;
