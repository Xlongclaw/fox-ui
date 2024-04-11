import { motion } from 'framer-motion'
import React from 'react'
import { BsCircleFill, BsFileMinus, BsSquare, BsX } from 'react-icons/bs'
import JokerButton from './joker-button'

export default function CoverWindow() {
  return (
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
              <JokerButton color='danger'><BsX/></JokerButton>
              <JokerButton color='warning'><BsFileMinus/></JokerButton>
              <JokerButton color='success'><BsSquare/></JokerButton>
            </div>
            <div className="text-xs font-medium"></div>
          </div>
          <div className="flex h-[90%] ">
            <div className="w-[10rem] border-r-2 border-zinc-900 h-full"></div>
            <div></div>
          </div>
        </div>
  )
}
