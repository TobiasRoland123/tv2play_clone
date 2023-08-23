// import Swiper core and required modules
import { Navigation, Pagination, Autoplay, A11y } from "swiper/modules";
import "./App.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { carouselImageList } from "./carousel_imageList";

import { useRef } from "react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export const Tv2_carousel = () => {
  const windowSize = useRef([window.innerWidth, window.innerHeight]);

  return (
    <>
      <div className=" w-screen ">
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, Autoplay, A11y]}
          spaceBetween={15}
          centeredSlides={true}
          slidesPerView={windowSize.current[0] >= 768 ? 1.5 : 1}
          navigation={windowSize.current[0] >= 768}
          loop={true}
          // autoplay={{ delay: 2500, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          {carouselImageList.map((image) => {
            return (
              <>
                <SwiperSlide className="text-white flex relative   ">
                  {/* <div className={` mx-auto w-screen sm:aspect-video sm:object-cover bg-[url(${image.link})] `}></div> */}
                  <div className="after:bg-gradient-to-b from-blue_col to-bg_col after:absolute after:bottom-0 after:h-3/4 after:w-full  ">
                    <img
                      className="mx-auto w-screen sm:aspect-video sm:object-cover  "
                      src={image.link}
                      alt={image.altTag}
                    />
                  </div>
                  <div className=" absolute bottom-0 left-0 pl-3 pb-5 ">
                    <h2 className=" text-5xl ">{image.title}</h2>
                    <p>{image.description}</p>
                  </div>
                </SwiperSlide>
              </>
            );
          })}
        </Swiper>
      </div>
    </>
  );
};

// s

/*
content: "";
display: block;
position: absolute;
bottom: 0;
width: 100%;
height: 70%;
background-image: linear-gradient(rgba(12,122,231,0),#000523);*/
