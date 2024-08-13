import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay } from 'swiper/modules';
import Image from 'next/image';

const MyCarousel = () => {
  return (
    <Swiper
      modules={[Autoplay]}
      spaceBetween={30}
      slidesPerView={2}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false
      }}
      loop={true}
      className="w-full mt-[32px]"
    >
      <SwiperSlide>
        <div className="swiper-slide">
          <Image
            src={'/personal.png'}
            width={200}
            height={56}
            alt={''}
            className="w-auto h-[60px]"
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="swiper-slide">
          <Image
            src={'/alonso.png'}
            width={200}
            height={56}
            alt={''}
            className="w-auto h-[60px]"
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="swiper-slide">
          <Image
            src={'/logobranco.webp'}
            width={200}
            height={56}
            alt={''}
            className="w-auto h-[60px]"
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="swiper-slide">
          <Image
            src={'/personal.png'}
            width={200}
            height={56}
            alt={''}
            className="w-auto h-[60px]"
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="swiper-slide">
          <Image
            src={'/alonso.png'}
            width={200}
            height={56}
            alt={''}
            className="w-auto h-[60px]"
          />
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default MyCarousel;
