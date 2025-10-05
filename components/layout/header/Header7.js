import Menu from "../Menu";
import MobileMenu from "../MobileMenu";
export default function Header7({
  scroll,
  handleMobileMenu,
  isSidebar,
  handleSidebar,
}) {
  return (
    <>
      {/* <header className="main-header header-style-seven"> */}
      <header
        className={`main-header header-style-seven ${
          scroll ? "fixed-header" : ""
        }`}
      >
        {/* Header Top */}
        {/* <div className="header-top">
          <div className="auto-container">
            <div className="inner">
              <div className="top-left">
                <ul className="contact-info">
                  <li>
                    <i className="fas fa-map-marker-alt" />
                    17350 State Hwy 249, Houston TX {" "}
                  </li>
                  <li>
                    <a href="mailto:support@example.com">
                      <i className="fas fa-envelope" />
                      support@hrpconsulting.org{" "}
                    </a>
                  </li>
                </ul>
                <ul className="social-links clearfix">
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
                </ul>
              </div>
            </div>
          </div>
        </div> */}
        {/* Header Upper */}
        <div className="header-upper">
          <div className="auto-container">
            <div className="inner-container clearfix">
              {/*Logo*/}
              <div className="logo-box clearfix">
                <div className="logo">
                  <a href="/">
                    <img
                      src="/assets/images/hrp_logo.PNG"
                      alt=""
                      height="200"
                      width="200"
                    />
                  </a>
                </div>
              </div>
              {/*Nav Box*/}
              <div className="nav-outer clearfix">
                {/*Mobile Navigation Toggler*/}
                <div className="mobile-nav-toggler" onClick={handleMobileMenu}>
                  <img src="/assets/images-2/icons/icon-bar-3.png" alt="" />
                </div>
                {/* Main Menu */}
                <nav className="main-menu navbar-expand-md navbar-light">
                  <div
                    className="collapse navbar-collapse show clearfix"
                    id="navbarSupportedContent"
                  >
                    <Menu />
                  </div>
                </nav>
                {/* Main Menu End*/}
                <div className="navbar-right-info">
                  {/* <button
                    type="button"
                    className="theme-btn search-toggler"
                    onClick={handlePopup}
                  >
                    <span className="flaticon-search" />
                  </button> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*End Header Upper*/}
        {/* Sticky Header  */}
        <div
          className={`sticky-header ${scroll ? "animated slideInDown" : ""}`}
        >
          <div className="header-upper">
            <div className="auto-container">
              <div className="inner-container clearfix">
                {/*Logo*/}
                <div className="logo-box clearfix">
                  <div className="logo">
                    <a href="/">
                      <img
                        src="/assets/images/hrp_logo.PNG"
                        alt=""
                        height="200"
                        width="200"
                      />
                    </a>
                  </div>
                </div>
                {/*Nav Box*/}
                <div className="nav-outer clearfix">
                  {/*Mobile Navigation Toggler*/}
                  <div
                    className="mobile-nav-toggler"
                    onClick={handleMobileMenu}
                  >
                    <img src="/assets/images-2/icons/icon-bar-3.png" alt="" />
                  </div>
                  {/* Main Menu */}
                  <nav className="main-menu navbar-expand-md navbar-light">
                    <Menu />
                  </nav>
                  {/* Main Menu End*/}
                  <div className="navbar-right-info">
                    {/* <button
                      type="button"
                      className="theme-btn search-toggler"
                      onClick={handlePopup}
                    >
                      <span className="flaticon-search" />
                    </button> */}
                    <div className="link-btn">
                      <a
                        href="tel:+1(832)630-0738"
                        className="theme-btn btn-style-four"
                      >
                        <i className="flaticon-call" />
                        <span className="btn-title">+1(832)630-0738</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Sticky Menu */}
        {/* Mobile Menu  */}
        <MobileMenu
          handleMobileMenu={handleMobileMenu}
          isSidebar={isSidebar}
          handleSidebar={handleSidebar}
        />
      </header>
    </>
  );
}
