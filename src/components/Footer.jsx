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
              <a href="#serviceTabs">
                <p className=" font-medium leading-6 text-neutral-500 flex items-center text-xs lg:text-sm">
                  <img
                    src="assets/images/dot.svg"
                    className="pe-2"
                    alt="bulletpoint"
                  />
                  services{" "}
                </p>

              </a>
            </div>
            <div className="w-[50%] md:w-[22%] flex justify-center md:block">
              <a href="#case-studies">
                <p className=" font-medium leading-6 text-neutral-500 flex items-center text-xs lg:text-sm">
                  <img
                    src="assets/images/dot.svg"
                    className="pe-2"
                    alt="bulletpoint"
                  />
                  work{" "}
                </p>
              </a>
            </div>
            <div className="w-[50%] md:w-[32%]">
              <a href="#topfooter">
                <p className=" font-medium leading-6 text-neutral-500 flex items-center text-xs lg:text-sm">
                  <img
                    src="assets/images/dot.svg"
                    className="pe-2"
                    alt="bulletpoint"
                  />
                  contact{" "}
                </p>

              </a>
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
                  180 John Street,Old Toronto, Toronto M5T 1X5, 
                  <br />
                  10 W 39th St, New York, NY 10018
                  <br />
                  Canada{" "}
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
                    href="tel:(888) 717-5019"
                    className="text-white font-medium menu_links text-md md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl"
                  >
                    (888) 717-5019
                  </a>{" "}
                </li>
                <li>
                  <a
                    href="mailto:info@webinventix.com"
                    className="text-white font-medium menu_links text-md md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl"
                  >
                    info@webinventix.com
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
                  <a href="https://www.linkedin.com/company/webinventix/" target="_blank" rel="noopener noreferrer">
                    <img
                      src="/assets/images/linkdin.svg"
                      className="socialIconsfooter w-[12px] h-[12px] md:w-auto md:h-auto object-cover"
                      alt="LinkedIn"
                    />
                  </a>
                  {/* <a href="#" target="_blank" rel="noopener noreferrer">
                    <img
                      src="/assets/images/twitter.svg"
                      className="socialIconsfooter w-[12px] h-[12px] md:w-auto md:h-auto object-cover"
                      alt="Twitter"
                    />
                  </a> */}
                  <a href="https://www.facebook.com/people/Web-Inventix/61557920167276/" target="_blank" rel="noopener noreferrer">
                    <img
                      src="/assets/images/facebook.svg"
                      className="socialIconsfooter w-[12px] h-[12px] md:w-auto md:h-auto object-cover"
                      alt="Facebook"
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
