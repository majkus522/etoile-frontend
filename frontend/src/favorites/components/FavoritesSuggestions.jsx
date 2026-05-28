import React from "react";
import iconSample from "../../assets/Sample.png";

const FavoritesSuggestions = ({ product }) => {
	return (
		<div className="upsell-box shadow">
			<a href="/" className="upsell-img">
				<img src={iconSample} alt="produkt" />
			</a>
			<p className="price-mid">{product.price} zł</p>
			<p className="upsell-text">{product.title}</p>
			<button className="add-btn">DO KOSZYKA</button>
		</div>
	);
};

export default FavoritesSuggestions;
