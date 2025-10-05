'use client'
import CounterUp from "@/components/elements/CounterUp"
import Layout from "@/components/layout/Layout"
import AwardSlider1 from '@/components/slider/AwardSlider1'
import Link from "next/link"
import { useState } from 'react'
import ReactCurvedText from 'react-curved-text'
import ModalVideo from 'react-modal-video'
export default function Home() {
    const [isOpen, setOpen] = useState(false)
    return (
        <>
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="About company" wrapperCls="home_1">
                <section className="about-section-seven">
                    <div className="auto-container">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="image-block">
                                    <div className="image-box"><img className="lazy-image owl-lazy" src="/assets/images/resource/image-48.jpg" alt="" /></div>
                                    <div className="video-box">
                                        <a onClick={() => setOpen(true)} className="overlay-link lightbox-image video-fancybox ripple"><span className="play-icon flaticon-play" />
                                            <ReactCurvedText width='180'
                                                height='180'
                                                cx='90'
                                                cy='90'
                                                rx='60'
                                                ry='60'
                                                startOffset='0'
                                                reversed={true}
                                                text='World’s #1 Consultancy . Works where it matters'
                                                textProps={{ "style": { "fontSize": "18" } }}
                                                textPathProps={{ "fill": "#ffffff" }}
                                                tspanProps={null}
                                                ellipseProps={null}
                                                svgProps={null}
                                            />
                                        </a>
                                    </div>
                                    <div className="shape-one"><img src="/assets/images/shape/shape-19.png" alt="" /></div>
                                    <div className="shape-two"><img src="/assets/images/shape/shape-20.png" alt="" /></div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="sec-title">
                                    <h2>Who we are</h2>
                                    <div className="text-decoration">
                                        <span className="left" />
                                        <span className="right" />
                                    </div>
                                </div>
                                 <div className="text-block">
                                    <div className="text">Our power of choices is untrammelled and when nothing prevents to do what we like best principle of selection.</div>
                                    <h4>Client Focused</h4>
                                    <div className="text">ELITEPRO INTERNATIONAL Training Institute your one stop training institution specializing in Caregiver Training, Homecare Training, Languages, Pre-departure, Leadership, and Customer Service programs. We aim to empower individuals by offering high-quality, industry-relevant training programs delivered in a personalized and supportive environment. Our mission is to guide individuals on their lifelong learning journeys, nurturing their potential and equipping them with the skills and knowledge to fulfill their purpose and make a positive impact.</div>

                                    <h4>Mission</h4>
                                    <div className="text">To provide transformative training experiences that empower individuals to achieve their personal and professional aspirations, while fostering compassion, excellence, and cultural understanding in diverse fields.</div>

                                    <h4>Vision</h4>
                                    <div className="text ">To be a globally recognized leader in innovative training, renowned for its exceptional quality, industry-tailored programs, and dedication to nurturing potential within every individual.</div>
                                </div>
                                <div className="author-box">
                                    <div className="author-info">
                                        {/* <img src="/assets/images/resource/author-thumb-4.jpg" alt="" /> */}
                                        <h4>CALEB MOKAYA</h4>
                                        <h5>CEO</h5>
                                    </div>
                                    <div className="signature"><img src="/assets/images/resource/signature.jpg" alt="" /></div>
                                </div>
                                <div className="bottom-content">
                                    <h5>Do you need further assistance?</h5>
                                    <form action="#">
                                        <div className="form-group">
                                            <input type="email" placeholder="Enter your email..." />
                                            <button className="theme-btn btn-style-one"><span className="btn-title">START HERE</span></button>
                                        </div>
                                    </form>
                                    <div className="phone-number"><a href="tel:+254 714 319851">+254 714 319851</a></div>
                                    </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Timeline Section */}
                
                {/* Experience Section Two */}
                
                {/* Testimonial Section Six  */}
                
                {/* Team Section Six */}
                
                {/* Award Section Three */}
                
                {/* Feature Section Two */}
                <section className="feature-section-two">
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
                                        <h4> Unlocking potential and creating pathways to success.</h4>
                                        <div className="text">We empower individuals to discover their hidden talents and unlock their full potential.</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="vfhzo499OeA" onClose={() => setOpen(false)} />
            </Layout>
        </>
    )
}


