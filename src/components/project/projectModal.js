import React, { useContext } from "react"
import { AnimationContext } from "../store/animation"
import { motion } from "framer-motion"
import MediaQuery from "react-responsive"
import { ProjectActive } from "./projectActive"

export default function ProjectModal() {
  const { isProjectOpen, setIsProjectOpen } = useContext(AnimationContext)
  const desktop = {
    widthClosed: {
      scaleX: [2.021, 1],
      x: ["-50%", "0%"],
      zIndex: 40,
      transition: {
        type: "tween",
        delay: 0.4,
        duration: 0.2,
      },
    },
    widthOpen: {
      scaleX: [1, 2.021],
      x: ["0%", "-50%"],
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
      x: ["-50.5%", "0%"],
      zIndex: 0,
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
      scaleX: [1, 2.02],
      x: ["0%", "-50.5%"],
      zIndex: 0,
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
          onClick={() => setIsProjectOpen(!isProjectOpen)}
          className="absolute flex flex-1 flex-grow transform h-full w-full"
          animate={
            isProjectOpen
              ? ["widthOpen", "heightOpen"]
              : ["widthClosed", "heightClosed"]
          }
          variants={desktop}
          initial={{
            scaleY: [1],
            scaleX: [1],
            y: "0%",
            x: "0%",
          }}
        >
          <div className="w-full h-full flex flex-grow flex-wrap bg-black relative">
            <ProjectActive />
          </div>
        </motion.div>
      </MediaQuery>

      <MediaQuery maxWidth={992}>
        <motion.div
          onClick={() => setIsProjectOpen(!isProjectOpen)}
          className="absolute flex flex-1 flex-grow h-full w-full transform "
          animate={
            isProjectOpen
              ? ["HeightOpen", "WidthOpen"]
              : ["heightClosed", "widthClosed"]
          }
          initial={{ scaleY: [1], scaleX: [1], y: "0%", x: "0%" }}
          variants={phone}
        >
          <motion.div className="w-full h-full bg-black hover:bg-black z-40">
            <ProjectActive />
          </motion.div>
        </motion.div>
      </MediaQuery>
    </>
  )
}
