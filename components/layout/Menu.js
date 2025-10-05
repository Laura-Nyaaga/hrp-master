import Link from "next/link";
// import { useRouter } from "next/router"

export default function Menu() {
  // const router = useRouter()

  return (
    <>
      {/* <ul className="sub-menu">
                <Link className={router.pathname == "/" ? "active" : ""}>Home Default</Link>
                <Link className={router.pathname == "/index-2" ? "active" : ""}>Home Interior</Link>
            </ul> */}

      <ul className="navigation clearfix">
        {/* <li className=""><Link href="/">HOME</Link> */}
        {/* <ul>
                        <li><Link href="/">Home Business</Link></li>
                        <li><Link href="/index-2">Home Consulting</Link></li>
                        <li><Link href="/index-3">Home Corporate</Link></li>
                        <li><Link href="/index-4">Home Software</Link></li>
                        <li><Link href="/index-5">Home Finance</Link></li>
                        <li><Link href="/index-6">Home Law Firm</Link></li>
                        <li><Link href="/index-7">Home Insurance</Link></li>
                        <li><Link href="/index-8">Home Psychologist</Link></li>
                        <li><Link href="/index-9">Home Auto Repai</Link></li>
                        <li><Link href="/index-10">Home Movers and Packers</Link></li>
                        <li><Link href="/index-11">Home Visa Consultant</Link></li>
                        <li><Link href="/index-12">Home Online Course</Link></li>
                        <li><Link href="/index-13">Home Construction</Link></li>
                        <li><Link href="/index-14">Home Architecture</Link></li>
                        <li><Link href="/index-15">Home Digital Agency</Link></li>
                    </ul> */}
        {/* </li> */}
        <li className="">
          <Link href="/about">ABOUT US</Link>
        </li>

        <li className="dropdown">
          <Link href="#">SERVICES</Link>
          <ul className="submenu">
            <li>
              <Link href="/services">All Services</Link>
            </li>
            <li className="dropdown">
              <Link href="#">For-Profits</Link>
              <ul className="submenu from-right">
                <li>
                  <Link href="/services/digital-transformation">
                    Digital Transformation
                  </Link>
                </li>
                <li>
                  <Link href="/services/data-analytics">Data & Analytics</Link>
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
            </li>
            <li className="dropdown">
              <Link href="#">Nonprofits</Link>
              <ul className="submenu from-right">
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
            </li>
          </ul>
        </li>

        {/* <li className=""><Link href="/faq">FAQ</Link>
                </li> */}
        <li className="">
          <Link href="#">CONTACT US</Link>
        </li>

        <li>
          <a href="tel:+1(832)630-0738" className="btn-style-five px-3 py-1 light">
           +1(832)630-0738
          </a>
        </li>
      </ul>
    </>
  );
}
