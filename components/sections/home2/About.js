"use client";
import Link from "next/link";
import { useState } from "react";

const services = [
  "Get Ahead with Expert Consultants",
  "Your Success Is Our Business",
  "Unleash Your Organization’s Full Potential",
  "Transforming Organizations for a Brighter Tomorrow",
];
export default function About() {
  return (
    <>
      <section className="about-section-two">
        <div className="auto-container">
          <div className="row">
            <div className="col-lg-6">
              <div className="image-block">
                <div className="image-one">
                  <img
                    className="lazy-image owl-lazy"
                    src="/assets/images/group.jpg"
                    alt=""
                    height="690"
                    width="500"
                  />
                </div>
                <div className="image-two">
                  <img
                    className="lazy-image owl-lazy"
                    src="/assets/images/bluShape.jpg"
                    alt=""
                    height="223"
                    width="120"
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about__three-content">
                <h6 className="home-subtitle">About Company</h6>
                <h2 className="m-20">
                  Empowering Nonprofits & Businesses <br />
                  for Sustainable Success
                </h2>
              </div>
              <div className="content-block">
                <div className="text">
                  We help organizations thrive with strategic guidance,
                  operational excellence, and financial security <br /> Our
                  expert consultants tailor solutions to drive impact,
                  efficiency, and growth.
                </div>
                <div className="text">
                  <div className="about__three-content-service">
                    {services.map((text, index) => (
                      <div
                        key={index}
                        className="about__three-content-service-single"
                      >
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
      </section>
    </>
  );
}
