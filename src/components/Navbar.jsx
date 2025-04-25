import React from "react";


function Navbar() {

  return (
<header className=" header absolute inset-x-0">
  <nav
    className="flex items-center justify-between p-x-6 py-4 px-6 lg:px-8 max-w-7xl mx-auto"
    aria-label="Global"
  >
    <div className="flex">
      <a aria-current="page" className="-m-1.5 p-1.5" href="../index.html">
        <img
          src="../assets/images/logo.png"
          width={85}
          className="2xl:w-44 header-logo logo-light hidden"
          alt="logo"
        />
        <img
          src="../assets/images/logo-dark.png"
          width={85}
          className="2xl:w-44 header-logo logo-dark "
          alt="logo"
        />
      </a>
    </div>
    <div className="hidden lg:flex lg:gap-x-12 cursor-pointer">
      <button className="megaMenu group">
        <a
          className="focus-visible:outline-none text-sm 2xl:text-base font-extrabold leading-6 menu_links relative z-50 text-black"
          href="#"
        >
          Services
        </a>
        <div className="group-hover:block hidden hover:block absolute lg:left-0 lg:right-0 xl:left-[-15%] xl:right-[-15%] 2xl:left-[-33%] 2xl:right-[-33%] top-0 w-full overflow-hidden bg-white shadow-lg ring-1 ring-gray-900/5 sm:w-auto pt-20 cursor-default">
          <div className="mx-auto flex flex-wrap max-w-7xl  gap-2 px-6 pt-6 sm:gap-x-6 sm:gap-y-0 sm:pt-9 sm:pb-20 lg:gap-x-4 lg:px-8 xl:gap-x-8">
            <div className="Services flex place-items-start border-r justify-between border-solid border-[#DFDFDF] pr-7 pt-1 w-[19%]">
              <p className="-mt-[14px] text-[24px] font-bold text-black tracking-[0px]">
                {" "}
                Services
              </p>
              <a className=" pl-3 font-semibold text-black text-md lg:text-xl inline-flex items-center gap-4 group transition-all duration-300 ease-in-out hover:font-semibold header-menu-item">
                <div className="transform group-hover:translate-x-2 transition-all duration-300 ease-in-out">
                  <img
                    src="../assets/images/arrow-2.svg"
                    className="block group-hover:hidden w-5 lg:w-full"
                    alt="link arrow"
                  />
                  <img
                    src="../assets/images/arrow.svg"
                    className="hidden group-hover:block w-5 lg:w-full"
                    alt="link arrow"
                  />{" "}
                </div>
              </a>
            </div>
            <div className="EnterpriseAI mb-12 w-24--7 ml-1.5 mt-[-10px]">
              <div className="group relative -mx-3 flex gap-6 rounded-lg p-3 text-sm leading-6 sm:flex-col sm:p-0.5 text-left">
                <div>
                  <a
                    className="font-extrabold text-sm text-black pb-[25px] menu_links leading-[44px]"
                    href="index.html"
                  >
                    Enterprise AI &amp; Automation
                  </a>
                  <a className="mt-[18px] font-medium text-[#0B0C0D] menu_links" />
                </div>
              </div>
              <div className="group relative -mx-3 flex gap-6 rounded-lg p-3 text-sm leading-6 sm:flex-col sm:p-0.5 text-left">
                <div>
                  <a className="font-extrabold text-sm text-black pb-[25px] menu_links ">
                    <img
                      src="../assets/images/dot.svg"
                      alt="bulletpoint"
                      width="6px"
                      className="inline-block mr-3"
                    />
                  </a>
                  <a
                    className="mt-[18px] font-medium text-[#0B0C0D] menu_links"
                    href="index.html"
                  >
                    AI-Powered Business Process Automation
                  </a>
                </div>
              </div>
              <div className="group relative -mx-3 flex gap-6 rounded-lg p-3 text-sm leading-6 sm:flex-col sm:p-0.5 text-left">
                <div>
                  <a className="font-extrabold text-sm text-black pb-[25px] menu_links ">
                    <img
                      src="../assets/images/dot.svg"
                      alt="bulletpoint"
                      width="6px"
                      className="inline-block mr-3"
                    />
                  </a>
                  <a
                    className="mt-[18px] font-medium text-[#0B0C0D] menu_links"
                    href="../ai-chatbots-ai-voice-agents/index.html"
                  >
                    AI Chatbots &amp; AI Voice Agents
                  </a>
                </div>
              </div>
              <div className="group relative -mx-3 flex gap-6 rounded-lg p-3 text-sm leading-6 sm:flex-col sm:p-0.5 text-left">
                <div>
                  <a className="font-extrabold text-sm text-black pb-[25px] menu_links ">
                    <img
                      src="../assets/images/dot.svg"
                      alt="bulletpoint"
                      width="6px"
                      className="inline-block mr-3"
                    />
                  </a>
                  <a
                    className="mt-[18px] font-medium text-[#0B0C0D] menu_links"
                    href="../ai-powered-cybersecurity-fraud-detection/index.html"
                  >
                    AI-Powered Cybersecurity &amp; Fraud Detection
                  </a>
                </div>
              </div>
              <div className="group relative -mx-3 flex gap-6 rounded-lg p-3 text-sm leading-6 sm:flex-col sm:p-0.5 text-left">
                <div>
                  <a className="font-extrabold text-sm text-black pb-[25px] menu_links ">
                    <img
                      src="../assets/images/dot.svg"
                      alt="bulletpoint"
                      width="6px"
                      className="inline-block mr-3"
                    />
                  </a>
                  <a
                    className="mt-[18px] font-medium text-[#0B0C0D] menu_links"
                    href="../enterprise-architecture-solutions/index.html"
                  >
                    Enterprise Architecture Solutions
                  </a>
                </div>
              </div>
            </div>
            <div className="DataIntelligence mb-12 w-24--7 ml-1.5 mt-[-10px]">
              <div className="group relative -mx-3 flex gap-6 rounded-lg p-3 text-sm leading-6 sm:flex-col sm:p-0.5 text-left">
                <div>
                  <a
                    className="font-extrabold text-sm text-black pb-[25px] menu_links leading-[44px]"
                    href="#"
                  >
                    Data Intelligence &amp; Analytics
                  </a>
                  <a className="mt-[18px] font-medium text-[#0B0C0D] menu_links" />
                </div>
              </div>
              <div className="group relative -mx-3 flex gap-6 rounded-lg p-3 text-sm leading-6 sm:flex-col sm:p-0.5 text-left">
                <div>
                  <a className="font-extrabold text-sm text-black pb-[25px] menu_links ">
                    <img
                      src="../assets/images/dot.svg"
                      alt="bulletpoint"
                      width="6px"
                      className="inline-block mr-3"
                    />
                  </a>
                  <a
                    className="mt-[18px] font-medium text-[#0B0C0D] menu_links"
                    href="../predictive-analytics-business-intelligence/index.html"
                  >
                    Predictive Analytics &amp; Business Intelligence
                  </a>
                </div>
              </div>
              <div className="group relative -mx-3 flex gap-6 rounded-lg p-3 text-sm leading-6 sm:flex-col sm:p-0.5 text-left">
                <div>
                  <a className="font-extrabold text-sm text-black pb-[25px] menu_links ">
                    <img
                      src="../assets/images/dot.svg"
                      alt="bulletpoint"
                      width="6px"
                      className="inline-block mr-3"
                    />
                  </a>
                  <a
                    className="mt-[18px] font-medium text-[#0B0C0D] menu_links"
                    href="../deep-learning-implementation/index.html"
                  >
                    Deep Learning Implementation
                  </a>
                </div>
              </div>
              <div className="group relative -mx-3 flex gap-6 rounded-lg p-3 text-sm leading-6 sm:flex-col sm:p-0.5 text-left">
                <div>
                  <a className="font-extrabold text-sm text-black pb-[25px] menu_links ">
                    <img
                      src="../assets/images/dot.svg"
                      alt="bulletpoint"
                      width="6px"
                      className="inline-block mr-3"
                    />
                  </a>
                  <a
                    className="mt-[18px] font-medium text-[#0B0C0D] menu_links"
                    href="../recommendation-systems/index.html"
                  >
                    Recommendation Systems
                  </a>
                </div>
              </div>
            </div>
            <div className="WebMobileSaaS mb-12 w-24--7 ml-1.5 mt-[-10px]">
              <div className="group relative -mx-3 flex gap-6 rounded-lg p-3 text-sm leading-6 sm:flex-col sm:p-0.5 text-left">
                <div>
                  <a
                    className="font-extrabold text-sm text-black pb-[25px] menu_links leading-[44px]"
                    href="#"
                  >
                    Web, Mobile &amp; SaaS Development
                  </a>
                  <a className="mt-[18px] font-medium text-[#0B0C0D] menu_links" />
                </div>
              </div>
              <div className="group relative -mx-3 flex gap-6 rounded-lg p-3 text-sm leading-6 sm:flex-col sm:p-0.5 text-left">
                <div>
                  <a className="font-extrabold text-sm text-black pb-[25px] menu_links ">
                    <img
                      src="../assets/images/dot.svg"
                      alt="bulletpoint"
                      width="6px"
                      className="inline-block mr-3"
                    />
                  </a>
                  <a
                    className="mt-[18px] font-medium text-[#0B0C0D] menu_links"
                    href="../ai-integrated-web-app-development/index.html"
                  >
                    AI-Integrated Web &amp; App Development
                  </a>
                </div>
              </div>
              <div className="group relative -mx-3 flex gap-6 rounded-lg p-3 text-sm leading-6 sm:flex-col sm:p-0.5 text-left">
                <div>
                  <a className="font-extrabold text-sm text-black pb-[25px] menu_links ">
                    <img
                      src="../assets/images/dot.svg"
                      alt="bulletpoint"
                      width="6px"
                      className="inline-block mr-3"
                    />
                  </a>
                  <a
                    className="mt-[18px] font-medium text-[#0B0C0D] menu_links"
                    href="../enterprise-ai-powered-applications/index.html"
                  >
                    Enterprise AI-Powered Applications
                  </a>
                </div>
              </div>
              <div className="group relative -mx-3 flex gap-6 rounded-lg p-3 text-sm leading-6 sm:flex-col sm:p-0.5 text-left">
                <div>
                  <a className="font-extrabold text-sm text-black pb-[25px] menu_links ">
                    <img
                      src="../assets/images/dot.svg"
                      alt="bulletpoint"
                      width="6px"
                      className="inline-block mr-3"
                    />
                  </a>
                  <a
                    className="mt-[18px] font-medium text-[#0B0C0D] menu_links"
                    href="../ai-powered-mvp-saas-development/index.html"
                  >
                    AI-Powered MVP &amp; SaaS Development
                  </a>
                </div>
              </div>
            </div>
            <div className="technologies-icons border-r w-[19%] border-solid border-[#DFDFDF] pr-4 mb-1 flex flex-col justify-end">
              <p className="text-[14px] pt-[4.5px] font-extrabold leading-5 text-left">
                {" "}
                Technologies
              </p>
              <div className="columns-4 pt-3">
                <img
                  className="p-0.5 contrast-[.25] brightness-100 text-[5px] py-2"
                  src="../assets/images/technologies/tech-1.svg"
                  alt="graphQl"
                />
                <img
                  className="p-0.5 contrast-[.25] brightness-100 text-[5px] py-2"
                  src="../assets/images/technologies/tech-2.svg"
                  alt="reactHook"
                />
                <img
                  className="p-0.5 contrast-[.25] brightness-100 text-[5px] py-2"
                  src="../assets/images/technologies/tech-3.svg"
                  alt="antDesign"
                />
                <img
                  className="p-0.5 contrast-[.25] brightness-100 text-[5px] py-2"
                  src="../assets/images/technologies/tech-4.svg"
                  alt="nextJs"
                />
                <img
                  className="p-0.5 contrast-[.25] brightness-100 text-[5px] py-2"
                  src="../assets/images/technologies/tech-5.svg"
                  alt="java"
                />
                <img
                  className="p-0.5 contrast-[.25] brightness-100 text-[5px] py-2"
                  src="../assets/images/technologies/tech-6.svg"
                  alt="restApi"
                />
                <img
                  className="p-0.5 contrast-[.25] brightness-100 text-[5px] py-2"
                  src="../assets/images/technologies/tech-7.svg"
                  alt="typescript"
                />
                <img
                  className="p-0.5 contrast-[.25] brightness-100 text-[5px] py-2"
                  src="../assets/images/technologies/tech-8.svg"
                  alt="node"
                />
                <img
                  className="p-0.5 contrast-[.25] brightness-100 text-[5px] py-2"
                  src="../assets/images/technologies/tech-9.svg"
                  alt="laravel"
                />
                <img
                  className="p-0.5 contrast-[.25] brightness-100 text-[5px] py-2"
                  src="../assets/images/technologies/tech-10.svg"
                  alt="bulletpointnet"
                />
                <img
                  className="p-0.5 contrast-[.25] brightness-100 text-[5px] py-2"
                  src="../assets/images/technologies/tech-11.svg"
                  alt="scala"
                />
                <img
                  className="p-0.5 contrast-[.25] brightness-100 text-[5px] py-2"
                  src="../assets/images/technologies/tech-12.svg"
                  alt="apolloClient"
                />
              </div>
            </div>
            <div className="ComputerVision mb-12 w-24--7 ml-1.5 mt-[-10px]">
              <div className="group relative -mx-3 flex gap-6 rounded-lg p-3 text-sm leading-6 sm:flex-col sm:p-0.5 text-left">
                <div>
                  <a
                    className="font-extrabold text-sm text-black pb-[25px] menu_links leading-[44px]"
                    href="../computer-vision-applications/index.html"
                  >
                    Computer Vision &amp; Image Processing
                  </a>
                  <a className="mt-[18px] font-medium text-[#0B0C0D] menu_links" />
                </div>
              </div>
              <div className="group relative -mx-3 flex gap-6 rounded-lg p-3 text-sm leading-6 sm:flex-col sm:p-0.5 text-left">
                <div>
                  <a className="font-extrabold text-sm text-black pb-[25px] menu_links ">
                    <img
                      src="../assets/images/dot.svg"
                      alt="bulletpoint"
                      width="6px"
                      className="inline-block mr-3"
                    />
                  </a>
                  <a
                    className="mt-[18px] font-medium text-[#0B0C0D] menu_links"
                    href="../computer-vision-applications/index.html"
                  >
                    Computer Vision Applications
                  </a>
                </div>
              </div>
              <div className="group relative -mx-3 flex gap-6 rounded-lg p-3 text-sm leading-6 sm:flex-col sm:p-0.5 text-left">
                <div>
                  <a className="font-extrabold text-sm text-black pb-[25px] menu_links ">
                    <img
                      src="../assets/images/dot.svg"
                      alt="bulletpoint"
                      width="6px"
                      className="inline-block mr-3"
                    />
                  </a>
                  <a
                    className="mt-[18px] font-medium text-[#0B0C0D] menu_links"
                    href="../facial-recognition-%26-object-tracking/index.html"
                  >
                    Facial Recognition &amp; Object Tracking
                  </a>
                </div>
              </div>
              <div className="group relative -mx-3 flex gap-6 rounded-lg p-3 text-sm leading-6 sm:flex-col sm:p-0.5 text-left">
                <div>
                  <a className="font-extrabold text-sm text-black pb-[25px] menu_links ">
                    <img
                      src="../assets/images/dot.svg"
                      alt="bulletpoint"
                      width="6px"
                      className="inline-block mr-3"
                    />
                  </a>
                  <a
                    className="mt-[18px] font-medium text-[#0B0C0D] menu_links"
                    href="../ai-powered-image-%26-video-processing/index.html"
                  >
                    AI-Powered Image &amp; Video Processing
                  </a>
                </div>
              </div>
              <div className="group relative -mx-3 flex gap-6 rounded-lg p-3 text-sm leading-6 sm:flex-col sm:p-0.5 text-left">
                <div>
                  <a className="font-extrabold text-sm text-black pb-[25px] menu_links ">
                    <img
                      src="../assets/images/dot.svg"
                      alt="bulletpoint"
                      width="6px"
                      className="inline-block mr-3"
                    />
                  </a>
                  <a
                    className="mt-[18px] font-medium text-[#0B0C0D] menu_links"
                    href="../automated-quality-%26-inspection/index.html"
                  >
                    Automated Quality Control &amp; Inspection
                  </a>
                </div>
              </div>
            </div>
            <div className="IoTSmartAutomation mb-12 w-24--7 ml-1.5 mt-[-10px]">
              <div className="group relative -mx-3 flex gap-6 rounded-lg p-3 text-sm leading-6 sm:flex-col sm:p-0.5 text-left">
                <div>
                  <a
                    className="font-extrabold text-sm text-black pb-[25px] menu_links leading-[44px]"
                    href="#"
                  >
                    IoT &amp; Smart Automation
                  </a>
                  <a className="mt-[18px] font-medium text-[#0B0C0D] menu_links" />
                </div>
              </div>
              <div className="group relative -mx-3 flex gap-6 rounded-lg p-3 text-sm leading-6 sm:flex-col sm:p-0.5 text-left">
                <div>
                  <a className="font-extrabold text-sm text-black pb-[25px] menu_links ">
                    <img
                      src="../assets/images/dot.svg"
                      alt="bulletpoint"
                      width="6px"
                      className="inline-block mr-3"
                    />
                  </a>
                  <a
                    className="mt-[18px] font-medium text-[#0B0C0D] menu_links"
                    href="#"
                  >
                    AI-Driven IoT Solutions
                  </a>
                </div>
              </div>
              <div className="group relative -mx-3 flex gap-6 rounded-lg p-3 text-sm leading-6 sm:flex-col sm:p-0.5 text-left">
                <div>
                  <a className="font-extrabold text-sm text-black pb-[25px] menu_links ">
                    <img
                      src="../assets/images/dot.svg"
                      alt="bulletpoint"
                      width="6px"
                      className="inline-block mr-3"
                    />
                  </a>
                  <a
                    className="mt-[18px] font-medium text-[#0B0C0D] menu_links"
                    href="../smart-sensors-data-collection/index.html"
                  >
                    Smart Sensors &amp; Data Collection
                  </a>
                </div>
              </div>
              <div className="group relative -mx-3 flex gap-6 rounded-lg p-3 text-sm leading-6 sm:flex-col sm:p-0.5 text-left">
                <div>
                  <a className="font-extrabold text-sm text-black pb-[25px] menu_links ">
                    <img
                      src="../assets/images/dot.svg"
                      alt="bulletpoint"
                      width="6px"
                      className="inline-block mr-3"
                    />
                  </a>
                  <a
                    className="mt-[18px] font-medium text-[#0B0C0D] menu_links"
                    href="../industrial-home-automation/index.html"
                  >
                    Industrial &amp; Home Automation
                  </a>
                </div>
              </div>
              <div className="group relative -mx-3 flex gap-6 rounded-lg p-3 text-sm leading-6 sm:flex-col sm:p-0.5 text-left">
                <div>
                  <a className="font-extrabold text-sm text-black pb-[25px] menu_links ">
                    <img
                      src="../assets/images/dot.svg"
                      alt="bulletpoint"
                      width="6px"
                      className="inline-block mr-3"
                    />
                  </a>
                  <a
                    className="mt-[18px] font-medium text-[#0B0C0D] menu_links"
                    href="../ai-enabled-real-time-monitoring/index.html"
                  >
                    AI-Enabled Real-Time Monitoring
                  </a>
                </div>
              </div>
            </div>
            <div className="NLP mb-12 w-24--7 ml-1.5 mt-[-10px]">
              <div className="group relative -mx-3 flex gap-6 rounded-lg p-3 text-sm leading-6 sm:flex-col sm:p-0.5 text-left">
                <div>
                  <a
                    className="font-extrabold text-sm text-black pb-[25px] menu_links leading-[44px]"
                    href="#"
                  >
                    NLP &amp; Language Processing
                  </a>
                  <a className="mt-[18px] font-medium text-[#0B0C0D] menu_links" />
                </div>
              </div>
              <div className="group relative -mx-3 flex gap-6 rounded-lg p-3 text-sm leading-6 sm:flex-col sm:p-0.5 text-left">
                <div>
                  <a className="font-extrabold text-sm text-black pb-[25px] menu_links ">
                    <img
                      src="../assets/images/dot.svg"
                      alt="bulletpoint"
                      width="6px"
                      className="inline-block mr-3"
                    />
                  </a>
                  <a
                    className="mt-[18px] font-medium text-[#0B0C0D] menu_links"
                    href="../natural-language-processing-nlp-solutions/index.html"
                  >
                    Natural Language Processing (NLP) Solutions
                  </a>
                </div>
              </div>
              <div className="group relative -mx-3 flex gap-6 rounded-lg p-3 text-sm leading-6 sm:flex-col sm:p-0.5 text-left">
                <div>
                  <a className="font-extrabold text-sm text-black pb-[25px] menu_links ">
                    <img
                      src="../assets/images/dot.svg"
                      alt="bulletpoint"
                      width="6px"
                      className="inline-block mr-3"
                    />
                  </a>
                  <a
                    className="mt-[18px] font-medium text-[#0B0C0D] menu_links"
                    href="../sentiment-analysis-text-processing/index.html"
                  >
                    Sentiment Analysis &amp; Text Processing
                  </a>
                </div>
              </div>
              <div className="group relative -mx-3 flex gap-6 rounded-lg p-3 text-sm leading-6 sm:flex-col sm:p-0.5 text-left">
                <div>
                  <a className="font-extrabold text-sm text-black pb-[25px] menu_links ">
                    <img
                      src="../assets/images/dot.svg"
                      alt="bulletpoint"
                      width="6px"
                      className="inline-block mr-3"
                    />
                  </a>
                  <a
                    className="mt-[18px] font-medium text-[#0B0C0D] menu_links"
                    href="#"
                  >
                    AI-Powered Content Generation
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </button>
      <button className="megaMenu group">
        <span className="menuLink focus-visible:outline-none text-sm 2xl:text-base font-extrabold leading-6 menu_links relative z-50 text-white">
          Solutions
        </span>
        <div className="group-hover:block hidden hover:block absolute lg:left-0 lg:right-0 xl:left-[-15%] xl:right-[-15%] 2xl:left-[-33%] 2xl:right-[-33%] top-0 w-full overflow-hidden bg-white shadow-lg ring-1 ring-gray-900/5 sm:w-auto pt-20 cursor-default">
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-2 px-6 pt-6 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-0 sm:pt-9 sm:pb-20 lg:grid-cols-5 lg:gap-x-4 lg:px-8 xl:gap-x-8">
            <div className="Services flex place-items-start border-r justify-between border-solid border-gray-300 pr-7 pt-1">
              <p className="-mt-[14px] text-[24px] font-bold text-black tracking-[0px]">
                {" "}
                Solutions
              </p>
              <a className=" font-semibold text-black text-md lg:text-xl inline-flex items-center gap-4 group transition-all duration-300 ease-in-out hover:font-semibold header-menu-item">
                <div className="transform group-hover:translate-x-2 transition-all duration-300 ease-in-out">
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjUiIGhlaWdodD0iMTMiIHZpZXdCb3g9IjAgMCAyNSAxMyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTIxLjMyNzQgNy44MDIyMkgyMC43NzY0QzE0LjQ3ODggNy44MDIyMiA4LjE4MTEzIDcuODAyMjIgMS44ODM0OSA3LjgwMjIyQzEuNzA4MjIgNy44MDc1MSAxLjUzMjgxIDcuNzk5NDkgMS4zNTg2OSA3Ljc3ODJDMS4xNDE5MSA3Ljc0MTc3IDAuOTQ0NzQzIDcuNjI2ODQgMC44MDI0NTMgNy40NTM5NkMwLjY2MDE2MyA3LjI4MTA3IDAuNTgyMDMxIDcuMDYxNTIgMC41ODIwMzEgNi44MzQ1NkMwLjU4MjAzMSA2LjYwNzYxIDAuNjYwMTYzIDYuMzg4MDUgMC44MDI0NTMgNi4yMTUxN0MwLjk0NDc0MyA2LjA0MjI5IDEuMTQxOTEgNS45MjczNiAxLjM1ODY5IDUuODkwOTNDMS41MzI3OCA1Ljg2OTI2IDEuNzA4MjIgNS44NjEyMyAxLjg4MzQ5IDUuODY2OTFIMjEuMjQzNUMyMS4yNjc1IDUuODI1MDcgMjEuMjkxNSA1Ljc4MzI0IDIxLjMxODUgNS43NDIxOEMyMS4xNjg1IDUuNjEzNTcgMjEuMDA4OCA1LjQ5NjU4IDIwLjg2ODYgNS4zNTQ4QzE5Ljk0NSA0LjQxMTE3IDE5LjAyNDggMy40NjM5MSAxOC4xMDgyIDIuNTEzMDVDMTcuOTU2IDIuMzY1NjIgMTcuODU0NyAyLjE3MDc3IDE3LjgxOTggMS45NTgyN0MxNy43ODQ4IDEuNzQ1NzYgMTcuODE4MiAxLjUyNzI5IDE3LjkxNDcgMS4zMzYyMUMxOC4wMDY3IDEuMTUwMzYgMTguMTU2OSAxLjAwMjI2IDE4LjM0MDkgMC45MTYxMzNDMTguNTI0OSAwLjgzMDAwMyAxOC43MzE4IDAuODEwOTQyIDE4LjkyNzYgMC44NjIwNjhDMTkuMTE3OCAwLjkxNDkzMyAxOS4yOTE5IDEuMDE2NzYgMTkuNDMzNyAxLjE1ODAyQzIxLjA0NTYgMi43OTczOCAyMi42NTEgNC40NDI5MyAyNC4yNDk5IDYuMDk0NjlDMjQuNjk1MiA2LjU1NDExIDI0LjY5OTcgNy4xMDE4NSAyNC4yNDk5IDcuNTY2N0MyMi42NDI1IDkuMjI4NzggMjEuMDI5MSAxMC44ODQ0IDE5LjQwOTcgMTIuNTMzNkMxOS4wMTMxIDEyLjkzOCAxOC40Mjk4IDEyLjkzMDIgMTguMDY5OSAxMi41NDY3QzE3LjcxMDEgMTIuMTYzMiAxNy43MTYxIDExLjU2NTEgMTguMTA1OSAxMS4xNTIyQzE5LjE0OTUgMTAuMDYyMSAyMC4xOTk5IDguOTc1OTYgMjEuMzI3NCA3LjgwMjIyWiIgZmlsbD0iYmxhY2siLz4KPC9zdmc+Cg=="
                    className="block group-hover:hidden w-5 lg:w-full"
                    alt="link arrow"
                  />
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjUiIGhlaWdodD0iMTMiIHZpZXdCb3g9IjAgMCAyNSAxMyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTIwLjg2MjYgNy44MjM3SDIwLjMxMTZDMTQuMDEzOSA3LjgyMzcgNy43MTYyOCA3LjgyMzcgMS40MTg2NSA3LjgyMzdDMS4yNDMzOCA3LjgyOSAxLjA2Nzk3IDcuODIwOTcgMC44OTM4NDMgNy43OTk2OUMwLjY3NzA2NSA3Ljc2MzI2IDAuNDc5OSA3LjY0ODMyIDAuMzM3NjEgNy40NzU0NEMwLjE5NTMyIDcuMzAyNTYgMC4xMTcxODggNy4wODMgMC4xMTcxODggNi44NTYwNUMwLjExNzE4OCA2LjYyOTA5IDAuMTk1MzIgNi40MDk1NCAwLjMzNzYxIDYuMjM2NjZDMC40Nzk5IDYuMDYzNzcgMC42NzcwNjUgNS45NDg4NCAwLjg5Mzg0MyA1LjkxMjQxQzEuMDY3OTQgNS44OTA3NCAxLjI0MzM4IDUuODgyNzEgMS40MTg2NSA1Ljg4ODM5SDIwLjc3ODZDMjAuODAyNiA1Ljg0NjU2IDIwLjgyNjYgNS44MDQ3MiAyMC44NTM2IDUuNzYzNjZDMjAuNzAzNyA1LjYzNTA1IDIwLjU0NCA1LjUxODA3IDIwLjQwMzggNS4zNzYyOUMxOS40ODAxIDQuNDMyNjUgMTguNTYgMy40ODU0IDE3LjY0MzMgMi41MzQ1M0MxNy40OTExIDIuMzg3MSAxNy4zODk5IDIuMTkyMjYgMTcuMzU0OSAxLjk3OTc1QzE3LjMyIDEuNzY3MjUgMTcuMzUzNCAxLjU0ODc3IDE3LjQ0OTkgMS4zNTc2OUMxNy41NDE4IDEuMTcxODUgMTcuNjkyMSAxLjAyMzc1IDE3Ljg3NjEgMC45Mzc2MTdDMTguMDYwMSAwLjg1MTQ4NyAxOC4yNjY5IDAuODMyNDI3IDE4LjQ2MjggMC44ODM1NTJDMTguNjUyOSAwLjkzNjQxNyAxOC44MjcgMS4wMzgyNCAxOC45Njg4IDEuMTc5NUMyMC41ODA3IDIuODE4ODYgMjIuMTg2MSA0LjQ2NDQyIDIzLjc4NSA2LjExNjE3QzI0LjIzMDMgNi41NzU1OSAyNC4yMzQ4IDcuMTIzMzMgMjMuNzg1IDcuNTg4MThDMjIuMTc3NiA5LjI1MDI2IDIwLjU2NDIgMTAuOTA1OSAxOC45NDQ4IDEyLjU1NTFDMTguNTQ4MiAxMi45NTk1IDE3Ljk2NDkgMTIuOTUxNyAxNy42MDUxIDEyLjU2ODJDMTcuMjQ1MiAxMi4xODQ3IDE3LjI1MTIgMTEuNTg2NiAxNy42NDExIDExLjE3MzdDMTguNjg0NyAxMC4wODM2IDE5LjczNSA4Ljk5NzQ0IDIwLjg2MjYgNy44MjM3WiIgZmlsbD0iIzJFRDA2RSIvPgo8L3N2Zz4K"
                    className="hidden group-hover:block w-5 lg:w-full"
                    alt="link arrow"
                  />{" "}
                </div>
              </a>
            </div>
            <div className="HappyForce ml-1.5 mt-[-10px]">
              <div className="group relative -mx-3 flex gap-6 rounded-lg p-3 text-sm leading-6 sm:flex-col sm:p-0.5 text-left">
                <div>
                  <a
                    className="font-extrabold text-sm text-black pb-[25px] menu_links leading-[44px]"
                    href="#"
                  >
                    WebInventix HappyForce
                  </a>
                </div>
              </div>
              <div className="group relative -mx-3 flex gap-6 rounded-lg p-3 text-sm leading-6 sm:flex-col sm:p-0.5 text-left">
                <div>
                  <a className="font-extrabold text-sm text-black pb-[25px] menu_links " />
                </div>
              </div>
            </div>
            <div className="Hero ml-1.5 mt-[-10px] lg:ml-5">
              <div className="group relative -mx-3 flex gap-6 rounded-lg p-3 text-sm leading-6 sm:flex-col sm:p-0.5 text-left">
                <div>
                  <a
                    className="font-extrabold text-sm text-black pb-[25px] menu_links leading-[44px]"
                    href="#"
                  >
                    WebInventix Hero
                  </a>
                </div>
              </div>
              <div className="group relative -mx-3 flex gap-6 rounded-lg p-3 text-sm leading-6 sm:flex-col sm:p-0.5 text-left">
                <div>
                  <a className="font-extrabold text-sm text-black pb-[25px] menu_links " />
                </div>
              </div>
            </div>
            <div className="Shop ml-1.5 mt-[-10px]">
              <div className="group relative -mx-3 flex gap-6 rounded-lg p-3 text-sm leading-6 sm:flex-col sm:p-0.5 text-left">
                <div>
                  <a
                    className="font-extrabold text-sm text-black pb-[25px] menu_links leading-[44px]"
                    href="#"
                  >
                    WebInventix Shop
                  </a>
                </div>
              </div>
              <div className="group relative -mx-3 flex gap-6 rounded-lg p-3 text-sm leading-6 sm:flex-col sm:p-0.5 text-left">
                <div>
                  <a className="font-extrabold text-sm text-black pb-[25px] menu_links " />
                </div>
              </div>
            </div>
            <div className="Messenger ml-1.5 mt-[-10px]">
              <div className="group relative -mx-3 flex gap-6 rounded-lg p-3 text-sm leading-6 sm:flex-col sm:p-0.5 text-left">
                <div>
                  <a
                    className="font-extrabold text-sm text-black pb-[25px] menu_links leading-[44px]"
                    href="#"
                  >
                    WebInventix Messenger
                  </a>{" "}
                </div>
              </div>
              <div className="group relative -mx-3 flex gap-6 rounded-lg p-3 text-sm leading-6 sm:flex-col sm:p-0.5 text-left">
                <div>
                  <a className="font-extrabold text-sm text-black pb-[25px] menu_links " />
                </div>
              </div>
            </div>
            <div className="border-r border-solid border-gray-300 pr-4" />
            <div className="OnDemandDelivery ml-1.5 mt-[-10px]">
              <div className="group relative -mx-3 flex gap-6 rounded-lg p-3 text-sm leading-6 sm:flex-col sm:p-0.5 text-left">
                <div>
                  <a
                    className="font-extrabold text-sm text-black pb-[25px] menu_links leading-[44px]"
                    href="#"
                  >
                    On-Demand Delivery
                  </a>
                </div>
              </div>
              <div className="group relative -mx-3 flex gap-6 rounded-lg p-3 text-sm leading-6 sm:flex-col sm:p-0.5 text-left">
                <div>
                  <a className="font-extrabold text-sm text-black pb-[25px] menu_links " />
                </div>
              </div>
            </div>
            <div className="ChatBot ml-1.5 mt-[-10px] lg:ml-5">
              <div className="group relative -mx-3 flex gap-6 rounded-lg p-3 text-sm leading-6 sm:flex-col sm:p-0.5 text-left">
                <div>
                  <a
                    className="font-extrabold text-sm text-black pb-[25px] menu_links leading-[44px]"
                    href="#"
                  >
                    Chat Bot
                  </a>
                </div>
              </div>
              <div className="group relative -mx-3 flex gap-6 rounded-lg p-3 text-sm leading-6 sm:flex-col sm:p-0.5 text-left">
                <div>
                  <a className="font-extrabold text-sm text-black pb-[25px] menu_links " />
                </div>
              </div>
            </div>
            <div className="Chain ml-1.5 mt-[-10px]">
              <div className="group relative -mx-3 flex gap-6 rounded-lg p-3 text-sm leading-6 sm:flex-col sm:p-0.5 text-left">
                <div>
                  <a
                    className="font-extrabold text-sm text-black pb-[25px] menu_links leading-[44px]"
                    href="#"
                  >
                    WebInventix Chain
                  </a>
                </div>
              </div>
              <div className="group relative -mx-3 flex gap-6 rounded-lg p-3 text-sm leading-6 sm:flex-col sm:p-0.5 text-left">
                <div>
                  <a className="font-extrabold text-sm text-black pb-[25px] menu_links " />
                </div>
              </div>
            </div>
            <div className="SocialPlatform ml-1.5 mt-[-10px]">
              <div className="group relative -mx-3 flex gap-6 rounded-lg p-3 text-sm leading-6 sm:flex-col sm:p-0.5 text-left">
                <div>
                  <a
                    className="font-extrabold text-sm text-black pb-[25px] menu_links leading-[44px]"
                    href="#"
                  >
                    Social Platform
                  </a>{" "}
                </div>
              </div>
              <div className="group relative -mx-3 flex gap-6 rounded-lg p-3 text-sm leading-6 sm:flex-col sm:p-0.5 text-left">
                <div>
                  <a className="font-extrabold text-sm text-black pb-[25px] menu_links " />
                </div>
              </div>
            </div>
            <div className="border-r border-solid border-gray-300 pr-4 mb-1 flex flex-col justify-end">
              {" "}
            </div>
            <div className="InsightMachine ml-1.5 mt-[-10px]">
              <div className="group relative -mx-3 flex gap-6 rounded-lg p-3 text-sm leading-6 sm:flex-col sm:p-0.5 text-left">
                <div>
                  <a
                    className="font-extrabold text-sm text-black pb-[25px] menu_links leading-[44px]"
                    href="#"
                  >
                    WebInventix Insight Machine
                  </a>
                </div>
              </div>
              <div className="group relative -mx-3 flex gap-6 rounded-lg p-3 text-sm leading-6 sm:flex-col sm:p-0.5 text-left">
                <div>
                  <a className="font-extrabold text-sm text-black pb-[25px] menu_links " />
                </div>
              </div>
            </div>
            <div className="EventsManagement ml-1.5 mt-[-10px] lg:ml-5">
              <div className="group relative -mx-3 flex gap-6 rounded-lg p-3 text-sm leading-6 sm:flex-col sm:p-0.5 text-left">
                <div>
                  <a
                    className="font-extrabold text-sm text-black pb-[25px] menu_links leading-[44px]"
                    href="#"
                  >
                    Event Management
                  </a>
                </div>
              </div>
              <div className="group relative -mx-3 flex gap-6 rounded-lg p-3 text-sm leading-6 sm:flex-col sm:p-0.5 text-left">
                <div>
                  <a className="font-extrabold text-sm text-black pb-[25px] menu_links " />
                </div>
              </div>
            </div>
          </div>
        </div>
      </button>
      <a
        className="group text-sm 2xl:text-base font-extrabold leading-6 menu_links text-white "
        href="#"
      >
        Work
      </a>
      <button className="megaMenu group">
        <a className="focus-visible:outline-none text-sm 2xl:text-base font-extrabold leading-6 menu_links relative z-50 text-white">
          Company
        </a>
        <div className="group-hover:block hidden hover:block absolute lg:left-0 lg:right-0 xl:left-[-15%] xl:right-[-15%] 2xl:left-[-33%] 2xl:right-[-33%] top-0 w-full overflow-hidden bg-white shadow-lg ring-1 ring-gray-900/5 sm:w-auto pt-20 cursor-default">
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-2 px-6 pt-6 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-0 sm:pt-9 sm:pb-10 lg:grid-cols-5 lg:gap-x-4 lg:px-8 xl:gap-x-6">
            <div className="Services flex place-items-start justify-between border-r border-solid border-gray-300 pr-7 pt-1">
              <p className="-mt-[14px] text-[24px] font-bold text-black tracking-[0px]">
                {" "}
                Company
              </p>
              <a className=" pl-3 font-semibold text-black text-md lg:text-xl inline-flex items-center gap-4 group transition-all duration-300 ease-in-out hover:font-semibold header-menu-item">
                <div className="transform group-hover:translate-x-2 transition-all duration-300 ease-in-out">
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjUiIGhlaWdodD0iMTMiIHZpZXdCb3g9IjAgMCAyNSAxMyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTIxLjMyNzQgNy44MDIyMkgyMC43NzY0QzE0LjQ3ODggNy44MDIyMiA4LjE4MTEzIDcuODAyMjIgMS44ODM0OSA3LjgwMjIyQzEuNzA4MjIgNy44MDc1MSAxLjUzMjgxIDcuNzk5NDkgMS4zNTg2OSA3Ljc3ODJDMS4xNDE5MSA3Ljc0MTc3IDAuOTQ0NzQzIDcuNjI2ODQgMC44MDI0NTMgNy40NTM5NkMwLjY2MDE2MyA3LjI4MTA3IDAuNTgyMDMxIDcuMDYxNTIgMC41ODIwMzEgNi44MzQ1NkMwLjU4MjAzMSA2LjYwNzYxIDAuNjYwMTYzIDYuMzg4MDUgMC44MDI0NTMgNi4yMTUxN0MwLjk0NDc0MyA2LjA0MjI5IDEuMTQxOTEgNS45MjczNiAxLjM1ODY5IDUuODkwOTNDMS41MzI3OCA1Ljg2OTI2IDEuNzA4MjIgNS44NjEyMyAxLjg4MzQ5IDUuODY2OTFIMjEuMjQzNUMyMS4yNjc1IDUuODI1MDcgMjEuMjkxNSA1Ljc4MzI0IDIxLjMxODUgNS43NDIxOEMyMS4xNjg1IDUuNjEzNTcgMjEuMDA4OCA1LjQ5NjU4IDIwLjg2ODYgNS4zNTQ4QzE5Ljk0NSA0LjQxMTE3IDE5LjAyNDggMy40NjM5MSAxOC4xMDgyIDIuNTEzMDVDMTcuOTU2IDIuMzY1NjIgMTcuODU0NyAyLjE3MDc3IDE3LjgxOTggMS45NTgyN0MxNy43ODQ4IDEuNzQ1NzYgMTcuODE4MiAxLjUyNzI5IDE3LjkxNDcgMS4zMzYyMUMxOC4wMDY3IDEuMTUwMzYgMTguMTU2OSAxLjAwMjI2IDE4LjM0MDkgMC45MTYxMzNDMTguNTI0OSAwLjgzMDAwMyAxOC43MzE4IDAuODEwOTQyIDE4LjkyNzYgMC44NjIwNjhDMTkuMTE3OCAwLjkxNDkzMyAxOS4yOTE5IDEuMDE2NzYgMTkuNDMzNyAxLjE1ODAyQzIxLjA0NTYgMi43OTczOCAyMi42NTEgNC40NDI5MyAyNC4yNDk5IDYuMDk0NjlDMjQuNjk1MiA2LjU1NDExIDI0LjY5OTcgNy4xMDE4NSAyNC4yNDk5IDcuNTY2N0MyMi42NDI1IDkuMjI4NzggMjEuMDI5MSAxMC44ODQ0IDE5LjQwOTcgMTIuNTMzNkMxOS4wMTMxIDEyLjkzOCAxOC40Mjk4IDEyLjkzMDIgMTguMDY5OSAxMi41NDY3QzE3LjcxMDEgMTIuMTYzMiAxNy43MTYxIDExLjU2NTEgMTguMTA1OSAxMS4xNTIyQzE5LjE0OTUgMTAuMDYyMSAyMC4xOTk5IDguOTc1OTYgMjEuMzI3NCA3LjgwMjIyWiIgZmlsbD0iYmxhY2siLz4KPC9zdmc+Cg=="
                    className="block group-hover:hidden w-5 lg:w-full"
                    alt="link arrow"
                  />
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjUiIGhlaWdodD0iMTMiIHZpZXdCb3g9IjAgMCAyNSAxMyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTIwLjg2MjYgNy44MjM3SDIwLjMxMTZDMTQuMDEzOSA3LjgyMzcgNy43MTYyOCA3LjgyMzcgMS40MTg2NSA3LjgyMzdDMS4yNDMzOCA3LjgyOSAxLjA2Nzk3IDcuODIwOTcgMC44OTM4NDMgNy43OTk2OUMwLjY3NzA2NSA3Ljc2MzI2IDAuNDc5OSA3LjY0ODMyIDAuMzM3NjEgNy40NzU0NEMwLjE5NTMyIDcuMzAyNTYgMC4xMTcxODggNy4wODMgMC4xMTcxODggNi44NTYwNUMwLjExNzE4OCA2LjYyOTA5IDAuMTk1MzIgNi40MDk1NCAwLjMzNzYxIDYuMjM2NjZDMC40Nzk5IDYuMDYzNzcgMC42NzcwNjUgNS45NDg4NCAwLjg5Mzg0MyA1LjkxMjQxQzEuMDY3OTQgNS44OTA3NCAxLjI0MzM4IDUuODgyNzEgMS40MTg2NSA1Ljg4ODM5SDIwLjc3ODZDMjAuODAyNiA1Ljg0NjU2IDIwLjgyNjYgNS44MDQ3MiAyMC44NTM2IDUuNzYzNjZDMjAuNzAzNyA1LjYzNTA1IDIwLjU0NCA1LjUxODA3IDIwLjQwMzggNS4zNzYyOUMxOS40ODAxIDQuNDMyNjUgMTguNTYgMy40ODU0IDE3LjY0MzMgMi41MzQ1M0MxNy40OTExIDIuMzg3MSAxNy4zODk5IDIuMTkyMjYgMTcuMzU0OSAxLjk3OTc1QzE3LjMyIDEuNzY3MjUgMTcuMzUzNCAxLjU0ODc3IDE3LjQ0OTkgMS4zNTc2OUMxNy41NDE4IDEuMTcxODUgMTcuNjkyMSAxLjAyMzc1IDE3Ljg3NjEgMC45Mzc2MTdDMTguMDYwMSAwLjg1MTQ4NyAxOC4yNjY5IDAuODMyNDI3IDE4LjQ2MjggMC44ODM1NTJDMTguNjUyOSAwLjkzNjQxNyAxOC44MjcgMS4wMzgyNCAxOC45Njg4IDEuMTc5NUMyMC41ODA3IDIuODE4ODYgMjIuMTg2MSA0LjQ2NDQyIDIzLjc4NSA2LjExNjE3QzI0LjIzMDMgNi41NzU1OSAyNC4yMzQ4IDcuMTIzMzMgMjMuNzg1IDcuNTg4MThDMjIuMTc3NiA5LjI1MDI2IDIwLjU2NDIgMTAuOTA1OSAxOC45NDQ4IDEyLjU1NTFDMTguNTQ4MiAxMi45NTk1IDE3Ljk2NDkgMTIuOTUxNyAxNy42MDUxIDEyLjU2ODJDMTcuMjQ1MiAxMi4xODQ3IDE3LjI1MTIgMTEuNTg2NiAxNy42NDExIDExLjE3MzdDMTguNjg0NyAxMC4wODM2IDE5LjczNSA4Ljk5NzQ0IDIwLjg2MjYgNy44MjM3WiIgZmlsbD0iIzJFRDA2RSIvPgo8L3N2Zz4K"
                    className="hidden group-hover:block w-5 lg:w-full"
                    alt="link arrow"
                  />{" "}
                </div>
              </a>
            </div>
            <div className="About mb-4 ml-3 mt-[-10px]">
              <div className="group relative -mx-3 flex gap-6 rounded-lg p-3 text-sm leading-6 sm:flex-col sm:p-0.5 text-left">
                <div>
                  <a
                    className="font-extrabold text-sm text-black pb-[25px] menu_links leading-[44px]"
                    href="../about/index.html"
                  >
                    About
                  </a>
                </div>
              </div>
              <div className="group relative -mx-3 flex gap-6 rounded-lg p-3 text-sm leading-6 sm:flex-col sm:p-0.5 text-left">
                <div>
                  <a
                    className="mt-[18px] font-medium text-[#0B0C0D] menu_links"
                    href="#"
                  >
                    <img
                      src="../assets/images/dot.svg"
                      alt="bulletpoint"
                      width="6px"
                      className="inline-block mr-3"
                    />
                    Process
                  </a>
                </div>
              </div>
              <div className="group relative -mx-3 flex gap-6 rounded-lg p-3 text-sm leading-6 sm:flex-col sm:p-0.5 text-left">
                <div>
                  <a
                    className="mt-[18px] font-medium text-[#0B0C0D] menu_links"
                    href="#"
                  >
                    <img
                      src="../assets/images/dot.svg"
                      alt="bulletpoint"
                      width="6px"
                      className="inline-block mr-3"
                    />
                    Careers
                  </a>
                </div>
              </div>
              <div className="group relative -mx-3 flex gap-6 rounded-lg p-3 text-sm leading-6 sm:flex-col sm:p-0.5 text-left">
                <div>
                  <a
                    className="mt-[18px] font-medium text-[#0B0C0D] menu_links"
                    href="#"
                  >
                    <img
                      src="../assets/images/dot.svg"
                      alt="bulletpoint"
                      width="6px"
                      className="inline-block mr-3"
                    />
                    Clients
                  </a>
                </div>
              </div>
              <div className="group relative -mx-3 flex gap-6 rounded-lg p-3 text-sm leading-6 sm:flex-col sm:p-0.5 text-left">
                <div>
                  <a
                    className="mt-[18px] font-medium text-[#0B0C0D] menu_links"
                    href="#"
                  >
                    <img
                      src="../assets/images/dot.svg"
                      alt="bulletpoint"
                      width="6px"
                      className="inline-block mr-3"
                    />
                    University
                  </a>
                </div>
              </div>
              <div className="group relative -mx-3 flex gap-6 rounded-lg p-3 text-sm leading-6 sm:flex-col sm:p-0.5 text-left">
                <div>
                  <a
                    className="mt-[18px] font-medium text-[#0B0C0D] menu_links"
                    href="#"
                  >
                    <img
                      src="../assets/images/dot.svg"
                      alt="bulletpoint"
                      width="6px"
                      className="inline-block mr-3"
                    />
                    Testimonials
                  </a>
                </div>
              </div>
              <div className="group relative -mx-3 flex gap-6 rounded-lg p-3 text-sm leading-6 sm:flex-col sm:p-0.5 text-left">
                <div>
                  <a
                    className="mt-[18px] font-medium text-[#0B0C0D] menu_links"
                    href="#"
                  >
                    <img
                      src="../assets/images/dot.svg"
                      alt="bulletpoint"
                      width="6px"
                      className="inline-block mr-3"
                    />
                    Manifesto
                  </a>
                </div>
              </div>
            </div>
            <div className="Resources mb-4 ml-1.5 mt-[-10px]">
              <div className="group relative -mx-3 flex gap-6 rounded-lg p-3 text-sm leading-6 sm:flex-col sm:p-0.5 text-left">
                <div>
                  <a className="font-extrabold text-sm text-black pb-[25px] leading-[44px]">
                    Resources
                  </a>{" "}
                </div>
              </div>
              <div className="group relative -mx-3 flex gap-6 rounded-lg p-3 text-sm leading-6 sm:flex-col sm:p-0.5 text-left">
                <div>
                  <a
                    className="mt-[18px] font-medium text-[#0B0C0D] menu_links"
                    href="../blogs/index.html"
                  >
                    <img
                      src="../assets/images/dot.svg"
                      alt="bulletpoint"
                      width="6px"
                      className="inline-block mr-3"
                    />
                    Blog
                  </a>
                </div>
              </div>
              <div className="group relative -mx-3 flex gap-6 rounded-lg p-3 text-sm leading-6 sm:flex-col sm:p-0.5 text-left">
                <div>
                  <a
                    className="mt-[18px] font-medium text-[#0B0C0D] menu_links"
                    href="#"
                  >
                    <img
                      src="../assets/images/dot.svg"
                      alt="bulletpoint"
                      width="6px"
                      className="inline-block mr-3"
                    />
                    News &amp; Updates
                  </a>
                </div>
              </div>
              <div className="group relative -mx-3 flex gap-6 rounded-lg p-3 text-sm leading-6 sm:flex-col sm:p-0.5 text-left">
                <div>
                  <a
                    className="mt-[18px] font-medium text-[#0B0C0D] menu_links"
                    href="#"
                  >
                    <img
                      src="../assets/images/dot.svg"
                      alt="bulletpoint"
                      width="6px"
                      className="inline-block mr-3"
                    />
                    Press Release
                  </a>
                </div>
              </div>
              <div className="group relative -mx-3 flex gap-6 rounded-lg p-3 text-sm leading-6 sm:flex-col sm:p-0.5 text-left">
                <div>
                  <a
                    className="mt-[18px] font-medium text-[#0B0C0D] menu_links"
                    href="#"
                  >
                    <img
                      src="../assets/images/dot.svg"
                      alt="bulletpoint"
                      width="6px"
                      className="inline-block mr-3"
                    />
                    Events
                  </a>
                </div>
              </div>
            </div>
            <div />
            <div className="text-left -ml-[90%]">
              <p className="text-[24px]">
                We partner with the world’s technology leaders.
              </p>
              <div className="flex mt-5 justify-between">
                <img
                  className="w-[90px] h-[90px]"
                  src="data:image/webp;base64,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"
                  alt="Google developers"
                />
                <img
                  className="w-[90px] h-[90px]"
                  src="data:image/webp;base64,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"
                  alt="Adobe solution partner"
                />
                <img
                  className="w-[90px] h-[90px]"
                  src="data:image/webp;base64,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"
                  alt="Amazon web service"
                />
                <img
                  className="w-[90px] h-[90px]"
                  src="data:image/webp;base64,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"
                  alt="Microsoft"
                />
              </div>
            </div>
          </div>
        </div>
      </button>
      <a
        className="text-sm 2xl:text-base font-extrabold leading-6 menu_links text-white"
        href="#"
      >
        Contact
      </a>
    </div>
    <div className="hidden lg:flex items-center gap-3">
      <a
        href="tel:866-978-2220"
        className="text-white text-sm 2xl:text-base font-semibold flex items-center menu_links"
      >
        <img
          src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQiIGhlaWdodD0iMTQiIHZpZXdCb3g9IjAgMCAxNCAxNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTkuNDY3NTUgMTMuOTYxOUM4LjM5MjY0IDEzLjk0NjUgNy40NTQ1NyAxMy42MDYgNi41NzcyMyAxMy4wNzM2QzUuMzQ1MjMgMTIuMzI1OSA0LjM0MTU3IDExLjMyMzQgMy40MjM3NCAxMC4yMjc1QzIuNjYzNDEgOS4zMjA1NiAxLjk5MjU1IDguMzU1MzYgMS41MjQ1MyA3LjI2MDJDMS4xNzY3NSA2LjQ0NjgzIDAuOTYwOTU1IDUuNjAzOSAxLjAwNTg5IDQuNzEyOEMxLjA2Mzc5IDMuNTYzMzkgMS41MDI2NiAyLjU4ODA3IDIuMzc1NTUgMS44MjIwN0MyLjU5MzM3IDEuNjMwOTggMi44MTQyOSAxLjQ0MzM5IDMuMDM4MzEgMS4yNTkzMUMzLjQ2MDE4IDAuOTE0MzY3IDMuOTE0MDMgMC45MDI2MjYgNC4yODkzNCAxLjI5MDA4QzQuOTQxNTggMS45NjMzNyA1LjQ1ODk5IDIuNzM1MDQgNS43NDMyMSAzLjYzODI5QzUuODkxMzkgNC4xMDgzNCA1Ljc4MzY5IDQuNTUwNDUgNS40MTEyMiA0Ljg5MzM3QzUuMTUzMzIgNS4xMjk4MSA0Ljg4MDQ0IDUuMzUwODcgNC42MDQ3MyA1LjU2NjY2QzQuMTc3MTkgNS45MDE4OSA0LjAyOTgyIDYuMjUwMDcgNC4yMDIyOSA2Ljc3MDMyQzQuMzIyODMgNy4xNCA0LjQ5MTM0IDcuNDkyMjYgNC43MDM1MiA3LjgxODExQzUuMzEwODEgOC43MzIyOSA2LjAxOTczIDkuNTY0MjggNi45MjEzNiAxMC4yMDY4QzcuMTQxMiAxMC4zNjMxIDcuNDAyNzQgMTAuNDcyNCA3LjY1OTQzIDEwLjU2MjdDOC4wMzE1IDEwLjY5NDMgOC4zNTc4MiAxMC41NzQ4IDguNjM2NzcgMTAuMzA0OEM4Ljg0NDg3IDEwLjEwMjMgOS4wNTA1NCA5Ljg5Nzg5IDkuMjcwNzkgOS43MTAwNEM5Ljg5NjMgOS4xNzcyMyAxMC4zMjM0IDkuMTE4MTIgMTEuMDMyMyA5LjUzOTU5QzExLjcyNzEgOS45NDU4IDEyLjMzODggMTAuNDc5OCAxMi44MzUyIDExLjExMzNDMTMuMTk5NiAxMS41ODIxIDEzLjE1MzggMTIuMDI2NyAxMi43MTM3IDEyLjQxODJDMTIuMjIyMiAxMi44NTYyIDExLjc1NjYgMTMuMzI3NSAxMS4xMzQ4IDEzLjU5OTZDMTAuNjA4OSAxMy44MzA3IDEwLjA0MTkgMTMuOTUzOSA5LjQ2NzU1IDEzLjk2MTlaIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4K"
          width={15}
          height={15}
          className="invert-0 me-2"
          alt="Phone"
        />
        866-978-2220
      </a>
      <div className="flex z-10">
        <a
          href="../contact/index.html"
          className="header-module--buttonChange--18e23 h-9 px-5 bg-black text-white rounded-full font-bold text-sm"
        >
          <span>Get in Touch</span>
          <span>Get in Touch</span>
        </a>
      </div>
    </div>
    <div className="flex lg:hidden">
      <div className="flex">
        <button className="header-module--buttonChange--18e23 h-9 px-5 mr-3 undefined bg-white text-black rounded-full font-bold text-sm">
          <span>Get in Touch</span>
          <span>Get in Touch</span>
        </button>
      </div>
      <button
        type="button"
        as="div"
        className="inline-flex items-center justify-center rounded-md pl-2.5"
      >
        <span className="sr-only">Open main menu</span>{" "}
        <img
          src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTcuOTk5ODQgMTIuMTY2N0gxMy44MzMyTTIuMTY2NSA3Ljk5OTk5SDEzLjgzMzJNMi4xNjY1IDMuODMzMzNIMTMuODMzMiIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIxLjMzMzMzIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9zdmc+Cg=="
          className="invert-0"
          width={24}
          height={24}
          alt="Hamburger"
        />
      </button>
    </div>
  </nav>
  <div
    hidden=""
    style={{
      position: "fixed",
      top: 1,
      left: 1,
      width: 1,
      height: 0,
      padding: 0,
      margin: "-1px",
      overflow: "hidden",
      clip: "rect(0, 0, 0, 0)",
      whiteSpace: "nowrap",
      borderWidth: 0,
      display: "none"
    }}
  >
    {" "}
  </div>
</header>

  )

}

export default Navbar;
