import Link from "next/link";
export default function Footer11() {
  return (
    <>
      <footer className="footer-style-11">
        <div className="auto-container">
          <div className="footer-top">
            <div className="row clearfix">
              <div className="col-lg-3 col-md-6 footer-column">
                <div className="footer-widget logo-widget">
                  <figure className="footer-logo">
                    <Link href="/index-11">
                      <img
                        src="/assets/images/hrp_logo_transparent.png"
                        alt=""
                        height="200"
                        width="200"
                      />
                    </Link>
                  </figure>
                  <div className="text">
                    <p>
                      We deliver expert consulting across{" "}
                      <span>digital, programmatic, and</span> compliance
                      services—committed to helping clients achieve sustainable
                      growth and real-world impact...
                    </p>
                  </div>
                  <div className="twitter-box">
                    <div className="icon-box">
                      <i className="fab fa-twitter" />
                    </div>
                    <h5>Hrp Consultancy</h5>
                    <Link href="/index-11">@hrpConsultancy</Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 footer-column">
                <div className="footer-widget link-widget">
                  <div className="widget-title">
                    <h3>For Profit Services</h3>
                  </div>
                  <div className="widget-content">
                    <ul className="link-list clearfix">
                      <li>
                        <Link href="/services/digital-transformation">
                          Digital Transformation
                        </Link>
                      </li>
                      <li>
                        <Link href="/services/data-analytics">
                          Data & Analytics
                        </Link>
                      </li>
                      <li>
                        <Link href="/services/it-cybersecurity">
                          IT & Cybersecurity
                        </Link>
                      </li>
                      <li>
                        <Link href="/services/strategy-finance-operations">
                          Strategy, Finance & Operations
                        </Link>
                      </li>
                      <li>
                        <Link href="/services/irs-filings-business-compliance">
                          IRS Filings & Business Compliance Services
                        </Link>
                      </li>
                      <li>
                        <Link href="/services/government-contracting-readiness">
                          Government Contracting Readiness
                        </Link>
                      </li>
                      <li>
                        <Link href="/services/crm-sales-systems">
                          CRM & Sales Systems
                        </Link>
                      </li>
                      <li>
                        <Link href="/services/iso-internal-audit-services">
                          ISO/Internal Audit Services
                        </Link>
                      </li>
                      <li>
                        <Link href="/services/bookkeeping-tax-services">
                          Bookkeeping & Tax Services
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 footer-column">
                <div className="footer-widget link-widget">
                  <div className="widget-title">
                    <h3>Useful Links</h3>
                  </div>
                  <div className="widget-content">
                    <ul className="link-list clearfix">
                      <li>
                        <Link href="/services">Services</Link>
                      </li>
                      <li>
                        <Link href="/about-us">About Us</Link>
                      </li>
                      <li>
                        <Link href="/contact-us">Contact Us</Link>
                      </li>
                      <li>
                        <Link href="/get-quotes">Get Quotes</Link>
                      </li>
                      <li>
                        <Link href="/our-team">Our Team</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 footer-column">
                <div className="footer-widget link-widget">
                  <div className="widget-title">
                    <h3> Non-Profit Services</h3>
                  </div>
                  <div className="widget-content">
                    <ul className="link-list clearfix">
                      <li>
                        <Link href="/services/digital-transformation-mission">
                          Digital Transformation for Mission Delivery
                        </Link>
                      </li>
                      <li>
                        <Link href="/services/grant-impact-analytics">
                          Grant & Impact Analytics
                        </Link>
                      </li>
                      <li>
                        <Link href="/services/donor-it-security">
                          Donor IT & Security
                        </Link>
                      </li>
                      <li>
                        <Link href="/services/logic-models-evaluation">
                          Logic Models & Evaluation
                        </Link>
                      </li>
                      <li>
                        <Link href="/services/board-governance-compensation">
                          Board Governance & Compensation
                        </Link>
                      </li>
                      <li>
                        <Link href="/services/fundraising-tech-crm">
                          Fundraising Tech & CRM Setup
                        </Link>
                      </li>
                      <li>
                        <Link href="/services/nonprofit-compliance-reporting">
                          Nonprofit Compliance & Reporting
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-bottom clearfix">
            <div className="copyright pull-left">
              <p>
                © {new Date().getFullYear()}{" "}
                <Link href="/about">hrpConsultancy</Link>, All Rights Reserved.
              </p>
            </div>
            <ul className="footer-nav clearfix pull-right">
              <li>
                <Link href="#">Privacy Policy</Link>
              </li>
              <li>
                <Link href="#">Terms &amp; Conditions</Link>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}
