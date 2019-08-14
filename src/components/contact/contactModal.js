import React, { useContext } from "react"
import { AnimationContext } from "../store/animation"
import { motion } from "framer-motion"
import MediaQuery from "react-responsive"

export default function ContactModal() {
  const { isContactOpen, setIsContactOpen } = useContext(AnimationContext)

  const desktop = {
    widthClosed: {
      scaleX: [2.021, 1],
      x: ["50%", "0%"],
      zIndex: 40,
      transition: {
        type: "tween",
        delay: 0.4,
        duration: 0.2,
      },
    },
    widthOpen: {
      scaleX: [1, 2.021],
      x: ["0%", "50%"],
      zIndex: 40,
      transition: {
        type: "tween",
        delay: 0,
        duration: 0.2,
      },
    },
    heightOpen: {
      scaleY: [1, 2.021],
      y: ["0%", "-50%"],
      zIndex: 40,
      transition: {
        delay: 0.4,
        duration: 0.2,
        type: "tween",
      },
    },
    heightClosed: {
      scaleY: [2.021, 1],
      y: ["-50%", "0%"],
      zIndex: 40,
      transition: {
        delay: 0,
        duration: 0.2,
        type: "tween",
      },
    },
  }

  const phone = {
    widthClosed: {
      scaleX: [2.021, 1],
      x: ["50%", "0%"],
      zIndex: 40,
      transition: {
        type: "tween",
        delay: 0.4,
        duration: 0.2,
      },
    },
    heightClosed: {
      scaleY: [3.042, 1],
      y: ["-100.4%", "0%"],
      zIndex: 40,
      transition: {
        delay: 0,
        duration: 0.2,
        type: "tween",
      },
    },
    WidthOpen: {
      scaleX: [1, 2.021],
      x: ["0%", "50%"],
      zIndex: 40,
      transition: {
        type: "tween",
        duration: 0.2,
        delay: 0,
      },
    },
    HeightOpen: {
      scaleY: [1, 3.042],
      y: ["0%", "-100.4%"],
      zIndex: 40,
      transition: {
        type: "tween",
        duration: 0.2,
        delay: 0.4,
      },
    },
  }

  return (
    <>
      <MediaQuery minWidth={992}>
        <motion.div
          onClick={() => setIsContactOpen(!isContactOpen)}
          className="absolute flex flex-1 flex-grow h-full w-full transform"
          animate={
            isContactOpen
              ? ["widthOpen", "heightOpen"]
              : ["widthClosed", "heightClosed"]
          }
          variants={desktop}
          initial={{ scaleY: [1], scaleX: [1], y: "0%", x: "0%" }}
        >
          <motion.div className="w-full h-full hover:bg-black bg-black z-40"></motion.div>
        </motion.div>
      </MediaQuery>
      <MediaQuery maxWidth={992}>
        <motion.div
          onClick={() => setIsContactOpen(!isContactOpen)}
          className="absolute flex flex-1 flex-grow h-full w-full transform"
          animate={
            isContactOpen
              ? ["HeightOpen", "WidthOpen"]
              : ["heightClosed", "widthClosed"]
          }
          initial={{ scaleY: [1], scaleX: [1], y: "0%", x: "0%" }}
          variants={phone}
        >
          <motion.div className="w-full h-full bg-black hover:bg-black z-40"></motion.div>
        </motion.div>
      </MediaQuery>
    </>
  )
}
