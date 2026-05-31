import { useState, useEffect } from "react";

import { Link, useParams } from "react-router-dom";
import { posts } from "../postsData.js";
import "./BlogPostPage.css";

export default function BlogPostPage() {
	const { id } = useParams();

	const post = posts.find((post) => post.id === Number(id));
	const [isFavorite, setIsFavorite] = useState(false);
	const [favoriteId, setFavoriteId] = useState(null);

	useEffect(() => {
		const loadFavorites = async () => {
			try {
				const response = await fetch("http://localhost:8000/favorites", {
					method: "GET",
					headers: {
						token: localStorage.getItem("token"),
					},
				});

				if (!response.ok) {
					throw new Error("Nie udało się pobrać ulubionych");
				}

				const data = await response.json();

				const favorite = data.find((f) => f.product_id === post?.id);

				if (favorite) {
					setIsFavorite(true);
					setFavoriteId(favorite.favorite_id);
				}
			} catch (err) {
				console.error(err);
			}
		};

		if (post) {
			loadFavorites();
		}
	}, [post]);

	const toggleFavorite = async () => {
		try {
			if (isFavorite) {
				const response = await fetch("http://localhost:8000/favorites", {
					method: "DELETE",
					headers: {
						"Content-Type": "application/json",
						token: localStorage.getItem("token"),
					},
					body: JSON.stringify({
						favorite_id: favoriteId,
					}),
				});

				if (!response.ok) {
					throw new Error("Błąd usuwania");
				}

				setIsFavorite(false);
				setFavoriteId(null);
			} else {
				const response = await fetch("http://localhost:8000/favorites", {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
						token: localStorage.getItem("token"),
					},
					body: JSON.stringify({
						product_id: null,
						project_id: post.id,
					}),
				});

				if (!response.ok) {
					throw new Error("Błąd dodawania");
				}

				const data = await response.json();

				setIsFavorite(true);
				setFavoriteId(data.favorite_id);
			}
		} catch (err) {
			console.error(err);
		}
	};

	if (!post) {
		return (
			<div>
				<h1>Nie znaleziono posta</h1>
				<Link to="/blog">Wróć do bloga</Link>
			</div>
		);
	}

	return (
		<article className="single-post">
			<Link to="/blog" className="single-post-back">
				← Wróć do bloga
			</Link>

			<div className="single-post-header">
				<h1 className="single-post-title">{post.title}</h1>

				<button className="favorite-btn" onClick={toggleFavorite}>
					{isFavorite ? "★" : "☆"}
				</button>
			</div>

			<img src={post.image} alt={post.title} className="single-post-image" />

			<p className="single-post-content">{post.content}</p>
		</article>
	);
}
