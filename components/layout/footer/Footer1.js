import Link from "next/link";

export default function Footer1() {
  return (
    <>
      <footer className="main-footer sp-two">
        <div className="auto-container">
          {/*Widgets Section*/}
          {/* <div className="widgets-section">
            <div className="row clearfix">
              {/*Column*/}
              {/* <div className="column col-lg-5">
                <div className="row">
                  <div className="col-md-7">
                    <div className="footer-widget logo-widget">
                      <div className="widget-content">
                        <div className="footer-logo">
                          <Link href="/">
                            <img
                              className="lazy-image"
                              src="/assets/images/logo-2.png"
                              alt=""
                            />
                          </Link>
                        </div>
                        <h3>
                          We are dedicated to equipping individuals with the
                          skills and knowledge necessary for various careers.{" "}
                        </h3>
                        <div className="link-btn">
                          <Link href="#" className="theme-btn">
                            <i className="flaticon-right" />
                            Experts advice
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-5">
                    <div className="footer-widget links-widget">
                      <h3 className="widget-title">Quick Links</h3>
                      <div className="widget-content">
                        <ul>
                          <li>
                            <Link href="#">Caregiver Training</Link>
                          </li>
                          <li>
                            <Link href="#">Homecare Training</Link>
                          </li>
                          <li>
                            <Link href="#">Languages</Link>
                          </li>
                          <li>
                            <Link href="#">Pre-departure Training</Link>
                          </li>
                          <li>
                            <Link href="#">Leadership Training</Link>
                          </li>
                          <li>
                            <Link href="#">Customer Service Training</Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}
              {/*Column*/}
              {/* <div className="column col-lg-4">
                <div className="row">
                  <div className="col-md-6">
                    <div className="footer-widget links-widget">
                      <h3 className="widget-title">Resources</h3>
                      <div className="widget-content">
                        <ul>
                          <li>
                            <Link href="#">Community</Link>
                          </li>
                          <li>
                            <Link href="#">Support</Link>
                          </li>
                          <li>
                            <Link href="#">Video Guides</Link>
                          </li>
                          <li>
                            <Link href="#">Documentation</Link>
                          </li>
                          <li>
                            <Link href="#">Security</Link>
                          </li>
                          <li>
                            <Link href="#">Careers</Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="footer-widget links-widget">
                      <h3 className="widget-title">Support</h3>
                      <div className="widget-content">
                        <ul>
                          <li>
                            <Link href="#">Live Chat</Link>
                          </li>
                          <li>
                            <Link href="#">FAQ’s</Link>
                          </li>
                          <li>
                            <Link href="#">Locations</Link>
                          </li>
                          <li>
                            <Link href="#">Policies</Link>
                          </li>
                          <li>
                            <Link href="#">Resources</Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}
              {/*Column*/}
              {/* <div className="column col-lg-3">
                <h3 className="widget-title">Get in touch!</h3>
                <div className="widget-content">
                  <li>PHONE +2547 24002308</li>
                  <li>EMail: info@eliteprointernational.com</li>
                </div>
              </div> */}
            {/* </div>
          </div> */}
        </div> 
        {/* Footer Bottom */}
        <div className="auto-container">
          <div className="footer-bottom">
            <div className="row m-0 justify-content-between">
              <ul className="menu">
                <li>
                  <Link href="#">Privacy Policy </Link>
                </li>
                <li>
                  <Link href="#">Terms &amp; Conditions</Link>
                </li>
              </ul>
              {/*Scroll to top Two*/}
              <div
                className="scroll-to-top-two scroll-to-target"
                data-target="html"
              >
                <i className="flaticon-backward" />
                Get back to home
              </div>
            </div>
            <ul className="social-links clearfix">
              <li>
                <Link href="#">
                  <span className="fab fa-facebook-f" />
                </Link>
              </li>
              <li>
                <Link href="#">
                  <span className="fab fa-twitter" />
                </Link>
              </li>
              <li>
                <Link href="#">
                  <span className="fab fa-google-plus-g" />
                </Link>
              </li>
              <li>
                <Link href="#">
                  <span className="fab fa-skype" />
                </Link>
              </li>
            </ul>
            <div className="copyright">
              © {new Date().getFullYear()}{" "}
              <Link href="#">HRP </Link> Consultancy, All
              Rights Reserved.
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
