import React, { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
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
              className="2xl:w-44 header-logo logo-dark w-32"
              alt="logo"
            />
          </a>
        </div>
        <div className="hidden lg:flex lg:gap-x-12 cursor-pointer">
          <a
            className="focus-visible:outline-none text-sm 2xl:text-base font-extrabold leading-6 menu_links relative z-50 text-black"
            href="#serviceTabs"
          >
            Services
          </a>
          <a
            href="#mobile-services"
            className="menuLink focus-visible:outline-none text-sm 2xl:text-base font-extrabold leading-6 menu_links relative z-50 text-white"
          >
            Solutions
          </a>
          <a
            className="group text-sm 2xl:text-base font-extrabold leading-6 menu_links text-white "
            href="#case-studies"
          >
            Work
          </a>
          <a
            className="text-sm 2xl:text-base font-extrabold leading-6 menu_links text-white"
            href="#topfooter"
          >
            Contact
          </a>
        </div>
        <div className="hidden lg:flex items-center gap-3">
          <a
            href="tel:(888) 717-5019"
            className="text-black text-sm 2xl:text-base font-semibold flex items-center menu_links"
          >
            <img
              src="/assets/images/phone.svg"
              width={15}
              height={15}
              className="brightness-0 invert-0 me-2"
              alt="Phone"
            />
            (888) 717-5019
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
            onClick={() => setIsOpen(true)}
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

      <div id="headlessui-portal-root">
        <div data-headlessui-portal="">
          <button
            type="button"
            data-headlessui-focus-guard="true"
            aria-hidden="true"
            style={{
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
            />
          <div>
            {isOpen && (
            <div
              className="lg:hidden"
              id="headlessui-dialog-:r0:"
              role="dialog"
              aria-modal="true"
              data-headlessui-state="open"
            >
              <div
                className="mobNav fixed inset-y-0 w-full overflow-y-auto bg-dark-theme p-7"
                id="headlessui-dialog-panel-:r16:"
                data-headlessui-state="open"
              >
                <div className="flex flex-col justify-between h-full">
                  <div>
                    <div className="flex items-center justify-between">
                      <a className="-m-1.5 p-1.5" href="/">
                        <img
                          src="/assets/images/logo.png"
                          width={85}
                          className="2xl:w-24"
                          alt="Web Inventix logo"
                        />
                      </a>
                      <button
                        type="button"
                        className="flex justify-center items-center rounded-full bg-white text-sm font-semibold text-gray-900 h-[45px] w-[45px] ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                        onClick={() => setIsOpen(false)}
                      >
                        <span className="sr-only">Close menu</span>
                        <img src="/assets/images/close.svg" alt="close" className="brightness-0 " />
                      </button>
                    </div>
                    <div className="mt-16 flow-root">
                      <div className="-my-6 divide-y divide-gray-500/10">
                        <div className="space-y-9 py-6">
                          <div className="-mx-3" data-headlessui-state="">
                            <div className="flex w-full items-center justify-between px-3">
                              <a
                                className="text-3xl font-bold text-white w-full"
                                href="#serviceTabs"
                              >
                                Services
                              </a>
                              <button
                                id="headlessui-disclosure-button-:r17:"
                                type="button"
                                aria-expanded="false"
                                data-headlessui-state=""
                              >
                                <img
                                  src="/assets/images/arrow.svg"
                                  className=", ''"
                                  alt="arrow"
                                />
                              </button>
                            </div>
                          </div>
                          <div className="-mx-3" data-headlessui-state="">
                            <div className="flex w-full items-center justify-between px-3">
                              <a href="#mobile-services" className="text-3xl font-bold text-white w-full">
                                Solutions
                              </a>
                              <button
                                id="headlessui-disclosure-button-:r19:"
                                type="button"
                                aria-expanded="false"
                                data-headlessui-state=""
                              >
                                <img
                                  src="/assets/images/arrow.svg"
                                  className=", ''"
                                  alt="arrow"
                                />
                              </button>
                            </div>
                          </div>

                          <div className="-mx-3" data-headlessui-state="">
                            <div className="flex w-full items-center justify-between px-3">
                              <a href="#case-studies" className="text-3xl font-bold text-white w-full">
                              Work
                              </a>
                              <button
                                id="headlessui-disclosure-button-:r19:"
                                type="button"
                                aria-expanded="false"
                                data-headlessui-state=""
                              >
                                <img
                                  src="/assets/images/arrow.svg"
                                  className=", ''"
                                  alt="arrow"
                                />
                              </button>
                            </div>
                          </div>
                          <div className="-mx-3" data-headlessui-state="">
                            <div className="flex w-full items-center justify-between px-3">
                              <a href="#topfooter" className="text-3xl font-bold text-white w-full">
                              Contact
                              </a>
                              <button
                                id="headlessui-disclosure-button-:r19:"
                                type="button"
                                aria-expanded="false"
                                data-headlessui-state=""
                              >
                                <img
                                  src="/assets/images/arrow.svg"
                                  className=", ''"
                                  alt="arrow"
                                />
                              </button>
                            </div>
                          </div>

                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex">
                    <a href="https://www.linkedin.com/company/webinventix/" rel="noreferrer">
                      <img
                        className="w-[35px] h-[35px] hovered-icon"
                        src="/assets/images/linkdin.png"
                        alt="LinkedIn"
                      />
                    </a>
                    <a  href="https://www.facebook.com/people/Web-Inventix/61557920167276/" rel="noreferrer">
                      <img
                        className="w-[35px] h-[35px] hovered-icon"
                        src="/assets/images/facebook.png"
                        alt="Facebook"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            )}
          </div>
          <button
            type="button"
            data-headlessui-focus-guard="true"
            aria-hidden="true"
            style={{
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
          />
        </div>
      </div>
    </header>
  );
}

export default Navbar;
