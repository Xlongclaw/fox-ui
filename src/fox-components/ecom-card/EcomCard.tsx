import React from "react";
import { motion } from "framer-motion";
import PriceContainer from "./price-container";
import RatingContainer from "./rating-container";
import DetailsContainer from "./details-container";
import ImageContainer from "./image-container";

/**
 * PropsType of this Component:
 * @param {Object} data - All the data of the ecommerce Item.
 *   @param {Array} images - Array of image URLs.
 *   @param {string} [brand] - Brand of the item (optional).
 *   @param {string} itemName - Name of the item.
 *   @param {string} [description] - Description of the item (optional).
 *   @param {number} [rating] - Rating of the item (optional).
 *   @param {number} [price] - Price of the item (optional).
 *   @param {number} [discount] - Discount percentage of the item (optional).
 *   @param {number} [sold] - Number of items sold (optional).
 * @param {Object} [style] - Changeable Card Styles.
 *   @param {string} [borderColor] - Border color of the card.
 *   @param {number} [padding] - Padding of the card.
 *   @param {number} [width] - Width of the card.
 *   @param {string} [themeColor] - Theme color of the card.
 *   @param {string} [backgroundColor] - Background color of the card.
 *   @param {number} [borderRadius] - Border radius of the card.
 *   @param {string} [textColor] - Text color of the card.
 * @param {boolean} [animateOnHover] - Whether to animate the card on hover.
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
      // Animate card on hover if enabled
      whileHover={animateOnHover && { scale: 1.02 }}
      // Animate card when it comes into view
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
        // Set initial opacity to 1 for entrance animation visibility
        opacity: 1,
      }}
    >
      {/* Image Container */}
      <ImageContainer images={data.images} themeColor={style.themeColor} />
      <div className="px-4 mt-2 text-sm">
        {/* Details Container */}
        <DetailsContainer
          brand={data.brand}
          description={data.description}
          itemName={data.itemName}
          themeColor={style.themeColor}
          textColor={style.textColor}
        />
        <div>
          {/* Rating Container */}
          <RatingContainer textColor={style.textColor} />
          {/* Price Container */}
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
