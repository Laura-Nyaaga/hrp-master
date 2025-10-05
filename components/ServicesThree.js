import React from "react";

const ServicesThree = () => {
  return (
    <div className="services__three section-padding">
      <div className="container">
        <div className="row mb-50 gy-2">
          <div className="col-xl-5 col-lg-7">
            <span className="subtitle-three">Latest Service</span>
            <h2>Our Financial Solutions</h2>
          </div>
          <div className="col-xl-5 offset-xl-2 col-lg-5 d-flex justify-content-end">
            <p>
              Our commitment is to provide actionable advice that you make
              informed decisions and achieve long-term financial success. Trust
              us to be your partner in financial security
            </p>
          </div>
        </div>
        <div className="row gy-4 justify-content-center">
          <div className="col-xl-4 col-lg-6 col-md-12">
            <div className="single-service">
              <div className="single-service__image">
                <img src="assets/img/service/service-4.jpg" alt="" />
              </div>
              <div className="single-service__content">
                <div className="single-service__icon">
                  <i className="flaticon-imac-computer"></i>
                </div>
                <h5>Investment Advisory</h5>
                <p>
                  We develop comprehensive plans, including wills and trusts to
                  manage and distribute
                </p>
                <a href="#" className="btn-three">
                  Read More <i className="fas fa-plus"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-6 col-md-12">
            <div className="single-service">
              <div className="single-service__image">
                <img src="assets/img/service/service-1.jpg" alt="" />
              </div>
              <div className="single-service__content">
                <div className="single-service__icon">
                  <i className="flaticon-imac-computer"></i>
                </div>
                <h5>Wealth Management</h5>
                <p>
                  We tailor solutions to your financial goals and risk
                  tolerance, ensuring a portfolio
                </p>
                <a href="#" className="btn-three">
                  Read More <i className="fas fa-plus"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-6 col-md-12">
            <div className="single-service">
              <div className="single-service__image">
                <img src="assets/img/service/service-5.jpg" alt="" />
              </div>
              <div className="single-service__content">
                <div className="single-service__icon">
                  <i className="flaticon-imac-computer"></i>
                </div>
                <h5>Retirement Planning</h5>
                <p>
                  We analyze your financial situation, project future needs, and
                  create a plan ensure
                </p>
                <a href="#" className="btn-three">
                  Read More <i className="fas fa-plus"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesThree;
