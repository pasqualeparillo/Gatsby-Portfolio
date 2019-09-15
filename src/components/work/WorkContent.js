import React, { useContext } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { AnimationContext } from "../store/animation"
export default function WorkContent() {
  const { pageLocation } = useContext(AnimationContext)
  return (
    <>
      {pageLocation === "/work" && (
        <motion.div
          transition={{ delay: 2 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <p className="text-white">Work</p>
        </motion.div>
      )}
    </>
  )
}
