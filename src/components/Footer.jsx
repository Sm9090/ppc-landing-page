import React from "react";

function Footer() {
  return (
    <div className="block">
      <style
        dangerouslySetInnerHTML={{
          __html:
            "\n        .dark-theme .start-project {\n          background-color:  !important;\n        }\n      ",
        }}
      />
      <section
        id="topfooter"
        className="start-project bg-white relative w-full lg:min-h-[80vh] z-50 flex items-center justify-center -top-0.5"
      >
        <div className="pt-14 mx-auto text-center max-w-7xl px-6 md:py-24 pb-14 lg:px-8">
          <p className="text-black mb-2 text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl">
            Pull the Trigger !
          </p>
          <div className="overflow-hidden">
            <h2 className="text-black font-extrabold text-[43px] leading-none lg:text-6xl xl:text-7xl 2xl:text-8xl lg:tracking-[-4px] tracking-[-2px] pb-2 2xl:pb-[11px]">
              {" "}
              Let’s bring your <br className="min-[580px]:block hidden" />
              vision to life
            </h2>{" "}
          </div>
          <div className="lg:mt-4 mt-1 flex items-center justify-center gap-x-4">
            <button className="header-module--buttonChange--18e23 bg-black text-white mt-2 items-center px-6 md:px-11 h-[40px] md:h-12 border-transparent rounded-full font-extrabold text-sm">
              <span className="pb-[3px] md:pb-1.5">Get Started</span>
              <span className="pb-[3px] md:pb-1.5">Get Started</span>
            </button>
          </div>
        </div>
      </section>
      <footer className="footer bg-dark-theme lg:sticky left-0 z-10">
        <div className="mx-auto max-w-7xl px-6 pt-14 lg:px-8 lg:pt-20 pb-10 md:pt-24">
          <div className="flex flex-wrap md:gap-y-0 gap-y-8">
            <div className="w-[50%] md:w-[21%]">
              <div>
                <p className=" font-medium leading-6 text-neutral-500 flex items-center text-xs lg:text-sm">
                  <img
                    src="assets/images/dot.svg"
                    className="pe-2"
                    alt="bulletpoint"
                  />
                  Company{" "}
                </p>
                <ul className="mt-2 md:mt-4 space-y-1">
                  <li>
                    <a
                      className="hover:text-theme menu_links"
                      href="#"
                    >
                      <p className="text-sm md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-medium text-white menu_links leading-7 md:leading-12">
                        {" "}
                        <span>About Us</span>{" "}
                      </p>
                    </a>
                  </li>
                  <li>
                    <a className="hover:text-theme menu_links" href="#testimonials">
                      <p className="text-sm md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-medium text-white menu_links leading-7 md:leading-12">
                        {" "}
                        <span>Testimonials</span>{" "}
                      </p>
                    </a>
                  </li>
                  <li>
                    <a className="hover:text-theme menu_links" href="#">
                      <p className="text-sm md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-medium text-white menu_links leading-7 md:leading-12">
                        {" "}
                        <span>Process</span>{" "}
                      </p>
                    </a>
                  </li>
                  <li>
                    <a className="hover:text-theme menu_links" href="#">
                      <p className="text-sm md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-medium text-white menu_links leading-7 md:leading-12">
                        {" "}
                        <span>Contact</span>{" "}
                      </p>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="w-[50%] md:w-[22%] flex justify-center md:block">
              <div>
                <p className=" font-medium leading-6 text-neutral-500 flex items-center text-xs lg:text-sm">
                  <img
                    src="assets/images/dot.svg"
                    className="pe-2"
                    alt="bulletpoint"
                  />
                  Resources{" "}
                </p>
                <ul className="mt-2 md:mt-4 space-y-1">
                  <li>
                    <a className="hover:text-theme menu_links" href="#recent-blogs">
                      <p className="text-sm md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-medium text-white menu_links leading-7 md:leading-12">
                        {" "}
                        <span>Blog</span>{" "}
                      </p>
                    </a>
                  </li>
                  <li>
                    <a className="hover:text-theme menu_links" href="#">
                      <p className="text-sm md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-medium text-white menu_links leading-7 md:leading-12">
                        {" "}
                        <span>Events</span>{" "}
                      </p>
                    </a>
                  </li>
                  <li>
                    <a className="hover:text-theme menu_links" href="#">
                      <p className="text-sm md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-medium text-white menu_links leading-7 md:leading-12">
                        {" "}
                        <span>Press Release</span>{" "}
                      </p>
                    </a>
                  </li>
                  <li>
                    <a className="hover:text-theme menu_links" href="#">
                      <p className="text-sm md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-medium text-white menu_links leading-7 md:leading-12">
                        {" "}
                        <span>Work</span>{" "}
                      </p>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="w-[50%] md:w-[32%]">
              <div>
                <p className=" font-medium leading-6 text-neutral-500 flex items-center text-xs lg:text-sm">
                  <img
                    src="assets/images/dot.svg"
                    className="pe-2"
                    alt="bulletpoint"
                  />
                  Services{" "}
                </p>
                <ul className="mt-2 md:mt-4 space-y-1">
                  <li>
                    <a className="hover:text-theme menu_links" href="#">
                      <p className="text-sm md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-medium text-white menu_links leading-7 md:leading-12">
                        {" "}
                        <span>Mobile App</span>{" "}
                      </p>
                    </a>
                  </li>
                  <li>
                    <a className="hover:text-theme menu_links" href="#">
                      <p className="text-sm md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-medium text-white menu_links leading-7 md:leading-12">
                        {" "}
                        <span>Game Development</span>{" "}
                      </p>
                    </a>
                  </li>
                  <li>
                    <a className="hover:text-theme menu_links" href="#">
                      <p className="text-sm md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-medium text-white menu_links leading-7 md:leading-12">
                        {" "}
                        <span>Blockchain Development</span>{" "}
                      </p>
                    </a>
                  </li>
                  <li>
                    <a className="hover:text-theme menu_links" href="#">
                      <p className="text-sm md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-medium text-white menu_links leading-7 md:leading-12">
                        {" "}
                        <span>AI Development</span>{" "}
                      </p>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="w-[50%] md:w-[21%] flex justify-center md:block">
              <div>
                <p className=" font-medium leading-6 text-neutral-500 flex items-center text-xs lg:text-sm">
                  <img
                    src="assets/images/dot.svg"
                    className="pe-2"
                    alt="bulletpoint"
                  />
                  Insights{" "}
                </p>
                <ul className="mt-2 md:mt-4 space-y-1">
                  <li>
                    <a className="hover:text-theme menu_links" href="#">
                      <p className="text-sm md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-medium text-white menu_links leading-7 md:leading-12">
                        {" "}
                        <span>University</span>{" "}
                      </p>
                    </a>
                  </li>
                  <li>
                    <a className="hover:text-theme menu_links" href="#">
                      <p className="text-sm md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-medium text-white menu_links leading-7 md:leading-12">
                        {" "}
                        <span>Careers</span>{" "}
                      </p>
                    </a>
                  </li>
                  <li>
                    <a className="hover:text-theme menu_links" href="#">
                      <p className="text-sm md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-medium text-white menu_links leading-7 md:leading-12">
                        {" "}
                        <span>Manifesto</span>{" "}
                      </p>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-theme menu_links">
                      <p className="text-sm md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-medium text-white menu_links leading-7 md:leading-12">
                        {" "}
                        <span>Culture Book</span>{" "}
                      </p>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="border-t border-b border-white/10 my-10 md:my-16 md:py-16 py-10">
            <p className=" font-medium leading-6 text-neutral-500 flex items-center mb-3 md:mb-4 text-xs lg:text-sm">
              <img
                src="assets/images/dot.svg"
                className="pe-3"
                alt="bulletpoint"
              />
              Locations{" "}
            </p>
            <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-x-16 gap-y-8">
              <div>
                <p className=" undefined text-white mb-1 font-medium text-md md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">
                  {" "}
                  West Palm Beach
                </p>
                <p className="undefined text-white mb-3 text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl">
                  {" "}
                </p>
                <p className=" undefined text-neutral-500 font-medium leading-5 md:leading-6 text-xs xl:text-sm 2xl:text-base">
                  {" "}
                  560 Village Blvd., Suite 120 #3,
                  <br />
                  West Palm Beach, FL-33409,
                  <br />
                  United States{" "}
                </p>
              </div>
              <div>
                <p className=" undefined text-white mb-1 font-medium text-md md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">
                  {" "}
                  Manchester
                </p>
                <p className="undefined text-white mb-3 text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl">
                  {" "}
                </p>
                <p className=" undefined text-neutral-500 font-medium leading-5 md:leading-6 text-xs xl:text-sm 2xl:text-base">
                  {" "}
                  73 Meadway, Bramhall
                  <br />
                  Stockport, Manchester - SK7 1LX,
                  <br />
                  United Kingdom{" "}
                </p>
              </div>
              <div>
                <p className=" undefined text-white mb-1 font-medium text-md md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">
                  {" "}
                  Dubai
                </p>
                <p className="undefined text-white mb-3 text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl">
                  {" "}
                </p>
                <p className=" undefined text-neutral-500 font-medium leading-5 md:leading-6 text-xs xl:text-sm 2xl:text-base">
                  {" "}
                  Building 11, Level 7, Bay Square,
                  <br />
                  Business Bay, Dubai - 23304,
                  <br />
                  &lt; !-- --&gt;United Arab Emirates{" "}
                </p>
              </div>
              <div>
                <p className=" undefined text-white mb-1 font-medium text-md md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">
                  {" "}
                  Karachi
                </p>
                <p className="undefined text-white mb-3 text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl">
                  {" "}
                </p>
                <p className=" undefined text-neutral-500 font-medium leading-5 md:leading-6 text-xs xl:text-sm 2xl:text-base">
                  {" "}
                  54C, Kashmir Road, Block 2,
                  <br />
                  PECHS, Karachi, Sindh - 75400,
                  <br />
                  Pakistan{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="flex items-end justify-between">
            <div>
              <p className=" font-medium leading-6 text-neutral-500 flex items-center mb-4 text-xs lg:text-sm">
                <img
                  src="assets/images/dot.svg"
                  className="pe-3"
                  alt="bulletpoint"
                />
                Contact{" "}
              </p>
              <ul className="mt-4 space-y-1">
                <li>
                  <a
                    href="tel:866-978-2220"
                    className="text-white font-medium menu_links text-md md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl"
                  >
                    866-978-2220
                  </a>{" "}
                </li>
                <li>
                  <a
                    href="cdn-cgi/l/email-protection.html#b2dbdcd4ddf2d1c7d0dbca9cd1dd"
                    className="text-white font-medium menu_links text-md md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl"
                  >
                    info@WebInventix.co
                  </a>{" "}
                </li>
              </ul>
            </div>
            <div className="hidden sm:flex flex-col">
              <a href="index-2.html" className="justify-center mb-5 flex">
                <img
                  src="assets/images/logo.png"
                  width={140}
                  className=" block"
                  alt="WebInventix logo"
                />
              </a>
              <p className=" text-neutral-500 text-center block mb-3.5 text-xs lg:text-sm">
                © 2025 WebInventix. All Rights Reserved
              </p>
              <div className="flex gap-2 items-center">
                <p className=" text-neutral-500 text-center block text-xs lg:text-sm">
                  Content protected by DMCA.com
                </p>
                <a
                  href="#"
                  target="_blank"
                  title="DMCA.com Protection Status"
                  className="dmca-badge"
                >
                  <img
                    src="/assets/images/dmca-badge.png"
                    alt="DMCA.com Protection Status"
                    width={120}
                  />
                </a>
              </div>
            </div>
            <div className="flex flex-col items-end">
              <a href="#" className="flex sm:hidden mb-3 sm:mb-0">
                <img
                  src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTA3IiBoZWlnaHQ9IjMyIiB2aWV3Qm94PSIwIDAgMTA3IDMyIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cGF0aCBkPSJNMTEuMDAzNiA5Ljg2MzI4QzE1Ljg2OTcgOS44NjMyOCAxOS4yMjE4IDEyLjU1MTEgMjAuMzAzMiAxNy4wMzA4SDE0Ljg5NjRDMTQuMzU1OCAxNS4zNTA5IDEyLjk1IDE0LjIzMSAxMC44OTU1IDE0LjIzMUM4LjA4Mzk2IDE0LjIzMSA2LjI0NTY4IDE2LjQ3MDggNi4yNDU2OCAyMC4zOTA2QzYuMjQ1NjggMjQuMzEwMyA4LjA4Mzk2IDI2LjQzODIgMTAuODk1NSAyNi40MzgyQzEyLjk1IDI2LjQzODIgMTQuMjQ3NiAyNS40MzAyIDE0Ljg5NjQgMjMuNjM4NEgyMC4zMDMyQzE5LjIyMTggMjguMDA2MSAxNS45Nzc4IDMwLjgwNTkgMTEuMDAzNiAzMC44MDU5QzUuMjcyNDYgMzAuNjkzOSAxLjI3MTQ4IDI2LjY2MjIgMS4yNzE0OCAyMC4yNzg2QzEuMjcxNDggMTMuODk1IDUuMjcyNDYgOS44NjMyOCAxMS4wMDM2IDkuODYzMjhaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNNDIuNDcxIDMwLjQ2OTlIMzcuNDk2OFYyNy44OTRDMzYuMzA3MyAyOS41NzM5IDM0LjE0NDYgMzAuNjkzOCAzMS42NTc1IDMwLjY5MzhDMjcuMTE1OCAzMC42OTM4IDIzLjc2MzcgMjcuNjcwMSAyMy43NjM3IDIyLjA3MDRWMTAuMTk5MkgyOC43Mzc5VjIxLjM5ODVDMjguNzM3OSAyNC42NDYzIDMwLjQ2OCAyNi40MzgxIDMzLjA2MzIgMjYuNDM4MUMzNS43NjY2IDI2LjQzODEgMzcuNDk2OCAyNC42NDYzIDM3LjQ5NjggMjEuMzk4NVYxMC4xOTkySDQyLjQ3MVYzMC40Njk5WiIgZmlsbD0id2hpdGUiLz4KPHBhdGggZD0iTTU4LjgwMDIgOS44NjM0MkM2My43NzQ0IDkuODYzNDIgNjcuNzc1MyAxNC4wMDcxIDY3Ljc3NTMgMjAuMjc4N0M2Ny43NzUzIDI2LjU1MDMgNjMuNzc0NCAzMC44MDYgNTguODAwMiAzMC44MDZDNTUuNzcyNCAzMC44MDYgNTMuNTAxNiAyOS4zNTAxIDUyLjMxMjEgMjcuNTU4MlYzMC40N0g0Ny4zMzc5VjMuMjU1ODZINTIuMzEyMVYxMy4xMTEyQzUzLjUwMTYgMTEuMzE5MyA1NS44ODA1IDkuODYzNDIgNTguODAwMiA5Ljg2MzQyWk01Ny41MDI1IDE0LjM0MzFDNTQuNzk5MiAxNC4zNDMxIDUyLjMxMjEgMTYuNDcxIDUyLjMxMjEgMjAuMzkwN0M1Mi4zMTIxIDI0LjMxMDUgNTQuNzk5MiAyNi40MzgzIDU3LjUwMjUgMjYuNDM4M0M2MC4yMDU5IDI2LjQzODMgNjIuODAxMSAyNC4xOTg1IDYyLjgwMTEgMjAuMzkwN0M2Mi44MDExIDE2LjM1OSA2MC4yMDU5IDE0LjM0MzEgNTcuNTAyNSAxNC4zNDMxWiIgZmlsbD0id2hpdGUiLz4KPHBhdGggZD0iTTc2LjQyNTQgMTAuMTk5Mkg3MS40NTEyVjMwLjU4MTlINzYuNDI1NFYxMC4xOTkyWiIgZmlsbD0id2hpdGUiLz4KPHBhdGggZD0iTTg4LjEwNiAyNC4xOThMODQuNTM3NiAzMC40Njk2SDc5LjIzOUw4NS42MTg5IDIwLjI3ODJMNzkuMTMwOSAxMC4wODY5SDg0Ljc1MzlMODguODYzIDE2LjM1ODVMOTIuNTM5NSAxMC4wODY5SDk3LjgzODFMOTEuMzUwMSAyMC4yNzgyTDk3LjgzODEgMzAuNDY5Nkg5Mi4xMDdMODguMTA2IDI0LjE5OFoiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik03My44MjY4IDguMjk2MDhDNzUuNjc4MSA4LjI5NjA4IDc3LjE3OSA2Ljc0MTcxIDc3LjE3OSA0LjgyNDMxQzc3LjE3OSAyLjkwNjkgNzUuNjc4MSAxLjM1MjU0IDczLjgyNjggMS4zNTI1NEM3MS45NzU0IDEuMzUyNTQgNzAuNDc0NiAyLjkwNjkgNzAuNDc0NiA0LjgyNDMxQzcwLjQ3NDYgNi43NDE3MSA3MS45NzU0IDguMjk2MDggNzMuODI2OCA4LjI5NjA4WiIgZmlsbD0id2hpdGUiLz4KPHBhdGggZD0iTTEwMi44MTEgMzAuMjQ2M0MxMDQuNjYzIDMwLjI0NjMgMTA2LjE2MyAyOC42OTE5IDEwNi4xNjMgMjYuNzc0NUMxMDYuMTYzIDI0Ljg1NzEgMTA0LjY2MyAyMy4zMDI3IDEwMi44MTEgMjMuMzAyN0MxMDAuOTYgMjMuMzAyNyA5OS40NTkgMjQuODU3MSA5OS40NTkgMjYuNzc0NUM5OS40NTkgMjguNjkxOSAxMDAuOTYgMzAuMjQ2MyAxMDIuODExIDMwLjI0NjNaIiBmaWxsPSIjMkVEMDZFIi8+Cjwvc3ZnPgo="
                  width={85}
                  className="2xl:w-24 block"
                  alt="WebInventix logo"
                />
              </a>
              <div className="flex flex-col mb-2 sm:mb-5 space-y-4">
                <div className="flex justify-end space-x-4">
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <img
                      src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEzLjQxNTQgMjIuODk3N0g4Ljg0NzY2VjguOTY0OTlIMTMuMjEzNVYxMC44NzY1QzEzLjI2NTQgMTAuODMwMiAxMy4zMTM4IDEwLjc4MDQgMTMuMzU4MiAxMC43Mjc2QzE0LjEyMjMgOS41NTkzMiAxNS4yNTYyIDguOTA4MzYgMTYuNjYwMiA4LjY5MzU5QzE3Ljg4MjggOC41MDYzNiAxOS4xMDEgOC41OTU2NCAyMC4yNjA5IDkuMDQ2MUMyMS42Mzc4IDkuNTgwNzQgMjIuMzcyMiAxMC42MjQgMjIuNzU0NSAxMS45MzE1QzIzLjAxNDggMTIuODIxNyAyMy4xMDkzIDEzLjczNTkgMjMuMTE2MyAxNC42NTIyQzIzLjEzNjggMTcuMzM4MSAyMy4xMjg3IDIwLjAyNDEgMjMuMTMwOSAyMi43MTI2QzIzLjEzMDkgMjIuNzUzOSAyMy4xMjUgMjIuNzk0NyAyMy4xMjA2IDIyLjg1MTNIMTguNTM5NFYyMi41NjMxQzE4LjUzOTQgMjAuMjg1MyAxOC41NDY5IDE4LjAwNzQgMTguNTI5NyAxNS43Mjk2QzE4LjUyOCAxNS4yMDM0IDE4LjQ3NjkgMTQuNjc4NSAxOC4zNzY4IDE0LjE2MDlDMTguMDg5NiAxMi43MTk3IDE3LjA2ODQgMTIuMjczMyAxNS43MjI4IDEyLjQyNjRDMTQuNDE3NiAxMi41Nzk0IDEzLjcwODYgMTMuMzAyOCAxMy41MjY3IDE0LjYwMDZDMTMuNDU5NCAxNS4wNzIgMTMuNDIzOCAxNS41NDY4IDEzLjQyMDMgMTYuMDIyNEMxMy40MDg5IDE4LjIwNjkgMTMuNDE1NCAyMC4zOTE0IDEzLjQxNTQgMjIuNTc1OFYyMi44OTc3WiIgZmlsbD0id2hpdGUiLz4KPHBhdGggZD0iTTEuMzc4OTEgMjIuODkyVjguOTY0ODRINS45NDI4OVYyMi44OTJIMS4zNzg5MVoiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik02LjMwODY0IDQuNTA4OTNDNi4zMTE4OCA1Ljg5NzU2IDUuMTIwNjYgNy4wNDE4MyAzLjY3MDI1IDcuMDQzODdDMi4yMTIyOCA3LjA0Mzg3IDAuOTk2MjI5IDUuODkyOTcgMS4wMDAwMSA0LjUwNjM4QzEuMDAzNzkgMy4xNDI3NCAyLjIwMjU2IDIuMDA2NjMgMy42NDU5NSAyQzQuMzUxMTkgMS45OTkxOSA1LjAyNzg5IDIuMjYzMDUgNS41MjcyMiAyLjczMzU1QzYuMDI2NTYgMy4yMDQwNSA2LjMwNzY0IDMuODQyNjYgNi4zMDg2NCA0LjUwODkzWiIgZmlsbD0id2hpdGUiLz4KPC9zdmc+Cg=="
                      className="socialIconsfooter w-[12px] h-[12px] md:w-auto md:h-auto object-cover"
                      alt="LinkedIn"
                    />
                  </a>
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <img
                      src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTMgMy4wMDQ0N0gzLjIyNjk0QzQuODE0MTEgMy4wMDQ0NyA2LjQwMDkzIDMuMDA2OTQgNy45ODgxIDMuMDAwNThDOC4xMzIzMiAzLjAwMDU4IDguMjE2MDcgMy4wNDIyNyA4LjI5NzA1IDMuMTYyMzhDOS43MjEyMyA1LjI3ODA3IDExLjE0ODMgNy4zOTE5OSAxMi41NzgzIDkuNTA0MTVDMTIuNjA3MSA5LjU0NzI1IDEyLjYzODcgOS41ODgyMyAxMi42ODI1IDkuNjQ3NThDMTIuOTExNiA5LjM3OTA5IDEzLjEzNDMgOS4xMTk0MiAxMy4zNTQ3IDguODU4N0MxNC45NTg0IDYuOTYyOTkgMTYuNTYxOCA1LjA2NTYzIDE4LjE2NDggMy4xNjY2MkMxOC4yNjIxIDMuMDUxMSAxOC4zNjA4IDIuOTk1OTkgMTguNTE2NSAzLjAwMDIzQzE4Ljk0NCAzLjAxMjI0IDE5LjM3MTggMy4wMDQ0NyAxOS44NDIzIDMuMDA0NDdDMTcuNjcwNiA1LjU3MTQxIDE1LjUyMTUgOC4xMTExNiAxMy4zNjE2IDEwLjY2MzNMMjAuNDAxNSAyMS4wNzg3QzIwLjMzNDggMjEuMDg0IDIwLjI4NzIgMjEuMDkxMSAyMC4yMzk2IDIxLjA5MTFDMTguNjE3OCAyMS4wOTExIDE2Ljk5NiAyMS4wOTIxIDE1LjM3NDEgMjEuMDk0M0MxNS4yNjE1IDIxLjA5NDMgMTUuMjAwNCAyMS4wNTg5IDE1LjEzNjggMjAuOTY1QzEzLjYyNiAxOC43MjM1IDEyLjExMjkgMTYuNDg0MSAxMC41OTc3IDE0LjI0NjZDMTAuNTYyOSAxNC4xOTQgMTAuNTI0NyAxNC4xNDMxIDEwLjQ3NjggMTQuMDc0OUMxMC4xODQxIDE0LjQxOTQgOS45MDA5IDE0Ljc1MTQgOS42MTkwNSAxNS4wODQ2QzguMDc0NjMgMTYuOTA5MiA2LjUzMDMyIDE4LjczNDUgNC45ODYxMyAyMC41NjA1QzQuOTAzMDcgMjAuNjU4NyA0LjgwNjExIDIwLjc0NzcgNC43MzkwNCAyMC44NTYyQzQuNjE3MDYgMjEuMDUzMyA0LjQ1NDQxIDIxLjEwOCA0LjIzMDk1IDIxLjA5NzRDMy44MzQ3NyAyMS4wNzk0IDMuNDM3MTkgMjEuMDkyNSAzLjAwMDM1IDIxLjA5MjVMOS43OTY5OSAxMy4wNjAzTDMgMy4wMDQ0N1pNMTguMjg3NSAxOS45NTYzQzE4LjI0MyAxOS44ODU3IDE4LjIxMjQgMTkuODMxNiAxOC4xNzc3IDE5Ljc3OTdDMTcuMDg3NCAxOC4xOTQ5IDE1Ljk5NjcgMTYuNjA5NiAxNC45MDU3IDE1LjAyMzhDMTIuNDUzMyAxMS40NTg1IDEwLjAwMTcgNy44OTIgNy41NTA5IDQuMzI0MzNDNy40Nzc5MiA0LjIxODM0IDcuNDA0OTQgNC4xNjg4OCA3LjI3MDc5IDQuMTcxQzYuNjY4NTIgNC4xNzk4NCA2LjA2NjI2IDQuMTc0NTQgNS40NjM2NCA0LjE3NDU0SDUuMDk2OTlDNS4xNDMyMiA0LjI0ODcyIDUuMTcxMDIgNC4yOTc4MyA1LjIwMTI1IDQuMzQ0NDZDOC43NTQ4NiA5LjUxMDM5IDEyLjMwNzMgMTQuNjc2OSAxNS44NTg2IDE5Ljg0NEMxNS44ODM1IDE5Ljg4NiAxNS45MTk1IDE5LjkyIDE1Ljk2MjUgMTkuOTQyQzE2LjAwNTYgMTkuOTY0MSAxNi4wNTM5IDE5Ljk3MzMgMTYuMTAxOSAxOS45Njg3QzE2Ljc3MzYgMTkuOTYzOCAxNy40NDU4IDE5Ljk2NjYgMTguMTE3NSAxOS45NjU5QzE4LjE2NTkgMTkuOTY1OSAxOC4yMTU2IDE5Ljk2MDYgMTguMjg3NSAxOS45NTYzWiIgZmlsbD0id2hpdGUiLz4KPC9zdmc+Cg=="
                      className="socialIconsfooter w-[12px] h-[12px] md:w-auto md:h-auto object-cover"
                      alt="Twitter"
                    />
                  </a>
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <img
                      src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE3LjE4NzMgMTMuMzE1SDE0LjAxNTdWMjIuNzk0MUgxMC4xOTMxVjEzLjMxNzlIN1Y5LjYxODA2SDEwLjE4OTlDMTAuMTg5OSA5LjUxNDA1IDEwLjE4OTkgOS40MzQ4MiAxMC4xODk5IDkuMzU1NTlDMTAuMTkzMSA4LjM5NDI3IDEwLjE2NTkgNy40MzEzMyAxMC4yMDc0IDYuNDcwODNDMTAuMjY0MyA1LjE2NDU2IDEwLjY3NDIgMy45OTIzNyAxMS42ODg4IDMuMDk4NUMxMi40MTQ4IDIuNDU5NzkgMTMuMjgzMSAyLjE0NDA5IDE0LjIzMTggMi4wNDkwMUMxNS4yNjY3IDEuOTQ1IDE2LjMwMDMgMi4wMjU4NiAxNy4zMzIzIDIuMTEyOEMxNy40Nzk0IDIuMTI0OTkgMTcuNjI2NSAyLjEzNTE1IDE3Ljc4MzcgMi4xNDczNFY1LjQ1NjY5QzE3LjcxNTEgNS40NTY2OSAxNy42NDQgNS40NTY2OSAxNy41NzI5IDUuNDU2NjlDMTYuODQ4OCA1LjQ2ODA3IDE2LjEyNCA1LjQ1OTU0IDE1LjQwMTIgNS40OTczMkMxNC41NDc5IDUuNTQxMiAxNC4wNjA0IDYuMDE2NTggMTQuMDI2NiA2Ljg3MTA0QzEzLjk5MTMgNy43NjQ5MSAxNC4wMTUzIDguNjU4NzggMTQuMDE0IDkuNTUyNjVDMTQuMDE5IDkuNTczNiAxNC4wMjY0IDkuNTkzOTEgMTQuMDM2IDkuNjEzMTlIMTcuNjY1OUMxNy41MDM0IDEwLjg1NDQgMTcuMzQ3NCAxMi4wNzAxIDE3LjE4NzMgMTMuMzE1WiIgZmlsbD0id2hpdGUiLz4KPC9zdmc+Cg=="
                      className="socialIconsfooter w-[12px] h-[12px] md:w-auto md:h-auto object-cover"
                      alt="Facebook"
                    />
                  </a>
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <img
                      src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTIyLjg5OTUgMTIuNDQ5N0MyMi44OTk1IDE0LjUxNyAyMi4yODYzIDE2LjUzNzggMjEuMTM3NSAxOC4yNTY1QzE5Ljk4ODggMTkuOTc1MiAxOC4zNTYxIDIxLjMxNDYgMTYuNDQ1OSAyMi4xMDUxQzE0LjUzNTggMjIuODk1NyAxMi40MzQxIDIzLjEwMiAxMC40MDY3IDIyLjY5NzhDOC4zNzkzNiAyMi4yOTM2IDYuNTE3NDIgMjEuMjk3MiA1LjA1NjQ3IDE5LjgzNDZDMy41OTU1MiAxOC4zNzIgMi42MDEyMiAxNi41MDg5IDIuMTk5MzUgMTQuNDgxMUMxLjc5NzQ4IDEyLjQ1MzMgMi4wMDYxMSAxMC4zNTE4IDIuNzk4ODQgOC40NDI1OUMzLjU5MTU4IDYuNTMzMzYgNC45MzI3OSA0LjkwMjE1IDYuNjUyNzkgMy43NTUzNUM4LjM3MjggMi42MDg1NCAxMC4zOTQzIDEuOTk3NjYgMTIuNDYxNiAyLjAwMDAxQzEzLjgzMzYgMS45OTg5OCAxNS4xOTIzIDIuMjY4NjYgMTYuNDU5OSAyLjc5MzU5QzE3LjcyNzUgMy4zMTg1MyAxOC44NzkxIDQuMDg4MzkgMTkuODQ4NyA1LjA1OTFDMjAuODE4MyA2LjAyOTgxIDIxLjU4NjkgNy4xODIyNyAyMi4xMTA0IDguNDUwNDhDMjIuNjMzOSA5LjcxODY5IDIyLjkwMiAxMS4wNzc3IDIyLjg5OTUgMTIuNDQ5N1pNNi45NzM4MyAxOS40ODQxQzcuMDE0NjUgMTkuNTE2NCA3LjA0MjQxIDE5LjU0MzcgNy4wNzQyNSAxOS41NjgyQzguNTUzNTQgMjAuNjgwNSAxMC4yMTA0IDIxLjI4MjYgMTIuMDY2NCAyMS4zNTg1QzEzLjMzMTMgMjEuNDExMSAxNC41OTMyIDIxLjE5ODYgMTUuNzcxMiAyMC43MzQ4QzE1Ljg3NjEgMjAuNjk0IDE1Ljk0MDIgMjAuNjU2IDE1LjkxNDEgMjAuNTE4NUMxNS42MjgzIDE5LjAxOTIgMTUuMjcwMyAxNy41Mzg3IDE0Ljc5MzYgMTYuMDg4NEMxNC41NTMxIDE1LjM1NTcgMTQuMjkzNSAxNC42Mjk1IDE0LjAzOTYgMTMuODkwN0MxMy45NjYyIDEzLjkxNTEgMTMuOTEzOSAxMy45Mjc4IDEzLjg2NTggMTMuOTQ5NEMxMy4yODU3IDE0LjIxMTkgMTIuNjk2MyAxNC40NTU2IDEyLjEyOTMgMTQuNzQzNEMxMC42MzQxIDE1LjUwMTQgOS4yNjU0MiAxNi40MzMzIDguMTUzNTEgMTcuNzA5M0M3LjY4MTY0IDE4LjI0ODkgNy4yNzE4MSAxOC44MjU3IDYuOTczODMgMTkuNDg0MVpNMTIuNjk5MSAxMC44OTI5QzkuNjk3NyAxMS43OTA5IDYuNjQ5MzIgMTIuMTUxOCAzLjU1ODA4IDEyLjE2NTZDMy4yNDkwNyAxMy44MjQ1IDQuNDg5MTYgMTcuMjI3MiA1LjgxNzAxIDE4LjM4MjhDNy41NzY3MyAxNS40MTU3IDEwLjIxOTQgMTMuNTYzNyAxMy40MDk0IDEyLjM3MzRMMTIuNjk5MSAxMC44OTI5Wk0xMS45NTQ2IDkuNTIxNzdDMTAuOTM5OCA3LjcyODU4IDkuODYzMDIgNi4wMTM3NiA4LjY0MzM0IDQuMzk1MjhDNi4xNTc0NSA1LjQ5MjUgNC4xNzA3NyA4LjA3ODQgMy43MzkzMSAxMC42MTI5QzYuNTEzMDYgMTAuNjAwOSA5LjI3Mzg4IDEwLjIzNDIgMTEuOTU0NiA5LjUyMTc3Wk0xMC4zMjkyIDMuNzczNkMxMS42MDY4IDUuNDQwNjYgMTIuNjk4NyA3LjE3MDU4IDEzLjY4NjEgOC45ODI5NUMxNS40ODQyIDguMjUwMjUgMTcuMTMyOSA3LjMzNTA4IDE4LjM0ODkgNS43NjE5MUMxNi4wMTIgMy43NDU0NCAxMy4zNTMxIDMuMTUwNyAxMC4zMjkyIDMuNzczNlpNMTkuMzUwMiA2Ljc5MDE1QzE4LjAxNjMgOC40MzY3OSAxNi4yODAyIDkuNDg4MyAxNC4zODAxIDEwLjMwOTZDMTQuNjI4NyAxMC44NzI5IDE0Ljg2OTkgMTEuNDI0OCAxNS4xMTkzIDExLjk3MjFDMTUuMTM4MSAxMi4wMTMgMTUuMjIyNiAxMi4wNDg1IDE1LjI3NDQgMTIuMDQ2NEMxNS41MDUxIDEyLjAzNjYgMTUuNzM0NSAxMi4wMDg1IDE1Ljk2NDcgMTEuOTkzNEMxNy42MjA4IDExLjg4OSAxOS4yODM1IDExLjk4MTggMjAuOTE3NyAxMi4yNjk3QzIxLjA2NTkgMTIuMjk1NCAyMS4yMTUzIDEyLjMxMzQgMjEuMzcgMTIuMzM1OEMyMS4zMzI0IDEwLjIzOSAyMC42NzE1IDguNDA3IDE5LjM1MTkgNi43ODg1MUwxOS4zNTAyIDYuNzkwMTVaTTE3LjQ0MDcgMTkuODYxN0MxOS41NDk4IDE4LjM2MTIgMjAuODE4NSAxNi4zODQzIDIxLjI3MTIgMTMuODY4MkMxOS40MzIzIDEzLjM0NDUgMTcuNTk0MiAxMy4xODUzIDE1LjcwMDIgMTMuNDc0M0MxNi40NTM3IDE1LjU2MDIgMTcuMDQ2NCAxNy42NjI4IDE3LjQ0MDcgMTkuODYxN1oiIGZpbGw9IndoaXRlIi8+Cjwvc3ZnPgo="
                      className="socialIconsfooter w-[12px] h-[12px] md:w-auto md:h-auto object-cover"
                      alt="Dribble"
                    />
                  </a>
                </div>
              </div>
              <div className="flex">
                <a href="#">
                  <p className="menu_links text-neutral-500 hidden sm:block text-xs lg:text-sm">
                    {" "}
                    Privacy Policy&nbsp; &nbsp;{" "}
                  </p>
                </a>
                <p className="menu_links text-neutral-500 hidden sm:block text-xs lg:text-sm">
                  |{" "}
                </p>
                <a href="#">
                  <p className="menu_links text-neutral-500 hidden sm:block text-xs lg:text-sm">
                    {" "}
                    &nbsp; &nbsp; Terms &amp; Conditions
                  </p>
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-white/10 mt-10 pt-10 block sm:hidden text-center ">
            <div className="flex justify-center pb-2">
              <a href="#">
                <p className=" text-neutral-500 sm:hidden block text-xs lg:text-sm">
                  Privacy Policy &nbsp; |
                </p>
              </a>
              <a href="#">
                <p className=" text-neutral-500 sm:hidden block text-xs lg:text-sm">
                  &nbsp; Terms &amp; Conditions
                </p>
              </a>
            </div>
            <p className=" text-neutral-500 sm:text-center pb-2 text-xs lg:text-sm">
              © 2025 WebInventix. All Rights Reserved
            </p>
            <div className="flex flex-col gap-2 items-center ">
              <p className=" text-neutral-500 text-center block text-xs lg:text-sm">
                Content protected by DMCA.com
              </p>
              <a
                href="http://www.dmca.com/Protection/Status.aspx?ID=e24518dd-1572-488a-a06f-e64b8b27d270&refurl=file:///C:/My%20Web%20Sites/WebInventix/www.WebInventix.co/index.html"
                target="_blank"
                title="DMCA.com Protection Status"
                className="dmca-badge"
              >
                <img
                  src="../images.dmca.com/Badges/dmca-badge-w150-5x1-068cb9.png?ID=e24518dd-1572-488a-a06f-e64b8b27d270"
                  width={120}
                  alt="DMCA.com Protection Status"
                />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
