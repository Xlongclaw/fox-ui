import React from "react";

const PriceContainer = (props: {
  price: number;
  discount: number;
  themeColor: string;
  textColor:string
}) => {
  return (
    <div style={{color:props.textColor}}>
      <span style={{ fontSize: 18, color: props.themeColor, fontWeight: 500 }}>
        ₹{Math.round(props.price - props.price * props.discount/100)}
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
