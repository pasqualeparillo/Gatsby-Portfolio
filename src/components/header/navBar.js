import React, { useContext, useState } from "react"
import { AnimationContext } from "../store/animation"
import { SmallContainer } from "../styled/container"
import { motion } from "framer-motion"

export default function NavBar() {
  const [visible, setIsVisible] = useState(false)
  const list = {
    visible: {
      width: '5rem', height: '5rem',
      transition: {
        when: "beforeChildren",
      },
      
    },
    hidden: {
      width: '40%', height: '40%',
      transition: {
        when: "afterChildren",
      },
    },
  }
  
  const items = {
    visible: { x: 0 },
    hidden: { x: -10 },
  }

  return (
    <motion.div  animate={visible ? "hidden" : "visible"} onClick={()=> setIsVisible(!visible)} variants={list} className="absolute right-0 top-0 mr-4 mt-4 z-50 bg-white flex justify-center hover:shadow-lg">
      <div className="absolute right-0 p-4 flex flex-col flex-wrap h-20 w-20 justify-start overflow-hidden">
        <div className="flex flex-wrap flex-col justify-around h-full">
          <motion.span variants={items} className="w-full h-1 bg-black"/>
          <motion.span variants={items} className="w-full h-1 bg-black"/>
          <motion.span variants={items} className="w-full h-1 bg-black"/>
        </div>
      </div>
    </motion.div>
  )
}
