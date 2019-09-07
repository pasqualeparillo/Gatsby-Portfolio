import React from "react"
import { motion } from "framer-motion"

export default function SocialLinks() {
  const parent = {
    animation: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.3,
        duration: 0.6,
      },
    },
  }
  const child = {
    animation: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  }
  return (
    <div className="right-0 mr-6 lg:mt-12 mt-6 top-0 absolute">
      <motion.div
        variants={parent}
        initial={{ opacity: 0 }}
        animate="animation"
        className="flex flex-wrap justify-between w-10 h-40"
      >
        <motion.div
          variants={child}
          initial={{ opacity: 0, y: 20 }}
          className="w-10 h-10 rounded-full border border-black shadow-2xl"
        />
        <motion.div
          variants={child}
          initial={{ opacity: 0, y: 20 }}
          className="w-10 h-10 rounded-full border border-black shadow-2xl"
        />
        <motion.div
          variants={child}
          initial={{ opacity: 0, y: 20 }}
          className="w-10 h-10 rounded-full border border-black shadow-2xl"
        />
      </motion.div>
    </div>
  )
}
