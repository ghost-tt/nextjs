import { DUMMY_NEWS } from "@/dummy-news";
import NewsListPage from "@/components/news-list";

export default function NewsPage() {
    return (
        <>
            <h1>News page</h1>
            <NewsListPage news={DUMMY_NEWS} />
        </>
    )
}