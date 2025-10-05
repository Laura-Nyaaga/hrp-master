import TestimonialSlider5 from "@/components/slider/TestimonialSlider5";
import React from "react";
export default function Testimonials() {
  return (
    <section className="testimonial-section-seven">
      <div className="auto-container">
        <div className="sec-title text-center">
          <h2>Words from our customers</h2>
          <div className="text-decoration">
            <span className="left" />
            <span className="right" />
          </div>
        </div>
        <TestimonialSlider5 />
      </div>
    </section>
  );
}
