import TestimonialSlider2 from "@/components/slider/TestimonialSlider2"


export default function Testimonial() {
    return (
        <>
            <section className="testimonial-section-two">
                <div className="sec-bg"/>
                <div className="auto-container">
                    <div className="sec-title  style-two text-center">
                        <h6 className="home-subtitle">Real Client Stories</h6>
                        <h2>Customer Experiences </h2>
                    </div>
                    {/*Theme Carousel*/}
                    <TestimonialSlider2 />
                </div>
            </section>
        </>
    )
}
