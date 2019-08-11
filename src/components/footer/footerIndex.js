import React, { useState, useContext } from "react"
import { AnimationContext } from "../store/animation"
import { motion } from "framer-motion"
import MediaQuery from "react-responsive"

export default function FooterIndex() {
  const [open, setIsOpen] = useState(false)
  const { isContactOpen, setIsContactOpen } = useContext(AnimationContext)
  const list = {
    closed: {
      width: "100%",
      transition: {
        type: "tween",
      },
    },
    open: {
      width: "200%",
      transition: {
        type: "tween",
      },
    },
  }
  return (
    <motion.div
      className="flex justify-between absolute h-full justify-end z-40"
      animate={open ? "open" : "closed"}
      transition={{ delay: 1.2, ease: "easeIn", duration: 0.4 }}
      variants={list}
      bgblack="true"
      positionstart="true"
      initial="closed"
      onClick={() => setIsOpen(!open)}
    >
      <motion.div className="flex h-full w-full flex items-center justify-center cursor-pointer">
        {console.log(isContactOpen)}
        <MediaQuery minWidth={992}>
          <div className="flex flex-col h-full w-full content-end items-end justify-end absolute cursor-pointer">
            <div
              className="flex items-center justify-center tracking-tighter  w-full p-4 relative hover:bg-black hover:text-white transform"
              style={{ height: "100%" }}
            >
              <motion.p
                className="uppercase font-extrabold "
                style={{ fontSize: "calc(25vw)" }}
                className="font-extrabold uppercase whitespace-no-wrap"
                style={{ fontSize: "calc(25vw / 6)" }}
              >
                Contact
              </motion.p>
            </div>
          </div>
        </MediaQuery>

        <MediaQuery maxWidth={992}>
          <div className="flex flex-col h-full w-full content-end items-end justify-end absolute cursor-pointer">
            <div
              className="flex items-center justify-center tracking-tighter w-full p-4 bg-black text-white relative hover:bg-white hover:text-black transform"
              style={{ height: "100%" }}
            >
              <motion.p
                className="uppercase font-extrabold "
                style={{ fontSize: "calc(25vw)" }}
              >
                C
              </motion.p>
            </div>
          </div>
        </MediaQuery>
      </motion.div>
    </motion.div>
  )
}
