import React, { useContext } from "react"
import MediaQuery from "react-responsive"
import { motion } from "framer-motion"
import { AnimationContext } from "../store/animation"

export default function ProjectTile() {
  const { isProjectOpen, setIsProjectOpen } = useContext(AnimationContext)
  const projectOpen = {
    open: {
      backgroundColor: "#000",
      zIndex: 45,
      borderWidth: "2px",
      borderColor: "#f6e05e",
    },
    closed: {
      backgroundColor: "#fff",
      zIndex: 45,
      borderWidth: "0px",
      borderColor: "#000",
    },
  }
  return (
    <>
      <MediaQuery minWidth={992}>
        <motion.div
          className="flex flex-col h-full w-full content-end items-end justify-end absolute cursor-pointer overflow-hidden "
          animate={isProjectOpen ? "open" : "closed"}
          transition={{ duration: 0.2, type: "tween" }}
          variants={projectOpen}
          initial="closed"
          onClick={() => setIsProjectOpen(!isProjectOpen)}
        >
          <div
            className="flex items-center justify-center tracking-tighter w-full p-4 relative hover:bg-black hover:text-white "
            style={{ height: "100%" }}
          >
            <motion.p
              className={`font-extrabold uppercase whitespace-no-wrap  ${
                isProjectOpen ? "text-white" : null
              }`}
              style={{ fontSize: "calc(25vw / 6)" }}
            >
              Projects
            </motion.p>
          </div>
        </motion.div>
      </MediaQuery>
      <MediaQuery maxWidth={992}>
        <div
          className="flex flex-col h-full w-full content-end items-end justify-end absolute cursor-pointer"
          onClick={() => setIsProjectOpen(!isProjectOpen)}
        >
          <div
            className="flex items-center justify-center tracking-tighter w-full p-4 bg-black text-white relative hover:bg-white hover:text-black transform"
            style={{ height: "100%" }}
          >
            <p
              className="font-extrabold uppercase whitespace-no-wrap "
              style={{ fontSize: "calc(25vw)" }}
            >
              P
            </p>
          </div>
        </div>
      </MediaQuery>
    </>
  )
}
