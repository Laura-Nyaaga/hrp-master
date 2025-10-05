"use client";

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const TestimonialTwo = () => {
  return (
    <div className="testimonial__three section-padding">
      <div className="container">
        <div className="row align-items-center mb-60 gy-5">
          <div className="col-xl-6 col-lg-6 col-md-8">
            <div className="testimonial__three-title">
              <span className="subtitle-three">Real Client Stories</span>
              <h2>Customer Experiences</h2>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-4">
            <div className="slider-arrow justify-content-md-end">
              <i className="swiper-button-prev fas fa-chevron-left"></i>
              <i className="swiper-button-next fas fa-chevron-right"></i>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-12">
            <Swiper
              modules={[Navigation]}
              navigation={{
                prevEl: '.swiper-button-prev',
                nextEl: '.swiper-button-next',
              }}
              className="testimonial__three-slider-active"
            >
              <SwiperSlide>
                <div className="testimonial__three-single-slider swiper-slide">
                  <div className="testimonial__three-single-slider-user">
                    <div className="testimonial__three-single-slider-user-image">
                      <img src="assets/img/testimonial/avatar-1.jpg" alt="" />
                    </div>
                    <div className="testimonial__three-single-slider-user-name">
                      <h4>Nasir Al Shakib</h4>
                      <span>Content Creator</span>
                    </div>
                  </div>
                  <p>
                    The theme’s design is sleek and professional. Customizing it to match our brand’s aesthetic was seamless web traffic has increased.
                  </p>
                  <div className="testimonial__three-single-slider-user-rating">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star not-rated"></i>
                  </div>
                  <div className="slider-shape">
                    <i className="fas fa-quote-right"></i>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="testimonial__three-single-slider swiper-slide">
                  <div className="testimonial__three-single-slider-user">
                    <div className="testimonial__three-single-slider-user-image">
                      <img src="assets/img/team/team-1.jpg" alt="" />
                    </div>
                    <div className="testimonial__three-single-slider-user-name">
                      <h4>Michael Adams</h4>
                      <span>Operations Manager</span>
                    </div>
                  </div>
                  <p>
                    The theme’s design is sleek and professional. Customizing it to match our brand’s aesthetic was seamless web traffic has increased.
                  </p>
                  <div className="testimonial__three-single-slider-user-rating">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star not-rated"></i>
                  </div>
                  <div className="slider-shape">
                    <i className="fas fa-quote-right"></i>
                  </div>
                </div>
              </SwiperSlide>
              {/* Add other slides as needed */}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialTwo;