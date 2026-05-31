import "./JewelryPreview.css";
import sampleImage from "../../assets/Sample.png";

function JewelryPreview() {
	return (
		<section className="jewelry-preview">
			<div className="preview-box">
				<img src={sampleImage} alt="Podgląd biżuterii" className="preview-image" />

				<h3 className="preview-title">Podgląd projektu</h3>
			</div>
		</section>
	);
}

export default JewelryPreview;
