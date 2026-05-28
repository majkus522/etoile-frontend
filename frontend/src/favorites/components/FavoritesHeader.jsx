import React from "react";

const FavoritesHeader = ({ products, onToggleAll, onRemoveSelected }) => {
	return (
		<div className="cart-top-bar">
			<label className="star-checkbox">
				<input
					type="checkbox"
					checked={products.length > 0 && products.every((p) => p.checked)}
					onChange={(e) => onToggleAll(e.target.checked)}
				/>
				<span className="star-icon"></span>
				<div className="star-napis">{"cała lista"}</div>
			</label>
			<button className="text-btn" onClick={onRemoveSelected}>
				USUŃ ZAZNACZONE
			</button>
		</div>
	);
};

export default FavoritesHeader;
