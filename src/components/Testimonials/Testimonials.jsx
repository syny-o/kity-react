import React from "react";
import "./Testimonials.css";
import TestimonialsElement from "./TestimonialsElement";
import priceListData from "../../data/priceList.json";

function Testimonials() {
  return (
    <section className="container" id="testimonials">
      <h2 className="section-title">Napsali o mne</h2>
      <ul className="testimonials">
        {priceListData.map((careerItem, id) => (
          <TestimonialsElement key={id} careerItem={careerItem} />
        ))}
      </ul>
    </section>
  );
}

export default Testimonials;
