import React, { useContext, useEffect } from "react"
import MediaQuery from "react-responsive"
import { Link } from "gatsby"
import { AnimationContext } from "../components/store/animation"
import { motion } from "framer-motion"

export default function IndexPage() {
  const {
    setPageLocation,
    setIndexActive,
    setAboutActive,
    setWorkActive,
    setContactActive,
    mouseCoords,
    setMouseCoords,
    setLinkHover,
  } = useContext(AnimationContext)
  useEffect(() => {
    setPageLocation("/")
    setIndexActive(true)
    setWorkActive(false)
    setContactActive(false)
    setAboutActive(false)
  })

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
    <>
      <MediaQuery minWidth={992}>
        <motion.div
          className="flex lg:flex-row flex-col flex-wrap relative bg-black flex-1"
          initial="exit"
          animate="enter"
          exit="exit"
          variants={variants}
          onMouseMove={e => setMouseCoords({ x: e.clientX, y: e.clientY })}
        >
          <motion.div
            className="w-full flex flex-1 flex-grow justify-center items-center test-style z-1000 text-white mix-blend-difference"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <motion.p
              animate={{ x: mouseCoords.x / -20 }}
              transition={{ duration: 2, ease: "linear" }}
              className="uppercase -ml-40 tracking-tighter"
            >
              Creative
            </motion.p>
          </motion.div>
          <motion.div
            className="w-full flex flex-1 flex-grow justify-center items-center test-style z-1000 text-white mix-blend-difference"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <motion.p
              animate={{ x: mouseCoords.x / 20 }}
              transition={{ duration: 2, ease: "linear" }}
              className="uppercase ml-24 tracking-tighter"
            >
              Developer
            </motion.p>
          </motion.div>
          <div
            className="w-full flex"
            style={{ marginLeft: "calc(11vw + 1rem)", height: "11vw" }}
          >
            <div className="w-1/3 flex justify-center items-center z-1000 text-white mix-blend-difference">
              <Link
                className="relative p-4 overflow-hidden "
                onMouseEnter={() => setLinkHover(true)}
                onMouseLeave={() => setLinkHover(false)}
                to="/about"
              >
                <p className="uppercase link-hover text-2xl text-white">
                  About
                </p>
              </Link>
            </div>
            <div className="w-1/3 flex justify-center items-center z-1000 text-white mix-blend-difference">
              <Link
                className="relative p-4 overflow-hidden"
                onMouseEnter={() => setLinkHover(true)}
                onMouseLeave={() => setLinkHover(false)}
                to="/work"
              >
                <p className="uppercase link-hover text-2xl text-white">Work</p>
              </Link>
            </div>
            <div className="w-1/3 flex justify-center items-center z-1000 text-white mix-blend-difference">
              <Link
                className="relative p-4 overflow-hidden "
                onMouseEnter={() => setLinkHover(true)}
                onMouseLeave={() => setLinkHover(false)}
                to="/contact"
              >
                <p className="uppercase link-hover text-2xl text-white">
                  Contact
                </p>
              </Link>
            </div>
          </div>
        </motion.div>
      </MediaQuery>
      <MediaQuery maxWidth={992}>
        <motion.div
          className="flex lg:flex-row flex-col flex-wrap w-full h-full relative bg-black flex-1"
          initial="exit"
          animate="enter"
          exit="exit"
          variants={variants}
          onMouseMove={e => setMouseCoords({ x: e.clientX, y: e.clientY })}
        >
          <div className="w-full flex  flex-1 flex-grow justify-center items-end index-mobile z-1000 text-white mix-blend-difference">
            <motion.p
              animate={{ x: mouseCoords.x / -20, opacity: 1 }}
              transition={{ duration: 2, ease: "linear" }}
              className="uppercase tracking-tighter"
            >
              Creative
            </motion.p>
          </div>
          <div className="w-full flex  flex-1 flex-grow justify-center items-center index-mobile z-1000 text-white mix-blend-difference">
            <motion.p
              animate={{ x: mouseCoords.x / 20 }}
              transition={{ duration: 2, ease: "linear" }}
              className="uppercase tracking-tighter"
            >
              Developer
            </motion.p>
          </div>
          <div
            className="w-full flex p-4 justify-center"
            style={{ height: "20vw" }}
          >
            <div className="w-1/3 flex justify-center items-center z-1000 text-white mix-blend-difference">
              <Link className="relative overflow-hidden" to="/about">
                <p className="uppercase link-hover text-2xl">About</p>
              </Link>
            </div>
            <div className="w-1/3 flex justify-center items-center z-1000 text-white mix-blend-difference">
              <Link className="relative overflow-hidden" to="/work">
                <p className="uppercase link-hover text-2xl ">Work</p>
              </Link>
            </div>
            <div className="w-1/3 flex justify-center items-center z-1000 text-white mix-blend-difference">
              <Link className="relative overflow-hidden " to="/contact">
                <p className="uppercase link-hover text-2xl ">Contact</p>
              </Link>
            </div>
          </div>
        </motion.div>
      </MediaQuery>
    </>
  )
}
