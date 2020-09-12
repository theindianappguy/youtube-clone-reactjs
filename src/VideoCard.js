import React from "react";
import { Avatar } from "@material-ui/core";
import "./VideoCard.css";

function VideoCard({
  image,
  title,
  channel,
  views,
  timestamp,
  channelImage,
  channelUrl,
}) {
  return (
    <div className="videoCard">
      <img className="videoCard__thumbnail" src={image} alt="" />
      <div className="videoCard__info">
        <Avatar
          className="videoCard__avatar"
          alt={channel}
          src={channelImage}
        />
        <div className="video__text">
          <p style={{ fontSize: "14px" }}>{title}</p>
          <p style={{ fontSize: "13px", marginTop: "4px", toolTip: "Hello" }}>
            <a style={{ fontFeatureSettings: "normal" }} href={channelUrl}>
              {channel}
            </a>
          </p>
          <p style={{ marginTop: "3px", fontSize: "12px", color: "#606060" }}>
            {`${views} views`} • {timestamp}
          </p>
        </div>
      </div>
    </div>
  );
}

export default VideoCard;
