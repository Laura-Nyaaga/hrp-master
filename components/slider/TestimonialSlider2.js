"use client";

import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Define the shape of a testimonial

// Array of testimonials
const testimonials = [
  {
    name: "Ava Mitchell",
    role: "Executive Director",
    company: "Community Impact Fund",
    quote:
      "HRP Consultancy transformed our nonprofit’s operations. Their strategic guidance helped us streamline processes and secure sustainable funding.",
    image: "/assets/images/resource/author-thumb-1.jpg",
    rating: 5,
  },
  {
    name: "Jason Carter",
    role: "Finance Manager",
    company: "Growth Initiatives",
    quote:
      "Their financial expertise and compliance support have been invaluable. We now have clear budgeting strategies and improved grant management.",
    image: "/assets/images/resource/author-thumb-2.jpg",
    rating: 5,
  },
  {
    name: "Sophia Reynolds",
    role: "HR Director",
    company: "Future Foundations",
    quote:
      "HRP’s HR and payroll solutions made a significant impact. Our employee management is now efficient and compliant.",
    image: "/assets/images/resource/author-thumb-3.jpg",
    rating: 5,
  },
  {
    name: "Daniel Brooks",
    role: "CEO",
    company: "Bright Vision Enterprises",
    quote:
      "The consulting services provided by HRP have been instrumental in scaling our business. Their strategies drive measurable growth.",
    image: "/assets/images/resource/author-thumb-4.jpg",
    rating: 5,
  },
  {
    name: "Olivia Bennett",
    role: "Program Coordinator",
    company: "Change Makers",
    quote:
      "Their board governance and leadership training elevated our nonprofit’s efficiency. We’re now more structured and mission-driven.",
    image: "/assets/images/resource/author-thumb-5.jpg",
    rating: 5,
  },
  {
    name: "Ryan Harris",
    role: "Operations Manager",
    company: "Legacy Solutions",
    quote:
      "HRP’s expertise in policy development and compliance ensured we met all regulatory requirements while optimizing workflow.",
    image: "/assets/images/resource/author-thumb-6.jpg",
    rating: 5,
  },
];

// Swiper configuration
const swiperOptions = {
  modules: [Autoplay, Pagination, Navigation],
  slidesPerView: 3,
  autoplay: { delay: 2500, disableOnInteraction: false },
  loop: true,
  navigation: { nextEl: ".h1n", prevEl: ".h1p" },
  pagination: { el: ".swiper-pagination", clickable: true },
  breakpoints: {
    320: { slidesPerView: 1 },
    575: { slidesPerView: 2 },
    767: { slidesPerView: 2 },
    991: { slidesPerView: 2 },
    1199: { slidesPerView: 3 },
    1350: { slidesPerView: 3 },
  },
};

// Testimonial card component
function TestimonialCard({ name, role, company, quote, image, rating }) {
  return (
    <div className="testimonial-block-three">
      <div className="inner-box">
        <div className="author-box">
          <div className="image">
            <img src={image} alt={name} />
          </div>
          <div className="author-title">{name}</div>
          <div className="designation">
            {role}, {company}
          </div>
        </div>
        <p className="text">{quote}</p>
        <div className="rating">
          {Array.from({ length: rating }).map((_, i) => (
            <span key={i} className="flaticon-star mr-1" />
          ))}
        </div>
        <div className="testimonial-quote mt-2 text-center">
          <span className="flaticon-quote text-gray-300 text-4xl" />
        </div>
    
      </div>
    </div>
  );
}

// Main slider component
export default function TestimonialSlider2() {
  return (
    <Swiper {...swiperOptions} className="theme_carousel owl-theme">
      {testimonials.map((testimonial, idx) => (
        <SwiperSlide key={idx} className="slide">
          <TestimonialCard {...testimonial} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
