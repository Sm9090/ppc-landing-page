import React, { useState } from "react";

const ServicesTabs = () => {
  // Define tabs data with all content
  const tabsData = [
    {
      id: "ios",
      title: "iOS Apps",
      heading: "iOS App Development",
      description: "We develop premium iOS apps with intuitive interfaces and smooth functionality for iPhones and iPads, ensuring your app stands out in the Apple App Store.",
      images: ["/assets/images/iosTech/aRkitTab-4cd76ac43fc4525479547cc984fc7de5.svg", "/assets/images/iosTech/download.svg", "/assets/images/iosTech/download (1).svg", "/assets/images/iosTech/download (2).svg", "/assets/images/iosTech/download (3).svg" ,"/assets/images/iosTech/download (4).svg"]
    },
    {
      id: "android",
      title: "Android Apps",
      heading: "Android App Development",
      description: "Our Android development team creates feature-rich applications that work flawlessly across various Android devices, ensuring wide market reach for your business.",
      images: ["/assets/images/AndroidTechs/download.svg", "/assets/images/AndroidTechs/download (1).svg", "/assets/images/AndroidTechs/download (3).svg", "/assets/images/AndroidTechs/download (2).svg" ,"/assets/images/AndroidTechs/download (5).svg" ,"/assets/images/AndroidTechs/download (6).svg", "/assets/images/AndroidTechs/download (7).svg"]
    },
    {
      id: "hybrid",
      title: "Hybrid Apps",
      heading: "Hybrid App Development",
      description: "Get the best of both worlds with our hybrid app development services. We build apps that work consistently across iOS and Android platforms while maintaining native-like performance.",
      images: ["/assets/images/HybirdTechs/download.svg", "/assets/images/HybirdTechs/download (1).svg", "/assets/images/HybirdTechs/download (3).svg", "/assets/images/HybirdTechs/download (2).svg" ,"/assets/images/HybirdTechs/download (5).svg" ,"/assets/images/HybirdTechs/download (6).svg", "/assets/images/HybirdTechs/download (7).svg"]
    },
    {
      id: "uiux",
      title: "UI/UX",
      heading: "UI/UX Design",
      description: "Our design team creates visually stunning and user-friendly interfaces that enhance user experience, increase engagement, and boost conversion rates for your mobile application.",
      images: ["/assets/images/UI-UXTechs/download.svg", "/assets/images/UI-UXTechs/download (1).svg", "/assets/images/UI-UXTechs/download (3).svg", "/assets/images/UI-UXTechs/download (2).svg" ,"/assets/images/UI-UXTechs/download (5).svg" ]
    },
    {
      id: "enterprise",
      title: "Enterprise App",
      heading: "Enterprise App Development",
      description: "We provide global businesses with scalable enterprise apps built to solve their complex problems meet their specific needs, and enhance their operational productivity.",
      images: ["/assets/images/EnterpriseTech/download.svg", "/assets/images/EnterpriseTech/download (1).svg", "/assets/images/EnterpriseTech/download (3).svg", "/assets/images/EnterpriseTech/download (2).svg"  ,"/assets/images/EnterpriseTech/download (6).svg"]
    },
    {
      id: "augmentation",
      title: "Team Augmentation",
      heading: "Team Augmentation",
      description: "Extend your development capabilities with our skilled mobile app developers who integrate seamlessly with your team to accelerate project delivery and fill skill gaps.",
      images: ["/assets/images/TeamAugmentation/download.svg", "/assets/images/TeamAugmentation/download (1).svg", "/assets/images/TeamAugmentation/download (3).svg", "/assets/images/TeamAugmentation/download (2).svg"  ,"/assets/images/TeamAugmentation/download (4).svg" ,"/assets/images/TeamAugmentation/download (5).svg"]
    },
    {
      id: "migration",
      title: "App Migration",
      heading: "App Migration Services",
      description: "Smoothly transition your existing app to new platforms, technologies, or frameworks while maintaining data integrity and improving performance and user experience.",
      images: ["/assets/images/AppMigration/download.svg", "/assets/images/AppMigration/download (1).svg", "/assets/images/AppMigration/download (3).svg", "/assets/images/AppMigration/download (2).svg"  ,"/assets/images/AppMigration/download (4).svg" ,"/assets/images/AppMigration/download (5).svg","/assets/images/AppMigration/download (6).svg","/assets/images/AppMigration/download (7).svg"]
    }
  ];

  // State for active tab, default to first tab (iOS)
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="serviceTabs-sec" id="serviceTabs">
      <div className="undefined mx-auto max-w-7xl px-6 pt-14 md:pt-24 lg:pt-[10.5rem] lg:px-8">
        <div className="max-w-3xl xl:max-w-4xl">
          <div className="lg:overflow-hidden">
            <h2 className="font-bold sentence-first-letter text-4xl xl:text-5xl 2xl:text-6xl tracking-[-2px] lg:-translate-y-[7px] xl:!leading-[55px] 2xl:!leading-[65px]">
              <span>our custom mobile app development services</span>
            </h2>
          </div>
        </div>
        <div className="flex flex-wrap flex-col md:flex-row mt-12 lg:mt-20 border-t border-[#CCCCCC] undefined">
          {/* Tab buttons section */}
          <div className="z-20 w-full md:w-4/12 overflow-scroll [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] md:overflow-hidden md:border-r border-[#CCCCCC] pt-6 md:pt-12 undefined">
            <div
              className="flex md:flex-col gap-x-10 md:gap-x-0"
              role="tablist"
              aria-orientation="horizontal"
            >
              {tabsData.map((tab, index) => (
                <button
                  key={tab.id}
                  className="focus-visible:outline-none block"
                  role="tab"
                  type="button"
                  aria-selected={activeTab === index}
                  tabIndex={activeTab === index ? 0 : -1}
                  data-headlessui-state={activeTab === index ? "selected" : ""}
                  onClick={() => setActiveTab(index)}
                >
                  <div className={`z-10 whitespace-nowrap md:whitespace-normal outline-none md:w-full md:rounded-full py-5 md:px-7 font-medium text-left ${activeTab === index ? 'home-module--techActive--abf49' : ''}`}>
                    <strong className={`font-normal block text-lg xl:text-xl 2xl:text-2xl outline-none tracking-[0px] truncate ${activeTab === index ? '!font-bold' : ''}`}>
                      {tab.title}
                    </strong>
                  </div>
                </button>
              ))}
            </div>
          </div>
          
          {/* Tab content section */}
          <div className="pt-8 w-full md:w-8/12 md:ps-14 relative">
            <div>
              {tabsData.map((tab, index) => (
                <div
                  key={tab.id}
                  id={`tab-panel-${tab.id}`}
                  role="tabpanel"
                  aria-labelledby={`tab-${tab.id}`}
                  tabIndex={0}
                  data-headlessui-state={activeTab === index ? "selected" : ""}
                  style={activeTab === index ? {} : {
                    position: "fixed",
                    top: 1,
                    left: 1,
                    width: 1,
                    height: 0,
                    padding: 0,
                    margin: "-1px",
                    overflow: "hidden",
                    clip: "rect(0px, 0px, 0px, 0px)",
                    whiteSpace: "nowrap",
                    borderWidth: 0,
                  }}
                >
                  {activeTab === index && (
                    <>
                      <h4 className="text-2xl xl:!text-3xl 2xl:!text-4xl tracking-[0px] mb-4 font-bold">
                        {tab.heading}
                      </h4>
                      <p className="mb-3 lg:mb-7 text-sm lg:!text-md xl:!text-lg 2xl:!text-xl">
                        {tab.description}
                      </p>
                      <div className="flex items-center gap-x-7">
                        <button className="header-module--buttonChange--18e23 bg-black text-white items-center px-6 md:px-11 h-[40px] md:h-12 border-transparent rounded-full font-extrabold text-sm">
                          <span className="pb-[3px] md:pb-1.5">Let's Discuss</span>
                          <span className="pb-[3px] md:pb-1.5">Let's Discuss</span>
                        </button>
                        <a
                          className="undefined text-black text-md lg:text-xl inline-flex items-center gap-4 group transition-all duration-300 ease-in-out hover:font-semibold"
                          href={`/${tab.id}-development/`}
                        >
                          See more
                          <div className="transform group-hover:translate-x-2 transition-all duration-300 ease-in-out">
                            <img
                              src="/assets/images/arrow.svg"
                              className="block group-hover:hidden w-5 lg:w-full"
                              alt="link arrow"
                            />
                            <img
                              src="/assets/images/arrow.svg"
                              className="hidden group-hover:block w-5 lg:w-full"
                              alt="link arrow"
                            />
                          </div>
                        </a>
                      </div>
                      <div className="flex lg:gap-8 gap-4 items-center mt-8 lg:mt-10 flex-wrap">
                        {tab.images.map((image, imgIndex) => (
                          <img
                            key={imgIndex}
                            src={image}
                            className="w-9 lg:w-auto"
                            alt={`Technology ${imgIndex + 1}`}
                          />
                        ))}
                      </div>
                    </>
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

export default ServicesTabs;