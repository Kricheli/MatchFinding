import React from "react";
import IlikeIt from "../images/like.png";
import IdisLikeIt from "../images/dislike.png";
import Like from "../images/likeCounter.png";
import Dislike from "../images/dislikeCounter.png";
import { Data } from "./Data";

const ApprovalCard = ({
  nextItem,
  likeFunction,
  dislikeFunction,
  isEnd,
  dislikeNumber,
  likesNumber,
  currentItem,
}) => {
  const IlikeItClike = () => {
    if (isEnd) return;
    likeFunction();
    nextItem();
  };
  const IdislikeItClick = () => {
    if (isEnd) return;
    dislikeFunction();
    nextItem();
  };
  if (isEnd) {
    const container = document.querySelector(".image-description");
    if (isEnd === true && likesNumber > 0) {
      container.innerHTML = `<p>You liked <strong>${likesNumber}</strong> images and diliked <strong>${dislikeNumber}</strong> images`;
    } else if (isEnd === true && likesNumber === 0) {
      container.innerHTML = `<p> Those are the daily options, you liked ${likesNumber} images,<br /> Are you sure you have a beating heart???e`;
    }
  }
  return (
    <div className="ui card">
      <div className="extra content">
        <div className="nav-green">
          <img src={Like} alt="like" /> <b>{likesNumber}</b>
        </div>
        <div className="nav-red">
          <b>{dislikeNumber}</b> <img src={Dislike} alt="dislike" />
        </div>
      </div>
      <div className="img-container">
        <img
          className="animals"
          alt="myimage"
          src={Data[currentItem].url}
        ></img>
      </div>
      <div className="content image-description">
        <p>{Data[currentItem].description}</p>
        <hr />
      </div>
      <div className="extra content">
        <div className="ui two buttons">
          <div className="ui basic button" onClick={IlikeItClike}>
            <img className="buttons heart" alt="IlikeIt" src={IlikeIt} />
          </div>
          <div className="ui basic button" onClick={IdislikeItClick}>
            <img className="buttons" alt="worng" src={IdisLikeIt} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default ApprovalCard;
