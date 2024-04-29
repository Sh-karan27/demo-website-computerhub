import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { heroSlider } from "../constants";



const Hero = () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };

  return (
    <>
      <section className="w-full h-full flex flex-col items-center justify-center ">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          onAutoplayTimeLeft={onAutoplayTimeLeft}
          className="mySwiper"
        >
          {heroSlider.map((item, i) => (
            <SwiperSlide>
              <div
                className=" filter h-full w-full bg-cover  bg-center flex items-center justify-center"
                style={{ backgroundImage: `url(${item.src})` }}
              >
                <h1 className=" text-5xl text-white z-10 ">
                  {item.description}
                </h1>
              </div>
            </SwiperSlide>
          ))}

          <div className="autoplay-progress" slot="container-end">
            <svg viewBox="0 0 48 48" ref={progressCircle}>
              <circle cx="24" cy="24" r="20"></circle>
            </svg>
            <span ref={progressContent}></span>
          </div>
        </Swiper>
        <div className="w-3/4 h-full flex flex-col items-center justify-center mt-10 gap-5">
          
            <div className="w-full h-full flex flex-col items-center justify-center mt-10 gap-5">
              <h1 className=" max-sm:text-3xl  text-5xl">Welcome to ComputerMarketHub!</h1>
              <p className="text-xl text-gray-500">
                Your one stop for all your digital needs. Empowering your
                digital journey with top-tier computers and accessories, custom
                software, website development, and AI solutions. Enjoy easy
                shopping, expert support, and fast nationwide delivery. Your
                local tech hub, anytime, anywhere.
              </p>
              <button className="btn">Get Started</button>
            </div>
          
        </div>
      </section>
    </>
  );
};

export default Hero;
