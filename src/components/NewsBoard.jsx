import { useEffect, useState } from "react";
import NewsItem from "./NewsItem";

const NewsBoard = ({ category }) => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        let url = `/api/news?category=${category}`;
        console.log("Fetching from:", url);
        const response = await fetch(url);
        const data = await response.json();
        console.log("API Response:", data);
        setArticles(data.articles || []);
      } catch (error) {
        console.error("Error fetching news:", error);
        setArticles([]);
      }
    };

    fetchArticles();
  }, [category]);

  return (
    <div>
      <h2 className="text-center my-4">
        Latest <span className="badge bg-danger">News</span>
      </h2>
      {articles.length > 0 ? (
        articles.map((news, index) => (
          <NewsItem
            key={index}
            title={news.title}
            description={news.description}
            src={news.urlToImage}
            url={news.url}
          />
        ))
      ) : (
        <p className="text-center">Unable to load resource. CORS enabled for localhost only.</p>
      )}
    </div>
  );
};

export default NewsBoard;