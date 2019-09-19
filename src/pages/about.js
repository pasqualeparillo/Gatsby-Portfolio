import React, { useContext, useLayoutEffect } from "react"
import { AnimationContext } from "../components/store/animation"
import { motion } from "framer-motion"
export default function AboutPage() {
  const {
    setPageLocation,
    setAboutActive,
    setWorkActive,
    setContactActive,
  } = useContext(AnimationContext)
  useLayoutEffect(() => {
    setAboutActive(true)
    setContactActive(false)
    setWorkActive(false)
    setPageLocation("/about")
  })

  const transition = { duration: 1, ease: [0.43, 0.13, 0.23, 0.96] }
  const variants = {
    initial: { opacity: 0 },
    enter: { opacity: 1, transition },
    exit: {
      opacity: 0,
      transition: { duration: 1.5, ...transition },
    },
  }
  return (
    <motion.div
      className="flex flex-wrap-reverse w-full h-full relative "
      initial="exit"
      animate="enter"
      exit="exit"
      variants={variants}
    ></motion.div>
  )
}
