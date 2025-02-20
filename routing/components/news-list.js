import { DUMMY_NEWS } from "@/dummy-news";
import Link from "next/link";

export default function NewsList({ news }) {
    return (
        <ul className="news-list">
            {
                DUMMY_NEWS.map(newsItem => (
                    <li key={newsItem.title}>
                        <Link href={`/news/${newsItem.slug}`}>
                            <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
                            <span>{newsItem.title}</span>
                        </Link>
                    </li>
                ))
            }
        </ul>
    )
}