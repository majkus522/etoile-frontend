import React from "react";

function PostCreatorImageUpload({ image, setImage, fileInputRef }) {
	const handleImageChange = (e) => {
		const file = e.target.files[0];
		if (file) {
			setImage(URL.createObjectURL(file));
		}
	};

	const handleBoxClick = () => {
		fileInputRef.current.click();
	};

	return (
		<div className="image-upload-box" onClick={handleBoxClick}>
			{image ? (
				<img src={image} alt="Podgląd" className="uploaded-preview" />
			) : (
				<span className="placeholder-text">+ Dodaj zdjęcie</span>
			)}
			<input
				type="file"
				ref={fileInputRef}
				onChange={handleImageChange}
				accept="image/*"
				style={{ display: "none" }}
			/>
		</div>
	);
}

export default PostCreatorImageUpload;
