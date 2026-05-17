import React from "react";

function PostCreatorDescription({ description, setDescription }) {
  return (
    <textarea
      className="post-creator-description-input"
      placeholder="+ Dodaj opis"
      value={description}
      onChange={(e) => setDescription(e.target.value)}
    />
  );
}

export default PostCreatorDescription;
