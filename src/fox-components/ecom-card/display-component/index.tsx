import React from "react";
import EcomCard from "../EcomCard";
import headPhone from "@images/headphone3.jpg";
import headPhone1 from "@images/headphone.jpg";
import headPhone2 from "@images/headphone1.jpg";
import shoe1 from "@images/shoe1.jpg";
import shoe3 from "@images/shoe3.jpg";
import shoe4 from "@images/shoe4.jpg";

const DisplayComponent = () => {
  return (
    <div className=" justify-center items-center flex gap-4 h-full">
      <EcomCard
        data={{
          images: [headPhone, headPhone2, headPhone1],
          itemName: "Wireless Headphone With ANC",
          description:
            "From aeroplane noise to conversations, the SONY WH-1000XM5 Bluetooth Headphones can effectively block out high and mid-frequency sounds.",
          brand: "SONY",
          discount: 30,
          price: 8999,
          rating: 4.6,
          sold: 4567,
        }}
        animateOnHover
      />
      <EcomCard
        data={{
          images: [shoe1, shoe3, shoe4],
          itemName: " Air Force 1 '07",
          brand: "HIKE",
          discount: 10,
          price: 16999,
          rating: 4.6,
          sold: 4567,
        }}
        style={{
          backgroundColor: "#4e4e4e20",
          width: 288,
          borderRadius: 18,
          padding: 8,
          themeColor: "#f54266",
          textColor: "#fff",
          borderColor: "#e1e1e130",
        }}
        animateOnHover
      />
    </div>
  );
};

export default DisplayComponent;
