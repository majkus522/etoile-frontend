import "../App.css";
import { useState, useRef } from "react";
import "./PostCreator.css";

import PostCreatorTitle from "./components/PostCreatorTitle.jsx";
import PostCreatorImageUpload from "./components/PostCreatorImageUpload.jsx";
import PostCreatorDescription from "./components/PostCreatorDescription.jsx";
import PostCreatorActions from "./components/PostCreatorActions.jsx";

import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer";
import { useTitle } from "../main.jsx";

function PostCreator() {
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");
	const [image, setImage] = useState(null);
	const fileInputRef = useRef(null);

	const handleSave = () => {
		console.log("Zapisywanie posta:", { title, description, image });
		alert("Post został zapisany!");
	};

	useTitle("Etoile - Blog - Stwórz post");
	return (
		<div className="app-container">
			<Navbar />
			<main className="post-creator-page">
				<div className="post-creator-wrapper">
					<PostCreatorTitle title={title} setTitle={setTitle} />

					<div className="post-creator-row">
						<PostCreatorImageUpload
							image={image}
							setImage={setImage}
							fileInputRef={fileInputRef}
						/>

						<PostCreatorDescription
							description={description}
							setDescription={setDescription}
						/>
					</div>

					<PostCreatorActions onSave={handleSave} />
				</div>
			</main>
			<Footer />
		</div>
	);
}

export default PostCreator;
