import React from "react";

const AboutThree = () => {
  const services = [
    "Get Ahead with Expert Consultants",
    "Your Success Is Our Business",
    "Unleash Your Organization’s Full Potential",
    "Transforming Organizations for a Brighter Tomorrow"
  ];

  return (
    <div className="about__three section-padding">
      <div className="container">
        <div className="row align-items-center flex-wrap-reverse gy-4">
          {/* Image */}
          <div className="col-xl-6 col-lg-7 col-md-8">
            <div className="about__three-image">
              <img
                src="/assets/images/profit.jpg"
                alt="Profit Growth"
                className="animate-y-axis"
              />
              {/* <div className="about__three-image-shape">
                <img
                  src="/assets/images/shapes/about-three-shape.png"
                  alt="Decorative Shape"
                />
              </div> */}
            </div>
          </div>

          {/* Content */}
          <div className="col-xl-6 col-lg-12">
            <div className="about__three-content">
              <h5 className="home-subtitle">About Us</h5>
              <h2>Empowering Nonprofits & Businesses for Sustainable Success</h2>
              <p>
                We help organizations thrive with strategic guidance, operational excellence, and financial security. Our expert consultants tailor solutions to drive impact, efficiency, and growth.
              </p>

              <div className="about__three-content-service">
                {services.map((text, index) => (
                  <div key={index} className="about__three-content-service-single">
                    <i className="fas fa-check-circle"></i>
                    <h6>{text}</h6>
                  </div>
                ))}
              </div>

              <a href="about.html" className="btn-three">
                About Us <i className="fas fa-plus"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutThree;
