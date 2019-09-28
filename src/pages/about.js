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
    setIndexActive,
  } = useContext(AnimationContext)
  useLayoutEffect(() => {
    setAboutActive(true)
    setContactActive(false)
    setWorkActive(false)
    setIndexActive(false)
    setPageLocation("/about")
  })

  const variants = {
    initial: { opacity: 0 },
    enter: {
      opacity: 1,
      transition: {
        delay: 1,
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
      className="flex flex-wrap-reverse w-full h-full relative bg-gray-1000 flex-1 justify-center z-50 "
      initial="exit"
      animate="enter"
      exit="exit"
      variants={variants}
    >
      <AboutContent />
    </motion.div>
  )
}
