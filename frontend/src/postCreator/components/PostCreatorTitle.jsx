import React from "react";

function PostCreatorTitle({ title, setTitle }) {
  return (
    <input
      type="text"
      className="post-creator-title-input"
      placeholder="Dodaj tytuł"
      value={title}
      onChange={(e) => setTitle(e.target.value)}
    />
  );
}

export default PostCreatorTitle;
