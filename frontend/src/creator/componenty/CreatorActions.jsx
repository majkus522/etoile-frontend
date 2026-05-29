import "./CreatorActions.css";

function CreatorActions({ finishProject, loading }) {
	return (
		<div className="creator-buttons-row">
			<button type="button" className="creator-favorite-button">
				<span className="creator-favorite-icon">♡</span>
				<span className="creator-favorite-text">Ulubione</span>
			</button>

			<button
				type="button"
				className="creator-cart-button"
				onClick={finishProject}
				disabled={loading}>
				<span className="creator-cart-icon">□</span>
				<span className="creator-cart-text">Ukończ projekt</span>
			</button>
		</div>
	);
}

export default CreatorActions;
