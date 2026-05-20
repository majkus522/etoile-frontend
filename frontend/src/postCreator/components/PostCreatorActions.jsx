import React from "react";

function PostCreatorActions({ onSave }) {
	return (
		<button className="save-post-btn" onClick={onSave}>
			Zapisz post
		</button>
	);
}

export default PostCreatorActions;
