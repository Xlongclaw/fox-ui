import React from "react";

const DetailsContainer = ({
  brand,
  description,
  itemName,
  themeColor,
  textColor,
}: {
  brand: string;
  itemName: string;
  description: string;
  themeColor: string;
  textColor:string
}) => {
  return (
    <div style={{color:textColor}}>
      <h3 style={{ fontWeight: 500, color: themeColor }}>{brand}</h3>
      <h3>{itemName}</h3>
      <p style={{ marginTop: 12, marginBottom: 12, fontSize: 12 }}>
        {description}
      </p>
    </div>
  );
};

export default DetailsContainer;
