import React from "react";

function Navbar() {
  return (
    <header className=" header absolute inset-x-0">
      <nav
        className="flex items-center justify-between p-x-6 py-4 px-6 lg:px-8 max-w-7xl mx-auto"
        aria-label="Global"
      >
        <div className="flex">
          <a aria-current="page" className="-m-1.5 p-1.5" href="#">
            <img
              src="/assets/images/logo.png"
              width={85}
              className="2xl:w-44 header-logo logo-light hidden"
              alt="logo"
            />
            <img
              src="/assets/images/logo-dark.png"
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
                        src="/assets/images/arrow-2.svg"
                        className="block group-hover:hidden w-5 lg:w-full"
                        alt="link arrow"
                      />
                      <img
                        src="/assets/images/arrow.svg"
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
                        href="#"
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
                          src="/assets/images/dot.svg"
                          alt="bulletpoint"
                          width="6px"
                          className="inline-block mr-3"
                        />
                      </a>
                      <a
                        className="mt-[18px] font-medium text-[#0B0C0D] menu_links"
                        href="#"
                      >
                        AI-Powered Business Process Automation
                      </a>
                    </div>
                  </div>
                  <div className="group relative -mx-3 flex gap-6 rounded-lg p-3 text-sm leading-6 sm:flex-col sm:p-0.5 text-left">
                    <div>
                      <a className="font-extrabold text-sm text-black pb-[25px] menu_links ">
                        <img
                          src="/assets/images/dot.svg"
                          alt="bulletpoint"
                          width="6px"
                          className="inline-block mr-3"
                        />
                      </a>
                      <a
                        className="mt-[18px] font-medium text-[#0B0C0D] menu_links"
                        href="#"
                      >
                        AI Chatbots &amp; AI Voice Agents
                      </a>
                    </div>
                  </div>
                  <div className="group relative -mx-3 flex gap-6 rounded-lg p-3 text-sm leading-6 sm:flex-col sm:p-0.5 text-left">
                    <div>
                      <a className="font-extrabold text-sm text-black pb-[25px] menu_links ">
                        <img
                          src="/assets/images/dot.svg"
                          alt="bulletpoint"
                          width="6px"
                          className="inline-block mr-3"
                        />
                      </a>
                      <a
                        className="mt-[18px] font-medium text-[#0B0C0D] menu_links"
                        href="#"
                      >
                        AI-Powered Cybersecurity &amp; Fraud Detection
                      </a>
                    </div>
                  </div>
                  <div className="group relative -mx-3 flex gap-6 rounded-lg p-3 text-sm leading-6 sm:flex-col sm:p-0.5 text-left">
                    <div>
                      <a className="font-extrabold text-sm text-black pb-[25px] menu_links ">
                        <img
                          src="/assets/images/dot.svg"
                          alt="bulletpoint"
                          width="6px"
                          className="inline-block mr-3"
                        />
                      </a>
                      <a
                        className="mt-[18px] font-medium text-[#0B0C0D] menu_links"
                        href="#"
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
                          src="/assets/images/dot.svg"
                          alt="bulletpoint"
                          width="6px"
                          className="inline-block mr-3"
                        />
                      </a>
                      <a
                        className="mt-[18px] font-medium text-[#0B0C0D] menu_links"
                        href="#"
                      >
                        Predictive Analytics &amp; Business Intelligence
                      </a>
                    </div>
                  </div>
                  <div className="group relative -mx-3 flex gap-6 rounded-lg p-3 text-sm leading-6 sm:flex-col sm:p-0.5 text-left">
                    <div>
                      <a className="font-extrabold text-sm text-black pb-[25px] menu_links ">
                        <img
                          src="/assets/images/dot.svg"
                          alt="bulletpoint"
                          width="6px"
                          className="inline-block mr-3"
                        />
                      </a>
                      <a
                        className="mt-[18px] font-medium text-[#0B0C0D] menu_links"
                        href="#"
                      >
                        Deep Learning Implementation
                      </a>
                    </div>
                  </div>
                  <div className="group relative -mx-3 flex gap-6 rounded-lg p-3 text-sm leading-6 sm:flex-col sm:p-0.5 text-left">
                    <div>
                      <a className="font-extrabold text-sm text-black pb-[25px] menu_links ">
                        <img
                          src="/assets/images/dot.svg"
                          alt="bulletpoint"
                          width="6px"
                          className="inline-block mr-3"
                        />
                      </a>
                      <a
                        className="mt-[18px] font-medium text-[#0B0C0D] menu_links"
                        href="#"
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
                          src="/assets/images/dot.svg"
                          alt="bulletpoint"
                          width="6px"
                          className="inline-block mr-3"
                        />
                      </a>
                      <a
                        className="mt-[18px] font-medium text-[#0B0C0D] menu_links"
                        href="#"
                      >
                        AI-Integrated Web &amp; App Development
                      </a>
                    </div>
                  </div>
                  <div className="group relative -mx-3 flex gap-6 rounded-lg p-3 text-sm leading-6 sm:flex-col sm:p-0.5 text-left">
                    <div>
                      <a className="font-extrabold text-sm text-black pb-[25px] menu_links ">
                        <img
                          src="/assets/images/dot.svg"
                          alt="bulletpoint"
                          width="6px"
                          className="inline-block mr-3"
                        />
                      </a>
                      <a
                        className="mt-[18px] font-medium text-[#0B0C0D] menu_links"
                        href="#"
                      >
                        Enterprise AI-Powered Applications
                      </a>
                    </div>
                  </div>
                  <div className="group relative -mx-3 flex gap-6 rounded-lg p-3 text-sm leading-6 sm:flex-col sm:p-0.5 text-left">
                    <div>
                      <a className="font-extrabold text-sm text-black pb-[25px] menu_links ">
                        <img
                          src="/assets/images/dot.svg"
                          alt="bulletpoint"
                          width="6px"
                          className="inline-block mr-3"
                        />
                      </a>
                      <a
                        className="mt-[18px] font-medium text-[#0B0C0D] menu_links"
                        href="#"
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
                      src="/assets/images/technologies/tech-1.svg"
                      alt="graphQl"
                    />
                    <img
                      className="p-0.5 contrast-[.25] brightness-100 text-[5px] py-2"
                      src="/assets/images/technologies/tech-2.svg"
                      alt="reactHook"
                    />
                    <img
                      className="p-0.5 contrast-[.25] brightness-100 text-[5px] py-2"
                      src="/assets/images/technologies/tech-3.svg"
                      alt="antDesign"
                    />
                    <img
                      className="p-0.5 contrast-[.25] brightness-100 text-[5px] py-2"
                      src="/assets/images/technologies/tech-4.svg"
                      alt="nextJs"
                    />
                    <img
                      className="p-0.5 contrast-[.25] brightness-100 text-[5px] py-2"
                      src="/assets/images/technologies/tech-5.svg"
                      alt="java"
                    />
                    <img
                      className="p-0.5 contrast-[.25] brightness-100 text-[5px] py-2"
                      src="/assets/images/technologies/tech-6.svg"
                      alt="restApi"
                    />
                    <img
                      className="p-0.5 contrast-[.25] brightness-100 text-[5px] py-2"
                      src="/assets/images/technologies/tech-7.svg"
                      alt="typescript"
                    />
                    <img
                      className="p-0.5 contrast-[.25] brightness-100 text-[5px] py-2"
                      src="/assets/images/technologies/tech-8.svg"
                      alt="node"
                    />
                    <img
                      className="p-0.5 contrast-[.25] brightness-100 text-[5px] py-2"
                      src="/assets/images/technologies/tech-9.svg"
                      alt="laravel"
                    />
                    <img
                      className="p-0.5 contrast-[.25] brightness-100 text-[5px] py-2"
                      src="/assets/images/technologies/tech-10.svg"
                      alt="bulletpointnet"
                    />
                    <img
                      className="p-0.5 contrast-[.25] brightness-100 text-[5px] py-2"
                      src="/assets/images/technologies/tech-11.svg"
                      alt="scala"
                    />
                    <img
                      className="p-0.5 contrast-[.25] brightness-100 text-[5px] py-2"
                      src="/assets/images/technologies/tech-12.svg"
                      alt="apolloClient"
                    />
                  </div>
                </div>
                <div className="ComputerVision mb-12 w-24--7 ml-1.5 mt-[-10px]">
                  <div className="group relative -mx-3 flex gap-6 rounded-lg p-3 text-sm leading-6 sm:flex-col sm:p-0.5 text-left">
                    <div>
                      <a
                        className="font-extrabold text-sm text-black pb-[25px] menu_links leading-[44px]"
                        href="#"
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
                          src="/assets/images/dot.svg"
                          alt="bulletpoint"
                          width="6px"
                          className="inline-block mr-3"
                        />
                      </a>
                      <a
                        className="mt-[18px] font-medium text-[#0B0C0D] menu_links"
                        href="#"
                      >
                        Computer Vision Applications
                      </a>
                    </div>
                  </div>
                  <div className="group relative -mx-3 flex gap-6 rounded-lg p-3 text-sm leading-6 sm:flex-col sm:p-0.5 text-left">
                    <div>
                      <a className="font-extrabold text-sm text-black pb-[25px] menu_links ">
                        <img
                          src="/assets/images/dot.svg"
                          alt="bulletpoint"
                          width="6px"
                          className="inline-block mr-3"
                        />
                      </a>
                      <a
                        className="mt-[18px] font-medium text-[#0B0C0D] menu_links"
                        href="#"
                      >
                        Facial Recognition &amp; Object Tracking
                      </a>
                    </div>
                  </div>
                  <div className="group relative -mx-3 flex gap-6 rounded-lg p-3 text-sm leading-6 sm:flex-col sm:p-0.5 text-left">
                    <div>
                      <a className="font-extrabold text-sm text-black pb-[25px] menu_links ">
                        <img
                          src="/assets/images/dot.svg"
                          alt="bulletpoint"
                          width="6px"
                          className="inline-block mr-3"
                        />
                      </a>
                      <a
                        className="mt-[18px] font-medium text-[#0B0C0D] menu_links"
                        href="#"
                      >
                        AI-Powered Image &amp; Video Processing
                      </a>
                    </div>
                  </div>
                  <div className="group relative -mx-3 flex gap-6 rounded-lg p-3 text-sm leading-6 sm:flex-col sm:p-0.5 text-left">
                    <div>
                      <a className="font-extrabold text-sm text-black pb-[25px] menu_links ">
                        <img
                          src="/assets/images/dot.svg"
                          alt="bulletpoint"
                          width="6px"
                          className="inline-block mr-3"
                        />
                      </a>
                      <a
                        className="mt-[18px] font-medium text-[#0B0C0D] menu_links"
                        href="#"
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
                          src="/assets/images/dot.svg"
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
                          src="/assets/images/dot.svg"
                          alt="bulletpoint"
                          width="6px"
                          className="inline-block mr-3"
                        />
                      </a>
                      <a
                        className="mt-[18px] font-medium text-[#0B0C0D] menu_links"
                        href="#"
                      >
                        Smart Sensors &amp; Data Collection
                      </a>
                    </div>
                  </div>
                  <div className="group relative -mx-3 flex gap-6 rounded-lg p-3 text-sm leading-6 sm:flex-col sm:p-0.5 text-left">
                    <div>
                      <a className="font-extrabold text-sm text-black pb-[25px] menu_links ">
                        <img
                          src="/assets/images/dot.svg"
                          alt="bulletpoint"
                          width="6px"
                          className="inline-block mr-3"
                        />
                      </a>
                      <a
                        className="mt-[18px] font-medium text-[#0B0C0D] menu_links"
                        href="#"
                      >
                        Industrial &amp; Home Automation
                      </a>
                    </div>
                  </div>
                  <div className="group relative -mx-3 flex gap-6 rounded-lg p-3 text-sm leading-6 sm:flex-col sm:p-0.5 text-left">
                    <div>
                      <a className="font-extrabold text-sm text-black pb-[25px] menu_links ">
                        <img
                          src="/assets/images/dot.svg"
                          alt="bulletpoint"
                          width="6px"
                          className="inline-block mr-3"
                        />
                      </a>
                      <a
                        className="mt-[18px] font-medium text-[#0B0C0D] menu_links"
                        href="#"
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
                          src="/assets/images/dot.svg"
                          alt="bulletpoint"
                          width="6px"
                          className="inline-block mr-3"
                        />
                      </a>
                      <a
                        className="mt-[18px] font-medium text-[#0B0C0D] menu_links"
                        href="#"
                      >
                        Natural Language Processing (NLP) Solutions
                      </a>
                    </div>
                  </div>
                  <div className="group relative -mx-3 flex gap-6 rounded-lg p-3 text-sm leading-6 sm:flex-col sm:p-0.5 text-left">
                    <div>
                      <a className="font-extrabold text-sm text-black pb-[25px] menu_links ">
                        <img
                          src="/assets/images/dot.svg"
                          alt="bulletpoint"
                          width="6px"
                          className="inline-block mr-3"
                        />
                      </a>
                      <a
                        className="mt-[18px] font-medium text-[#0B0C0D] menu_links"
                        href="#"
                      >
                        Sentiment Analysis &amp; Text Processing
                      </a>
                    </div>
                  </div>
                  <div className="group relative -mx-3 flex gap-6 rounded-lg p-3 text-sm leading-6 sm:flex-col sm:p-0.5 text-left">
                    <div>
                      <a className="font-extrabold text-sm text-black pb-[25px] menu_links ">
                        <img
                          src="/assets/images/dot.svg"
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
                        src="/assets/images/arrow.svg"
                        className="block group-hover:hidden w-5 lg:w-full"
                        alt="link arrow"
                      />
                      <img
                        src="/assets/images/arrow.svg"
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
                        src="/assets/images/arrow.svg"
                        className="block group-hover:hidden w-5 lg:w-full"
                        alt="link arrow"
                      />
                      <img
                        src="/assets/images/arrow.svg"
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
                        href=".#"
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
                          src="/assets/images/dot.svg"
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
                          src="/assets/images/dot.svg"
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
                        href="#achievements"
                      >
                        <img
                          src="/assets/images/dot.svg"
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
                          src="/assets/images/dot.svg"
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
                        href="#testimonials"
                      >
                        <img
                          src="/assets/images/dot.svg"
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
                          src="/assets/images/dot.svg"
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
                        href="#recent-blogs"
                      >
                        <img
                          src="/assets/images/dot.svg"
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
                          src="/assets/images/dot.svg"
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
                          src="/assets/images/dot.svg"
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
                          src="/assets/images/dot.svg"
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
                      src="/assets/images/partners/download.webp"
                      alt="Google developers"
                    />
                    <img
                      className="w-[90px] h-[90px]"
                      src="/assets/images/partners/download (1).webp"
                      alt="Adobe solution partner"
                    />
                    <img
                      className="w-[90px] h-[90px]"
                      src="/assets/images/partners/download (2).webp"
                      alt="Amazon web service"
                    />
                    <img
                      className="w-[90px] h-[90px]"
                      src="/assets/images/partners/download (3).webp"
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
            className="text-black text-sm 2xl:text-base font-semibold flex items-center menu_links"
          >
            <img
              src="/assets/images/phone.svg"
              width={15}
              height={15}
              className="brightness-0 invert-0 me-2"
              alt="Phone"
            />
            866-978-2220
          </a>
          <div className="flex z-10">
            <a
              href="#"
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
              src="/assets/images/hamburger.svg"
              className="brightness-0 invert-0"
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
          display: "none",
        }}
      >
        {" "}
      </div>
    </header>
  );
}

export default Navbar;
