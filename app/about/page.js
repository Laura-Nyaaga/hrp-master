import FeatureSection from "@/components/elements/services/features";
import VideoPopup from "@/components/elements/VideoPopup";
import Layout from "@/components/layout/Layout";
import TestimonialSlider16 from "@/components/slider/TestimonialSlider16";
import Link from "next/link";
export default function Home() {
  return (
    <>
      <Layout
        headerStyle={1}
        footerStyle={11}
        breadcrumbTitle="About company"
        wrapperCls="home_1"
      >
        <div>
          {/* About Section */}
          <section className="about-section">
            <div className="auto-container">
              <div className="row">
                <div className="col-lg-6">
                  <div className="image-block">
                    <div
                      className="image-one wow fadeInLeft"
                      data-wow-delay="0ms"
                      data-wow-duration="1500ms"
                    >
                      <div className="image-box">
                        <img
                          className="lazy-image owl-lazy"
                          src="/assets/images/profit.jpg"
                          alt=""
                          height="483"
                          width="470"
                        />
                      </div>
                    </div>
                    <div
                      className="image-two wow fadeInLeft"
                      data-wow-delay="300ms"
                      data-wow-duration="1500ms"
                    >
                      <div className="image-box">
                        <img
                          className="lazy-image owl-lazy"
                          src="/assets/images/nonProft2.jpg"
                          alt=""
                          height="483"
                          width="470"
                        />
                      </div>
                    </div>
                    <div className="logo">
                      <img src="/assets/images/logo_hrp.png" alt="" />
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="sec-title">
                    <h2>
                      Professional and <br /> dedicated consulting services
                    </h2>
                    <div className="text-decoration">
                      <span className="left" />
                      <span className="right" />
                    </div>
                    <div className="text">
                      We deliver expert consulting across digital, programmatic,
                      and compliance services—committed to helping clients
                      achieve sustainable growth and real-world impact.
                    </div>
                  </div>
                  <div className="container">
                    <div className="row g-4">
                      <div className="col-12 col-lg-6 text-block">
                        <h5>INDUSTRIES COVERED</h5>
                        <p>For-profit and Nonprofit sectors</p>
                      </div>
                      <div className="col-12 col-lg-6 text-block">
                        <h5>OUR EXPERTISE</h5>
                        <p>High level of knowledge</p>
                      </div>
                      <div className="col-12 col-lg-6 text-block">
                        <h5>OUR APPROACH</h5>
                        <p>Human-centered, tech-powered</p>
                      </div>
                      <div className="col-12 col-lg-6 text-block">
                        <h5>CLIENT IMPACT</h5>
                        <p>Driving results that matter</p>
                      </div>
                    </div>
                  </div>

                  <div className="author-box">
                    <div className="signature">
                      <img
                        src="/assets/images/signature.png"
                        alt=""
                        height="70"
                        width="217"
                      />
                    </div>
                    <div className="author-info">
                      <h4>Kawa Polycarp</h4>
                      <h5>Co-Founder</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Features Section Six */}
          <section className="features-section-six">
            <div className="auto-container">
              <div className="row">
                {/* Left column: text content */}
                <div className="col-lg-6">
                  <div className="content">
                    <div className="sec-title">
                      <h2>Reason for Choosing Our Consultancy</h2>
                      <div className="text-decoration">
                        <span className="left" />
                        <span className="right" />
                      </div>
                    </div>

                    {/* Block 1 */}
                    <div className="whay-choose-block">
                      <div className="inner-box">
                        <div className="icon">
                          <span className="flaticon-bot" />
                        </div>
                        <h4>Tailored Advice and Support</h4>
                        <div className="text">
                          We provide customized solutions designed to address
                          your unique challenges and goals.
                        </div>
                      </div>
                    </div>

                    {/* Block 2 */}
                    <div className="whay-choose-block">
                      <div className="inner-box">
                        <div className="icon">
                          <span className="flaticon-diamond" />
                        </div>
                        <h4>Flexibility to Serve You Better</h4>
                        <div className="text">
                          Our adaptable approach ensures we can meet your
                          evolving needs and deliver superior service.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right column: video/image */}
                <div className="col-lg-6">
                  <div className="video-box">
                    <div className="image">
                      <img
                        src="/assets/images/profit.jpg"
                        alt="Consultancy Overview"
                        width="875"
                        height="580"
                      />
                    </div>
                    <VideoPopup />
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Why Choose Us Section Three */}
          <section className="why-choose-us-section-three">
            <div className="auto-container">
              <div className="sec-title text-center">
                <h2>
                  Our approach to client collaboration
                  <br />
                  delivers measurable, long-term value
                </h2>
                <div className="text-decoration">
                  <span className="left" />
                  <span className="right" />
                </div>
              </div>

              <div className="wrapper-box">
                <div className="outer-box">
                  <div className="row m-0">
                    {/* Quick Response */}
                    <div className="col-lg-4 col-md-6 whay-choose-block">
                      <div className="inner-box">
                        <div className="icon">
                          <span className="flaticon-rocket-2" />
                        </div>
                        <h4>Quick Response</h4>
                        <div className="text">
                          We respond swiftly to client needs and project
                          demands.
                        </div>
                      </div>
                    </div>

                    {/* Experienced Team */}
                    <div className="col-lg-4 col-md-6 whay-choose-block">
                      <div className="inner-box">
                        <div className="icon">
                          <span className="flaticon-target-1" />
                        </div>
                        <h4>Experienced Team</h4>
                        <div className="text">
                          Our skilled professionals bring proven, cross-sector
                          consulting experience.
                        </div>
                      </div>
                    </div>

                    {/* Flexible Payment */}
                    <div className="col-lg-4 col-md-6 whay-choose-block">
                      <div className="inner-box">
                        <div className="icon">
                          <span className="flaticon-world-1" />
                        </div>
                        <h4>Flexible Payment</h4>
                        <div className="text">
                          We offer adaptable pricing to fit your budget
                          constraints.
                        </div>
                      </div>
                    </div>

                    {/* Tailored Advice */}
                    <div className="col-lg-4 col-md-6 whay-choose-block">
                      <div className="inner-box">
                        <div className="icon">
                          <span className="flaticon-advice" />
                        </div>
                        <h4>Tailored Advice</h4>
                        <div className="text">
                          Every client receives custom strategies aligned to
                          specific goals.
                        </div>
                      </div>
                    </div>

                    {/* Quality Service */}
                    <div className="col-lg-4 col-md-6 whay-choose-block">
                      <div className="inner-box">
                        <div className="icon">
                          <span className="flaticon-medal" />
                        </div>
                        <h4>Quality Service</h4>
                        <div className="text">
                          We maintain excellence through consistent,
                          high-standard service delivery.
                        </div>
                      </div>
                    </div>

                    {/* 24/7 Support */}
                    <div className="col-lg-4 col-md-6 whay-choose-block">
                      <div className="inner-box">
                        <div className="icon">
                          <span className="flaticon-agreement" />
                        </div>
                        <h4>24/7 Support</h4>
                        <div className="text">
                          Our team is available around the clock for assistance.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Testimonial Section Eleven */}
          <section className="testimonial-section-eleven">
            <div className="auto-container">
              <div className="sec-title light text-center">
                <h2>Team behind our success</h2>
                <div className="text-decoration">
                  <span className="left" />
                  <span className="right" />
                </div>
              </div>
              <div className="wrapper-box" style={{ position: "relative" }}>
                {/* Added map-container to maintain aspect ratio */}
                <div
                  className="map-container"
                  style={{
                    position: "relative",
                    paddingTop: "50%",
                    width: "100%",
                  }}
                >
                  <img
                    src="/assets/images/map-three.png"
                    alt=""
                    style={{
                      position: "absolute",
                      top: "0",
                      left: "0",
                      width: "100%",
                      height: "100%",
                    }}
                  />
                  <div
                    className="client-block"
                    style={{ position: "absolute", left: "15%", top: "20%" }}
                  >
                    <div className="content">
                      <h4>Charisma White</h4>
                      <h5>USA</h5>
                    </div>
                    <div className="thumb">
                      <img
                        src="/assets/images/resource/author-thumb-22.jpg"
                        alt=""
                      />
                    </div>
                  </div>
                  <div
                    className="client-block"
                    style={{ position: "absolute", left: "48%", top: "50%" }}
                  >
                    <div className="content">
                      <h4>Kawa Polycarp</h4>
                      <h5>Kenya</h5>
                    </div>
                    <div className="thumb">
                      <img
                        src="/assets/images/resource/author-thumb-23.jpg"
                        alt=""
                      />
                    </div>
                  </div>
                  <div
                    className="client-block"
                    style={{ position: "absolute", left: "45%", top: "15%" }}
                  >
                    <div className="content">
                      <h4>Clara Situma</h4>
                      <h5>Germany</h5>
                    </div>
                    <div className="thumb">
                      <img
                        src="/assets/images/resource/author-thumb-24.jpg"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="testimonial-outer">
                <TestimonialSlider16 />
              </div>
            </div>
          </section>

          <section className="team-section-seven">
            <div className="auto-container">
              <div className="top-content row m-0 justify-content-between">
                <div className="sec-title">
                  <h2>Team behind our success</h2>
                  <div className="text-decoration">
                    <span className="left" />
                    <span className="right" />
                  </div>
                </div>
                <div className="link-btn mb-30 mt-4">
                  <Link href="#" className="theem-btn btn-style-one text-white">
                    <span className="btn-title">ALL MEMBERS</span>
                  </Link>
                </div>
              </div>
              <div className="row">
                {/* Charisma White */}
                <div className="team-block-four col-lg-4 col-md-6">
                  <div className="inner-box">
                    <Link href="/team-member/charisma-white">
                      <div className="image">
                        <img
                          src="/assets/images/resource/team-charisma.jpg"
                          alt="Charisma White"
                        />
                      </div>
                    </Link>
                    <div className="social-links-wrapper">
                      <ul className="social-links">
                        <li>
                          <Link href="#">
                            <span className="fab fa-linkedin-in" />
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div className="lower-content">
                      <div className="author-title">
                        <Link href="/team-member/charisma-white">
                          <h4>Charisma White</h4>
                        </Link>
                        <div className="designation">
                          Co-Founder &amp; Strategy Lead
                        </div>
                      </div>
                      <div className="text">
                        Charisma White is the Co-Founder of HRP Consultancy,
                        bringing extensive expertise in nonprofit strategy and
                        organizational development, successfully guiding
                        organizations through compliance and program
                        expansion....
                      </div>
                    </div>
                  </div>
                </div>
                {/* Kawa Polycarp */}
                <div className="team-block-four col-lg-4 col-md-6">
                  <div className="inner-box">
                    <Link href="/team-member/kawa-polycarp">
                      <div className="image">
                        <img
                          src="/assets/images/resource/team-kawa.jpg"
                          alt="Kawa Polycarp"
                        />
                      </div>
                    </Link>
                    <div className="social-links-wrapper">
                      <ul className="social-links">
                        <li>
                          <Link href="#">
                            <span className="fab fa-linkedin-in" />
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div className="lower-content">
                      <div className="author-title">
                        <Link href="/team-member/kawa-polycarp">
                          <h4>Kawa Polycarp</h4>
                        </Link>
                        <div className="designation">Managing Director</div>
                      </div>
                      <div className="text">
                        Kawa Polycarp is a seasoned Grant Writer, Nonprofit
                        Consultant, and Government Contracting Specialist with a
                        strong track record of helping organizations across
                        sectors secure vital funding....
                      </div>
                    </div>
                  </div>
                </div>
                {/* Clara Situma */}
                <div className="team-block-four col-lg-4 col-md-6">
                  <div className="inner-box">
                    <Link href="/team-member/clara-situma">
                      <div className="image">
                        <img
                          src="/assets/images/resource/team-clara.jpg"
                          alt="Clara Situma"
                        />
                      </div>
                    </Link>
                    <div className="social-links-wrapper">
                      <ul className="social-links">
                        <li>
                          <Link href="#">
                            <span className="fab fa-linkedin-in" />
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div className="lower-content">
                      <div className="author-title">
                        <Link href="/team-member/clara-situma">
                          <h4>Clara Situma</h4>
                        </Link>
                        <div className="designation">
                          Digital Solutions Lead
                        </div>
                      </div>
                      <div className="text">
                        Clara Situma serves as the Digital Solutions Lead at HRP
                        Consultancy, where she architects and manages the
                        development of web and mobile platforms....
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Feature Section Two */}
          <FeatureSection />
        </div>
      </Layout>
    </>
  );
}
