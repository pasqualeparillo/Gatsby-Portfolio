import React from "react"
import { motion } from "framer-motion"
export default function IndexPage() {
  return (
    <div className="lg:h-full lg:w-full flex flex-wrap h-3/4 w-3/4 justify-center items-center self-center mx-auto z-50 p-6">
      <div className="flex items-start justify-start w-full ">
        <motion.span
          animate={{ y: [50, 0], opacity: [0, 1] }}
          transition={{ duration: 0.4, delay: 2 }}
          className="work uppercase font-bold text-vw leading-tight tracking-tight text-white opacity-0"
        >
          Building
        </motion.span>
      </div>
      <div className="flex items-start justify-center w-full">
        <motion.span
          animate={{ y: [50, 0], opacity: 1 }}
          transition={{ duration: 0.4, delay: 2.2 }}
          className="work uppercase font-bold text-vw leading-tight tracking-tight text-white opacity-0"
        >
          INTERACTIVE
        </motion.span>
      </div>

      <div className="flex items-start justify-start w-full">
        <motion.span
          animate={{ y: [50, 0], opacity: 1 }}
          transition={{ duration: 0.4, delay: 2.4 }}
          className="work uppercase font-bold text-vw leading-tight tracking-tight text-white opacity-0"
        >
          Applications
        </motion.span>
      </div>
    </div>
  )
}
