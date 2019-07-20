import React, { useContext } from "react"
import { motion } from "framer-motion"
import { AnimationContext } from "../components/store/animation"

export default function IndexPage() {
  const { isClicked, setIsClicked } = useContext(AnimationContext)
  const variants = {
    open: {
      y: 0,
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: -100 },
      },
    },
    closed: {
      y: 50,
      opacity: 0,
      transition: {
        y: { stiffness: 1000 },
      },
    },
  }
  return (
    <motion.div
      className="lg:h-full lg:w-full flex flex-wrap h-3/4 w-3/4 justify-center self-center mx-auto"
      variants={variants}
      animate={isClicked ? "open" : "closed"}
    >
      <div className="flex items-start justify-start w-full">
        <span className="work uppercase font-bold text-vw leading-tight tracking-tight">
          Building
        </span>
      </div>
      <div className="flex items-start justify-center w-full">
        <span className="work uppercase font-bold text-vw leading-tight tracking-tight">
          INTERACTIVE
        </span>
      </div>
      {console.log(isClicked)}
      <div className="flex items-start justify-start w-full">
        <span className="work uppercase font-bold text-vw leading-tight tracking-tight">
          Applications
        </span>
      </div>
    </motion.div>
  )
}
