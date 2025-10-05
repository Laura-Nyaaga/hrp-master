import ServiceSlider1 from "@/components/slider/ServiceSlider1";
import ServiceSlider3 from "@/components/slider/ServiceSlider3";
import ServiceSlider4 from "@/components/slider/ServiceSlider4";
import ServicesSlider2 from "@/components/slider/ServicesSlider2";

export default function Services() {
  return (
    <>
      <section className="services-section-two">
        <div className="auto-container">
          <div className="row m-0 align-items-center justify-content-between top-content">
            <div className="sec-title style-three">
              <h6 className="home-subtitle">latest service</h6>
              <h2>Our Organizational Solutions</h2>
            </div>
            <div className="text">
              We provide expert consulting to help organizations thrive through
              <br/>
              strategic guidance, operational excellence, and financial
              security. <br /> Trust us to be your partner in sustainability and
              growth
            </div>
          </div>
          {/*Theme Carousel*/}
          <ServicesSlider2 />
        </div>
      </section>
    </>
  );
}
