import { useState } from "react";
import "./Creator.css";

import CreatorTitle from "./componenty/CreatorTitle.jsx";
import MaterialSelector from "./componenty/MaterialSelector.jsx";
import CreatorActions from "./componenty/CreatorActions.jsx";
import JewelryTypeSelector from "./componenty/TypeSelector.jsx";
import LengthSelector from "./componenty/LengthSelector.jsx";
import CharmsSelector from "./componenty/CharmsSelector.jsx";
import PriceSummary from "./componenty/PriceSummary.jsx";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import { useTitle } from "../main.jsx";

function Creator() {
	const [selectedMaterial, setSelectedMaterial] = useState(1);
	const [isOpen, setIsOpen] = useState(true);
	const [selectedType, setSelectedType] = useState("bracelet");
	const [selectedLength, setSelectedLength] = useState("18 cm");
	const [isLengthOpen, setIsLengthOpen] = useState(true);

	useTitle("Etoile - Kreator");
	return (
		<>
			<Navbar />
			<main className="creator-page">
				<div className="creator-wrapper">
					<CreatorTitle />

					<JewelryTypeSelector
						selectedType={selectedType}
						setSelectedType={setSelectedType}
					/>

					<MaterialSelector
						selectedMaterial={selectedMaterial}
						setSelectedMaterial={setSelectedMaterial}
						isOpen={isOpen}
						setIsOpen={setIsOpen}
					/>

					<LengthSelector
						selectedType={selectedType}
						selectedLength={selectedLength}
						setSelectedLength={setSelectedLength}
						isLengthOpen={isLengthOpen}
						setIsLengthOpen={setIsLengthOpen}
					/>

					<CharmsSelector />

					<PriceSummary />

					<CreatorActions />
				</div>
			</main>
			<Footer />
		</>
	);
}

export default Creator;
