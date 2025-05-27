import React from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./bannerStyle.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Banner = () => {
  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper"
    >
      <SwiperSlide className="slider">
        {/* slider content */}
        <div className="relative h-[500px] lg:h-screen bg-cover bg-center bg-no-repeat w-full bg-[url('https://i.ibb.co/ZRs1FNkd/Slider-1.jpg')]">
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/70 z-0"></div>

          {/* Content */}
          <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center text-white">
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4 drop-shadow-lg">
              Grow Your Garden with Us
            </h1>
            <p className="text-lg md:text-xl max-w-md mb-6 text-white/90">
              Join our gardening community and get tips, tools, and expert
              advice delivered to you.
            </p>
            <button className="bg-[#38A57E] hover:opacity-80 btn border-none text-white font-semibold py-3 px-8 rounded-full shadow-xl transition-all duration-300">
              Get Started
            </button>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide className="slider">
        {/* Slider 2 - Right-aligned */}
        <div className="relative h-[500px] lg:h-screen bg-cover bg-center bg-no-repeat w-full bg-[url('https://i.ibb.co/B5H8VBJm/Slider-2.jpg')]">
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/60 z-0"></div>

          {/* Content */}
          <div className="relative z-10 flex flex-col items-end justify-center h-full px-6 text-right text-white">
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4 drop-shadow-lg">
              Urban Gardening Made Simple
            </h1>
            <p className="text-lg md:text-xl max-w-md mb-6 text-white/90">
              Discover how to make the most of your small space and grow fresh
              produce at home.
            </p>
            <button className="bg-[#38A57E] hover:opacity-80 btn border-none text-white font-semibold py-3 px-8 rounded-full shadow-xl transition-all duration-300">
              Learn More
            </button>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide className="slider">
        <div className="relative h-[500px] lg:h-screen bg-cover bg-center bg-no-repeat w-full bg-[url('https://i.ibb.co/GvXmH7pM/Slider-3.jpg')]">
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/60 z-0"></div>

          {/* Content */}
          <div className="relative z-10 flex flex-col items-start justify-center h-full px-8 md:px-16 max-w-xl text-white">
            <h2 className="text-3xl md:text-5xl font-extrabold leading-tight mb-4 drop-shadow-lg">
              Welcome to the Future of Gardening
            </h2>
            <p className="text-md md:text-lg mb-8 text-white/90">
              Explore smart gardening tools and techniques to transform your
              space.
            </p>
            <button className="bg-yellow-500 hover:bg-yellow-600 btn border-none text-black font-semibold py-3 px-8 rounded-full shadow-xl transition-all duration-300">
              Explore Now
            </button>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Banner;
