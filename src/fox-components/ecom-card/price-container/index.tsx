import React from "react";

/**
 * PriceContainer component displays the price, discount, and discount percentage.
 * @param props - The props object containing price, discount, themeColor, and textColor.
 * @param props.price - The original price before discount.
 * @param props.discount - The discount percentage.
 * @param props.themeColor - The color used for displaying the discounted price.
 * @param props.textColor - The color used for the text.
 * @returns JSX representation of the PriceContainer component.
 */
const PriceContainer: React.FC<{
  price: number;
  discount: number;
  themeColor: string;
  textColor: string;
}> = (props) => {
  return (
    <div style={{ color: props.textColor }}>
      <span style={{ fontSize: 18, color: props.themeColor, fontWeight: 500 }}>
        ₹{Math.round(props.price - (props.price * props.discount) / 100)}
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
