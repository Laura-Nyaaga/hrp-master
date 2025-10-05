import React from "react";
import Link from "next/link";

export default function FeatureSection() {
  return (
    <section className="feature-section-two style-tw mb-5">
      <div className="auto-container">
        <div className="row">
          {/* For-Profit Block */}
          <div className="col-lg-6 feature-block-two style-two">
            <div className="shape-box">
              <div className="inner-box">
                <div className="icon">
                  {/* swap in your own icon here */}
                  <img
                    src="/assets/images/icons/icon-11.png"
                    alt="For-Profit icon"
                  />
                </div>
                <h4 className="fw-bold">
                  Start. Grow. Transform. (For-Profit)
                </h4>
                <h6 className="fw-bold">
                  Build your business from the ground up — and beyond.
                </h6>
                <br />
                <div className="text">
                  From entity registration and IRS filings to strategy,
                  operations, cybersecurity, and ISO compliance — we walk with
                  you every step of the way. Launch with confidence. Scale with
                  clarity.
                </div>
                <Link href="/start-business">
               Start Your Business Journey
                </Link>
              </div>
            </div>
          </div>

          {/* Nonprofit Block */}
          <div className="col-lg-6 feature-block-two style-two">
            <div className="shape-box">
              <div className="inner-box">
                <div className="icon">
                  {/* swap in your own icon here */}
                  <img
                    src="/assets/images/icons/icon-12.png"
                    alt="Nonprofit icon"
                  />
                </div>
                <h4 className="fw-bold">
                  From Vision to Vital Impact (Nonprofit)
                </h4>
          
                <h6 className="fw-bold">
                  Founding a nonprofit? Need to grow or get compliant?
                </h6>
                <br />
                <div className="text">
                  We help you form your 501(c)(3), draft bylaws, set up your
                  board, and build systems for funding, reporting, and mission
                  delivery. Rooted in your values. Driven by impact.
                </div>
                <Link href="/nonprofit-services">
                 Build or Grow Your Nonprofit
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
