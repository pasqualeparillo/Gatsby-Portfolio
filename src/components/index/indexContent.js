import React, { useContext } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { AnimationContext } from "../store/animation"
export default function IndexContent() {
  const { pageLocation } = useContext(AnimationContext)
  return (
    <>
      {pageLocation === "/index" && (
        <motion.div
          transition={{ delay: 2 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <p className="text-white">Index</p>
        </motion.div>
      )}
    </>
  )
}
