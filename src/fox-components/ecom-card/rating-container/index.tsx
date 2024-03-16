import React from "react";
import Star from "./Star";
import StarHalf from "./StarHalf";

const RatingContainer = ({ textColor }: { textColor: string }) => {
  return (
    <div
      style={{
        color: textColor,
        display: "flex",
        gap: 4,
        marginTop: 8,
        marginBottom: 8,
        alignItems: "center",
      }}
    >
      <Star fill={textColor} />
      <Star fill={textColor} />
      <Star fill={textColor} />
      <Star fill={textColor} />
      <StarHalf fill={textColor} />
      <h3 style={{ fontSize: 12 }}>(1176)</h3>
    </div>
  );
};

export default RatingContainer;
