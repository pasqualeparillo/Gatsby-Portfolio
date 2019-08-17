import React from "react"
import { Square, Row } from "../styled/container"
import { motion } from "framer-motion"
export function ProjectActive() {
  const desktop = {
    open: {
      transition: { staggerChildren: 0.07 },
    },
    closed: {
      transition: { staggerChildren: 0.05, staggerDirection: -1 },
    },
  }
  const item = {
    open: {
      y: 0,
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: -100 },
      },
    },
    closed: {
      y: 50,
      opacity: 0,
      transition: {
        y: { stiffness: 1000 },
      },
    },
  }

  return (
    <div className="flex flex-1 flex-wrap w-full h-full bg-black relative">
      <Row className="flex-wrap flex" variants={desktop}>
        {[0, 1, 2].map(index => (
          <Square className="flex-grow bg-black" whalf="true" key={index}>
            <motion.p className="text-white" variants={item}>
              text
            </motion.p>
          </Square>
        ))}
      </Row>
    </div>
  )
}
