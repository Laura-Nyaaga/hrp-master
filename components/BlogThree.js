"use client";

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const BlogThree = () => {
  return (
    <div className="blog__three section-padding">
      <div className="container">
        <div className="row justify-content-center text-center">
          <div className="col-xl-6 col-lg-6">
            <div className="blog__three-title">
              <span className="subtitle-three">Latest Blog</span>
              <h2>Explore Blogs & Insights</h2>
            </div>
          </div>
        </div>
        <Swiper className="blog__three-slide-active">
          <SwiperSlide>
            <div className="blog__three-single-blog swiper-slide">
              <div className="blog__three-single-blog-image">
                <img src="assets/img/blog/blog-4.jpg" alt="" />
              </div>
              <div className="blog__three-single-blog-date">
                <span>10 Sep</span>
              </div>
              <div className="blog__three-single-blog-content">
                <div className="blog__three-single-blog-content-top">
                  <span>
                    <i className="far fa-user"></i> wpboss
                  </span>
                  <span>
                    <i className="far fa-comment-dots"></i> Comments (05)
                  </span>
                </div>
                <h5>
                  <a href="blog-details-right-sidebar.html" className="blog-heading">
                    The Power of Storytelling in Digital Marketing
                  </a>
                </h5>
                <a href="blog-details-right-sidebar.html" className="blog-btn">
                  Read More <i className="fas fa-plus"></i>
                </a>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="blog__three-single-blog swiper-slide">
              <div className="blog__three-single-blog-image">
                <img src="assets/img/blog/blog-5.jpg" alt="" />
              </div>
              <div className="blog__three-single-blog-date">
                <span>10 Sep</span>
              </div>
              <div className="blog__three-single-blog-content">
                <div className="blog__three-single-blog-content-top">
                  <span>
                    <i className="far fa-user"></i> wpboss
                  </span>
                  <span>
                    <i className="far fa-comment-dots"></i> Comments (05)
                  </span>
                </div>
                <h5>
                  <a href="blog-details-right-sidebar.html" className="blog-heading">
                    The Role of Data in Modern Marketing Campaign
                  </a>
                </h5>
                <a href="blog-details-right-sidebar.html" className="blog-btn">
                  Read More <i className="fas fa-plus"></i>
                </a>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default BlogThree;