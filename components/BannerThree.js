"use client";

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const BannerThree = () => {
  return (
    <div className="banner__three">
      <Swiper
        modules={[Navigation]}
        navigation={{
          prevEl: '.swiper-button-prev',
          nextEl: '.swiper-button-next',
        }}
        className="banner__three-slider"
      >
        <SwiperSlide>
          <div
            className="banner__three-single-slide swiper-slide"
            style={{ backgroundImage: 'url(/assets/images/banner/banner-three-1.jpg)' }}
          >
            <div className="banner__three-shape">
              <images
                className="shape-1"
                data-animation="fadeInUp"
                data-delay="1.7s"
                src="/assets/images/shapes/banner-shape-1.png"
                alt=""
              />
              <images
                className="shape-2"
                data-animation="fadeInRightBig"
                data-delay="1.7s"
                src="/assets/images/shapes/banner-shape-2.png"
                alt=""
              />
            </div>
            <div className="container">
              <div className="row">
                <div className="col-xl-7 col-lg-8 col-md-10 col-sm-11">
                  <div className="banner__three-content">
                    <span className="subtitle-three" data-animation="fadeInUp" data-delay=".3s">
                      Strategic Planning
                    </span>
                    <h2 data-animation="fadeInUp" data-delay=".6s">Your Partner for Financial Success</h2>
                    <p data-animation="fadeInUp" data-delay=".8s">
                      Seasoned experts is here to guide you every step of the way to comprehensive approach and unwavering commitment, you can confidently pursue your financial.
                    </p>
                    <a href="contact.html" className="btn-three" data-animation="fadeInUp" data-delay="1s">
                      Partner with Us Today <i className="fas fa-plus"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="banner__three-single-slide swiper-slide"
            style={{ backgroundImage: 'url(/assets/images/banner/banner-three-2.jpg)' }}
          >
            <div className="banner__three-shape">
              <images
                className="shape-1"
                data-animation="fadeInUp"
                data-delay="1.7s"
                src="/assets/images/shapes/banner-shape-1.png"
                alt=""
              />
              <images
                className="shape-2"
                data-animation="fadeInRightBig"
                data-delay="1.7s"
                src="/assets/images/shapes/banner-shape-2.png"
                alt=""
              />
            </div>
            <div className="container">
              <div className="row">
                <div className="col-xl-7 col-lg-8 col-md-10 col-sm-11">
                  <div className="banner__three-content">
                    <span className="subtitle-three" data-animation="fadeInUp" data-delay=".3s">
                      Financial Vision
                    </span>
                    <h2 data-animation="fadeInUp" data-delay=".5s">Guiding Your Path to Prosperity</h2>
                    <p data-animation="fadeInUp" data-delay=".8s">
                      Our experienced advisors are dedicated to guiding you through every step of your financial journey offering personalised strategies that align your goals aspirations.
                    </p>
                    <a href="contact.html" className="btn-three" data-animation="fadeInUp" data-delay="1s">
                      Start Your Journey Today <i className="fas fa-plus"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <div className="slider-arrow">
          <i className="swiper-button-prev fal fa-long-arrow-left"></i>
          <i className="swiper-button-next fal fa-long-arrow-right"></i>
        </div>
      </Swiper>
    </div>
  );
};

export default BannerThree;