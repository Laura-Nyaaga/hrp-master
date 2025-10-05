"use client";
import { useState } from "react";

const forProfitIndustries = [
  { id: 1, title: "Banking & Capital Markets", icon: "flaticon-bank" },
  { id: 2, title: "Finance & Insurance", icon: "flaticon-insurance" },
  { id: 3, title: "Logistics & Transportation", icon: "flaticon-trolley" },
  { id: 4, title: "Justice, Defense & Security", icon: "flaticon-null-1" },
  { id: 5, title: "Energy, Utilities & Resources", icon: "flaticon-petroleum" },
  { id: 6, title: "Life Sciences & Healthcare", icon: "flaticon-doctor" },
  { id: 7, title: "Retail & E-commerce", icon: "flaticon-shopping-cart" },
  {
    id: 8,
    title: "Manufacturing & Industrial Services",
    icon: "flaticon-gear-1",
  },
  { id: 9, title: "Construction & Real Estate", icon: "flaticon-center" },
  {
    id: 10,
    title: "Media, Advertising & Entertainment",
    icon: "flaticon-play",
  },
  { id: 11, title: "Hospitality & Food Service", icon: "flaticon-support-1" },
  { id: 12, title: "Professional Services", icon: "flaticon-suitcase" },
  {
    id: 13,
    title: "Startups & Venture-backed Businesses",
    icon: "flaticon-rocket-ship",
  },
  { id: 14, title: "Technology & SaaS Companies", icon: "flaticon-system" },
];

const nonprofitIndustries = [
  { id: 1, title: "Human Services & Social Impact", icon: "flaticon-team" },
  { id: 2, title: "Education & Youth Development", icon: "flaticon-exam" },
  { id: 3, title: "Health & Mental Wellness", icon: "flaticon-doctor" },
  {
    id: 4,
    title: "Faith-Based & Religious Organizations",
    icon: "flaticon-support",
  },
  { id: 5, title: "Arts, Culture & Heritage", icon: "flaticon-cup" },
  {
    id: 6,
    title: "Environmental & Conservation Groups",
    icon: "flaticon-earth-globe",
  },
  {
    id: 7,
    title: "International Development & Humanitarian Aid",
    icon: "flaticon-global",
  },
  {
    id: 8,
    title: "Community Foundations & Grantmakers",
    icon: "flaticon-money",
  },
  {
    id: 9,
    title: "Advocacy, Civil Rights & Policy Organizations",
    icon: "flaticon-agreement",
  },
  {
    id: 10,
    title: "Housing & Homelessness Support",
    icon: "flaticon-support-1",
  },
];

export default function IndustriesWeServe() {
  const [showAllProfit, setShowAllProfit] = useState(false);
  const [showAllNonprofit, setShowAllNonprofit] = useState(false);

  const profitToShow = showAllProfit
    ? forProfitIndustries
    : forProfitIndustries.slice(0, 6);
  const nonprofitToShow = showAllNonprofit
    ? nonprofitIndustries
    : nonprofitIndustries.slice(0, 6);

  return (
    <section className="services-section-five style-two">
      <div className="auto-container">
        <div className="top-content row m-0 justify-content-between">
          <div className="sec-title">
            <h2>Industries we serve</h2>
            <div className="text-decoration">
              <span className="left" />
              <span className="right" />
            </div>
          </div>
          <div className="text">
            {" "}
            Where innovation meets impact across every sector.
          </div>
          <div className="text">
            We partner with forward-thinking businesses and mission-driven
            organizations across diverse industries to drive transformation,
            efficiency, and measurable outcomes. Whether you're navigating
            digital shifts, regulatory complexities, or scaling operations, our
            tailored solutions are designed to meet you where you are—and
            elevate you beyond.
          </div>
          <p>Explore the key industries we proudly support:</p>
          <br />
        </div>
        <h4 className="mt-5">For Profit</h4>
        <div className="row">
          {profitToShow.map((item) => (
            <div key={item.id} className="col-lg-4 col-md-6 service-block-five">
              <div className="inner-box">
                <div className="content-box">
                  <div className="icon">
                    <span className={item.icon} />
                  </div>
                  <h4>{item.title}</h4>
                </div>
              </div>
            </div>
          ))}
        </div>
        {forProfitIndustries.length > 6 && (
          <div className="mt-3">
            <button
              className="btn-style-five"
              onClick={() => setShowAllProfit(!showAllProfit)}
            >
              {showAllProfit ? "Show Less" : "Load More"}
              <span className="plus-sign">+</span>
            </button>
          </div>
        )}

        <h4 className="mt-5">For Non-Profit</h4>
        <div className="row">
          {nonprofitToShow.map((item) => (
            <div key={item.id} className="col-lg-4 col-md-6 service-block-five">
              <div className="inner-box">
                <div className="content-box">
                  <div className="icon">
                    <span className={item.icon} />
                  </div>
                  <h4>{item.title}</h4>
                </div>
              </div>
            </div>
          ))}
        </div>
        {nonprofitIndustries.length > 6 && (
          <div className="mt-3">
            <button
              className="btn-style-five"
              onClick={() => setShowAllNonprofit(!showAllNonprofit)}
            >
              {showAllNonprofit ? "Show Less" : "Load More"}
              <span className="plus-sign">+</span>
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
