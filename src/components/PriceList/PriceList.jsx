import React from "react";
import "./PriceList.css";
import priceList from "../../data/priceList.json";

function PriceList() {
  return (
    <section className="container" id="experience">
      <h2 className="section-title">Ceník</h2>

      <ul className="career">
        {priceList.map((careerItem, id) => {
          return (
            <li key={id} className="career-item">
              <img
                src={careerItem.imageSrc}
                alt={`${careerItem.organisation} Logo`}
              />
              <div className="career-item-details">
                <h3>{`${careerItem.role}`}</h3>
                <ul>
                  {careerItem.experiences.map((experience, id) => {
                    return <li key={id}>{experience}</li>;
                  })}
                </ul>
                <p className="color-special">{`${careerItem.startDate}`}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default PriceList;
