import PropTypes from "prop-types";
import "./productCard.css";

export default function ProductCard(props) {
  console.log(props);
  return (
    <div>
      <img src={props.image} alt={props.name} />
      <span>{props.name}</span>
      <span>{props.price}</span>
      <p>{props.description}</p>
    </div>
  );
}

ProductCard.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  description: PropTypes.string,
};