'use client';
import { useState } from 'react';
import Link from "next/link";

// For-Profits services array
const forProfits = [
  { slug: "digital-transformation", title: "Digital Transformation", icon: "flaticon-up" },
  { slug: "data-analytics", title: "Data & Analytics", icon: "flaticon-chart" },
  { slug: "it-cybersecurity", title: "IT & Cybersecurity", icon: "flaticon-business-and-finance" },
  { slug: "strategy-finance-operations", title: "Strategy, Finance & Operations", icon: "flaticon-agreement" },
  { slug: "irs-filings-business-compliance", title: "IRS Filings & Business Compliance Services", icon: "flaticon-up" },
  { slug: "gov-contracting-readiness", title: "Gov Contracting Readiness", icon: "flaticon-up" },
  { slug: "crm-sales-systems", title: "CRM & Sales Systems", icon: "flaticon-up" },
  { slug: "iso-internal-audit", title: "ISO/Internal Audit Services", icon: "flaticon-up" },
  { slug: "bookkeeping-tax", title: "Bookkeeping & Tax Services", icon: "flaticon-up" },
];

// Nonprofits services array
const nonprofits = [
  { slug: "digital-transformation-mission", title: "Digital Transformation for Mission Delivery", icon: "flaticon-up" },
  { slug: "grant-impact-analytics", title: "Grant & Impact Analytics", icon: "flaticon-up" },
  { slug: "donor-it-security", title: "Donor IT & Security", icon: "flaticon-up" },
  { slug: "logic-models-evaluation", title: "Logic Models & Evaluation", icon: "flaticon-up" },
  { slug: "board-governance-compensation", title: "Board Governance & Compensation", icon: "flaticon-up" },
  { slug: "fundraising-tech-crm", title: "Fundraising Tech & CRM Setup", icon: "flaticon-up" },
  { slug: "nonprofit-compliance-reporting", title: "Nonprofit Compliance & Reporting", icon: "flaticon-up" },
];

export default function ProfessionalServices() {
  const [forProfitDisplayCount, setForProfitDisplayCount] = useState(6);
  const [nonprofitDisplayCount, setNonprofitDisplayCount] = useState(6);

  return (
    <section className="services-section-six">
      <div className="auto-container">
        <div className="sec-title text-center">
          <h2>
            Professional and <br /> dedicated consulting services
          </h2>
          <div className="text-decoration">
            <span className="left" />
            <span className="right" />
          </div>
        </div>
        <div className="description text-center">
          <p>
            At HRP Consultancy, we empower organizations—nonprofits and
            for-profits alike—to achieve sustainable growth and lasting impact.
            Our comprehensive suite of services is designed to streamline
            operations, drive strategic growth, and enhance security.
          </p>
        </div>
        <br />
        {/* For-Profits Section */}
        <div className="sec-subtitle text-center">
          <h5>For-Profits</h5>
        </div>
        <div className="row">
          {forProfits.slice(0, forProfitDisplayCount).map((service) => (
            <div key={service.slug} className="col-lg-4 col-md-6 col-sm-12 service-block-six">
              <div className="inner-box">
                <div className="image-box">
                  <img
                    className="lazy-image owl-lazy"
                    src={`/assets/images/resource/image-14.jpg`}
                    alt={service.title}
                  />
                  <div className="icon-box">
                    <div className="icon">
                      <span className={service.icon} />
                    </div>
                    <h4>{service.title}</h4>
                  </div>
                  <div className="overlay">
                    <Link href={`/services/${service.slug}`}>
                      <span className="flaticon-right" />
                    </Link>
                  </div>
                </div>
                <div className="content">
                  <div className="text">
                    Short description for {service.title}.
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Learn More Button for For-Profits */}
        <div className="mt-3">
          {forProfitDisplayCount < forProfits.length && (
            <button
              className="btn-style-five"
              onClick={() => setForProfitDisplayCount(forProfits.length)}
            >
              Learn More <span className="plus-sign">+</span>
            </button>
          )}
        </div>

        {/* Nonprofits Section */}
        <div className="sec-subtitle text-center mt-5">
          <h5>Nonprofits</h5>
        </div>
        <div className="row">
          {nonprofits.slice(0, nonprofitDisplayCount).map((service) => (
            <div key={service.slug} className="col-lg-4 col-md-6 col-sm-12 service-block-six">
              <div className="inner-box">
                <div className="image-box">
                  <img
                    className="lazy-image owl-lazy"
                    src={`/assets/images/resource/image-16.jpg`}
                    alt={service.title}
                  />
                  <div className="icon-box">
                    <div className="icon">
                      <span className={service.icon} />
                    </div>
                    <h4>{service.title}</h4>
                  </div>
                  <div className="overlay">
                    <Link href={`/services/${service.slug}`}>
                      <span className="flaticon-right" />
                    </Link>
                  </div>
                </div>
                <div className="content">
                  <div className="text">
                    Short description for {service.title}.
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Learn More Button for Nonprofits */}
        <div className=" mt-3">
          {nonprofitDisplayCount < nonprofits.length && (
            <button
              className="btn-style-five"
              onClick={() => setNonprofitDisplayCount(nonprofits.length)}
            >
              Learn More <span className="plus-sign">+</span>
            </button>
          )}
        </div>
      </div>
    </section>
  );
}