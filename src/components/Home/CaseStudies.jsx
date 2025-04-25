import React, { useEffect } from 'react';

const CaseStudies = () => {
  useEffect(() => {
    const handleScroll = () => {
      // Get all elements with the transition class that already have translateY applied
      const elements = document.querySelectorAll('.CaseStudyImage .transition');
      
      elements.forEach((element) => {
        // Get the element's position relative to the viewport
        const rect = element.getBoundingClientRect();
        const elementTop = rect.top;
        const viewportHeight = window.innerHeight;
        
        // Calculate how far the element is into the viewport as a percentage
        // When element first enters viewport from bottom, percentage is 0
        // When element is centered in viewport, percentage is around 0.5
        // When element is about to leave viewport from top, percentage is 1
        const visibilityPercentage = 1 - (elementTop / viewportHeight);
        
        // Adjust the translateY value based on visibility
        // Map visibility from 0-1 to translateY from 30-0
        // Clamp between 0 and 30 to prevent going negative or above 30
        const translateY = Math.max(0, Math.min(30, 30 * (1 - visibilityPercentage)));
        
        // Apply the new translateY value
        element.style.transform = `translateY(${translateY}px)`;
      });
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
    
    // Initial call to set positions
    handleScroll();
    
    // Clean up
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section id="case-studies">
      <section className="textContent-sec">
        <div className="undefined px-6 lg:px-8 max-w-7xl mx-auto pt-14 md:pt-24 lg:pt-[10.5rem]">
          <div className="2xl:max-w-4xl lg:max-w-3xl">
            <div className="lg:overflow-hidden">
              <h2 className="undefined font-bold sentence-first-letter text-4xl xl:text-5xl 2xl:text-6xl tracking-[-2px] lg:-translate-y-[7px] xl:!leading-[55px] 2xl:!leading-[65px]">
                <span>our success stories</span>
              </h2>
            </div>
            <p className="undefined text-black lg:pe-[5rem] pt-6 lg:pt-[2.375rem] text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl">
              Proud to serve as the technology partner for industry leaders who
              have experienced our development expertise and excellence
              firsthand.
            </p>
          </div>
        </div>
      </section>
      <section className="case-studies overfow-hidden">
        <div className="bg-white" id="case-studies">
          <div className="mx-auto max-w-7xl px-6 lg:px-8  undefined ">
            <div className="grid grid-cols-1 md:grid-cols-2 mx-auto mt-12 lg:mt-20 gap-x-16 lg:gap-x-28">
              <article className="mt-12 md:mt-[0rem] first:mt-0 inline-block w-full CaseStudyImage">
                <a className="group" href="#" />
                <div className="relative">
                  <a className="group" href="#" />
                  <div
                    className="h-[380px] md:h-[538px] rounded-3xl hidden lg:block"
                    style={{
                      position: "relative",
                      overflow: "hidden",
                      width: "100%"
                    }}
                  >
                    <a className="group" href="#" />
                    <div
                      className="transition ease-out duration-[500ms]"
                      style={{
                        position: "absolute",
                        inset: "-30px 0px",
                        willChange: "transform",
                        transform: "translateY(30px)"
                      }}
                    >
                      <a className="group" href="#" />
                      <a href="#">
                        <img
                          src="/assets/images/4f_JT_Dni_Jnrsi0_Tclnf_Dw_Cb_04c568830d.webp"
                          className="w-full object-cover h-full transition-opacity duration-500 opacity-100"
                          loading="lazy"
                          alt="4par"
                        />
                      </a>
                    </div>
                  </div>
                  <div className="lg:rounded-[30px] rounded-2xl lg:hidden block overflow-hidden">
                    <a href="#">
                      <img
                        src="/assets/images/4f_JT_Dni_Jnrsi0_Tclnf_Dw_Cb_04c568830d.webp"
                        className="w-full object-cover h-full transition-opacity duration-500 opacity-100"
                        loading="lazy"
                        alt="4par"
                      />
                    </a>
                  </div>
                </div>
                <div className="max-w-full lg:max-w-xl">
                  <a
                    className="flex justify-between items-center pt-[20px] pb-[10px] cursor-pointer"
                    href="#"
                  >
                    <div className="h-[58px] w-[151px] flex">
                      <img
                        className="object-contain"
                        src="/assets/images/2_YRVITP_Fgz_GM_Ub71_Jw_Ol8c_a081b0d693.webp"
                        loading="lazy"
                        alt="4par"
                      />
                    </div>
                  </a>
                  <div className="group relative">
                    <a
                      className="group-hover:underline underline-offset-[9px] decoration-1"
                      href="#"
                    >
                      <h3 className=" lg:mb-[20px] mb-3 font-bold text-xl xl:text-2xl 2xl:text-3xl tracking-[0px]">
                        AR-Powered Golf Training App for Improving Skills
                      </h3>
                    </a>
                    <a
                      className="text-black text-md lg:text-xl inline-flex items-center gap-4 group transition-all duration-500 ease-in-out hover:font-semibold"
                      href="#"
                    >
                      <p className=" font-medium text-sm lg:text-md xl:text-lg 2xl:text-xl">
                        4par is an AR-powered golf training app that helps
                        players improve their skills and performance.
                      </p>
                    </a>
                  </div>
                </div>
              </article>
              <article className="mt-12 md:mt-16 lg:mt-32 inline-block w-full CaseStudyImage">
                <a className="group" href="#" />
                <div className="relative">
                  <a className="group" href="#" />
                  <div
                    className="h-[380px] md:h-[670px] rounded-3xl hidden lg:block"
                    style={{
                      position: "relative",
                      overflow: "hidden",
                      width: "100%"
                    }}
                  >
                    <a className="group" href="#" />
                    <div
                      className="transition ease-out duration-[500ms]"
                      style={{
                        position: "absolute",
                        inset: "-30px 0px",
                        willChange: "transform",
                        transform: "translateY(30px)"
                      }}
                    >
                      <a className="group" href="#" />
                      <a href="#">
                        <img
                          src="/assets/images/2_Te_X_Eyjxk_YDKC_Xkh54874_I_9da638ec41.webp"
                          className="w-full object-cover h-full transition-opacity duration-500 opacity-100"
                          loading="lazy"
                          alt="live-safety"
                        />
                      </a>
                    </div>
                  </div>
                  <div className="lg:rounded-[30px] rounded-2xl lg:hidden block overflow-hidden">
                    <a href="#">
                      <img
                        src="/assets/images/2_Te_X_Eyjxk_YDKC_Xkh54874_I_9da638ec41.webp"
                        className="w-full object-cover h-full transition-opacity duration-500 opacity-100"
                        loading="lazy"
                        alt="live-safety"
                      />
                    </a>
                  </div>
                </div>
                <div className="max-w-full lg:max-w-xl">
                  <a
                    className="flex justify-between items-center pt-[20px] pb-[10px] cursor-pointer"
                    href="#"
                  >
                    <div className="h-[58px] w-[151px] flex">
                      <img
                        className="object-contain"
                        src="/assets/images/4_LM_Ff_SN_1_N_Jp_TB_0ru_E2_Uf_Sn_cb34425980.svg"
                        loading="lazy"
                        alt="live-safety"
                      />
                    </div>
                  </a>
                  <div className="group relative">
                    <a
                      className="group-hover:underline underline-offset-[9px] decoration-1"
                      href="#"
                    >
                      <h3 className=" lg:mb-[20px] mb-3 font-bold text-xl xl:text-2xl 2xl:text-3xl tracking-[0px]">
                        Emergency Response &amp; Safety Awareness Mobile App
                      </h3>
                    </a>
                    <a
                      className="text-black text-md lg:text-xl inline-flex items-center gap-4 group transition-all duration-500 ease-in-out hover:font-semibold"
                      href="#"
                    >
                      <p className=" font-medium text-sm lg:text-md xl:text-lg 2xl:text-xl">
                        SES Live Safety is a mobile app that translates complex
                        safety procedures into easy-to-follow guides for faster
                        emergency response.
                      </p>
                    </a>
                  </div>
                </div>
              </article>
              <article className="mt-12 md:mt-3 lg:-mt-32 inline-block w-full CaseStudyImage">
                <a
                  className="group"
                  href="#"
                />
                <div className="relative">
                  <a
                    className="group"
                    href="#"
                  />
                  <div
                    className="h-[380px] md:h-[670px] rounded-3xl hidden lg:block"
                    style={{
                      position: "relative",
                      overflow: "hidden",
                      width: "100%"
                    }}
                  >
                    <a
                      className="group"
                      href="#"
                    />
                    <div
                      className="transition ease-out duration-[500ms]"
                      style={{
                        position: "absolute",
                        inset: "-30px 0px",
                        willChange: "transform",
                        transform: "translateY(30px)"
                      }}
                    >
                      <a
                        className="group"
                        href="#"
                      />
                      <a href="#">
                        <img
                          src="/assets/images/4_N7_Rz_Jd_G9_Kt4ul_Uh_D52c8a_6bbcc76937.webp"
                          className="w-full object-cover h-full transition-opacity duration-500 opacity-100"
                          loading="lazy"
                          alt="quran-monotheist-translation-app"
                        />
                      </a>
                    </div>
                  </div>
                  <div className="lg:rounded-[30px] rounded-2xl lg:hidden block overflow-hidden">
                    <a href="#">
                      <img
                        src="/assets/images/4_N7_Rz_Jd_G9_Kt4ul_Uh_D52c8a_6bbcc76937.webp"
                        className="w-full object-cover h-full transition-opacity duration-500 opacity-100"
                        loading="lazy"
                        alt="quran-monotheist-translation-app"
                      />
                    </a>
                  </div>
                </div>
                <div className="max-w-full lg:max-w-xl">
                  <a
                    className="flex justify-between items-center pt-[20px] pb-[10px] cursor-pointer"
                    href="#"
                  >
                    <div className="h-[58px] w-[151px] flex">
                      <img
                        className="object-contain"
                        src="/assets/images/7_LI_Thmjw_X_Gu_C8x_Y0y9m_Bza_f1e819b61d.webp"
                        loading="lazy"
                        alt="quran-monotheist-translation-app"
                      />
                    </div>
                  </a>
                  <div className="group relative">
                    <a
                      className="group-hover:underline underline-offset-[9px] decoration-1"
                      href="#"
                    >
                      <h3 className=" lg:mb-[20px] mb-3 font-bold text-xl xl:text-2xl 2xl:text-3xl tracking-[0px]">
                        Quran E-learning App With Monotheist Translation
                      </h3>
                    </a>
                    <a
                      className="text-black text-md lg:text-xl inline-flex items-center gap-4 group transition-all duration-500 ease-in-out hover:font-semibold"
                      href="#"
                    >
                      <p className=" font-medium text-sm lg:text-md xl:text-lg 2xl:text-xl">
                        This Quran app focuses on providing an intuitive
                        learning experience, enabling users to access the
                        authentic translation of verses.
                      </p>
                    </a>
                  </div>
                </div>
              </article>
              <article className="mt-12 md:mt-20 lg:mt-32 inline-block w-full CaseStudyImage">
                <a className="group" href="#" />
                <div className="relative">
                  <a className="group" href="#" />
                  <div
                    className="h-[380px] md:h-[538px] rounded-3xl hidden lg:block"
                    style={{
                      position: "relative",
                      overflow: "hidden",
                      width: "100%"
                    }}
                  >
                    <a className="group" href="#" />
                    <div
                      className="transition ease-out duration-[500ms]"
                      style={{
                        position: "absolute",
                        inset: "-30px 0px",
                        willChange: "transform",
                        transform: "translateY(30px)"
                      }}
                    >
                      <a className="group" href="#" />
                      <a href="#">
                        <img
                          src="/assets/images/pe_Yyh_Li_R32t0is9_Muhi3_Y_6c7b59730f.webp"
                          className="w-full object-cover h-full transition-opacity duration-500 opacity-100"
                          loading="lazy"
                          alt="goobr"
                        />
                      </a>
                    </div>
                  </div>
                  <div className="lg:rounded-[30px] rounded-2xl lg:hidden block overflow-hidden">
                    <a href="#">
                      <img
                        src="/assets/images/pe_Yyh_Li_R32t0is9_Muhi3_Y_6c7b59730f.webp"
                        className="w-full object-cover h-full transition-opacity duration-500 opacity-100"
                        loading="lazy"
                        alt="goobr"
                      />
                    </a>
                  </div>
                </div>
                <div className="max-w-full lg:max-w-xl">
                  <a
                    className="flex justify-between items-center pt-[20px] pb-[10px] cursor-pointer"
                    href="#"
                  >
                    <div className="h-[58px] w-[151px] flex">
                      <img
                        className="object-contain"
                        src="/assets/images/22_D3duo_YKRC_8ck_Wv5i_ACSK_c86518f3de.webp"
                        loading="lazy"
                        alt="goobr"
                      />
                    </div>
                  </a>
                  <div className="group relative">
                    <a
                      className="group-hover:underline underline-offset-[9px] decoration-1"
                      href="#"
                    >
                      <h3 className=" lg:mb-[20px] mb-3 font-bold text-xl xl:text-2xl 2xl:text-3xl tracking-[0px]">
                        Social Networking &amp; Marketplace App for Pet Owners
                      </h3>
                    </a>
                    <a
                      className="text-black text-md lg:text-xl inline-flex items-center gap-4 group transition-all duration-500 ease-in-out hover:font-semibold"
                      href="#"
                    >
                      <p className=" font-medium text-sm lg:text-md xl:text-lg 2xl:text-xl">
                        Goobr is a trailblazing social networking app and
                        marketplace dedicated to pets and their owners.
                      </p>
                    </a>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default CaseStudies;