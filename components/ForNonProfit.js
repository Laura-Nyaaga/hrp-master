"use client";

import { useState } from "react";
import { Laptop, DollarSign, Shield, FileText } from "lucide-react";
import Link from "next/link";

export default function ForNonProfit() {
  const [activeTab, setActiveTab] = useState("digital-transformation");

  const tabs = [
    {
      id: "grant-analytics",
      icon: DollarSign,
      image: "/assets/images/coins.jpg",
      title: "Grants",
      subtitle: "Funding",
      content: {
        heading: "Unlock Funding with Strategic Grant Writing and Impact Analytics",
        description:
          "Secure funding with compelling proposals backed by data-driven impact assessments. We align your programs with funder priorities and compliance needs for long-term success.",
        stats: [
          { label: "Funding Success Rate", percentage: 75 },
          { label: "Impact Assessment Accuracy", percentage: 90 },
        ],
      },
    },
    {
      id: "digital-transformation",
      icon: Laptop,
      image: "/assets/images/digital.jpg",
      title: "Digitalization",
      subtitle: "Empowerment",
      content: {
        heading: "Digitally Empower Your Mission and Maximize Social Impact",
        description:
          "We help nonprofits adopt technology that enhances service delivery, communication, and reporting—making mission work more effective, transparent, and scalable.",
        stats: [
          { label: "Service Delivery Efficiency", percentage: 85 },
          { label: "Reporting Transparency", percentage: 80 },
        ],
      },
    },
    {
      id: "donor-it-security",
      icon: Shield,
      image: "/assets/images/team2.jpg",
      title: "IT/Security",
      subtitle: "Trust",
      content: {
        heading: "Build Trust with Donor-Focused IT and Data Security Solutions",
        description:
          "Protect donor data and ensure secure fundraising operations with tailored IT support and cybersecurity solutions designed specifically for nonprofits.",
        stats: [
          { label: "Data Security Compliance", percentage: 95 },
          { label: "Donor Trust Index", percentage: 85 },
        ],
      },
    },
    {
      id: "compliance-reporting",
      icon: FileText,
      image: "/assets/images/perfomance.jpg",
      title: "Compliance",
      subtitle: "Transparency",
      content: {
        heading: "Stay Grant-Ready with Nonprofit Reporting and Compliance Services",
        description:
          "Ensure your nonprofit meets federal, state, and foundation reporting requirements through tailored compliance support, audits, and timely documentation.",
        stats: [
          { label: "Compliance Adherence", percentage: 90 },
          { label: "Reporting Timeliness", percentage: 85 },
        ],
      },
    },
    {
      id: "Strategic Support",
      icon: FileText,
      image: "/assets/images/strategic-support.jpg",
      title: "Strategic Support",
      subtitle: "Support",
      content: {
        heading: "Drive Long-Term Impact with Strategic Nonprofit Support Services",
        description:
          "Advance your nonprofit’s mission through strategic planning, capacity building, and data-driven reporting. Our support ensures your organization remains grant-ready, compliant, and equipped to scale sustainably.",
        stats: [
          { label: "Strategic Readiness", percentage: 93 },
          { label: "Organizational Resilience", percentage: 89 },
        ],
      },
    },
  ];

  const activeIndex = tabs.findIndex((tab) => tab.id === activeTab);
  const activeTabData = tabs[activeIndex];

  return (
    <div className="container-fluid px-4 py-5" style={{ backgroundColor: "#2352971a" }}>
      <style jsx>{`
        .tab-card {
          position: relative;
          background: #f8f9fa;
          border: 1px solid #e9ecef;
          border-radius: 1rem;
          padding: 1rem;
          transition: all 0.3s ease;
          min-height: 120px;
        }
        .tab-card:after {
          content: "";
          position: absolute;
          bottom: -12px;
          left: 50%;
          transform: translateX(-50%);
          border-width: 12px 12px 0;
          border-style: solid;
          border-color: #f8f9fa transparent;
          width: 0;
          height: 0;
        }
        .tab-card.active {
          background: rgb(35, 82, 151);
          color: white;
          border-color: rgb(35, 82, 151);
        }
        .tab-card.active:after {
          border-color: rgb(17, 40, 73) transparent transparent;
        }
        .tab-card:not(.active):hover {
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }
        .tab-content-container {
          animation: fadeIn 0.5s ease-in-out;
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @media (max-width: 768px) {
          .tab-card {
            flex-direction: column;
            align-items: flex-start;
          }
          .tab-card .page-content {
            margin-top: 0.5rem;
          }
        }
      `}</style>

      <div className="row m-0 align-items-center justify-content-between mb-5">
        <div className="sec-title style-two mt-5">
          <h5>FOR NON-PROFIT SERVICES</h5>
          <h2>NON-PROFIT SERVICES</h2>
        </div>
        <div className="link-btn">
          <Link href="#" className="theme-btn btn-style-four">
            <span className="btn-title">All Services</span>
          </Link>
        </div>
      </div>

      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-5 g-4 mb-5 justify-content-center" role="tablist">
        {tabs.map((tab) => (
          <div className="col" key={tab.id}>
            <button
              onClick={() => setActiveTab(tab.id)}
              className={`d-flex align-items-center w-100 tab-card ${
                activeTab === tab.id ? "active" : ""
              }`}
              role="tab"
              aria-selected={activeTab === tab.id}
              id={`tab-${tab.id}`}
            >
              <tab.icon
                size={70}
                className="p-2 me-3 m-3"
                style={{
                  border: "2px solid rgb(35, 82, 151)",
                  borderRadius: "15px",
                }}
              />
              <div className="page-content">
                <h4 className="mb-0 fs-6 fw-bold">{tab.title}</h4>
                <p className="mb-0 small">{tab.subtitle}</p>
              </div>
            </button>
          </div>
        ))}
      </div>

      {activeTabData && (
        <div
          key={activeTab}
          className="tab-content tab-content-container p-4 rounded-3 border bg-white"
          role="tabpanel"
          aria-labelledby={`tab-${activeTab}`}
          style={{ borderColor: "#e9ecef", marginBottom: "40px" }}
        >
          <div className="row align-items-center g-5">
            <div className={`col-lg-6 ${activeIndex % 2 !== 0 ? "order-lg-2" : ""}`}>
              <div className="position-relative">
                <img
                  src={activeTabData.image}
                  alt={`${activeTabData.title} illustration`}
                  className="img-fluid rounded-4 shadow"
                  style={{
                    border: "10px solid white",
                    boxShadow: "0 15px 30px rgba(0,0,0,0.15)",
                  }}
                />
              </div>
            </div>
            <div className={`col-lg-6 ${activeIndex % 2 !== 0 ? "order-lg-1" : ""}`}>
              <div className="about__three-content">
                <h2 className="display-5 fw-bolder mb-4">
                  {activeTabData.content.heading}
                </h2>
                <p className="lead mb-5">{activeTabData.content.description}</p>
              </div>
            <div className="mb-4">
  {activeTabData.content.stats.map((stat, idx) => (
    <div key={idx} className="mb-4">
      <div className="d-flex justify-content-between align-items-center mb-2">
        <h5 className="fw-bold mb-0">{stat.label}</h5>
        <span className="fs-6 fw-bold" style={{ color: "rgb(35, 82, 151)" }}>
          {stat.percentage}%
        </span>
      </div>
      <div className="progress rounded-pill" style={{ height: "12px", background: "#e9ecef" }}>
        <div 
          className="progress-bar rounded-pill" 
          role="progressbar" 
          style={{ 
            width: `${stat.percentage}%`, 
            background: `rgb(35, 82, 151)` 
          }}
          aria-valuenow={stat.percentage}
          aria-valuemin={0}
          aria-valuemax={100}
        ></div>
      </div>
    </div>
  ))}
</div>
              <div className="btn-box mt-5">
                <Link href="#" className="btn-style-two">
                  <span className="btn-title">Start Today</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
