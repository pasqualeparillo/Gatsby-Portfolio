import React, { useContext, useEffect } from "react"
import MediaQuery from "react-responsive"
import { AnimatePresence, motion } from "framer-motion"
import { AnimationContext } from "../store/animation"

export default function AboutContent() {
  const { aboutActive } = useContext(AnimationContext)
  const variant = {
    first: {
      x: ["0rem", "7rem", "0rem", "-7rem", "0rem"],
      transition: {
        type: "spring",
        loop: Infinity,
        duration: 8,
        ease: "anticipate",
      },
    },
  }
  const variantTwo = {
    first: {
      x: ["0rem", "-7rem", "0rem", "7rem", "0rem"],
      transition: {
        type: "spring",
        loop: Infinity,
        duration: 8,
        ease: "anticipate",
      },
    },
  }

  const variantThree = {
    first: {
      x: ["0rem", "14rem", "0rem", "-14rem", "0rem"],
      zIndex: [0, 50, 0, 50, 0],
      transition: {
        type: "spring",
        loop: Infinity,
        duration: 8,
        ease: "anticipate",
      },
    },
  }
  return (
    <AnimatePresence>
      {aboutActive && (
        <div className="lg:inline-flex flex flex-1 overflow-y-scroll flex-wrap overflow-x-scroll">
          <div className="lg:w-1/2 w-full min-h-screen bg-black flex justify-end">
            <div className="flex justify-end items-end h-full lg:pl-20 pl-4 lg:pr-20 pr-4 pb-12 lg:w-4/5 w-full">
              <p className="text-white text-3xl leading-normal tracking-tighter">
                Studio XXX is a digital design & development studio in Stockholm
                with tons of experience creating high-end productions for some
                of the biggest brands & agencies in the business.
              </p>
            </div>
          </div>
          <div className="lg:w-1/2 w-full min-h-screen bg-white flex flex-col">
            <div className="flex flex-col justify-center align-middle lg:pl-20 pl-4 lg:pr-20 pr-4 pb-12 lg:w-4/5 w-full flex-1">
              <div className="flex w-full justify-center items-center relative">
                <motion.div
                  className="h-40 w-40 bg-black rounded-full absolute overflow-hidden z-40"
                  variants={variant}
                  animate="first"
                ></motion.div>

                <motion.div
                  className=" h-48 w-48 bg-black z-40 absolute overflow-hidden flex items-center"
                  variants={variantTwo}
                  animate="first"
                >
                  <motion.div
                    className="h-40 w-40 bg-white rounded-full z-50 absolute ml-4"
                    variants={variantThree}
                    animate="first"
                  />
                </motion.div>
              </div>
            </div>
            <div className="flex flex-col justify-end lg:pl-20 pl-4 lg:pr-20 pr-4 pb-12 w-full">
              <p className="text-2xl leading-tight tracking-tighter underline uppercase mb-10">
                Designer + Developer
              </p>
              <p className="text-lg text-black leading-tight tracking-tighter">
                We’re built around the concept of a Design & Developer duo —
                Focusing solely on senior creatives, cutting the overhead and
                assuring our clients 100% senior competence in every project.
                Our creatives has more than 7 years of experience designing,
                developing & launching digital productions.
              </p>
            </div>
          </div>
        </div>
      )}
    </AnimatePresence>
  )
}
