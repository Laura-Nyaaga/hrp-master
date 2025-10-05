"use client";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import parse from "html-react-parser";

const swiperOptions = {
  modules: [Autoplay, Pagination, Navigation],
  slidesPerView: 1,
  spaceBetween: 30,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  loop: true,
  navigation: {
    nextEl: ".h1n",
    prevEl: ".h1p",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
};

export default function AuditSlider1({ captions }) {
  return (
    <Swiper {...swiperOptions} className="theme_carousel owl-theme">
      {captions?.map((caption, index) => (
        <SwiperSlide key={index} className="slide">
          <div className="image-slide">
            <img src="/assets/images/team.jpg" alt="" />
            <div className="content">
              <h4>{parse( caption )}</h4>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
