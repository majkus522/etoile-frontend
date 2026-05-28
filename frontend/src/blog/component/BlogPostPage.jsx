import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import defaultPostImage from "../images/post1.jpg";
import "./BlogPostPage.css";

export default function BlogPostPage() {
	const { id } = useParams();

	const [post, setPost] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState("");

	useEffect(() => {
		async function fetchPost() {
			try {
				setLoading(true);
				setError("");

				const response = await fetch(`http://localhost:8000/posts/${id}`);

				if (response.status === 404) {
					throw new Error("Nie znaleziono posta.");
				}

				if (!response.ok) {
					const errorText = await response.text();
					throw new Error(
						`Nie udało się pobrać posta. Status: ${response.status}. ${errorText}`
					);
				}

				const data = await response.json();
				setPost(data);
			} catch (err) {
				setError(err.message);
			} finally {
				setLoading(false);
			}
		}

		fetchPost();
	}, [id]);

	if (loading) {
		return <p className="single-post-message">Ładowanie posta...</p>;
	}

	if (error) {
		return (
			<div className="single-post-message">
				<h1>{error}</h1>
				<Link to="/blog">Wróć do bloga</Link>
			</div>
		);
	}

	if (!post) {
		return (
			<div className="single-post-message">
				<h1>Post nie istnieje.</h1>
				<Link to="/blog">Wróć do bloga</Link>
			</div>
		);
	}

	return (
		<article className="single-post">
			<Link to="/blog" className="single-post-back">
				← Wróć do bloga
			</Link>

			<h1 className="single-post-title">{post.title}</h1>

			<img src={defaultPostImage} alt={post.title} className="single-post-image" />

			<p className="single-post-content">{post.description || "Brak treści posta."}</p>
		</article>
	);
}
