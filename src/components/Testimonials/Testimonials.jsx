import "./Testimonials.css";
import testimonialsData from "../../data/testimonials.json";
import { FaQuoteRight } from "react-icons/fa";
import Avatar from "../Shared/Avatar";

function Testimonials() {
  return (
    <section className="container" id="price-list">
      <h2 className="section-title">Napsali o mně</h2>

      <ul className="testimonials">
        {testimonialsData.map((oneCustomer, id) => {
          return (
            <li key={id} className="testimonials-item">
              {/* <img src={oneCustomer.customerImage} alt="" /> */}

              <div className="testimonials-item-details">
                <div className="image-container">
                  <Avatar imageSrc={oneCustomer.customerImage} />
                </div>
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

export default Testimonials;
