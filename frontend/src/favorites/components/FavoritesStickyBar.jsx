import React from "react";

const FavoritesStickyBar = ({ selectedCount }) => {
	return (
		<div className="fav-sticky-bottom-bar">
			<div className="sticky-bar-container">
				<div className="selection-summary">
					Wybrano: <strong>{selectedCount}</strong>
				</div>
				<button className="btn-sticky-submit" disabled={selectedCount === 0}>
					DO KOSZYKA
				</button>
			</div>
		</div>
	);
};

export default FavoritesStickyBar;
