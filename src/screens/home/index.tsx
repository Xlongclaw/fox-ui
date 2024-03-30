import BgAnim from "@components/bg-anim";
import NavigationBar from "@components/navigation-bar";
import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Home: React.FC = () => {
  const navigate = useNavigate()
  return (
    <div className="relative overflow-hidden h-screen">
      <BgAnim />
      <NavigationBar glassEffect={false} />
      <motion.div
        initial={{
          y: 50,
        }}
        whileInView={{
          y: 0,
          opacity: [0, 0, 1],
          transition: {
            stiffness: 200,
            damping: 60,
            type: "spring",
          },
        }}
        className="flex pt-48 px-24 opacity-0"
      >
        <div className="w-1/2">
          <h2 className="text-7xl font-semibold leading-[5rem] w-4/5 mb-12">
            Speed up your development with us
          </h2>
          <h2 className="text-xl text-x-grey-I">
            Copy paste the most trending components and use them in your
            websites without having to worry about styling and animations.
          </h2>
          <div className="flex gap-3 mt-8">
            <button onClick={()=>navigate('/application')} className="py-4 border-2 px-6 rounded-3xl bg-white text-black hover:bg-transparent hover:text-white transition-all">
              Browse Components
            </button>
            <a href="https://portfolio-omega-ruby-26.vercel.app/" className="py-4 border-2 px-6 rounded-3xl  hover:bg-white hover:text-black transition-all">
              Hire us
            </a>
          </div>
        </div>
        <div></div>
      </motion.div>
    </div>
  );
};

export default Home;
