// import Swiper core and required modules
import { Navigation, Pagination, Autoplay, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Scrollbar } from "swiper/modules";
import { SportSliderItem } from "./Type";
import { useRef } from "react";
interface Tv2_sportSliderProps {
  sliderSet: Array<SportSliderItem>;
}

export const Tv2_sportSlider = ({
  sliderSet = [
    { image: "fodbold", text: "UEFA Europa League, LaLiga og serie A", sportType: "fodbold" },
    { image: "cykling", sportType: "cykling", text: "Grand Tours og forårsklassikere" },
    { image: "amerikansk_fodbold", sportType: "Amerikansk fodbold", text: "NFL-kampe og Super Bowl" },
    { image: "badminton", sportType: "Badminton", text: "De største turneringer" },
    { image: "håndbold", sportType: "Håndbold", text: "EM og VM, samt liga for både " },
    { image: "tennis", sportType: "Tennis", text: "ATP og WTA" },
    { image: "basketball", sportType: "Basketball", text: "NBA direkte fra USA" },
    { image: "skiskydning", sportType: "Skiskydning", text: "World Cup og VM" },
  ],
}: Tv2_sportSliderProps) => {
  const windowSize = useRef([window.innerWidth, window.innerHeight]);
  return (
    <>
      {windowSize.current[0] <= 980 ? (
        <Swiper
          modules={[Navigation, Pagination, Autoplay, A11y, Scrollbar]}
          scrollbar={{
            hide: true,
          }}
          className="mySwiper"
          slidesPerView={1.5}
          spaceBetween={10}
        >
          {sliderSet.map((item) => {
            return (
              <>
                <div className="">
                  <SwiperSlide className=" w-60">
                    <div>
                      <img
                        className=""
                        src={`./public/sport/${item.image}.avif`}
                        alt={`${item.image}`}
                      />
                      <h3 className=" leading-5 font-bold text-base">{`${item.sportType
                        .charAt(0)
                        .toUpperCase()}${item.sportType.slice(1)}`}</h3>
                      <p className="text-sm leading-5 font-medium text-white opacity-50">{item.text}</p>
                    </div>
                  </SwiperSlide>
                </div>
              </>
            );
          })}
        </Swiper>
      ) : (
        <div className=" grid grid-cols-4 gap-4">
          {sliderSet.map((item) => {
            return (
              <>
                <div>
                  <img
                    className=""
                    src={`./public/sport/${item.image}.avif`}
                    alt={`${item.image}`}
                  />
                  <h3 className=" leading-5 font-bold text-base">{`${item.sportType
                    .charAt(0)
                    .toUpperCase()}${item.sportType.slice(1)}`}</h3>
                  <p className="text-sm leading-5 font-medium text-white opacity-50">{item.text}</p>
                </div>
              </>
            );
          })}
        </div>
      )}
    </>
  );
};
