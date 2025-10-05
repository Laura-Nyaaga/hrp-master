"use client";
import { Calendar, PieChart, FileText, BarChart } from "lucide-react";

export default function Chooseus() {
  return (
    <section className="chooseus-section-home15 py-5">
      <div className="container">
        <div className="row align-items-start g-5">
          {/* Left Column: Tools & Resources */}
          <div className="col-lg-7 col-md-12">
            <div className="content-box">
              <div className="about__three-content mb-4">
                <h6 className="home-subtitle">Tools & Resources</h6>
                <h2 className="m-20">Essential Solutions for Your Organization</h2>
                <p>
                  Access a collection of practical tools and resources designed to <br />
                  enhance efficiency, ensure compliance, and drive organizational success.
                </p>
              </div>
              <div className="inner-box">
                <div className="row g-4">
                  {[
                    {
                      icon: <Calendar />,
                      title: "Grant Tracker",
                      text: "Monitor application deadlines, funding sources, and reporting requirements.",
                    },
                    {
                      icon: <PieChart />,
                      title: "Budget Planner",
                      text: "Create and manage financial plans to align with your strategic goals.",
                    },
                    {
                      icon: <FileText />,
                      title: "Policy Builder",
                      text: "Develop customized policies to ensure compliance and operational consistency.",
                    },
                    {
                      icon: <BarChart />,
                      title: "Impact Measurement Tool",
                      text: "Assess and report on program effectiveness with data-driven insights.",
                    },
                  ].map((item, idx) => (
                    <div className="col-md-6" key={idx}>
                      <div className="single-item">
                        <div className="upper d-flex align-items-center mb-2">
                          <div className="icon-box me-3">{item.icon}</div>
                          <h3 className="mb-0">{item.title}</h3>
                        </div>
                        <div className="text">
                          <p>{item.text}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
         <div className="col-lg-5 col-md-12">
            <div 
              className="contact-form-box p-5 rounded-3 shadow-lg border-0"
              style={{ 
                minHeight: "740px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                backgroundColor: "#081a63",
                width: "100%",
                maxWidth: "600px",
                marginLeft: "auto"
              }}
            >
              {/* Header */}
              <div className="sec-title mb-5 text-center">
                <h6
                  className="text-uppercase mb-3 fw-bold"
                  style={{ color: "#8da3ff", fontSize: "0.95rem" }}
                >
                  GET IN TOUCH
                </h6>
                <h2
                  className="fw-bold"
                  style={{
                    fontSize: "2rem",
                    lineHeight: "1.2",
                    color: "#ffffff",
                  }}
                >
                  Schedule Your Free <br />
                  Organizational <br />
                  Consultation
                </h2>
              </div>

              {/* Contact Form */}
              <form
                method="post"
                action="#"
                className="contact-form"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1.5rem",
                }}
              >
                {/* Row 1: Name + Email */}
                <div
                  className="d-flex flex-wrap"
                  style={{
                    gap: "1rem",
                  }}
                >
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    required
                    className="form-control form-control-lg border-0"
                    style={inputStyle}
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                    className="form-control form-control-lg border-0"
                    style={inputStyle}
                  />
                </div>

                {/* Row 2: Phone + Subject */}
                <div
                  className="d-flex flex-wrap"
                  style={{
                    gap: "1rem",
                  }}
                >
                  <input
                    type="text"
                    name="phone"
                    placeholder="Phone"
                    required
                    className="form-control form-control-lg border-0"
                    style={inputStyle}
                  />
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    required
                    className="form-control form-control-lg border-0"
                    style={inputStyle}
                  />
                </div>

                {/* Message */}
                <textarea
                  name="message"
                  placeholder="Message"
                  rows="4"
                  className="form-control form-control-lg border-0"
                  style={{
                    ...inputStyle,
                    width: "100%",
                    minHeight: "120px",
                    resize: "none",
                  }}
                />

                {/* Button */}
                <button
                  className="btn w-100 fw-bold py-3 border-0"
                  type="submit"
                  name="submit-form"
                  style={{
                    backgroundColor: "#ffffff",
                    color: "#081a63",
                    borderRadius: "8px",
                    fontSize: "1.1rem",
                    transition: "all 0.3s ease",
                  }}
                  onMouseOver={(e) => {
                    e.target.style.backgroundColor = "#f8f9fa";
                  }}
                  onMouseOut={(e) => {
                    e.target.style.backgroundColor = "#ffffff";
                  }}
                >
                  SUBMIT NOW
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Styles */}
      <style jsx>{`
        .form-control:focus {
          border-color: #ffffff !important;
          box-shadow: 0 0 0 0.2rem rgba(255, 255, 255, 0.15) !important;
          transform: translateY(-2px);
        }
        input::placeholder,
        textarea::placeholder {
          color: #bfc4d1;
          opacity: 0.85;
        }
        .form-control {
          transition: all 0.3s ease;
        }
        @media (max-width: 768px) {
          .d-flex.flex-wrap {
            flex-direction: column !important;
          }
        }
      `}</style>
    </section>
  );
}

const inputStyle = {
  flex: "1",
  minWidth: "45%",
  borderRadius: "8px",
  padding: "15px 20px",
  fontSize: "1rem",
  width: "100%",
  backgroundColor: "#0c2374",
  color: "#ffffff",
};
