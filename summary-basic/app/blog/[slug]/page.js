import Link from "next/link";

export default function BlogPostPage({ params }) {
    return (
        <main>
            <h1>Blog post</h1>
            <p>{params.slug}</p>
        </main>
    )
}