import BgAnim from "@components/bg-anim";
import NavigationBar from "@components/navigation-bar";
import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import EcomCard from "@fox-components/ecom-card";
import shoe1 from "@images/shoe1.jpg";
import shoe3 from "@images/shoe3.jpg";
import shoe4 from "@images/shoe4.jpg";
import { BsCircle, BsCircleFill } from "react-icons/bs";

const Home: React.FC = () => {
  const navigate = useNavigate();
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
        className="flex pt-20 justify-between opacity-0"
      >
        <div className="w-1/2 pt-24 pl-24">
          {/* <h4>||||||</h4> */}
          <h2 className="text-7xl font-semibold leading-[5rem] w-4/5 mb-12">
            <span className="text-ascent">Speed up </span> your development with
            us
          </h2>
          <h2 className="text-xl text-x-grey-I">
            Copy paste the most trending components and use them in your
            websites without having to worry about styling and animations.
          </h2>
          <div className="flex gap-3 mt-8">
            <button
              onClick={() => navigate("/application")}
              className="py-4 border-2 px-6 rounded-3xl bg-white text-black hover:bg-transparent hover:text-white transition-all"
            >
              Browse Components
            </button>
            <a
              href="https://portfolio-omega-ruby-26.vercel.app/"
              className="py-4 border-2 px-6 rounded-3xl  hover:bg-white hover:text-black transition-all"
            >
              Hire us
            </a>
          </div>
        </div>
        <div className="bg-zinc-950 w-[40rem] rounded-s-3xl mt-8 h-[35rem] border-2 border-zinc-900 relative p-4">
          <motion.div
            animate={{
              height: [200, 300, 200],
              backgroundColor: ["#6d28d9", "#10b981", "#6d28d9"],
              transition: { repeat: Infinity, duration: 10 },
            }}
            className="w-64 h-64 bg-ascent blur-3xl absolute -z-10"
          ></motion.div>
          <div className="border-b-2 border-zinc-900 pt-2 pb-4 px-4 flex items-center justify-between">
            <div className="flex gap-2">
              <BsCircleFill className="text-red-500" />
              <BsCircleFill className="text-yellow-500" />
              <BsCircleFill className="text-green-500" />
            </div>
            <div className="text-xs font-medium"></div>
          </div>
          <div className="flex h-[90%] ">
            <div className="w-[10rem] border-r-2 border-zinc-900 h-full"></div>
            <div></div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Home;
