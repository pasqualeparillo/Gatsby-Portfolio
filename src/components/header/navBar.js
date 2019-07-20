import React, { useContext } from "react"
import { AnimationContext } from "../store/animation"
import { SmallContainer } from "../styled/container"
import { motion } from "framer-motion"

export default function NavBar() {
  return (
    <motion.div
      className="absolute right-0 top-0 z-50 lg:w-1/8 h-1/8 w-1/4 bg-black"
      initial={{ y: "-120px" }}
      animate={{ y: "0px" }}
      transition={{ delay: 1.2, ease: "easeIn", duration: 0.4 }}
    ></motion.div>
  )
}
