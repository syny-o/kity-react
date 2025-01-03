import "./PriceList.css";
import PriceListElement from "./PriceListElement";
import priceListData from "../../data/priceList.json";

function PriceList() {
  return (
    <section className="container" id="price-list">
      <h2 className="section-title">Ceník</h2>
      <ul className="price-list">
        {priceListData.map((priceListItem, id) => (
          <PriceListElement key={id} priceListItem={priceListItem} />
        ))}
      </ul>
    </section>
  );
}

export default PriceList;
