import React, {
  useContext,
  useEffect,
  useState,
  useRef,
  useLayoutEffect,
} from "react"
import MediaQuery from "react-responsive"
import { motion, useAnimation, AnimatePresence } from "framer-motion"
import { AnimationContext } from "../store/animation"

export function SquareIndex({ location }) {
  const { pageLocation, indexActive, mouseCoords, linkHovered } = useContext(
    AnimationContext
  )
  const circleRef = useRef()

  const [position, setPosition] = useState(0)
  const animation = useAnimation()

  const xAxis = linkHovered
    ? mouseCoords.x - position.x - 80
    : (mouseCoords.x - position.x) / 18
  const yAxis = linkHovered
    ? mouseCoords.y - position.y - 80
    : (mouseCoords.y - position.y) / 18
  useLayoutEffect(() => {
    setPosition(circleRef.current.getBoundingClientRect())
  }, [circleRef.current])
  useEffect(() => {
    if (location === "/") {
      animation.start({
        zIndex: 40,
        filter: "blur(0px)",
        backgroundColor: "#272727",
        borderRadius: "9999px",
        scale: 1,
        transition: {
          type: "spring",
          mass: 0.5,
          damping: 200,
          when: "afterChildren",
        },
      })
    } else if (location === "/about") {
      animation.start({
        zIndex: 40,
        filter: "blur(0px)",
        backgroundColor: "#272727",
        borderRadius: "0px",
        scale: 4,
        transition: {
          type: "spring",
          mass: 0.5,
          damping: 200,
          when: "beforeChildren",
        },
      })
    } else if (location === "/work") {
      animation.start({
        scale: 4,
        transition: {
          duration: 1,
          type: "spring",
          stiffness: 50,
          damping: 200,
          when: "beforeChildren",
        },
      })
    } else if (location === "/contact") {
      animation.start({
        scale: 4,
        transition: {
          duration: 1,
          type: "spring",
          stiffness: 50,
          damping: 200,
          when: "beforeChildren",
        },
      })
    }
  }, [pageLocation])

  return (
    <>
      <MediaQuery minWidth={992}>
        <motion.div
          ref={circleRef}
          className="absolute bg-black rounded-full"
          animate={animation}
          initial={{
            scale: 1,
            x: "-50%",
            y: "-50%",
            top: "50%",
            left: "50%",
            height: "30vw",
            width: "30vw",
          }}
        >
          <AnimatePresence>
            {indexActive && (
              <div className="relative bg-transparent h-full w-full">
                <motion.div
                  animate={
                    linkHovered
                      ? {
                          width: "30%",
                          height: "30%",
                          x: xAxis,
                          y: yAxis,
                        }
                      : {
                          width: "100%",
                          height: "100%",
                          x: xAxis,
                          y: yAxis,
                        }
                  }
                  initial={{ width: "30%", height: "30%" }}
                  exit={{ opacity: 0 }}
                  className="h-full absolute bg-white rounded-full"
                />
              </div>
            )}
          </AnimatePresence>
        </motion.div>
      </MediaQuery>
      <MediaQuery maxWidth={992}>
        <motion.div
          className="absolute bg-black rounded-full"
          ref={circleRef}
          animate={animation}
          initial={{
            scale: 1,
            x: "-50%",
            y: "-50%",
            top: "50%",
            left: "50%",
            height: "75vw",
            width: "75vw",
          }}
        >
          <AnimatePresence>
            {indexActive && (
              <motion.div
                initial={{ opacity: 1 }}
                animate={{
                  x: (mouseCoords.x - position.x) / 18,
                  y: (mouseCoords.y - position.y) / 18,
                }}
                exit={{ opacity: 0 }}
                className="w-full h-full  rounded-full bg-white"
              />
            )}
          </AnimatePresence>
        </motion.div>
      </MediaQuery>
    </>
  )
}
