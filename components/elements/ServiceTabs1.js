"use client";
import { useState } from "react";

export default function ServiceTabs1({ items, type }) {
  const [activeIndex, setActiveIndex] = useState(0);


  const handleOnClick = (index) => {
    setActiveIndex(index);
  };
  return (
    <div className="row">
      <div className="col-md-6">
        <ol className="nav nav-tabs tab-btn-style-one mr-md-4" role="tablist">
          {items?.map((item, index) => (
            <li
              key={index}
              className="nav-item mt-6"
              onClick={() => handleOnClick(index)}
            >
              <a
                className={
                  activeIndex === index ? "nav-link active" : "nav-link"
                }
              >
                {String(index + 1).padStart(2, "0")}. {item.title}
              </a>
            </li>
          ))}
        </ol>
      </div>
      <div className="col-md-6">
        <div
          className="tab-content wow fadeInUp"
          data-wow-delay="200ms"
          data-wow-duration="1200ms"
        >
          {items?.map((item, index) => (
            <div
              key={index}
              className={
                activeIndex === index
                  ? "tab-pane fadeInUp animated show active"
                  : "tab-pane fadeInUp animated"
              }
            >
              <h4>{item.title}</h4>
              <p>{item.description}</p>
              <br />
              <img
                src={
                  type === "nonprofit"
                    ? "/assets/images/nonProfit.jpg"
                    : "/assets/images/profit.jpg"
                }
                alt={
                  type === "nonprofit"
                    ? "Nonprofit Service"
                    : "For-Profit Service"
                }
                className="img-fluid"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
