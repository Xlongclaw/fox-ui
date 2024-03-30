import React from "react";
import Star from "./Star";
import StarHalf from "./StarHalf";

/**
 * RatingContainer component displays a star rating along with the number of ratings.
 * @param props.textColor - The color for the stars and the number of ratings.
 */
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
      {/* Render 5 full stars */}
      <Star fill={textColor} />
      <Star fill={textColor} />
      <Star fill={textColor} />
      <Star fill={textColor} />
      <Star fill={textColor} />

      {/* Render half star */}
      <StarHalf fill={textColor} />

      {/* Display the number of ratings */}
      <h3 style={{ fontSize: 12 }}>(1176)</h3>
    </div>
  );
};

export default RatingContainer;
