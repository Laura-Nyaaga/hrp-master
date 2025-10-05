"use client";
import { useState } from "react";
import Link from "next/link";

export default function Service() {
  // State to track the hovered tab index, defaulting to 0 (first tab)
  const [hoveredIndex, setHoveredIndex] = useState(0);

  // Define the tabs with label, main text, image, and link
  const tabs = [
    {
      label: "Strategy & Growth",
      main: "Organizational Development",
      image: "assets/images/perfomance.jpg",
      link: "/strategy",
    },
    {
      label: "Operations & Administration",
      main: "Back Office Support",
      image: "assets/images/team.jpg",
      link: "/operations",
    },
    {
      label: "Financial & Compliance",
      main: "Financial Planning & Budgeting",
      image: "assets/images/coins.jpg",
      link: "/financial",
    },
    {
      label: "Technology & Innovation",
      main: "Digital Transformation",
      image: "assets/images/tech2.jpg",
      link: "/technology",
    },
  ];

  return (
    <section className="service-section-home14">
     
        <div className="tabs-box">
     

          {/* Image display area */}
          <div
            className="tabs-content"
            style={{
              backgroundImage: `url(${tabs[hoveredIndex].image})`,
              height: "100vh",
              width: "100%",
              backgroundSize: "cover", // Ensures image fits nicely
              backgroundPosition: "center", // Centers the image
            }}
          >
            {/* Add additional content here if needed */}
          </div>

          {/* Tab buttons using Bootstrap grid */}
          <div className="tab-btns">
            <div className="row clearfix">
              {tabs.map((tab, idx) => (
                <div
                  key={idx}
                  className="col-lg-3 col-md-6 col-sm-12 btn-column tab-button"
                >
                  <Link
                    href={tab.link}
                    className={`nav-link ${idx === hoveredIndex ? "active" : ""}`}
                    onMouseEnter={() => setHoveredIndex(idx)}
                  >
                    <span>{tab.label}</span>
                    <h5 className="mt-5">{tab.main}</h5>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
   
    </section>
  );
}