import React from "react";

const PriceContainer = (props: {
  price: number;
  discount: number;
  themeColor: string;
}) => {
  return (
    <div>
      <span style={{ fontSize: 18, color: props.themeColor, fontWeight: 500 }}>
        ₹8989
      </span>
      <span
        style={{ fontSize: 14, marginLeft: 8, textDecoration: "line-through" }}
      >
        ₹{props.price}
      </span>
      <span style={{ fontSize: 14, marginLeft: 8 }}>{props.discount}% off</span>
    </div>
  );
};

export default PriceContainer;
