import React from 'react';

const ProjectThree = () => {
  return (
    <div className="project__three">
      <div className="project__three-card-wrapper">
        <div className="project__three-single-card">
          <div className="project__three-image" style={{ backgroundImage: 'url(assets/img/project/project-2.jpg)' }}></div>
          <a href="portfolio-details.html" className="project__three-single-card-inner">
            <span>Collaboration</span>
            <h6>Partnership Program</h6>
          </a>
        </div>
        <div className="project__three-single-card active">
          <div className="project__three-image" style={{ backgroundImage: 'url(assets/img/project/project-1.jpg)' }}></div>
          <a href="portfolio-details.html" className="project__three-single-card-inner">
            <span>Media</span>
            <h6>Video Production</h6>
          </a>
        </div>
        <div className="project__three-single-card">
          <div className="project__three-image" style={{ backgroundImage: 'url(assets/img/project/project-3.jpg)' }}></div>
          <a href="portfolio-details.html" className="project__three-single-card-inner">
            <span>Reach</span>
            <h6>Audience Targeting</h6>
          </a>
        </div>
        <div className="project__three-single-card">
          <div className="project__three-image" style={{ backgroundImage: 'url(assets/img/project/project-4.jpg)' }}></div>
          <a href="portfolio-details.html" className="project__three-single-card-inner">
            <span>Loyalty</span>
            <h6>Customer Retention</h6>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectThree;