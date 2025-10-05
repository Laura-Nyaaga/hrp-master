import Layout from "@/components/layout/Layout";
import { notFound } from "next/navigation";

// Data for team members
const members = {
  "kawa-polycarp": {
    name: "Kawa Polycarp",
    title:
      "Founder, HRP Consultancy | Gov. Contracting Specialist | Grant Writer & Nonprofit Consultant",
    bio: [
      "Kawa Polycarp is a seasoned Grant Writer, Nonprofit Consultant, and Government Contracting Specialist with a strong track record of helping organizations across sectors—such as education, health, environment, and community development—secure vital funding.",
      "With deep expertise in grant research, proposal development, and compliance management, he has enabled nonprofits to access federal, state, and foundation grants effectively.",
      "In addition to his grant expertise, Kawa brings significant experience in government contracting, including solicitation analysis, capability statement development, and readiness for programs like 8(a), HUBZone, and SAM registration.",
      "His strategic knowledge also spans donor engagement, policy development, nonprofit certifications, and digital marketing—allowing him to deliver holistic, sustainable solutions that support mission growth and long-term impact.",
    ],
    keySkills: [
      "Grant Writing & Research",
      "Government Contracting (RFPs, SAM, 8(a), HUBZone)",
      "Nonprofit & For-Profit Compliance",
      "Federal and Foundation Funding Strategy",
      "Donor Engagement & Project Management",
      "Policy Development & Nonprofit Certification",
      "Digital Marketing for Impact Growth",
      "Capability Statement Development",
    ],
    email: "",
    website: "",
    phone: "",
    address: "",
  },
  "clara-situma": {
    name: "Clara Situma",
    title: "Team Member, Digital Solutions Lead",
    bio: [
      "Clara Situma serves as the Digital Solutions Lead at HRP Consultancy, where she architects and manages the development of web and mobile platforms supporting public service, government-sector, nonprofit and for-profit initiatives.",
      "With a degree in Computer Science and over 6 years of experience in full-stack development, Clara specializes in designing scalable, secure digital infrastructures tailored to mission-driven programs and compliance-heavy environments.",
      "She leads a multidisciplinary team utilizing technologies such as React, Vue.js, Flutter, Node.js, Laravel, and Django, with deployments optimized for AWS, Google Cloud, and Azure environments.",
      "Her team has delivered robust systems for client portals, grant application platforms, social services dashboards, and governance verification tools, such as those integrating WorldID. Clara’s leadership ensures solutions are not only technically sound but aligned with community impact goals, user accessibility standards, and evolving digital governance needs.",
    ],
    keySkills: [
      "Full-Stack Web & App Development",
      "Digital Transformation Strategy",
      "UX/UI Design & Deployment",
      "CRM & Platform Integration (e.g., Salesforce, HubSpot)",
      "Cloud-Based Application Development",
      "Tech Project Management",
      "Cybersecurity Awareness in Development",
      "Digital Solutions for Mission-Driven Organizations",
    ],
    email: "csituma@hrp.com",
    website: "clarasituma.netlify.app",
    phone: "+254726056055",
    address: "Cedar Gardens,Kilimani,Nairobi",
  },
  "charisma-white": {
    name: "Charisma White",
    title: "Founder, HRP Consultancy Nonprofit & For-profit Strategist",
    bio: [
      "Charisma White is the Co-Founder of HRP Consultancy, bringing extensive expertise in nonprofit strategy and organizational development.",
      "With a strong background in nonprofit leadership, she has successfully guided organizations through compliance and program expansion.",
      "Charisma is dedicated to helping nonprofits and businesses achieve sustainable growth through tailored consulting solutions.",
      "Her strategic vision and deep understanding of regulatory frameworks make her a trusted partner in the sector.",
    ],
    keySkills: [
      "Strategic Planning & Leadership",
      "Program Development & Scaling",
      "Cross-Sector Client Relations",
      "Organizational Growth Strategy",
      "Compliance Oversight (Nonprofit and For-Profit)",
      "Stakeholder Engagement",
      "Business Operations Management",
      "Team Collaboration & Capacity Building",
    ],
    email: "",
    website: "",
    phone: "",
    address: "",
  },
};

export async function generateStaticParams() {
  return Object.keys(members).map((slug) => ({ slug }));
}

export default function MemberPage({ params }) {
  const { slug } = params;
  const member = members[slug];
  if (!member) notFound();

  return (
    <Layout
      headerStyle={1}
      footerStyle={1}
      breadcrumbTitle={member.name}
      wrapperCls="home_1"
    >
      <section className="team-details-section">
        <div className="auto-container">
          <div className="row">
            <div className="col-lg-4">
              <div className="single-team-member">
                <div className="inner-box">
                  <div className="image">
                    <img
                      src={`/assets/images/resource/team-${slug}.jpg`}
                      alt={member.name}
                    />
                    <div className="social-links-wrapper">
                      <div className="icon">
                        <span className="flaticon-share-1" />
                      </div>
                      <ul className="social-links">
                        <li>
                          <a href="#">
                            <span className="fab fa-facebook-f" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <span className="fab fa-twitter" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <span className="fab fa-google-plus-g" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="lower-content">
                    <div className="author-title">
                      <h4>{member.name}</h4>
                      <div className="designation">{member.title}</div>
                    </div>
                    <ul className="info-list">
                      <li>
                        <span>Email:</span> <a href="#">{member.email}</a>
                      </li>
                      <li>
                        <span>Phone:</span> <a href="#">{member.phone}</a>
                      </li>
                      <li>
                        <span>Address:</span> {member.address}
                      </li>
                      <li>
                        <span>Website:</span> {member.website}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="working-history">
                <div className="top-content">
                  <h2>{member.title}</h2>
                  <div className="text">{member.bio[0]}</div>
                </div>
                <div className="wrapper-box">
                  <ul className="timeline">
                    {member.bio.slice(1).map((text, idx) => (
                      <li key={idx} data-date="">
                        <div className="text">{text}</div>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="contact-form-area">
                  <div className="sec-title">
                    <h2>Make an appointment</h2>
                    <div className="text-decoration">
                      <span className="left" />
                      <span className="right" />
                    </div>
                  </div>
                </div>
                <form
                  method="post"
                  action="sendemail.php"
                  className="contact-form"
                >
                  <div className="row">
                    <div className="col-md-6 form-group">
                      <input
                        type="text"
                        name="firstname"
                        placeholder="First Name"
                        required
                      />
                    </div>
                    <div className="col-md-6 form-group">
                      <input
                        type="text"
                        name="phone"
                        placeholder="Phone"
                        required
                      />
                    </div>
                    <div className="col-md-6 form-group">
                      <input
                        type="text"
                        name="date"
                        placeholder="Date"
                        required
                      />
                      <i className="far fa-calendar" />
                    </div>
                    <div className="col-md-6 form-group">
                      <input
                        type="text"
                        name="time"
                        placeholder="Time"
                        required
                      />
                      <i className="far fa-clock" />
                    </div>
                    <div className="col-md-12 form-group">
                      <select className="custom-select" name="subject">
                        <option value="*">Discuss about</option>
                        <option value=".category-1">Business Approach</option>
                        <option value=".category-2">
                          Trades &amp; Stock Market
                        </option>
                        <option value=".category-3">
                          Strategy &amp; Planning
                        </option>
                        <option value=".category-4">
                          Software &amp; Research
                        </option>
                        <option value=".category-5">
                          Support &amp; Maintenance
                        </option>
                      </select>
                    </div>
                    <div className="col-md-12 form-group">
                      <button
                        className="theme-btn btn-style-one mb-30"
                        type="submit"
                        name="submit-form"
                      >
                        <span className="btn-title">GET APPOINTMENT</span>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
