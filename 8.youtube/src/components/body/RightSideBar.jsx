import React, { Component, useContext, useEffect, useState } from "react";
import { MainContext } from "../Main";
import Skeleton from "@mui/material/Skeleton";
import dataFormet from "../../utils/dataFormet";
import axios from "axios";

// console.log(dataFormet(publishTime));

const SingleVideo = ({ videoList }) => {
  const {
    snippet: {
      title,
      channelId,
      channelTitle,
      description,
      thumbnails: {
        high: { url },
      },
      publishTime,
    },
    id: { videoId },
  } = videoList;

  const [authorImg, setAuthorImg] = useState("");

  const getVideoCommpent = async () => {
    try {
      const response = await axios.get(
        `https://www.googleapis.com/youtube/v3/commentThreads?part=snippet,replies&videoId=${videoId}&key=${process.env.REACT_APP_API_KEY}`,
      );
      const data = await response.data;
      const current = data.items[0];
      const {
        snippet: {
          topLevelComment: {
            snippet: { authorProfileImageUrl },
          },
        },
      } = current;

      setAuthorImg(authorProfileImageUrl);
    } catch (error) {}
  };

  useEffect(() => {
    console.log(34);
    getVideoCommpent();
  }, [authorImg]);

  return (
    <div className="video">
      <div className="video__thumbnail">
        <img src={url} alt="author" />
      </div>
      <div className="video__details">
        <div className="author">
          <img src={authorImg} alt={channelId} />
        </div>
        <div className="title">
          <h3>{title}</h3>
          <a href="htt">{channelTitle}</a>
          <span>{dataFormet(publishTime)}</span>
        </div>
      </div>
    </div>
  );
};

const RightSideBar = () => {
  const { videoLists } = useContext(MainContext);
  return (
    <div className="videos">
      <h1>Recommended</h1>
      <div className="videos__container">
        {videoLists.length > 0
          ? videoLists.map((video) => (
              <SingleVideo key={video.id.videoId} videoList={video} />
            ))
          : Array(9)
              .fill(null)
              .map((i, index) => (
                <Skeleton
                  key={index}
                  variant="rectangular"
                  width={310}
                  height={158}
                />
              ))}
      </div>
    </div>
  );
};

export default RightSideBar;
