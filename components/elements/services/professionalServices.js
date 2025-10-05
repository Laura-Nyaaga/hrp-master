"use client";
import { useState } from "react";
import Link from "next/link";

// For-Profits services array
const forProfits = [
  {
    slug: "digital-transformation",
    title: "Digital Transformation",
    type: "for-profit",
    icon: "flaticon-up",
    description: "Empowering Organizations with Smart, Scalable Technology.",
  },
  {
    slug: "data-analytics",
    title: "Data & Analytics",
    type: "for-profit",
    icon: "flaticon-chart",
    description:
      "Empowering Smarter Decisions with Real-Time Insights. Unlock the power of your data—turn numbers into narratives and reports into results.",
  },
  {
    slug: "it-cybersecurity",
    title: "IT & Cybersecurity",
    type: "for-profit",
    icon: "flaticon-business-and-finance",
    description:
      "Protect your network, data, and people with comprehensive IT audits and security frameworks.",
  },
  {
    slug: "strategy-finance-operations",
    title: "Strategy, Finance & Operations",
    type: "for-profit",
    icon: "flaticon-agreement",
    description:
      "Align mission, money, and management for sustainable success—whether nonprofit impact or business growth.",
  },
  {
    slug: "irs-filings-business-compliance",
    title: "IRS Filings & Business Compliance Services",
    type: "for-profit",
    icon: "flaticon-up",
    description:
      "No missed deadlines, no penalties—our compliance experts handle all your filings and regulatory needs.",
  },
  {
    slug: "government-contracting-readiness",
    title: "Gov Contracting Readiness",
    type: "for-profit",
    icon: "flaticon-up",
    description:
      "Preparing You for Government Success. From registration to submission—we build your pathway to federal, state, and local contracts.",
  },
  {
    slug: "crm-sales-systems",
    title: "CRM & Sales Systems",
    type: "for-profit",
    icon: "flaticon-up",
    description:
      "Powering Your Sales with Precision. Every lead counts. Every interaction matters. Let your CRM work harder, smarter, and more human.",
  },
  {
    slug: "iso-internal-audit-services",
    title: "ISO/Internal Audit Services",
    type: "for-profit",
    icon: "flaticon-up",
    description:
      "Compliance Meets Confidence. Precision-driven auditing for sustainable business performance and international standards alignment.",
  },
  {
    slug: "bookkeeping-tax-services",
    title: "Bookkeeping & Tax Services",
    type: "for-profit",
    icon: "flaticon-up",
    description:
      "Books in Order. Business in Control. Reliable bookkeeping and tax support that fuels confident decisions and long-term compliance.",
  },
];

// Nonprofits services array
const nonprofits = [
  {
    slug: "digital-transformation-mission",
    title: "Digital Transformation for Mission Delivery",
    type: "nonprofit",
    icon: "flaticon-up",
    description:
      "Tailored digital transformation solutions that elevate mission delivery and community impact.",
  },
  {
    slug: "grant-impact-analytics",
    title: "Grant & Impact Analytics",
    type: "nonprofit",
    icon: "flaticon-chart",
    description:
      "Turning data into compelling stories that win grants and demonstrate measurable impact.",
  },
  {
    slug: "donor-it-security",
    title: "Donor IT & Security",
    type: "nonprofit",
    icon: "flaticon-business-and-finance",
    description:
      "Safeguard donor trust with comprehensive security audits and compliance frameworks.",
  },
  {
    slug: "logic-models-evaluation",
    title: "Logic Models & Evaluation",
    type: "nonprofit",
    icon: "flaticon-agreement",
    description:
      "Design logic models and evaluation frameworks that connect activities to outcomes and funding success.",
  },
  {
    slug: "board-governance-compensation",
    title: "Board Governance & Compensation",
    type: "nonprofit",
    icon: "flaticon-up",
    description:
      "Strengthen your board with governance frameworks, compensation benchmarking, and succession planning.",
  },
  {
    slug: "fundraising-tech-crm",
    title: "Fundraising Tech & CRM Setup",
    type: "nonprofit",
    icon: "flaticon-up",
    description:
      "Implement and optimize CRM and fundraising platforms to elevate donor engagement and retention.",
  },
  {
    slug: "nonprofit-compliance-reporting",
    title: "Nonprofit Compliance & Reporting",
    type: "nonprofit",
    icon: "flaticon-up",
    description:
      "Streamline nonprofit compliance with IRS, state, and grant reporting support to maintain good standing.",
  },
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
          <h5>
            At HRP Consultancy, we empower organizations—nonprofits and
            for-profits alike—to achieve sustainable growth and lasting impact.
            Our comprehensive suite of services is designed to streamline
            operations, drive strategic growth, and enhance security.
          </h5>
        </div>
        <br />
        {/* For-Profits Section */}
        <div className="sec-subtitle text-center mt-5">
          <h4>For-Profits</h4>
        </div>
        <div className="row">
          {forProfits.slice(0, forProfitDisplayCount).map((service) => (
            <div
              key={service.slug}
              className="col-lg-4 col-md-6 col-sm-12 service-block-six"
            >
              <div className="inner-box">
                <div className="image-box">
                  <img
                    className="lazy-image owl-lazy"
                    src={`/assets/images/profit.jpg`}
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
                  <div className="text">{service.description}.</div>
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
          <h4>For Non-profits</h4>
        </div>
        <div className="row">
          {nonprofits.slice(0, nonprofitDisplayCount).map((service) => (
            <div
              key={service.slug}
              className="col-lg-4 col-md-6 col-sm-12 service-block-six"
            >
              <div className="inner-box">
                <div className="image-box">
                  <img
                    className="lazy-image owl-lazy"
                    src={`/assets/images/nonProfit.jpg`}
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
                  <div className="text">{service.description}.</div>
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
