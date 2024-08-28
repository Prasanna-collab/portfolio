import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination, EffectFade } from "swiper/modules";
import Image1 from "./Image1";
import Image2 from "./Image2";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Carousel = () => {
  const slides = [
    { id: 1, image: <Image1/> },
    { id: 2, image: <Image2/> },
  ];

  return (
    <div className="text-center">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        onSlideChange={(swiper) => swiper.realIndex}
        breakpoints={{
          1320: {
            speed: 1500,
          },
          1024: {
            speed: 1000,
          },
          768: {
            speed: 500,
          },
        }}
        spaceBetween={10}
      >
        {slides.map((slide) => (
          <SwiperSlide
            key={slide.id}
            className="flex items-center justify-center p-4"
          >
            {slide.image}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
