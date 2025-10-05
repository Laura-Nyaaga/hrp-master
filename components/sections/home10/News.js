"use client";
import Link from "next/link";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const swiperOptions = {
  modules: [Autoplay, Pagination],
  slidesPerView: 2,
  spaceBetween: 30,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  loop: true,
  breakpoints: {
    320: { slidesPerView: 1, spaceBetween: 20 },
    768: { slidesPerView: 2, spaceBetween: 30 },
  },
};

const slidesData = [
  {
    dateDay: "10",
    dateMonth: "Mar",
    comments: 0,
    title: "5 Key Strategies for Scaling Nonprofits Successfully",
    desc: "Discover proven methods to expand impact, attract funding, and build sustainability.",
    image: "/assets/images/tech2.jpg",
  },
  {
    dateDay: "08",
    dateMonth: "Mar",
    comments: 0,
    title: "How to Build a High-Impact Nonprofit Board",
    desc: "Learn how effective governance strengthens leadership and drives mission success.",
    image: "/assets/images/coins.jpg",
  },
  {
    dateDay: "05",
    dateMonth: "Mar",
    comments: 0,
    title: "Streamlining Nonprofit Operations for Maximum Efficiency",
    desc: "Optimize administrative processes to reduce overhead and improve workflow.",
    image: "/assets/images/team.jpg",
  },
  {
    dateDay: "02",
    dateMonth: "Mar",
    comments: 0,
    title: "The Role of Policies in Nonprofit Compliance",
    desc: "Understand how strong policies ensure regulatory adherence and protect your organization.",
    image: "/assets/images/team2.jpg",
  },
  {
    dateDay: "28",
    dateMonth: "Feb",
    comments: 0,
    title: "Grant Budgeting: How to Align Funds with Program Goals",
    desc: "Master the art of budget planning for sustainable financial management.",
    image: "/assets/images/perfomance.jpg",
  },
  {
    dateDay: "25",
    dateMonth: "Feb",
    comments: 0,
    title: "Nonprofit Financial Compliance: Avoiding Common Pitfalls",
    desc: "Stay ahead of regulatory challenges and maintain financial accountability.",
    image: "/assets/images/tech2.jpg",
  },
  {
    dateDay: "22",
    dateMonth: "Feb",
    comments: 0,
    title: "Leveraging Data Analytics for Nonprofit Decision-Making",
    desc: "Use data-driven insights to improve impact measurement and reporting.",
    image: "/assets/images/coins.jpg",
  },
  {
    dateDay: "20",
    dateMonth: "Feb",
    comments: 0,
    title: "Cybersecurity for Nonprofits: Protecting Sensitive Information",
    desc: "Implement security best practices to safeguard donor and organizational data.",
    image: "/assets/images/team.jpg",
  },
  {
    dateDay: "10",
    dateMonth: "Mar",
    comments: 0,
    title: "5 Key Strategies for Scaling Nonprofits Successfully",
    desc: "Discover proven methods to expand impact, attract funding, and build sustainability.",
    image: "/assets/images/team2.jpg",
  },
  {
    dateDay: "08",
    dateMonth: "Mar",
    comments: 0,
    title: "How to Build a High-Impact Nonprofit Board",
    desc: "Learn how effective governance strengthens leadership and drives mission success.",
    image: "/assets/images/perfomance.jpg",
  },
  {
    dateDay: "06",
    dateMonth: "Mar",
    comments: 0,
    title: "Growth Strategies for Small Businesses",
    desc: "Unlock proven strategies to expand your business and increase profitability.",
    image: "/assets/images/tech2.jpg",
  },
  {
    dateDay: "04",
    dateMonth: "Mar",
    comments: 0,
    title: "Business Model Innovation for Sustainable Growth",
    desc: "Discover how to adapt and innovate to stay ahead in your industry.",
    image: "/assets/images/coins.jpg",
  },
  {
    dateDay: "05",
    dateMonth: "Mar",
    comments: 0,
    title: "Streamlining Nonprofit Operations for Maximum Efficiency",
    desc: "Optimize administrative processes to reduce overhead and improve workflow.",
    image: "/assets/images/team.jpg",
  },
  {
    dateDay: "02",
    dateMonth: "Mar",
    comments: 0,
    title: "The Role of Policies in Nonprofit Compliance",
    desc: "Understand how strong policies ensure regulatory adherence and protect your organization.",
    image: "/assets/images/team2.jpg",
  },
  {
    dateDay: "28",
    dateMonth: "Feb",
    comments: 0,
    title: "Optimizing Business Processes for Higher Productivity",
    desc: "Enhance workflow efficiency with process automation and smart management.",
    image: "/assets/images/perfomance.jpg",
  },
  {
    dateDay: "26",
    dateMonth: "Feb",
    comments: 0,
    title: "HR Best Practices for Small Businesses",
    desc: "Learn how to attract, retain, and manage top talent in your organization.",
    image: "/assets/images/tech2.jpg",
  },
  {
    dateDay: "25",
    dateMonth: "Feb",
    comments: 0,
    title: "Nonprofit Financial Compliance: Avoiding Common Pitfalls",
    desc: "Stay ahead of regulatory challenges and maintain financial accountability.",
    image: "/assets/images/coins.jpg",
  },
  {
    dateDay: "22",
    dateMonth: "Feb",
    comments: 0,
    title: "Understanding Business Taxes: A Guide for Entrepreneurs",
    desc: "Navigate tax planning and compliance to keep your business financially healthy.",
    image: "/assets/images/team.jpg",
  },
  {
    dateDay: "20",
    dateMonth: "Feb",
    comments: 0,
    title: "Grant Budgeting: How to Align Funds with Program Goals",
    desc: "Master the art of budget planning for sustainable financial management.",
    image: "/assets/images/team2.jpg",
  },
  {
    dateDay: "18",
    dateMonth: "Feb",
    comments: 0,
    title: "Financial Forecasting for Small Businesses",
    desc: "Predict financial trends and prepare for future growth with data-driven insights.",
    image: "/assets/images/perfomance.jpg",
  },
  {
    dateDay: "15",
    dateMonth: "Feb",
    comments: 0,
    title: "Leveraging Data Analytics for Nonprofit Decision-Making",
    desc: "Use data-driven insights to improve impact measurement and reporting.",
    image: "/assets/images/tech2.jpg",
  },
  {
    dateDay: "12",
    dateMonth: "Feb",
    comments: 0,
    title: "Cybersecurity for Nonprofits: Protecting Sensitive Information",
    desc: "Implement security best practices to safeguard donor and organizational data.",
    image: "/assets/images/coins.jpg",
  },
  {
    dateDay: "10",
    dateMonth: "Feb",
    comments: 0,
    title: "AI in Small Business: How to Automate for Growth",
    desc: "Explore AI-powered tools that improve efficiency and customer experience.",
    image: "/assets/images/team.jpg",
  },
  {
    dateDay: "08",
    dateMonth: "Feb",
    comments: 0,
    title: "Building a Strong Online Presence for Small Businesses",
    desc: "Master digital marketing and brand positioning to attract and retain customers.",
    image: "/assets/images/team2.jpg",
  },
];

export default function NewsSlider10() {
  return (
    <>
      <div className="auto-container">
        <div className="sec-title  style-two text-center mt-5">
          <h6 className="home-subtitle">Latest Blogs</h6>
          <h2>Explore Blogs & Insights </h2>
        </div>
        {/*Theme Carousel*/}
      </div>
      <div className="p-5">
      <Swiper {...swiperOptions} className="theme_carousel owl-theme">
        {slidesData.map((item, idx) => (
          <SwiperSlide key={idx} className="slide-item">
            <div
              className="card h-100 border-0 shadow-sm mb-5"
              style={{ borderRadius: "15px" }}
            >
              <div className="row g-0 align-items-stretch">
                {/* Image Section */}
                <div className="col-md-4 position-relative overflow-hidden">
                  <Link href="/blog-details">
                    <img
                      src={item.image}
                      className="img-fluid h-100 w-100"
                      alt={item.title}
                      style={{
                        objectFit: "cover",
                        borderTopLeftRadius: "15px",
                        borderBottomLeftRadius: "15px",
                      }}
                    />
                  </Link>
                </div>
                  <div className="position-absolute top-0 start-0 badge p-2 bg-dark text-white z-10">
                      <strong>{item.dateDay}</strong> {item.dateMonth}
                    </div>
                {/* Text Section */}
                <div className="col-md-8">
                  <div className="card-body d-flex flex-column p-4">
                    <div
                      className="d-flex mb-2 small"
                      style={{ color: "#081a63" }}
                    >
                      <div className="me-3">
                        <i className="fas fa-user me-1 m-2"></i> HrpInsights
                      </div>
                      <br />
                      <div>
                        <i className="fas fa-comment me-1 m-2"></i> Comment (
                        {item.comments})
                      </div>
                    </div>
                    <h5
                      className="card-title fw-bold mb-3"
                      style={{ color: "#1A3C44" }}
                    >
                      <Link
                        href="/blog-details"
                        className="text-decoration-none text-bold"
                        style={{ color: "#081a63" }}
                      >
                       <strong>{item.title}</strong> 
                      </Link>
                    </h5>
                    <p className="card-text text-muted flex-grow-1">
                      {item.desc}
                    </p>
                    <br/>
                    <Link
                      href="/blog-details"
                      className="btn btn-link p-0 align-self-start fw-bold"
                      style={{ color: "#1A3C44" }}
                    >
                      Read More +
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      </div>
      {/* <div className="owl-nav mt-3 text-end">
        <button type="button" className="btn btn-outline-secondary h2p me-2">
          ‹
        </button>
        <button type="button" className="btn btn-outline-secondary h2n">
          ›
        </button>
      </div> */}
    </>
  );
}
