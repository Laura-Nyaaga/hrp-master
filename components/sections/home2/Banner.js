"use client";
import Link from "next/link";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const swiperOptions = {
  modules: [Autoplay, Pagination, Navigation],
  slidesPerView: 1,
  spaceBetween: 0,
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },
  loop: true,
  navigation: {
    nextEl: ".owl-next",
    prevEl: ".owl-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
};

const sections = [
  {
    subheading: "Organizational Mission",
    heading: "Supporting Your Mission, Every Step of the Way",
    content: "We’ll handle the complexities of operations, finance, and compliance so you can focus on making a lasting impact in the communities you serve.",
    image: "/assets/images/group.jpg"
  },
  {
    subheading: "Strategic & Growth Consulting",
    heading: "Empowering Organizations for Sustainable Success",
    content: "Our expert team provides strategic insights to drive growth, leadership excellence, and long-term impact for both nonprofits and businesses.",
    image: "/assets/images/perfomance.jpg"
  },
  {
    subheading: "Operational & Administrative Support",
    heading: "Optimizing Efficiency for Maximum Productivity",
    content: "We streamline operations, enhance workflow management, and ensure compliance, allowing your organization to focus on growth and impact.",
    image: "/assets/images/staffSupport.jpg"
  },
  {
    subheading: "Financial & Compliance Advisory",
    heading: "Guiding You Toward Financial Stability",
    content: "From financial planning to regulatory compliance, we provide expert solutions to safeguard your organization’s financial health and accountability.",
    image: "/assets/images/profit.jpg"
  },
  {
    subheading: "Technology & Innovation Solutions",
    heading: "Transforming Organizations with Cutting-Edge Solutions",
    content: "Leverage technology to enhance efficiency, security, and innovation in both nonprofit and for-profit sectors.",
    image: "/assets/images/tech2.jpg"
  }
];

export default function Banner() {
  return (
    <>
      <section className="banner-section style-two">
        <Swiper
          {...swiperOptions}
          className="banner-carousel theme_carousel owl-theme"
        >
          {sections.map((section, index) => (
            <SwiperSlide key={index} className="slide-item">
              <img className="image-layer lazy-image" src={section.image} height="811" width="1920"/>
              <div className="pattern" />
              <div className="auto-container">
                <div className="content-box">
                  <div>
                    <h3>{section.subheading}</h3>
                    <h2>{section.heading}</h2>
                    <h4 className="text">{section.content}</h4>
                    <div className="btn-box">
                      <Link href="#" className="btn-style-one">
                        <span className="btn-title">Partner with us Today + </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
          <div className="owl-nav">
            <button type="button" className="owl-prev">
              <span>PREV</span>
            </button>
            <button type="button" className="owl-next">
              <span>NEXT</span>
            </button>
          </div>
        </Swiper>
      </section>
    </>
  );
}