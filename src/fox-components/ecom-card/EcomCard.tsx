import React from "react";
import { motion } from "framer-motion";
import PriceContainer from "./price-container";
import RatingContainer from "./rating-container";
import DetailsContainer from "./details-container";
import ImageContainer from "./image-container";

/**
 * PropsType of this Component :-
 * props.data -> All the data of the ecommerce Item.
 * props.style -> Changeable Card Styles
 */
type PropsType = {
  data: {
    images: Array<any>;
    brand?: string;
    itemName: string;
    description?: string;
    rating?: number;
    price?: number;
    discount?: number;
    sold?: number;
  };
  style?: {
    borderColor?: string;
    padding?: number;
    width?: number;
    themeColor?: string;
    backgroundColor?: string;
    borderRadius?: number;
    textColor?: string;
  };
  animateOnHover?: boolean;
};

const EcomCard = ({
  data,
  style = {
    padding: 8,
    backgroundColor: "rgb(9 9 11)",
    themeColor: "rgb(0 196,118)",
    borderColor: "rgb(48 48 48)",
    width: 288,
    borderRadius: 24,
    textColor: "#fff",
  },

  animateOnHover = false,
}: PropsType) => {
  return (
    <motion.div
      whileHover={
        animateOnHover && {
          scale: 1.02,
        }
      }
      whileInView={{
        opacity: [0, 1],
        transition: {
          duration: 0.4,
          delay: 0.2,
        },
      }}
      style={{
        padding: style.padding,
        border: `1px solid ${style.borderColor}`,
        borderRadius: style.borderRadius,
        backgroundColor: style.backgroundColor,
        width: style.width,
        cursor: "pointer",
        opacity:0
      }}
    >
      <ImageContainer images={data.images} themeColor={style.themeColor} />
      <div className="px-4 mt-2 text-sm">
        <DetailsContainer
          brand={data.brand}
          description={data.description}
          itemName={data.itemName}
          themeColor={style.themeColor}
          textColor={style.textColor}
        />
        <div>
          <RatingContainer textColor={style.textColor} />
          <PriceContainer
            discount={data.discount}
            price={data.price}
            themeColor={style.themeColor}
            textColor={style.textColor}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default EcomCard;
