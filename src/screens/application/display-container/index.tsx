import React from "react";
import { motion } from "framer-motion";
import NetPattern from "@components/net-pattern";
import EcomCard from "../ecom-card";
import headPhone from "@images/headphone3.jpg";
import headPhone1 from "@images/headphone.jpg";
import headPhone2 from "@images/headphone1.jpg";

const DisplayContainer = () => {
  const [codeVisible, setCodeVisible] = React.useState(false);
  return (
    <div className="my-12">
      <div className="flex text-sm gap-2 my-4">
        <button className="py-2 px-4 border border-x-grey-II bg-x-grey-II text-ascent rounded-3xl">
          Component
        </button>
        <button
          onClick={() => setCodeVisible(true)}
          className="py-2 px-4 border border-x-grey-II  text-white/50 rounded-3xl"
        >
          code
        </button>
      </div>
      <div className="h-[40rem] w-full border border-x-grey-II rounded-[20px] relative overflow-hidden justify-center items-center flex gap-4">
        <NetPattern />
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
            images: [headPhone, headPhone2, headPhone1],
            itemName: "Wireless Headphone With ANC",
            brand: "SONY",
            discount: 30,
            price: 8999,
            rating: 4.6,
            sold: 4567,
          }}
          animateOnHover
        />
      </div>
    </div>
  );
};

export default DisplayContainer;
