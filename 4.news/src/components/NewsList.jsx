//Internal Lib Import
import NewsItem from "./NewsItem";

const NewsList = ({ news }) => {
  return (
    <>
      {news && news.length === 0 && <h4>There is No News</h4>}
      {news && news.map((item) => <NewsItem key={item.title} item={item} />)}
    </>
  );
};

export default NewsList;
