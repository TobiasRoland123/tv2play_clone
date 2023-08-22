// import Swiper core and required modules
import { Navigation, Pagination, Autoplay, A11y } from "swiper/modules";
import "./App.css";
import { Swiper, SwiperSlide } from "swiper/react";

import { useRef } from "react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export const Tv2_carousel = () => {
  const carouselImageList = [
    {
      link: "https://images.prismic.io/playlandingpages/8b7d020d-e891-4e40-9948-1c020505206c_BECK+noget+for+noget_clean.png?auto=format%2Ccompress&fit=crop&w=576&h=491.8153846153846",
      altTag: "Beck noget for noget",
    },
    {
      link: "https://images.prismic.io/playlandingpages/71ffee46-c000-470f-88e2-38032365b2fc_forr%C3%A6der.png?auto=format%2Ccompress&fit=crop&w=576&h=491.8153846153846",
      altTag: "forræder",
    },
    {
      link: "https://images.prismic.io/playlandingpages/e4ba9124-1568-4690-9bf2-f8b568ab9ea5_1778x1000_Agent_Landingpage_u_logo.jpg?auto=format%2Ccompress&fit=crop&w=576&h=491.8153846153846",
      altTag: "Agent",
    },
    {
      link: "https://images.prismic.io/playlandingpages/bedcfa28-9359-4864-accc-86a2c259d782_Yellowjackets+-+Mobil.png?auto=format%2Ccompress&rect=0%2C0%2C1150%2C985&w=576&h=491.8153846153846&fit=crop",
      altTag: "YellowJackets",
    },
    {
      link: "https://images.prismic.io/playlandingpages/017033a9-d876-4c25-a430-d439377ede47_Emil+fra+L%C3%B8nneberg+-+film.jpg?auto=format%2Ccompress&rect=0%2C0%2C3840%2C2160&w=576&h=491.8153846153846&fit=crop",
      altTag: "Emil fra Lønneberg",
    },
    {
      link: "https://images.prismic.io/playlandingpages/ad0fd33f-daca-4d3b-b23a-5565a59951e8_Diamantfamilien+2023.png?auto=format%2Ccompress&rect=0%2C0%2C3840%2C2160&w=576&h=491.8153846153846&fit=crop",
      altTag: "Diamant Familien",
    },
    {
      link: "https://images.prismic.io/playlandingpages/77817235-c95e-4c1a-b9eb-7508b312a81a_Landmand+2023.jpg?auto=format%2Ccompress&fit=crop&w=576&h=491.8153846153846",
      altTag: "Landb",
    },
  ];

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
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          {carouselImageList.map((image) => {
            return (
              <>
                <SwiperSlide className="text-white text-center">
                  <img
                    className="mx-auto w-screen"
                    src={image.link}
                    alt={image.altTag}
                  />
                </SwiperSlide>
              </>
            );
          })}
        </Swiper>
      </div>
    </>
  );
};
