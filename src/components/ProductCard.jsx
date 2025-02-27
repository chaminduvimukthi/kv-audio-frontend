import PropTypes from 'prop-types';
import './ProductCard.css';

export default function ProductCard(props) {
    console.log(props); // Debugging

    return (
        <div className="product-card">
            <img src={props.photoUrl} alt={props.alt} />
            <span>{props.name}</span>
            <span>{props.price}</span>
            <p>{props.description}</p>
        </div>
    );
}

// Prop validation
ProductCard.propTypes = {
    photoUrl: PropTypes.string.isRequired,  // Must be a string and required
    alt: PropTypes.string.isRequired,       // Must be a string and required
    name: PropTypes.string.isRequired,      // Must be a string and required
    price: PropTypes.string.isRequired,     // Must be a string and required
    description: PropTypes.string           // Optional, but should be a string
};

// Default props (in case props are missing)
ProductCard.defaultProps = {
    description: "No description available"
};
