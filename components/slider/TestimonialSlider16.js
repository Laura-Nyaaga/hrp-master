"use client";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const swiperOptions = {
  modules: [Autoplay, Pagination, Navigation],
  slidesPerView: 1,
  spaceBetween: 30,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  loop: true,

  // Navigation
  navigation: {
    nextEl: ".h1n",
    prevEl: ".h1p",
  },

  // Pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
};

export default function TestimonialSlider16() {
  return (
    <>
      <Swiper {...swiperOptions} className="theme_carousel owl-theme">
        {/* Slide 1 */}
        <SwiperSlide className="slide-item">
          <div className="testimonial-block-seven">
            <div className="inner-box">
              <div className="image">
                <img src="/assets/images/resource/image-47.jpg" alt="" />
              </div>
              <div className="content">
                <div className="logo">
                  <img src="/assets/images/resource/client-37.png" alt="" />
                </div>
                <div className="text">
                  “Founder: Kawa Polycarp<br />
                  I deeply appreciate HRP Consultancy’s team. Your dedication, creativity, and teamwork—each of you drives the company's mission forward with excellence and heart.”
                </div>
                <div className="author-box">
                  <div className="author-title">
                    Kawa Polycarp, <span>Founder</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide className="slide-item">
          <div className="testimonial-block-seven">
            <div className="inner-box">
              <div className="image">
                <img src="/assets/images/resource/image-47.jpg" alt="" />
              </div>
              <div className="content">
                <div className="logo">
                  <img src="/assets/images/resource/client-37.png" alt="" />
                </div>
                <div className="text">
                  “Founder: Charisma White<br />
                  I am grateful for your passion, resilience, and vision—your contributions continue to shape HRP Consultancy’s impact and future success.”
                </div>
                <div className="author-box">
                  <div className="author-title">
                    Charisma White, <span>Founder</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide className="slide-item">
          <div className="testimonial-block-seven">
            <div className="inner-box">
              <div className="image">
                <img src="/assets/images/resource/image-47.jpg" alt="" />
              </div>
              <div className="content">
                <div className="logo">
                  <img src="/assets/images/resource/client-37.png" alt="" />
                </div>
                <div className="text">
                  “Digital Solutions Lead: Clara Situma<br />
                  I am honored to lead HRP Consultancy’s digital innovation—grateful for a team that turns ideas into impactful, user-driven solutions across every company’s project.”
                </div>
                <div className="author-box">
                  <div className="author-title">
                    Clara Situma, <span>Digital Solutions Lead</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
