import React, { useContext, useEffect } from "react"
import { Link } from "gatsby"
import { AnimationContext } from "../components/store/animation"
import { motion } from "framer-motion"
import { MdArrowForward } from "react-icons/md"

export default function IndexPage() {
  const {
    setPageLocation,
    setAboutActive,
    setWorkActive,
    setContactActive,
    setHoverActive,
    setContent,
    content,
  } = useContext(AnimationContext)
  useEffect(() => {
    setPageLocation("/")
    setWorkActive(false)
    setContactActive(false)
    setAboutActive(false)
  })
  const transition = { duration: 1, ease: [0.43, 0.13, 0.23, 0.96] }
  const variants = {
    initial: { scale: 0.9, opacity: 1 },
    enter: { opacity: 1, transition },
    exit: {
      opacity: 0,
      transition: { duration: 1, ...transition },
    },
  }
  function enter(text) {
    setHoverActive(false)
    setContent([text])
  }
  function leave(text) {
    setHoverActive(true)
    setContent([text])
  }
  return (
    <motion.div
      className="flex flex-wrap-reverse w-full h-full relative"
      initial="exit"
      animate="enter"
      exit="exit"
      variants={variants}
    >
      <div className="lg:w-1/2 w-full h-screen flex relative">
        <div className="lg:w-2/3 w-full flex items-center justify-center flex-wrap z-20 bg-transparent">
          <div className="flex lg:w-1/3 justify-center items-center h-full  ">
            <div className="relative overflow-hidden w-full flex justify-center items-center overflow-hidden">
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: ["-100%", "0%", "0%", "0%", "102%"] }}
                transition={{
                  duration: 1.2,
                  delay: 0.15,
                  type: "spring",
                  ease: [0.17, 0.41, 0.2, 0.67],
                }}
                className="bg-gray-1000 h-full w-full absolute mt-4 mb-4"
              />
              <Link className="font__work-sans " to="/about">
                <motion.p
                  className="relative font-black text-4xl p-4 cursor-pointer font__work-sans link-hover overflow-hidden text-gray-1000"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.1 }}
                  onMouseEnter={() => enter("About")}
                  onMouseLeave={() => leave(null)}
                >
                  About
                </motion.p>
              </Link>
            </div>
          </div>
          <div className="flex lg:w-1/3 justify-center items-center h-full  ">
            <div className="relative overflow-hidden w-full flex justify-center items-center overflow-hidden">
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: ["-100%", "0%", "0%", "0%", "102%"] }}
                transition={{
                  duration: 1.2,
                  delay: 0.15,
                  type: "spring",
                  ease: [0.17, 0.41, 0.2, 0.67],
                }}
                className="bg-gray-1000 h-full w-full absolute mt-4 mb-4"
              />
              <Link className="font__work-sans " to="/work">
                <motion.p
                  className="relative font-black text-4xl p-4 cursor-pointer font__work-sans link-hover overflow-hidden text-gray-1000"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.1 }}
                  onMouseEnter={() => enter("Work")}
                  onMouseLeave={() => leave(null)}
                >
                  Work
                </motion.p>
              </Link>
            </div>
          </div>
          <div className="flex lg:w-1/3 justify-center items-center h-full ">
            <div className="relative overflow-hidden w-full flex justify-center items-center overflow-hidden">
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: ["-100%", "0%", "0%", "0%", "102%"] }}
                transition={{
                  duration: 1.2,
                  delay: 0.3,
                  type: "spring",
                  ease: [0.17, 0.41, 0.2, 0.67],
                }}
                className="bg-gray-1000 h-full w-full absolute mt-4 mb-4"
              />
              <Link to="/contact">
                <motion.p
                  className="relative font-black text-4xl p-4 cursor-pointer font__work-sans link-hover overflow-hidden text-gray-1000"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.1 }}
                  onMouseEnter={() => enter("Contact")}
                  onMouseLeave={() => leave(null)}
                >
                  Contact
                </motion.p>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:w-1/2 w-full flex justify-center flex-wrap items-end lg:pl-10 z-20 h-screen">
        <div className="flex lg:w-3/5 justify-center items-center h-full lg:ml-48 tracking-tighter">
          <div className="flex flex-col w-full flex-wrap">
            <div className="p-4 break-normal leading-none tracking-tighter">
              <motion.h1
                className="lg:text-5xl text-3xl font__work-sans font-light text-gray-1000"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1 }}
              >
                Pat Parillo{" "}
              </motion.h1>
              <motion.p
                className="text-5xl font-black font__work-sans text-gray-1000"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1.1 }}
              >
                Web Developer
              </motion.p>
            </div>
            <div className="p-4 break-normal  tracking-normal w-5/6">
              <motion.p
                className=" font__work-sans text-gray-1000"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1.2 }}
              >
                It was popularised in the 1960s with the release of Letraset
                sheets containing Lorem Ipsum passages, and more recently with
                desktop publishing software like Aldus PageMaker including
                versions of Lorem Ipsum.
              </motion.p>
            </div>
            <div className="p-4 break-normal leading-none tracking-normal relative flex flex-grow-0">
              <Link className="font__work-sans " to="/about">
                <motion.p
                  className="relative font-black text-lg font__work-sans cursor-pointer"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 1.3, type: "tween" }}
                >
                  Explore more
                  <motion.span
                    className="pl-12 -mt-1 text-3xl absolute text-gray-1000"
                    animate={{ x: [20, 0, 20] }}
                    transition={{
                      duration: 2,
                      type: "spring",
                      delay: 2,
                      loop: Infinity,
                    }}
                  >
                    <MdArrowForward />
                  </motion.span>
                </motion.p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
