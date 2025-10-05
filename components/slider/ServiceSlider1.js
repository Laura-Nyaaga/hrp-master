"use client";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const swiperOptions = {
  modules: [Autoplay, Pagination, Navigation],
  slidesPerView: 3,
  // spaceBetween: 30,
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

  breakpoints: {
    320: {
      slidesPerView: 1,
      // spaceBetween: 30,
    },
    575: {
      slidesPerView: 2,
      // spaceBetween: 30,
    },
    767: {
      slidesPerView: 2,
      // spaceBetween: 30,
    },
    991: {
      slidesPerView: 2,
      // spaceBetween: 30,
    },
    1199: {
      slidesPerView: 3,
      // spaceBetween: 30,
    },
    1350: {
      slidesPerView: 3,
      // spaceBetween: 30,
    },
  },
};
export default function ServiceSlider1() {
  return (
    <>
      <Swiper {...swiperOptions} className="theme_carousel owl-theme mb-4">
        <SwiperSlide className="slide">
          <div className="service-block-seven">
            <div className="inner-box">
              <h4>Module 1: Introduction to Caregiving</h4>
              <ul className="list">
                <li>
                  <i className="fa fa-check" />
                  Roles and responsibilities of a caregiver
                </li>
                <li>
                  <i className="fa fa-check" />
                  Ethical considerations in caregiving
                </li>
                <li>
                  <i className="fa fa-check" />
                  Communication and interpersonal skills
                </li>
              </ul>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="slide">
          <div className="service-block-seven">
            <div className="inner-box">
              <h4>Module 2: Basic Anatomy and Physiology</h4>
              <ul className="list">
                <li>
                  <i className="fa fa-check" />
                  Major body systems and their functions
                </li>
                <li>
                  <i className="fa fa-check" />
                  Common conditions affecting older adults
                </li>
                <li>
                  <i className="fa fa-check" />
                  Vital signs and basic monitoring
                </li>
              </ul>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="slide">
          <div className="service-block-seven">
            <div className="inner-box">
              <h4>Module 3: Patient Care Techniques</h4>
              <ul className="list">
                <li>
                  <i className="fa fa-check" />
                  Personal care and hygiene assistance
                </li>
                <li>
                  <i className="fa fa-check" />
                  Mobility assistance and transfers
                </li>
                <li>
                  <i className="fa fa-check" />
                  Medication administration and safety
                </li>
              </ul>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="slide">
          <div className="service-block-seven">
            <div className="inner-box">
              <h4>Module 4: Dementia Care</h4>
              <ul className="list">
                <li>
                  <i className="fa fa-check" />
                  Stages and symptoms of dementia
                </li>
                <li>
                  <i className="fa fa-check" />
                  Communication strategies for individuals with dementia
                </li>
                <li>
                  <i className="fa fa-check" />
                  Providing a safe and supportive environment
                </li>
              </ul>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="slide">
          <div className="service-block-seven">
            <div className="inner-box">
              <h4>Module 5: First Aid and CPR</h4>
              <ul className="list">
                <li>
                  <i className="fa fa-check" />
                  Basic life support techniques for adults and children
                </li>
                <li>
                  <i className="fa fa-check" />
                  Choking emergencies and wound management
                </li>
              </ul>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
