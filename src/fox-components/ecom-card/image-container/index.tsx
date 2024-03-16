import React from "react";
import { motion } from "framer-motion";

const ImageContainer = ({
  images,
  themeColor,
}: {
  images: Array<any>;
  themeColor?: string;
}) => {
  const [imageIndex, setImageIndex] = React.useState(0);

  React.useEffect(() => {
    setTimeout(() => {
      if (imageIndex !== images.length - 1) setImageIndex((index) => index + 1);
      else setImageIndex((index) => 0);
    }, 2000);
  }, [imageIndex]);

  return (
    <div className="relative">
      <motion.img
        whileInView={{ opacity: [0, 1] }}
        className="h-[15rem] object-cover rounded-2xl"
        src={images[imageIndex]}
        alt=""
      />
      <div className="absolute right-4 pb-4 bottom-0 flex gap-2">
        {images.map((_, i) => (
          <div
            style={{
              width: 4,
              height: 4,
              backgroundColor:
                i === imageIndex ? themeColor || "rgb(0 196,118)" : "#fff",
              borderRadius: "100%",
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageContainer;
