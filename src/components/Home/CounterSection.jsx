import React, { useEffect, useRef } from 'react';

const Counter = ({ end }) => {
  const ref = useRef(null);

  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const increment = end / (duration / 16);

    const updateCounter = () => {
      start += increment;
      if (start < end) {
        ref.current.innerText = Math.floor(start);
        requestAnimationFrame(updateCounter);
      } else {
        ref.current.innerText = end;
      }
    };

    requestAnimationFrame(updateCounter);
  }, [end]);

  return <span ref={ref}>0</span>;
};

const CounterSection = () => {
  return (
    <section id="project-stats">
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-14 md:pt-24 lg:pt-[10.5rem] lg:pb-24 lg:px-8 undefined">
        <div className="max-w-3xl xl:max-w-4xl">
          <div className="lg:overflow-hidden">
            <h2 className="font-bold pb-1 md:pb-0 sentence-first-letter sentence-first-letter text-4xl xl:text-5xl 2xl:text-6xl tracking-[-2px] lg:-translate-y-[7px] xl:!leading-[55px] 2xl:!leading-[65px]">
              <span>
                15+ years of being a leading mobile app development company
              </span>
            </h2>
          </div>
        </div>
      </div>
      <div className="undefined mx-auto max-w-7xl px-6 lg:px-8" id="project-stats">
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-x-8 gap-y-8">
          <div className="flex flex-col gap-y-2 w-max">
            <a className="cursor-pointer group inline-flex flex-col gap-y-2" href="#">
              <div className="inline-flex">
                <span className="group-hover:text-[#2ED06E] font-bold text-4xl xl:text-5xl 2xl:text-6xl tracking-[-2px] xl:!leading-[55px] 2xl:!leading-[65px]">
                  <Counter end={1300} />
                </span>
                <div className="group-hover:text-[#2ED06E] font-bold text-4xl xl:text-5xl 2xl:text-6xl tracking-[-2px] xl:!leading-[55px] 2xl:!leading-[65px]">
                  +
                </div>
              </div>
              <p className="group-hover:underline underline-offset-[9px] decoration-1 inline text-md md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">
                Completed Projects
              </p>
            </a>
          </div>
          <div className="flex flex-col gap-y-2 w-max">
            <a className="cursor-pointer group inline-flex flex-col gap-y-2" href="#">
              <div className="inline-flex">
                <span className="group-hover:text-[#2ED06E] font-bold text-4xl xl:text-5xl 2xl:text-6xl tracking-[-2px] xl:!leading-[55px] 2xl:!leading-[65px]">
                  <Counter end={350} />
                </span>
                <div className="group-hover:text-[#2ED06E] font-bold text-4xl xl:text-5xl 2xl:text-6xl tracking-[-2px] xl:!leading-[55px] 2xl:!leading-[65px]">
                  +
                </div>
              </div>
              <p className="group-hover:underline underline-offset-[9px] decoration-1 inline text-md md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">
                Designers &amp; Developers
              </p>
            </a>
          </div>
          <div className="flex flex-col gap-y-2 w-max">
            <a className="cursor-pointer group inline-flex flex-col gap-y-2" href="#">
              <div className="inline-flex">
                <span className="group-hover:text-[#2ED06E] font-bold text-4xl xl:text-5xl 2xl:text-6xl tracking-[-2px] xl:!leading-[55px] 2xl:!leading-[65px]">
                  <Counter end={600} />
                </span>
                <div className="group-hover:text-[#2ED06E] font-bold text-4xl xl:text-5xl 2xl:text-6xl tracking-[-2px] xl:!leading-[55px] 2xl:!leading-[65px]">
                  +
                </div>
              </div>
              <p className="group-hover:underline underline-offset-[9px] decoration-1 inline text-md md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">
                Satisfied Clients Globally
              </p>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CounterSection;
