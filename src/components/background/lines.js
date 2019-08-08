import React from "react"
import { motion } from "framer-motion"

const container = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.2,
    },
  },
}
const horizontalLine = {
  hidden: { x: "-100%" },
  visible: {
    x: 0,
  },
}

const verticalLine = {
  hidden: { y: "-100%" },
  visible: {
    y: 0,
  },
}

export const VerticalBg = () => (
  <motion.div
    className="absolute w-full h-full flex justify-around overflow-y-hidden"
    variants={container}
    initial="hidden"
    animate="visible"
  >
    {[0, 1, 2, 3, 4, 5, 6, 7].map(index => (
      <motion.div
        key={index}
        className="w-1/4 relative h-full lg:border-r border-grey-100 line"
        variants={verticalLine}
        transition={{ duration: 2 }}
      />
    ))}
  </motion.div>
)
export const HorizontalBg = () => (
  <motion.div
    className="absolute w-full h-full flex flex-col justify-around"
    variants={container}
    initial="hidden"
    animate="visible"
  >
     {[0, 1, 2, 3, 4].map(index => (
      <motion.div
        key={index}
        className="relative w-full h-1/4 lg:border-b border-grey-100 line"
        variants={horizontalLine}
        transition={{ duration: 2 }}
      />
    ))}
  </motion.div>
)
