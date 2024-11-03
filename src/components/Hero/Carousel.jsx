import "./Carousel.css";
// import Swiper core and required modules
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  EffectCoverflow,
} from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-coverflow";

export default () => {
  return (
    <div className="swiper_container">
      <Swiper
        className="swiper"
        // install Swiper modules
        modules={[Navigation, Pagination, EffectCoverflow]}
        // spaceBetween={50}
        slidesPerView={3}
        centeredSlides={true}
        navigation
        pagination={{ clickable: true }}
        // scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
        style={{
          "--swiper-pagination-color": "rgb(255,50,255)",
          "--swiper-pagination-bullet-inactive-color": "#DDD",
          "--swiper-pagination-bullet-inactive-opacity": "1",
          "--swiper-pagination-bullet-size": "16px",
          "--swiper-pagination-bullet-horizontal-gap": "6px",
          "--swiper-navigation-color": "#DDD",
        }}
        initialSlide={1}
        effect="coverflow"
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 300,
          modifier: 2,
          slideShadows: false,
        }}
      >
        <SwiperSlide>
          <img
            // src="/assets/hero/heroImage.png"
            src="/assets/hero/hero3.jpg"
            alt="hero-image"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            // src="/assets/hero/heroImage.png"
            src="/assets/hero/hero2.jpg"
            alt="hero-image"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            // src="/assets/hero/heroImage.png"
            src="/assets/hero/hero1.jpg"
            alt="hero-image"
          />
        </SwiperSlide>
        {/* <SwiperSlide>
          <img
            // src="/assets/hero/heroImage.png"
            src="/assets/hero/hero4.jpg"
            alt="hero-image"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            // src="/assets/hero/heroImage.png"
            src="/assets/hero/hero5.jpg"
            alt="hero-image"
          />
        </SwiperSlide> */}
      </Swiper>
    </div>
  );
};
