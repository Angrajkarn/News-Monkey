import React from "react";
import { FacebookShareButton, TwitterShareButton, LinkedinShareButton } from 'react-share';
import { FacebookIcon, TwitterIcon, LinkedinIcon } from 'react-share';

const NewsItem = ({ title, description, imageUrl, newsUrl, author, date }) => {
  return (
    <div className="my-3">
      <div className="card" style={{ width: "18rem" }}>
        <img src={imageUrl} className="card-img-top" alt="..." />
        <div className="card-body">
          <h3 className="card-title">{title}</h3>
          <p className="card-text">{description}</p>
          <p className="card-text">
            <small className="text-muted">
              By {author ?author: "Unknown"} on {date}
            </small>
          </p>
          <div className="d-flex justify-content-between align-items-center">
            <div className="share-buttons">
              <FacebookShareButton url={newsUrl}>
                <FacebookIcon size={32} round />
              </FacebookShareButton>
              <TwitterShareButton url={newsUrl}>
                <TwitterIcon size={32} round />
              </TwitterShareButton>
              <LinkedinShareButton url={newsUrl}>
                <LinkedinIcon size={32} round />
              </LinkedinShareButton>
            </div>
            <a
              href={newsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-sm btn-primary"
            >
              Read more
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
