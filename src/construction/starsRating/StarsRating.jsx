import React from "react";
import ratingStyle from "../../modules/rating.module.scss";
import { FaStar } from "react-icons/fa6";
import { STARS_CONSTANT } from "../../common/constants";

const StarsRating = ({ count, rating, setUserRating }) => {
  const handleRating = async (selectedRating) => {
    setUserRating(selectedRating);
  };

  const ratingArray = Array(count)
    .fill()
    .map((_, i) => (
      <div
        onClick={() => handleRating(i + 1)}
        key={i}
        className={ratingStyle.iconElement}
        style={i < rating ? { color: "#F79E1B", overflow: "hidden" } : {}}
      >
        <FaStar className={ratingStyle.iconStar} />
      </div>
    ));

  return (
    <div className={ratingStyle.contentBox}>
      <div className={ratingStyle.contentInner}>
        {ratingArray}
        <span className={ratingStyle.quantityRating}>
          {rating} {STARS_CONSTANT}
        </span>
      </div>
    </div>
  );
};

export default StarsRating;
