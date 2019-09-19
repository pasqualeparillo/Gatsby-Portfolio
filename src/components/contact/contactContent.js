import React, { useContext } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { AnimationContext } from "../store/animation"
export default function ContactContent() {
  const { contactActive } = useContext(AnimationContext)
  const variant = {
    enter: {
      opacity: 1,
      transition: {
        delay: 1,
      },
    },
    exit: {
      opacity: 0,
    },
  }
  return (
    <AnimatePresence>
      {contactActive && (
        <motion.div
          className="bg-gray-1000 w-full pt-16 pr-16 pl-16 relative"
          variants={variant}
          animate="enter"
          exit="exit"
          initial={{ opacity: 0 }}
        >
          <p className="text-white">Contact</p>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
