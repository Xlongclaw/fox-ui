import React from "react";
import Star from "./Star";
import StarHalf from "./StarHalf";

const RatingContainer = () => {
  return (
    <div className="flex gap-1 my-2 items-center">
      <Star fill="#fff" />
      <Star fill="#fff" />
      <Star fill="#fff" />
      <Star fill="#fff" />
      <StarHalf fill="#fff" />
      <h3 className="text-xs">(1176)</h3>
    </div>
  );
};

export default RatingContainer;
