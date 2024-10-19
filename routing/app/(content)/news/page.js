'use client';

// import { DUMMY_NEWS } from "@/dummy-news";
import NewsListPage from "@/components/news-list";
import { useEffect, useState } from "react";

export default function NewsPage() {
    const [error, setError] = useState();
    const [isLoading, setIsLoading] = useState(false);
    const [news, setNews] = useState();

    useEffect(() => {
        async function fetchNews() {
            setIsLoading(true);
            const response = await fetch('http://localhost:8080/news');
            if(!response.ok) {
                setError('failed to fetch news.');
            }

            const news = await response.json();
            setIsLoading(false);
            setNews(news);
        }

        fetchNews();
    }, []);

    if(isLoading) {
        return <p>Loading...</p>
    }

    if(error) {
        return <p>{error}</p>
    }

    let newsContent;

    if(news) {
        newsContent = <NewsListPage news={news} />
    }


    return (
        <>
            <h1>News page</h1>
            {newsContent}
        </>
    )
}