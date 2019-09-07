import React from "react"
import { motion } from "framer-motion"

export default function LayoutTransition({ location }) {
  switch (location) {
    case "/":
      return <TwoTransition />
    case "/contact":
      return <TwoTransition />
    default:
      return <TwoTransition />
  }
}

function TwoTransition() {
  const square = {
    enter: {
      x: ["-100%", "0%", "100%"],
      opacity: 1,
      backgroundColor: "transparent",
      transition: {
        when: "afterChildren",
        times: [0.2, 0.8, 1],
        ease: "easeInOut",
        duration: 2,
      },
    },
    exit: {
      opacity: 1,
      backgroundColor: "transparent",
      transition: {
        when: "afterChildren",
        duration: 0.5,
      },
    },
  }
  return (
    <motion.div
      className="w-full h-full absolute overflow-x-hidden"
      style={{
        width: "100vw",
        height: "100vh",
      }}
      variants={square}
      enter="enter"
      exit="exit"
    />
  )
}
