import React, { useContext, useEffect } from "react"
import { motion, useAnimation, AnimatePresence } from "framer-motion"
import { AnimationContext } from "../store/animation"

export function SquareIndex({ location }) {
  const { pageLocation, hoverActive, content } = useContext(AnimationContext)
  const animation = useAnimation()
  useEffect(() => {
    if (location === "/") {
      animation.start({
        borderRadius: "9999px",
        filter: "blur(15px)",
        scale: 1,
        transition: {
          duration: 0.2,
          type: "spring",
          when: "afterChildren",
        },
      })
    } else if (location === "/about") {
      animation.start({
        borderRadius: "0px",
        filter: "blur(0px)",
        scale: 4,
        transition: {
          duration: 0.5,
          type: "tween",
          when: "beforeChildren",
        },
      })
    } else if (location === "/work") {
      animation.start({
        width: "78vw",
        left: "calc(100% - 39vw)",
        top: "100%",
        height: "100vh",
        bottom: 0,
        right: 0,
        y: "-100%",
        transition: {
          type: "tween",
          duration: 0.5,
          when: "beforeChildren",
        },
      })
    } else if (location === "/contact") {
      animation.start({
        width: "78vw",
        height: "100vh",
        transition: {
          type: "tween",
          duration: 0.5,
          when: "beforeChildren",
        },
      })
    }
  }, [pageLocation])

  return (
    <motion.div
      className="absolute bg-gray-1000 z-50 shadow-2xl rounded-full transform square"
      style={
        hoverActive
          ? animation.start({
              filter: "blur(25px)",
              transition: {
                type: "tween",
                duration: 0.2,
              },
            })
          : animation.start({
              filter: "blur(0px)",
              transition: {
                type: "tween",
                duration: 0.2,
              },
            })
      }
      animate={animation}
      initial={{
        filter: "blur(15px)",
        scale: 1,
        x: "-50%",
        y: "-50%",
        top: "50%",
        left: "50%",
        height: "30vw",
        width: "30vw",
      }}
    >
      <div
        className="relative rounded-full bg-transparent flex justify-center items-end "
        style={{ height: "30vw", width: "30vw" }}
      >
        <AnimatePresence>
          <motion.p
            key={content}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 1 } }}
            exit={{ opacity: 0 }}
            className="absolute text-10vw text-neon-900 font-black uppercase font__work-sans leading-none"
          >
            {content}
          </motion.p>
        </AnimatePresence>
      </div>
    </motion.div>
  )
}
