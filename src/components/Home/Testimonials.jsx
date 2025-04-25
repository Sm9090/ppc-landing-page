import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Testimonials = () => {
  gsap.registerPlugin(ScrollTrigger);

  const reviewsRef = useRef(null);
  const progressBarRef = useRef(null);

  useEffect(() => {
    const reviewsList = reviewsRef.current;
    const progressBar = progressBarRef.current;

    // Animate each .single-review
    const reviewItems = reviewsList.querySelectorAll(".single-review");

    reviewItems.forEach((item) => {
      gsap.fromTo(
        item,
        { opacity: 1, y: 50, scale: 0.78 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          scrollTrigger: {
            trigger: item,
            start: "top 80%",
            end: "bottom 50%",
            scrub: 1,
          },
        }
      );
    });

    // Scroll progress for progress bar
    const handleScroll = () => {
      const scrollTop = reviewsList.scrollTop;
      const scrollHeight = reviewsList.scrollHeight - reviewsList.clientHeight;
      let progress = (scrollTop / scrollHeight) * 100;
      progress = Math.min(Math.max(progress, 0), 100);

      gsap.to(progressBar, {
        height: `${progress}%`,
        duration: 0.3,
      });
    };

    reviewsList.addEventListener("scroll", handleScroll);

    return () => {
      reviewsList.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <section
      className="clients md:py-24 lg:py-[10.5rem] pb-[4.3rem] pt-14 md:mt-24 lg:mt-[10.5rem] mt-14 overflow-x-hidden sm:overflow-x-auto undefined"
      style={{
        backgroundColor: "#000",
        backgroundImage:
          "radial-gradient(circle at -30% 21%, #066029 0, transparent 30%), radial-gradient(circle at 120% 80%, #066029 0, transparent 30%)",
      }}
      id="testimonials"
    >
      <div className=" undefined mx-auto max-w-7xl px-6 lg:pe-0 lg:ps-8">
        <div className="mx-auto max-w-[1200px] sm:px-6 lg:px-8 text-center relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="lg:overflow-hidden">
              <h2 className="font-bold text-white lg:pb-[2.375rem] pb-6 sentence-first-letter text-4xl xl:text-5xl 2xl:text-6xl tracking-[-2px] lg:-translate-y-[7px] xl:!leading-[55px] 2xl:!leading-[65px]">
                {" "}
                <span>our clients simply love </span>
                <span className="text-theme">
                  <span>what we do</span>
                </span>{" "}
              </h2>{" "}
            </div>
            <p className="text-white text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl">
              {" "}
              Proud to serve as the innovation partner for industry leaders who
              have experienced our expertise and excellence firsthand.
            </p>
          </div>
          <div className="flex justify-center lg:pt-14 lg:pb-24 py-8 gap-6 wrap">
            <figure>
              {" "}
              <img
                src="/assets/images/reviews-1.svg"
                alt="WebInventix rating"
              />
            </figure>
            <figure>
              {" "}
              <img
                src="/assets/images/reviews-2.svg"
                alt="WebInventix reviews"
              />
            </figure>
          </div>
        </div>
        <div className="reviews-list z-10 flex gap-5" ref={reviewsRef}>
          <div className="flex flex-col gap-y-5 md:gap-y-6 component-height h-fit">
            <div className="single-review border border-[#535353] p-6 md:px-[40px] md:py-[40px] lg:px-[60px] lg:py-[65px] lg:rounded-[30px] rounded-2xl transition-all ease-out duration-200">
              <p className=" text-lg sm:text-xl md:text-2xl xl:text-3xl 2xl:text-4xl tracking-[0px] font-semibold text-white lg:!leading-[2.875rem] text-md md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">
                {" "}
                "WebInventix managed to provide successful support and
                development in a timely manner. The app is still in preparation
                for the beta launch, but it has been receiving a lot of positive
                feedback from the client. The team provided excellent workflow
                and communication throughout the project."{" "}
              </p>
              <div className="flex justify-between md:items-center items-start pt-12 flex-col sm:flex-row ">
                <div className="relative flex gap-4 items-center w-full">
                  <div className="image-here">
                    <div
                      id="profileImage"
                      className=" h-12 w-12 xl:h-[84px] md:h-20 xl:w-[84px] md:w-20 lg:text-3xl text-xl font-bold"
                      style={{ backgroundColor: "#2487ff", color: "#000000" }}
                    >
                      J{/* */}D{" "}
                    </div>
                  </div>
                  <div className="user-data">
                    <p className=" font-bold text-white text-xs sm:text-sm text-sm lg:text-md xl:text-lg 2xl:text-xl">
                      {" "}
                      Jackie Dallas, Director
                    </p>
                    <div className="flex items-center mt-2 gap-1">
                      <svg
                        className="w-4 h-4 text-[#FFAA2B]"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                      >
                        {" "}
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                      </svg>
                      <svg
                        className="w-4 h-4 text-[#FFAA2B]"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                      >
                        {" "}
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                      </svg>
                      <svg
                        className="w-4 h-4 text-[#FFAA2B]"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                      >
                        {" "}
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                      </svg>
                      <svg
                        className="w-4 h-4 text-[#FFAA2B]"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                      >
                        {" "}
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                      </svg>
                      <svg
                        className="w-4 h-4 text-[#FFAA2B]"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                      >
                        {" "}
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <a
                  className="w-full md:w-[120px] flex justify-end mt-4 md:block md:mt-0"
                  aria-label="/work/hotset/"
                  href="#"
                >
                  <img
                    className="w-[90px] md:w-full"
                    src="/assets/images/hotsetupdated.svg"
                    alt="Hotset"
                  />
                </a>
              </div>
            </div>
            <div className="single-review border border-[#535353] p-6 md:px-[40px] md:py-[40px] lg:px-[60px] lg:py-[65px] lg:rounded-[30px] rounded-2xl transition-all ease-out duration-200">
              <p className=" text-lg sm:text-xl md:text-2xl xl:text-3xl 2xl:text-4xl tracking-[0px] font-semibold text-white lg:!leading-[2.875rem] text-md md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">
                {" "}
                “The engagement met the expectations of the internal team.
                WebInventix successfully worked within the robust scope, often
                going above and beyond to ensure client satisfaction. The team
                provides clients with a high level of support while still
                working quickly and creatively.”
              </p>
              <div className="flex justify-between md:items-center items-start pt-12 flex-col sm:flex-row ">
                <div className="relative flex gap-4 items-center w-full">
                  <div className="image-here">
                    <div
                      id="profileImage"
                      className=" h-12 w-12 xl:h-[84px] md:h-20 xl:w-[84px] md:w-20 lg:text-3xl text-xl font-bold"
                      style={{ backgroundColor: "#2487ff", color: "#000000" }}
                    >
                      H{/* */}A{" "}
                    </div>
                  </div>
                  <div className="user-data">
                    <p className=" font-bold text-white text-xs sm:text-sm text-sm lg:text-md xl:text-lg 2xl:text-xl">
                      {" "}
                      Hamed Al Zadjal, Digital Manager
                    </p>
                    <div className="flex items-center mt-2 gap-1">
                      <svg
                        className="w-4 h-4 text-[#FFAA2B]"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                      >
                        {" "}
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                      </svg>
                      <svg
                        className="w-4 h-4 text-[#FFAA2B]"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                      >
                        {" "}
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                      </svg>
                      <svg
                        className="w-4 h-4 text-[#FFAA2B]"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                      >
                        {" "}
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                      </svg>
                      <svg
                        className="w-4 h-4 text-[#FFAA2B]"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                      >
                        {" "}
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                      </svg>
                      <svg
                        className="w-4 h-4 text-[#FFAA2B]"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                      >
                        {" "}
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <a
                  className="w-full md:w-[120px] flex justify-end mt-4 md:block md:mt-0"
                  aria-label="/work/oomco/"
                  href="#"
                >
                  <img
                    className="w-[90px] md:w-full"
                    src="/assets/images/omanoilupdated.svg"
                    alt="Oman Oil"
                  />
                </a>
              </div>
            </div>
            <div className="single-review border border-[#535353] p-6 md:px-[40px] md:py-[40px] lg:px-[60px] lg:py-[65px] lg:rounded-[30px] rounded-2xl transition-all ease-out duration-200">
              <p className=" text-lg sm:text-xl md:text-2xl xl:text-3xl 2xl:text-4xl tracking-[0px] font-semibold text-white lg:!leading-[2.875rem] text-md md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">
                {" "}
                “WebInventix produced clean code and the app got positive
                reviews. While there were staffing and language issues, the
                overall experience was positive. The assigned resources were
                attentive and fixed problems within a day.”{" "}
              </p>
              <div className="flex justify-between md:items-center items-start pt-12 flex-col sm:flex-row ">
                <div className="relative flex gap-4 items-center w-full">
                  <div className="image-here">
                    <div
                      id="profileImage"
                      className=" h-12 w-12 xl:h-[84px] md:h-20 xl:w-[84px] md:w-20 lg:text-3xl text-xl font-bold"
                      style={{ backgroundColor: "#2487ff", color: "#000000" }}
                    >
                      G{/* */}A{" "}
                    </div>
                  </div>
                  <div className="user-data">
                    <p className=" font-bold text-white text-xs sm:text-sm text-sm lg:text-md xl:text-lg 2xl:text-xl">
                      {" "}
                      Geoffrey Anderson, Co-Founder and CEO
                    </p>
                    <div className="flex items-center mt-2 gap-1">
                      <svg
                        className="w-4 h-4 text-[#FFAA2B]"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                      >
                        {" "}
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                      </svg>
                      <svg
                        className="w-4 h-4 text-[#FFAA2B]"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                      >
                        {" "}
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                      </svg>
                      <svg
                        className="w-4 h-4 text-[#FFAA2B]"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                      >
                        {" "}
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                      </svg>
                      <svg
                        className="w-4 h-4 text-[#FFAA2B]"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                      >
                        {" "}
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                      </svg>
                      <svg
                        className="w-4 h-4 text-[#FFAA2B]"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                      >
                        {" "}
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <a
                  className="w-full md:w-[120px] flex justify-end mt-4 md:block md:mt-0"
                  aria-label="/work/glimmer/"
                  href="#"
                >
                  <img
                    className="w-[90px] md:w-full"
                    src="/assets/images/glimmerupdated.svg"
                    alt="Glimmer"
                  />
                </a>
              </div>
            </div>
            <div className="single-review border border-[#535353] p-6 md:px-[40px] md:py-[40px] lg:px-[60px] lg:py-[65px] lg:rounded-[30px] rounded-2xl transition-all ease-out duration-200">
              <p className=" text-lg sm:text-xl md:text-2xl xl:text-3xl 2xl:text-4xl tracking-[0px] font-semibold text-white lg:!leading-[2.875rem] text-md md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">
                {" "}
                “WebInventix successfully built the application, and the client
                is waiting for Appstore and Playstore approval. The project
                manager communicated primarily on Zoom and Slack, frequently
                providing updates. Above all, their genuine interest in the
                project and in-depth knowledge in this field were notable.”
              </p>
              <div className="flex justify-between md:items-center items-start pt-12 flex-col sm:flex-row ">
                <div className="relative flex gap-4 items-center w-full">
                  <div className="image-here">
                    <div
                      id="profileImage"
                      className=" h-12 w-12 xl:h-[84px] md:h-20 xl:w-[84px] md:w-20 lg:text-3xl text-xl font-bold"
                      style={{ backgroundColor: "#2487ff", color: "#000000" }}
                    >
                      C{/* */}K{" "}
                    </div>
                  </div>
                  <div className="user-data">
                    <p className=" font-bold text-white text-xs sm:text-sm text-sm lg:text-md xl:text-lg 2xl:text-xl">
                      {" "}
                      Cleitn Kimberly A. Dalius, Founder
                    </p>
                    <div className="flex items-center mt-2 gap-1">
                      <svg
                        className="w-4 h-4 text-[#FFAA2B]"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                      >
                        {" "}
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                      </svg>
                      <svg
                        className="w-4 h-4 text-[#FFAA2B]"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                      >
                        {" "}
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                      </svg>
                      <svg
                        className="w-4 h-4 text-[#FFAA2B]"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                      >
                        {" "}
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                      </svg>
                      <svg
                        className="w-4 h-4 text-[#FFAA2B]"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                      >
                        {" "}
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                      </svg>
                      <svg
                        className="w-4 h-4 text-[#FFAA2B]"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                      >
                        {" "}
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <a
                  className="w-full md:w-[120px] flex justify-end mt-4 md:block md:mt-0"
                  aria-label="/work/pauseitive-case-study/"
                  href="#"
                >
                  <img
                    className="w-[90px] md:w-full"
                    src="/assets/images/pauseitive_updated.svg"
                    alt="Pauseitive"
                  />
                </a>
              </div>
            </div>
          </div>
          <div className=" hidden lg:block" style={{ width: 20 }}>
            <div
              style={{ height: 190, backgroundColor: "#ffffff45" }}
              className="rounded-[19px] lg:sticky top-[50%] -translate-y-2/4"
            >
              <div
               ref={progressBarRef}
                className="rounded-[19px] transition-all ease-out duration-200 progress-bar"
                style={{ backgroundColor: "#2487ff" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
