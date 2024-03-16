import React from "react";
import { motion } from "framer-motion";
import NetPattern from "@components/net-pattern";
import EcomCard from "@fox-components/ecom-card";
import headPhone from "@images/headphone3.jpg";
import headPhone1 from "@images/headphone.jpg";
import headPhone2 from "@images/headphone1.jpg";
import shoe1 from "@images/shoe1.jpg";
import shoe2 from "@images/shoe2.jpg";
import shoe3 from "@images/shoe3.jpg";
import shoe4 from "@images/shoe4.jpg";

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
            images: [shoe1, shoe3, shoe4],
            itemName: " Air Force 1 '07",
            brand: "HIKE",
            discount: 10,
            price: 16999,
            rating: 4.6,
            sold: 4567,
          }}
          style={{
            backgroundColor:'#4e4e4e20',
            width:288,
            borderRadius:18,
            padding:8,
            themeColor:'#f54266',
            textColor:'#fff',
            borderColor:"#e1e1e130"
          }}
          animateOnHover
        />
      </div>
    </div>
  );
};

export default DisplayContainer;
