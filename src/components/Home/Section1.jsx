import React from "react";

const Section1 = () => {
  return (
    <>
      <div className="undefined opacity-0 flex fixed top-[68px] bg-white w-full border border-[#D7D7D7] transition-all duration-[200ms] linear submenu">
        <div className="max-w-7xl mx-auto lg:px-8 px-6 flex flex-nowrap py-5 lg:py-[25px] gap-10 w-full whitespace-nowrap overflow-auto md:overflow-hidden [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          <a
            className="text-sm 2xl:text-base font-extrabold "
            href="#mobile-services"
          >
            Mobile Services
          </a>
          <a
            className="text-sm 2xl:text-base font-extrabold "
            href="#case-studies"
          >
            Case Studies
          </a>
          <a
            className="text-sm 2xl:text-base font-extrabold "
            href="#achievements"
          >
            Achievements
          </a>
          <a
            className="text-sm 2xl:text-base font-extrabold "
            href="#industries"
          >
            Industries
          </a>
          <a
            className="text-sm 2xl:text-base font-extrabold "
            href="#testimonials"
          >
            Testimonials
          </a>
        </div>
      </div>
      <section
        className="service-module--heroGradient--bed34 hero relative overflow-hidden !bg-cover undefined"
        style={{ backgroundImage: 'url("undefined")' }}
      >
        <div className="min-h-screen flex flex-col md:flex-row items-center max-w-7xl mx-auto px-6 lg:px-8 py-16 mt-8 md:py-0 md:mt-0">
          <div className="w-full md:w-3/6 mb-12 md:mb-0">
            <img
              className="mb-5 w-[100px] xl:w-[130px] 2xl:w-[160px]"
              src="assets/images/download.svg"
              alt="Top Rated Mobile App Development"
            />
            <h1 className="font-extrabold text-black xl:-translate-y-2 undefined leading-none text-[36px] sm:text-[43px] lg:text-6xl xl:text-7xl 2xl:text-8xl lg:tracking-[-4px] tracking-[-2px]">
              <span className="text-theme"> Mobile </span> App Development
              Services
            </h1>
            <p className="text-black mt-5 font-normal text-md md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">
              We build custom mobile apps that solve real problems, generate
              revenue, and captivate millions of users worldwide.
            </p>
          </div>
          <div className="w-full md:w-3/6  flex justify-center md:block">
            <img
              src="assets/images/mobileAppHero.webp"
              className="md:absolute md:top-[60%] 2xl:top-[63%] md:-right-[27%] 2xl:right-[-25%] md:transform md:-translate-y-1/2 md:-translate-x-1/2 w-[80%] sm:w-[70%] md:w-[55%] 2xl:w-[50%]"
              alt="Mobile App Development"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Section1;