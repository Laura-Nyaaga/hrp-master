"use client";
import Link from "next/link";
import { useState } from "react";
export default function MobileMenu({
  isSidebar,
  handleMobileMenu,
  handleSidebar,
}) {
  const [isActive, setIsActive] = useState({
    status: false,
    key: "",
  });

  const handleToggle = (key) => {
    if (isActive.key === key) {
      setIsActive({
        status: false,
      });
    } else {
      setIsActive({
        status: true,
        key,
      });
    }
  };
  return (
    <>
      <div className="mobile-menu">
        <div className="menu-backdrop" onClick={handleMobileMenu} />
        <div className="close-btn" onClick={handleMobileMenu}>
          <span className="icon flaticon-remove" />
        </div>
        <nav className="menu-box">
          {/* <div className="nav-logo"><Link href="/"><img src="/assets/images/logo-2.png" alt="" /></Link></div> */}
          <p className="nav-logo">HRP Consultancy</p>
          {/* <div className="menu-outer">
            <div
              className="collapse navbar-collapse show clearfix"
              id="navbarSupportedContent"
            >
              <ul className="navigation clearfix">
                {/* <li className={isActive.key == 1 ? "dropdown current" : "dropdown"}><Link href="/">Home</Link>
                                  
                                    <div className={isActive.key == 1 ? "dropdown-btn open" : "dropdown-btn"} onClick={() => handleToggle(1)}><span className="fa fa-angle-right" /></div></li>
                                <li className={isActive.key == 2 ? "dropdown current" : "dropdown"}><Link href="/about-1">About Us</Link>
                                    <div className={isActive.key == 2 ? "dropdown-btn open" : "dropdown-btn"} onClick={() => handleToggle(2)}><span className="fa fa-angle-right" /></div>
                                </li> */}
                {/* <li
                  className={
                    isActive.key == 3 ? "dropdown current" : "dropdown"
                  }
                >
                  <Link href="/#">Services</Link>
                  <ul
                    style={{
                      display: `${isActive.key == 3 ? "block" : "none"}`,
                    }}
                  >
                    {/* <li><Link href="/services">Our All Services</Link></li> */}
                    {/* <li>
                      <Link href="/caregiver-training">Caregiver Training</Link>
                    </li>
                    <li>
                      <Link href="/homecare-training">Homecare Training</Link>
                    </li>
                    <li>
                      <Link href="/predeparture-training">
                        Pre-departure Training
                      </Link>
                    </li>
                    <li>
                      <Link href="/leadership-training">
                        Leadership Training
                      </Link> */}
                    {/* </li>
                    <li>
                      <Link href="/customer-service-training">
                        Customer Service Training
                      </Link>
                    </li>
                    <li>
                      <Link href="/recruitment-services">
                        Recruitment Services
                      </Link>
                    </li>
                  </ul>
                  <div
                    className={
                      isActive.key == 3 ? "dropdown-btn open" : "dropdown-btn"
                    }
                    onClick={() => handleToggle(3)}
                  >
                    <span className="fa fa-angle-right" />
                  </div>
                </li> */}
                {/* <li
                  className={
                    isActive.key == 4 ? "dropdown current" : "dropdown"
                  }
                >
                  <Link href="/faq">FAQ's</Link>

                  <div
                    className={
                      isActive.key == 4 ? "dropdown-btn open" : "dropdown-btn"
                    }
                    onClick={() => handleToggle(4)}
                  >
                    <span className="fa fa-angle-right" />
                  </div>
                </li> */}
                {/* <li
                  className={
                    isActive.key == 5 ? "dropdown current" : "dropdown"
                  }
                >
                  <Link href="/contact-1">CONTACT US</Link>

                  <div
                    className={
                      isActive.key == 5 ? "dropdown-btn open" : "dropdown-btn"
                    }
                    onClick={() => handleToggle(5)}
                  >
                    <span className="fa fa-angle-right" />
                  </div>
                </li> *}
              </ul>
            </div>
          </div> */}
          {/*Social Links*/}
          <div className="social-links">
            <ul className="clearfix">
              <li>
                <Link href="/#">
                  <span className="fab fa-twitter" />
                </Link>
              </li>
              <li>
                <Link href="/#">
                  <span className="fab fa-facebook-square" />
                </Link>
              </li>
              <li>
                <Link href="/#">
                  <span className="fab fa-pinterest-p" />
                </Link>
              </li>
              <li>
                <Link href="/#">
                  <span className="fab fa-instagram" />
                </Link>
              </li>
              <li>
                <Link href="/#">
                  <span className="fab fa-youtube" />
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      {/* End Mobile Menu */}
      <div
        className="nav-overlay"
        style={{ display: `${isSidebar ? "block" : "none"}` }}
        onClick={handleSidebar}
      />
    </>
  );
}
