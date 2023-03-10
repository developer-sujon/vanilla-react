import React from "react";

const getDataToString = (dateTimeStr) => {
  return new Date(dateTimeStr).toDateString();
};

const NewsItem = ({ item }) => {
  return (
    <div className="card mb-4">
      {item.urlToImage && (
        <img className="card-img-top" src={item.urlToImage} alt={item.title} />
      )}
      <div className="card-body">
        <a
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#424242" }}
        >
          <h5 className="card-title">{item.title} </h5>
        </a>
        <a
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#424242" }}
        >
          {item.content}
        </a>
        <div className="mt-2 d-flex align-items-center justify-content-between">
          <small>
            <strong>published at {getDataToString(item.publishedAt)}</strong>
          </small>
          <div
            style={{
              padding: "0.25rem 0.5rem",
              backgroundColor: "#ededed",
              color: "#424242",
              display: "inline-block",
            }}
            className="ml-auto"
          >
            {item.source.name}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
