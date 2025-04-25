import React, { useEffect, useRef } from 'react';
import Splide from '@splidejs/splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
import '@splidejs/splide/dist/css/splide.min.css';

const Achievement = () => {
  const splideRef = useRef(null);

  useEffect(() => {
    if (splideRef.current) {
      const splide = new Splide(splideRef.current, {
        type: 'loop',
        perPage: 4,
        perMove: 1,
        gap: '1.5rem',
        pagination: false,
        arrows: false,
        drag: true,
        easing: 'cubic-bezier(0.25, 1, 0.5, 1)',
        autoScroll: {
          speed: 0.5, // Adjust speed as needed (lower is slower)
          pauseOnHover: true,
          pauseOnFocus: true,
          rewind: false,
          autoStart: true
        },
        breakpoints: {
          1024: {
            perPage: 3,
          },
          768: {
            perPage: 2,
          },
          640: {
            perPage: 1,
          }
        }
      });

      // Initialize Splide with AutoScroll extension
      splide.mount({ AutoScroll });

      return () => {
        splide.destroy();
      };
    }
  }, []);

  const achievementData = [
    {
      id: 1,
      logo: '/assets/images/Acheivment/DesignRush.svg',
      link: '#',
      rating: '4.9',
      description: 'Recognized among top mobile app development companies 2025'
    },
    {
      id: 2,
      logo: ' /assets/images/Acheivment/Clutch.svg',
      link: '#',
      rating: '4.9',
      description: 'Acclaimed as a top-rated software development company 2025'
    },
    {
      id: 3,
      logo: '/assets/images/Acheivment/GOODFIRM.svg',
      link: '#',
      rating: '4.8',
      description: 'Acknowledged among the top software consulting experts 2025'
    },
    {
      id: 4,
      logo: '/assets/images/Acheivment/RightFirms.svg',
      link: '#',
      rating: '5.0',
      description: 'Ranked among leading app development service providers 2025'
    },
  ];

  return (
    <section
      className="bg-dark-theme overflow-x-hidden sm:overflow-x-auto lg:mt-40 md:mt-24 mt-14"
      id="achievements"
    >
      <div className="lg:py-40 md:py-24 py-14">
        <div className="px-6 lg:px-8 max-w-7xl mx-auto" id="design-innovation">
          <div className="max-w-3xl lg:mb-24 mb-8">
            <div className="lg:overflow-hidden">
              <h2 className="font-bold text-white lg:pb-10 pb-6 text-4xl xl:text-5xl 2xl:text-6xl tracking-tighter">
                <span> </span>
                <span>awards and</span>
                <span className="text-blue-500">
                  <span> recognitions</span>
                </span>
              </h2>
            </div>
            <p className="text-white mb-12 lg:mb-24 text-base md:text-lg lg:text-lg xl:text-xl 2xl:text-2xl">
              Proud to have been acknowledged as a leading mobile app
              development company on top industry platforms, showcasing our
              commitment to excellence and innovation.
            </p>
          </div>
        </div>

        <div 
          className="splide" 
          ref={splideRef}
          aria-labelledby="carousel-heading"
        >
          <div className="splide__track">
            <ul className="splide__list">
              {achievementData.map((item) => (
                <li key={item.id} className="splide__slide ">
                  <a
                    href={item.link}
                    className="cursor-pointer"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <article className="bg-gradient-to-r from-[#050505] to-[#201F21] mx-2 md:mx-4 px-6 py-8 lg:py-[35px] lg:mx-0 lg:px-6 rounded-3xl lg:h-64 h-52 flex flex-col justify-between">
                      <div className="flex justify-between">
                        <img
                          src={item.logo}
                          alt="Company Logo"
                          className="h-8"
                        />
                        <div className="flex items-center">
                          <img
                            className="h-[14px] w-[14px] sm:h-[15px] sm:w-[15px] lg:h-[16px] lg:w-[16px] 2xl:h-[19px] 2xl:w-[19px] mb-1"
                            src="/assets/images/Acheivment/starIcon.svg"
                            alt="Star"
                          />
                          <p className="font-bold ml-2 text-white text-sm lg:!text-md xl:!text-lg 2xl:!text-xl text-xs xl:!text-sm 2xl:!text-base">
                            {item.rating}
                          </p>
                        </div>
                      </div>
                      <div>
                        <p className="text-neutral-500 text-sm lg:!text-md xl:!text-lg 2xl:!text-xl">
                          {item.description}
                        </p>
                      </div>
                    </article>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievement;
