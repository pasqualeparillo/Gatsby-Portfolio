import React, { useContext, useLayoutEffect } from "react"
import { AnimationContext } from "../components/store/animation"
import { motion } from "framer-motion"
import AboutContent from "../components/about/aboutContent"
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

  const variants = {
    initial: { opacity: 0 },
    enter: {
      opacity: 1,
      transition: {
        duration: 1,
      },
    },
    exit: {
      opacity: 0,
      transition: { duration: 1 },
    },
  }
  return (
    <motion.div
      className="flex flex-wrap-reverse w-full h-full relative "
      initial="exit"
      animate="enter"
      exit="exit"
      variants={variants}
      style={{ zIndex: 9999 }}
    >
      <AboutContent />
    </motion.div>
  )
}
