import React, { useContext, useEffect } from "react"
import { AnimationContext } from "../components/store/animation"
import { motion } from "framer-motion"
import WorkContent from "../components/work/WorkContent"
export default function WorkPage() {
  const { setPageLocation, setWorkActive } = useContext(AnimationContext)
  useEffect(() => {
    setWorkActive(true)
    setPageLocation("/work")
  }, [])
  const variants = {
    initial: { scale: 0.9, opacity: 1 },
    enter: {
      opacity: 1,
      transition: {
        duration: 1,
        ease: [0.43, 0.13, 0.23, 0.96],
      },
    },
    exit: {
      opacity: 0,
      transition: { duration: 1, ease: [0.43, 0.13, 0.23, 0.96] },
    },
  }
  return (
    <motion.div
      className="flex flex-wrap-reverse w-full h-full relative bg-black flex-1 justify-center z-50 overflow-y-visible"
      initial="exit"
      animate="enter"
      exit="exit"
      variants={variants}
    >
      <WorkContent />
    </motion.div>
  )
}
