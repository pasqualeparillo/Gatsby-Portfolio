import React, { useContext, useEffect } from "react"
import { AnimationContext } from "../components/store/animation"
import { motion } from "framer-motion"
export default function ContactPage() {
  const {
    setPageLocation,
    setContactActive,
    setAboutActive,
    setWorkActive,
  } = useContext(AnimationContext)
  useEffect(() => {
    setPageLocation("/contact")
    setContactActive(true)
    setAboutActive(false)
    setWorkActive(false)
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
      className="flex flex-col w-full h-full relative bg-black flex-1 items-end z-50 overflow-y-visible"
      initial="exit"
      animate="enter"
      exit="exit"
      variants={variants}
    >
      <div className="w-full items-end flex flex-col flex-1">
        <div className="lg:w-4/5 w-full flex flex-col flex-1 pl-8 pt-8 pb-8 lg:mt-0 mt-26">
          <p className="text-white lg:text-15vw text-19vw leading-negative tracking-tighest break-words">
            Don't be a stranger
          </p>
        </div>
        <div className="lg:w-4/5 w-full p-8 flex lg:flex-row flex-col">
          <div className="lg:w-1/3 w-full flex flex-wrap lg:p-8 p-2 lg:pb-2 pb-8 items-center justify-between">
            <p className="text-white lg:w-full lg:text-xl text-2xl">Email -</p>
            <p className="text-white lg:text-base text-xs">
              patparillo@gmail.com
            </p>
          </div>
          <div className="lg:w-1/3 w-full flex flex-wrap lg:p-8 p-2 lg:pb-2 pb-8 items-center justify-between">
            <p className="text-white lg:w-full lg:text-xl text-2xl">Phone -</p>
            <p className="text-white lg:text-base text-base">203-306-9965</p>
          </div>
          <div className="lg:w-1/3 w-full flex flex-wrap lg:p-8 p-2 lg:pb-2 pb-8 items-center justify-between">
            <p className="text-white lg:w-full lg:text-xl text-2xl">
              Location -
            </p>
            <p className="text-white lg:text-base text-xs">Seattle, WA</p>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
