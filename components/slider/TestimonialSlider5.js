"use client";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const swiperOptions = {
  modules: [Autoplay, Pagination, Navigation],
  slidesPerView: 2,
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

  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
    575: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    767: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    991: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1199: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1350: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
  },
};

export default function TestimonialSlider() {
  return (
    <>
      <Swiper {...swiperOptions} className="theme_carousel owl-theme">
        {/* — Testimonial 1 — */}
        <SwiperSlide className="slide">
          <div className="testimonial-block-six">
            <div className="inner-box">
              <div className="top-content">
                <div className="quote">
                  <span className="flaticon-quote" />
                </div>
                <div className="text">
                  “Working with HRP Consultancy was truly transformational for
                  our practice. Their grant writing expertise helped us secure
                  the AB 7 grant, which is now funding the implementation of our
                  Electronic Health Record (EHR) system. This upgrade is
                  improving how we manage patient data and streamlining our
                  clinical workflows more than we imagined. Their team was
                  attentive, strategic, and deeply understood the mission of
                  Evolving Minds Therapy. We’re now better equipped to serve our
                  clients—thanks to HRP, we’re entering a new era of care.”
                </div>
                <div className="rating">
                  <span className="flaticon-star" />
                  <span className="flaticon-star" />
                  <span className="flaticon-star" />
                  <span className="flaticon-star" />
                  <span className="flaticon-star style-two" />
                </div>
              </div>
              <div className="author-box">
                <div className="author-title">Zanyae Allen</div>
                <div className="designation">
                  Owner &amp; Founder, Evolving Minds Therapy, LLC
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* — Testimonial 2 — */}
        <SwiperSlide className="slide">
          <div className="testimonial-block-six">
            <div className="inner-box">
              <div className="top-content">
                <div className="quote">
                  <span className="flaticon-quote" />
                </div>
                <div className="text">
                  “HRP Consultancy exceeded our expectations in every way. They
                  not only helped us build sound and transparent financials, but
                  also developed bylaws that truly reflect our mission and
                  values. Their guidance was instrumental in aligning our
                  governance structure with best nonprofit practices. Thanks to
                  HRP, we feel more confident engaging partners and funders as
                  we scale our impact. Their professionalism, insight, and care
                  for our vision stood out from day one.”
                </div>
                <div className="rating">
                  <span className="flaticon-star" />
                  <span className="flaticon-star" />
                  <span className="flaticon-star" />
                  <span className="flaticon-star" />
                  <span className="flaticon-star" />
                </div>
              </div>
              <div className="author-box">
                <div className="author-title">
                  Pathways for Peace and Progress
                </div>
                <div className="designation">www.ppprogress.org</div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* — Testimonial 3 — */}
        <SwiperSlide className="slide">
          <div className="testimonial-block-six">
            <div className="inner-box">
              <div className="top-content">
                <div className="quote">
                  <span className="flaticon-quote" />
                </div>
                <div className="text">
                  “Partnering with HRP Consultancy was a game-changer for our
                  organization. They provided us with expertly crafted financial
                  statements and ensured all our Form 990 filings were submitted
                  accurately and on time. Their deep understanding of nonprofit
                  compliance took a huge weight off our shoulders. HRP made the
                  complex feel simple and gave us the financial clarity we
                  needed to continue making an impact. I highly recommend their
                  services to any nonprofit looking to stay audit-ready and
                  mission-focused.”
                </div>
                <div className="rating">
                  <span className="flaticon-star" />
                  <span className="flaticon-star" />
                  <span className="flaticon-star" />
                  <span className="flaticon-star" />
                  <span className="flaticon-star style-two" />
                </div>
              </div>
              <div className="author-box">
                <div className="author-title">National Help Services</div>
                <div className="designation">John Damian, President</div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* pagination bullets */}
        <div className="swiper-pagination relative" />
      </Swiper>
    </>
  );
}
