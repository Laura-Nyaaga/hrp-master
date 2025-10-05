"use client";

import Link from "next/link";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import {
  Lightbulb,
  BarChart2,
  ShieldCheck,
  TrendingUp,
  FileText,
  Briefcase,
  UserPlus,
  Award,
  ClipboardCheck,
} from 'lucide-react';

const services = [
  {
    title: "Accelerate Growth with Digital Transformation Tailored for Your Industry",
    text: "Empower your business through custom digital solutions that streamline operations, improve customer experience, and future-proof your company. Our team guides your transition into technology-driven success with measurable results.",
    img: "/assets/images/services/digital-transformation.jpg",
    keyword: "Innovation",
  },
  {
    title: "Leverage Data and Analytics to Drive Smarter Business Decisions",
    text: "Unlock deeper insights into your operations and customer behavior. Our analytics services provide actionable intelligence, helping you make informed choices, boost performance, and scale your business competitively.",
    img: "/assets/images/services/data-analytics.jpg",
    keyword: "Insights",
  },
  {
    title: "Protect Your Business with Trusted IT & Cybersecurity Solutions",
    text: "Safeguard your infrastructure with robust cybersecurity, IT support, and compliance systems. We help minimize risk, defend digital assets, and keep your organization secure in today’s volatile tech landscape.",
    img: "/assets/images/services/cybersecurity.jpg",
    keyword: "Protection",
  },
  {
    title: "Fuel Sustainable Growth Through Strategy, Finance & Operational Excellence",
    text: "From planning to execution, we help you refine your strategy, optimize finances, and streamline operations to increase productivity, profitability, and scalability across sectors.",
    img: "/assets/images/services/strategy-finance.jpg",
    keyword: "Growth",
  },
  {
    title: "Ensure IRS Filing Accuracy and Total Business Compliance Confidence",
    text: "Stay compliant with tax codes and corporate regulations. We manage your IRS filings, certifications, and annual reporting, reducing risk and giving you peace of mind.",
    img: "/assets/images/services/compliance.jpg",
    keyword: "Compliance",
  },
  {
    title: "Win Government Contracts with Complete Readiness and Compliance Support",
    text: "Prepare your business to compete and succeed in government procurement. We offer proposal writing, registrations, certifications, and compliance services to help you access federal, state, and local contracts.",
    img: "/assets/images/services/gov-contracts.jpg",
    keyword: "Preparedness",
  },
  {
    title: "Transform Your Sales Process with CRM & Customer Engagement Tools",
    text: "Streamline your sales cycle, automate communications, and improve retention. We design and implement CRM systems that grow your client base and boost conversions.",
    img: "/assets/images/services/sales-crm.jpg",
    keyword: "Engagement",
  },
  {
    title: "Achieve Global Standards with ISO Certification and Internal Audits",
    text: "We guide businesses through ISO certification, gap analysis, internal audits, and quality management to meet international standards and boost operational credibility.",
    img: "/assets/images/services/iso-certification.jpg",
    keyword: "Standards",
  },
  {
    title: "Accurate Bookkeeping and Tax Support You Can Rely On",
    text: "Get timely financial reports, tax filings, and accounting services that support informed decision-making and keep your business audit-ready all year.",
    img: "/assets/images/services/bookkeeping.jpg",
    keyword: "Accuracy",
  },
];

const iconMap = {
  Innovation: Lightbulb,
  Insights: BarChart2,
  Protection: ShieldCheck,
  Growth: TrendingUp,
  Compliance: FileText,
  Preparedness: Briefcase,
  Engagement: UserPlus,
  Standards: Award,
  Accuracy: ClipboardCheck,
};

const swiperOptions = {
  modules: [Autoplay, Pagination, Navigation],
  slidesPerView: 3,
  spaceBetween: 30,
  autoplay: { delay: 2500, disableOnInteraction: false },
  loop: true,
  navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" },
  pagination: { el: ".swiper-pagination", clickable: true },
  breakpoints: {
    320: { slidesPerView: 1, spaceBetween: 20 },
    640: { slidesPerView: 2, spaceBetween: 20 },
    768: { slidesPerView: 3, spaceBetween: 30 },
    1024: { slidesPerView: 3, spaceBetween: 30 },
  },
};

export default function ServicesSlider2() {
  return (
    <section className="services-section">
      <div className="auto-container">
        <div className="row m-0 align-items-center justify-content-between mb-8">
          <div className="sec-title style-two">
            <h5>FOR-PROFIT SERVICES</h5>
            <h2>Business Development</h2>
          </div>
          <div className="link-btn">
            <Link href="#" className="theme-btn btn-style-four">
              <span className="btn-title">All Services</span>
            </Link>
          </div>
        </div>

        <Swiper {...swiperOptions} className="swiper-theme">
          {services.map((svc, idx) => {
            const IconComponent = iconMap[svc.keyword];
            return (
              <SwiperSlide key={idx} className="service-block-one">
                <div className="inner-box">
                  <div className="icon">
                    <div className="icon-inner">
                      {IconComponent && <IconComponent size={48} />}
                    </div>
                  </div>
                  <h4>{svc.title}</h4>
                  <div className="text">{svc.text}</div>
                  <Link href="#" className="read-more-link">
                    Read More +
                  </Link>
                </div>
              </SwiperSlide>
            );
          })}
          <div className="swiper-pagination mt-4" />
          <div className="swiper-button-prev h1p" />
          <div className="swiper-button-next h1n" />
        </Swiper>
      </div>
    </section>
  );
}
