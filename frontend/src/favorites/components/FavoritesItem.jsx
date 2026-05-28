import React from "react";
import iconSample from "../../assets/Sample.png"; // Używamy tego samego assetu co w koszyku

const FavoritesItem = ({ product, onToggleCheck }) => {
	return (
		<div className="cart-product">
			{/* Gwiazdka jako checkbox identyczna jak w koszyku */}
			<label className="star-checkbox">
				<input type="checkbox" checked={product.checked} onChange={onToggleCheck} />
				<span className="star-icon"></span>
			</label>

			<a href="/" className="cart-koszyk">
				<img src={iconSample} alt="produkt" />
			</a>

			<div className="product-info">
				<p className="product-name">{product.title}</p>
				<span className="seller-tag">od {product.seller}</span>
				<div className="product-row" style={{ marginTop: "10px" }}>
					<span className="price-big">{product.price} zł</span>
					<button
						className="btn-etoile green"
						style={{ width: "auto", padding: "8px 20px", margin: 0 }}>
						DO KOSZYKA
					</button>
				</div>
			</div>
		</div>
	);
};

export default FavoritesItem;
