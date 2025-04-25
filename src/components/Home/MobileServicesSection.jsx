import React, { useState } from "react";

const accordionData = [
  {
    title: "Native Apps",
    image: "/assets/images/faqAcc1.webp",
    description:
      "Native iOS and Android apps are at the core of our mobile app offerings. We develop high-performance native apps that provide an intuitive and seamless user experience.",
    pointsHeading: "Our native mobile apps are best for:",
    points: [
      "Complex mobile applications",
      "High performance & smooth UI",
      "Apps with heavy data processing",
      "Security-sensitive applications",
      "Apps requiring device features",
    ],
  },
  {
    title: "Cross-Platform Apps",
    image: "/assets/images/faqAcc2.webp",

    description:
      "Businesses need apps that are accessible to wider audiences. Our cross-platform experts specialize in building advanced yet lightweight apps that are quick to market and use sharable, reusable code.",
    pointsHeading: "Our cross-platform apps are best suited for:",
    points: [
      "Straightforward functionalities",
      "MVP prototypes",
      "Rapid development & deployment",
      "Reduced development costs",
      "Simultaneous platform launch",
      "Shared codebase efficiency",
    ],
  },
  {
    title: "Hybrid Apps",
    image: "/assets/images/faqAcc3.webp",

    description:
      "Hybrid app development is a smart choice for businesses looking to maximize their reach and minimize development costs. Thanks to a single codebase and access to native features, we develop scalable, secure, and maintainable apps.",
    pointsHeading: "Our Hybrid apps are ideal for:",
    points: [
      "Cost-effective development",
      "Faster time to market",
      "Single codebase maintenance",
      "Easy updates and changes",
      "Broad audience reach",
    ],
  },
  {
    title: "Wearables Apps",
    image: "/assets/images/MobileAPPWearable.webp",
    description:
      "With the rise of smartwatches and AR/VR headsets, wearable apps are transforming how users interact with technology. We offer wearable app development services across WatchOS, WearOS, and visionOS.",
    pointsHeading: "Our wearable apps come with:",
    points: [
      "Health and fitness tracking",
      "Real-time notifications",
      "Seamless device integration",
      "Personalized user interactions",
      "Hands-free convenience",
    ],
  },
];

const MobileServicesSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggle = (index) => {
    if (index === activeIndex) return;
    setActiveIndex(index);
  };

  return (
    <section className="service-provided" id="mobile-services">
      <div className="px-6 lg:px-8 pt-14 md:pt-24 lg:pt-[10.5rem] max-w-7xl mx-auto">
        <div className="max-w-3xl xl:max-w-4xl">
          <div className="lg:overflow-hidden">
            <h2 className="font-bold pb-8 md:pb-12 sentence-first-letter text-4xl xl:text-5xl 2xl:text-6xl tracking-[-2px] lg:-translate-y-[7px] xl:!leading-[55px] 2xl:!leading-[65px]">
              <span>types of mobile apps we build</span>
            </h2>
          </div>
        </div>
        <div className="lg:grid lg:grid-cols-12 lg:gap-8 pt-10">
          <div className="lg:col-span-5">
            <img
              className="w-full fade-in"
              src={accordionData[activeIndex].image}
              alt={accordionData[activeIndex].title}
            />
          </div>
          <div className="lg:col-span-7 lg:pt-0 pt-10">
            <div className="space-y-6 lg:space-y-10">
              {accordionData.map((item, index) => (
                <div
                  key={index}
                  className="pt-2"
                  data-headlessui-state={activeIndex === index ? "open" : ""}
                >
                  <button
                    className="flex w-full justify-between text-left"
                    type="button"
                    aria-expanded={activeIndex === index}
                    onClick={() => toggle(index)}
                  >
                    <h3
                      className={`font-bold text-2xl xl:text-3xl 2xl:text-4xl tracking-[0px] ${
                        activeIndex === index ? "text-theme" : "text-black"
                      }`}
                    >
                      {item.title}
                    </h3>
                    <span className="ml-6 flex h-7 items-center">
                      <span
                        className={`transform transition-transform duration-[200ms] ease-in-out text-5xl font-normal mt-[5px] ${
                          activeIndex === index ? "rotate-180 text-theme" : ""
                        }`}
                      >
                        {activeIndex === index ? "-" : "+"}
                      </span>
                    </span>
                  </button>
                  {activeIndex === index && (
                    <div
                      className={`transition-all duration-800 ease-in-out overflow-hidden ${
                        activeIndex === index
                          ? "max-h-max opacity-100"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      <dd className="mt-2 pr-12 text-sm lg:!text-md xl:!text-lg 2xl:!text-xl">
                        <p className="text-black mt-3 mb-5 ">
                          {item.description}
                        </p>
                        <p className="text-black font-[900] pb-2 text-xs xl:!text-sm 2xl:!text-base">
                          {item.pointsHeading}
                        </p>
                        {item.points.map((point, i) => (
                          <div key={i} className="flex gap-4 items-center my-5">
                            <img
                              src="/assets/images/check.svg"
                              className="lg:w-[30px] w-[20px]"
                              alt="Bullet"
                            />
                            <p className="font-medium ">{point}</p>
                          </div>
                        ))}
                      </dd>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MobileServicesSection;
