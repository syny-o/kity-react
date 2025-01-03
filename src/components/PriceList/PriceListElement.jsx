import "./PriceListElement.css";
import { FaUserFriends, FaPortrait, FaPalette } from "react-icons/fa";

function PriceListElement({ priceListItem, id }) {
  return (
    <li key={id} className="price-list-item">
      <div className="img-wrapper">
        {priceListItem.role === "S vizáží" && <FaPalette />}
        {priceListItem.role === "Portrétní" && <FaPortrait />}
        {priceListItem.role === "Svatební" && <FaUserFriends />}
      </div>
      <div className="price-list-item-details">
        <h3>
          {priceListItem.role}
          <span className="">{` ${priceListItem.organisation}`}</span>
        </h3>
        <ul>
          {priceListItem.items.map((experience, id) => {
            return <li key={id}>{experience}</li>;
          })}
        </ul>
        <p className="price">{priceListItem.price}</p>
      </div>
    </li>
  );
}

export default PriceListElement;
