import React, { useState } from "react"
import { motion } from "framer-motion"

export default function NavBar() {
  const [open, setIsOpen] = useState(false)
  const list = {
    closed: {
      marginRight: "16px",
      marginTop: "16px",
      width: "80px",
      height: "80px",
      transition: {
        type: "tween",
        when: "afterChildren",
        staggerChildren: 0.1,
      },
    },
    open: {
      marginRight: "16px",
      marginTop: "16px",
      width: "calc(100vw - 32px)",
      height: "calc(100vh - 32px)",
      transition: {
        type: "tween",
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  }

  const items = {
    open: { textColor: "black" },
    closed: { textColor: "white" },
  }
  const menuItems = {
    open: { opacity: 1 },
    closed: { opacity: 0 },
  }

  return (
    <motion.div
      animate={open ? "open" : "closed"}
      initial="closed"
      variants={list}
      className="absolute right-0 top-0 z-50 bg-black flex h-20 w-20 justify-center overflow-y-hidden overflow-x-hidden transform hover:shadow-lg "
      onClick={() => setIsOpen(!open)}
    >
      <div className="flex items-center self-center flex-col z-50 cursor-pointer">
        <motion.div
          className="w-full flex items-center content-center justify-center"
          initial="closed"
          variants={menuItems}
        >
          <p className="text-white uppercase text-5xl font-extrabold">Home</p>
        </motion.div>
        <motion.div
          className="w-full flex items-center content-center justify-center"
          initial="closed"
          variants={menuItems}
        >
          <p className="text-white uppercase text-5xl font-extrabold">About</p>
        </motion.div>
        <motion.div
          className="w-full flex items-center content-center justify-center"
          initial="closed"
          variants={menuItems}
        >
          <p className="text-white uppercase text-5xl font-extrabold">
            Projects
          </p>
        </motion.div>
        <motion.div
          className="w-full flex items-center content-center justify-center"
          initial="closed"
          variants={menuItems}
        >
          <p className="text-white uppercase text-5xl font-extrabold">
            Contact
          </p>
        </motion.div>
      </div>
      <div
        className="absolute right-0 p-4 flex flex-col flex-wrap h-20 w-20 justify-start overflow-hidden cursor-pointer border-4 border-white"
        onClick={() => setIsOpen(!open)}
      >
        {open ? (
          <div className="flex flex-wrap flex-col justify-around h-full w-full">
            <motion.span
              variants={items}
              className="w-full flex h-full flex-wrap self-center content-center"
            >
              <span className="text-white flex justify-center font-extrabold w-1/2 bg-blue-700">
                H
              </span>
              <span className="text-white flex justify-center font-extrabold w-1/2 bg-red-600">
                I
              </span>
              <span className="text-white flex justify-center font-extrabold w-1/2 ">
                D
              </span>
              <span className="text-white flex justify-center font-extrabold w-1/2 bg-yellow-400">
                E
              </span>
            </motion.span>
          </div>
        ) : (
          <div className="flex flex-wrap flex-col justify-around h-full w-full">
            <motion.span
              variants={items}
              className="w-full flex h-full flex-wrap self-center content-center"
            >
              <span className="text-blue-600 flex justify-center font-extrabold w-1/2 ">
                M
              </span>
              <span className="text-red-600 flex justify-center font-extrabold w-1/2">
                E
              </span>
              <span className="text-white flex justify-center font-extrabold w-1/2 ">
                N
              </span>
              <span className="text-yellow-400 flex justify-center font-extrabold w-1/2 ">
                U
              </span>
            </motion.span>
          </div>
        )}
      </div>
    </motion.div>
  )
}
