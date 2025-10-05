
import ServiceTabs1 from "@/components/elements/ServiceTabs1"
import Layout from "@/components/layout/Layout"
import AuditSlider1 from "@/components/slider/AuditSlider1"
import ServiceSlider1 from "@/components/slider/ServiceSlider1"
import Link from "next/link"
export default function Home() {

    return (
        <>
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Recruitment Services" wrapperCls="home_1">
                <div>
                    <section className="services-details">
                        <div className="auto-container">
                            <div className="row">
                                <div className="col-lg-8 content-side">
                                    {/*Theme Carousel*/}
                                    <AuditSlider1 />
                                    <div className="row mb-5">
                                        <div className="col-md-5">
                                            <h2>Recruitment Services</h2>
                                            <div className="icon"><span className="flaticon-chart" /></div>
                                        </div>
                                        <div className="col-md-7">
                                            <div className="text"><p>We offer recruitment services to businesses and organizations seeking qualified and skilled individuals for their caregiving and homecare needs. </p></div>
                                            <ul className="list">
                                                <li><i className="fa fa-check" />Streamlined recruitment process</li>
                                                <li><i className="fa fa-check" />Pre-screening and assessment</li>
                                                <li><i className="fa fa-check" />Growing your business sense</li>
                                                <li><i className="fa fa-check" />Compliance and regulatory expertise</li>
                                               
                                            </ul>
                                        </div>
                                    </div>
                                    {/* <h2>Explore our audit &amp; assurance services</h2> */}
                                    {/*Theme Carousel*/}
                                    {/* <ServiceSlider1 /> */}
                                    <h2>Confidence in future</h2>
                                    <div className="text">While ELITEPRO primary focus lies in connecting skilled workers with exciting opportunities within Kenya, we also recognize the growing demand for international skilled and talented working force. We understand the unique challenges and complexities of navigating the international job market, and we are committed to supporting your global career aspirations.</div>
                                    <ServiceTabs1 />
                                </div>
                                <aside className="col-lg-4">
                                    <div className="service-sidebar">
                                        <div className="widget widget_categories_two">
                                            <div className="widget-content">
                                                <ul className="categories-list clearfix">
                                                 <li><Link href="#">Caregiver Training <span /></Link></li>
                                                    <li><Link href="#">Homecare Training <span /></Link></li>
                                                    <li><Link href="#">Pre-departure Training <span /></Link></li>
                                                    <li><Link href="#">Leadership Training <span /></Link></li>
                                                    <li><Link href="#">Languages <span /></Link></li>
                                                    <li><Link href="#">Customer Service Training <span /></Link></li>
                                                    <li><Link href="#">Recruitment Services <span /></Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                        
                                        <div className="widget widget_contact" style={{ backgroundImage: 'url(assets/images/background/bg-25.jpg)' }}>
                                            <div className="widget-content">
                                                <img src="/assets/images/icons/icon-55.png" alt="" />
                                                <h4>Do you need any help?</h4>
                                                <div className="phone-number"><a href="tel:+254 714 319851">+254 714 319851</a></div>
                                                <div className="email"><Link href="mailto:info@elitepro.com">info@elitepro.com</Link></div>
                                                <div className="link-btn"><Link href="#" className="theme-btn btn-style-one text-white">
                                                    <span className="btn-title">APPOINTMENT</span>
                                                </Link></div>
                                            </div>
                                        </div>
                                    </div>
                                </aside>
                            </div>
                        </div>
                    </section>
                    {/* Feature Section Two */}
                    <section className="feature-section-two mt-0">
                        <div className="auto-container">
                            <div className="row">
                                <div className="col-lg-6 feature-block-two style-two">
                                    <div className="shape-box">
                                        <div className="inner-box">
                                            <div className="icon"><img src="/assets/images/icons/icon-9.png" alt="" /></div>
                                             <h4>Fostering lifelong learning and continuous growth.</h4>
                                            <div className="text">We encourage students to embark on their personal and professional journeys through continuous learning and exploration.</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 feature-block-two style-two">
                                    <div className="shape-box">
                                        <div className="inner-box">
                                            <div className="icon"><img src="/assets/images/icons/icon-10.png" alt="" /></div>
                                            <h4>Unlocking potential and creating pathways to success.</h4>
                                            <div className="text">We empower individuals to discover their hidden talents and unlock their full potential.</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>

            </Layout>
        </>
    )
}