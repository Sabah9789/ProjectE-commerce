import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

export default function ImageSlider() {
  return (
    <div className=" w-[80%] m-auto pt-[50px] ">
      <Swiper
        modules={[Navigation]}
        slidesPerView={1.2}
        centeredSlides={true}
        spaceBetween={20}
        loop={true}
        navigation={{
          nextEl: ".next",
          prevEl: ".prev",
        }}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="/img1.jpg" />
        </SwiperSlide>

        <SwiperSlide>
          <img src="/img2.jpg" />
        </SwiperSlide>

        <SwiperSlide>
          <img src="/img3.jpg" />
        </SwiperSlide>
      </Swiper>

      {/* الأسهم */}
      <div className="arrows">
        <div className="prev">←</div>
        <div className="next">→</div>
      </div>
    </div>
  );
}