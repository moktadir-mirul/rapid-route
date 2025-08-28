import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import "./style.css";
import BannerImg1 from "../../assets/banner/banner1.png";
import BannerImg2 from "../../assets/banner/banner2.png";
import BannerImg3 from "../../assets/banner/banner3.png";
import { Autoplay, Pagination, Navigation } from 'swiper/modules';


export default function Banner() {
  return (
    <div className='h-[450px]'>
      <Swiper spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        // navigation={true}
        loop={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper">
        <SwiperSlide className='w-full h-[80vh]'><img src={BannerImg1} alt="Banner" /></SwiperSlide>
        <SwiperSlide><img src={BannerImg2} alt="" /></SwiperSlide>
        <SwiperSlide><img src={BannerImg3} alt="" /></SwiperSlide>
      </Swiper>
    </div>
  );
}
