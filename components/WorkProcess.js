import React from 'react';

const WorkProcess = () => {
  return (
    <div className="work-process__one section-padding">
      <div className="container">
        <div className="row justify-content-center text-center">
          <div className="col-xl-6 col-lg-6">
            <div className="work-process__one-title">
              <span className="subtitle-three m-auto">Work Process</span>
              <h2>How We Operate</h2>
            </div>
          </div>
        </div>
        <div className="work-process-wrapper">
          <div className="single-item">
            <div className="single-item__icon">
              <span className="single-item__number">01</span>
              <i className="flaticon-creativity"></i>
            </div>
            <h5>Initial Consultation</h5>
            <p>Discuss your financial goals and needs during a personalized consultation.</p>
            <div className="next-arrow">
              <img src="assets/img/shapes/work-process-arrow.png" alt="" />
            </div>
          </div>
          <div className="single-item">
            <div className="single-item__icon">
              <span className="single-item__number">02</span>
              <i className="flaticon-creativity"></i>
            </div>
            <h5>Strategy Development</h5>
            <p>We create a tailored financial plan designed to meet your specific objectives.</p>
            <div className="next-arrow">
              <img src="assets/img/shapes/work-process-arrow.png" alt="" />
            </div>
          </div>
          <div className="single-item">
            <div className="single-item__icon">
              <span className="single-item__number">03</span>
              <i className="flaticon-creativity"></i>
            </div>
            <h5>Plan Implementation</h5>
            <p>Discuss your financial goals and needs during a personalized consultation.</p>
            <div className="next-arrow">
              <img src="assets/img/shapes/work-process-arrow.png" alt="" />
            </div>
          </div>
          <div className="single-item">
            <div className="single-item__icon">
              <span className="single-item__number">04</span>
              <i className="flaticon-creativity"></i>
            </div>
            <h5>Ongoing Monitoring</h5>
            <p>Discuss your financial goals and needs during a personalized consultation.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkProcess;