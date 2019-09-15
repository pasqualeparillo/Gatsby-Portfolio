import React, { useContext } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { AnimationContext } from "../store/animation"
export default function ContactContent() {
  const { pageLocation } = useContext(AnimationContext)
  return (
    <>
      {pageLocation === "/contact" && (
        <motion.div
          transition={{ delay: 2 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <p className="text-white">Contact</p>
        </motion.div>
      )}
    </>
  )
}
