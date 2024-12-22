import React from "react";
import "./PriceList.css";
import priceList from "../../data/priceList.json";
import testimonialsData from "../../data/testimonials.json";
import { FaQuoteRight } from "react-icons/fa";

function PriceList() {
  return (
    <section className="container" id="experience">
      <h2 className="section-title">Napsali o mně</h2>

      <ul className="career">
        {testimonialsData.map((oneCustomer, id) => {
          return (
            <li key={id} className="career-item">
              {/* <img
                src={careerItem.imageSrc}
                alt={`${careerItem.organisation} Logo`}
              /> */}
              <div className="career-item-details">
                {/* <h3>{`${careerItem.role}`}</h3> */}
                <h3>
                  <FaQuoteRight />
                </h3>
                <ul>{oneCustomer.customerReview}</ul>
                <p className="color-special">{`${oneCustomer.customerName}`}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default PriceList;
