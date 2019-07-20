import React from "react"
import { SmallContainer } from "../styled/container"
import { motion, useCycle } from "framer-motion"
export default function NavBar() {
  const [isClicked, setIsClicked] = useCycle(false, true)
  const variants = {
    open: {
      transition: {
        when: "beforeChildren",
        delayChildren: 0.1,
        type: "tween",
        duration: 0.4,
      },
      width: "50vw",
      height: "50vh",
    },
    closed: {
      transition: {
        when: "afterChildren",
        type: "tween",
        duration: 0.4,
      },
      height: "12.5%",
      width: "12.5%",
    },
  }

  return (
    <SmallContainer
      className="z-50 absolute right-0 top-0 lg:w-1/8 w-1/4"
      bgblack="true"
      positionend="true"
      onClick={() => setIsClicked(!isClicked)}
      variants={variants}
      animate={isClicked ? "open" : "closed"}
    >
      <div className="absolute w-12 h-12 flex flex-wrap right-0 top-0 mt-8 mr-20">
        <motion.span
          className="w-full h-1 bg-white "
          variants={{
            open: {
              y: ".8rem",
              rotate: 90,
            },
            closed: {
              y: 0,
              rotate: 0,
            },
          }}
        />
        <motion.span
          className="w-full h-1 bg-white "
          variants={{
            closed: { opacity: 1 },
            open: { opacity: 0 },
          }}
          transition={{ duration: 0.1 }}
        />
        <motion.span
          className="w-full h-1 bg-white "
          variants={{
            closed: { y: 0 },
            open: { y: "-1.3rem" },
          }}
          type="tween"
        />
      </div>
    </SmallContainer>
  )
}
