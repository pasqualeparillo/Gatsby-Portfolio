import React from "react"
import MediaQuery from "react-responsive"
import { motion } from "framer-motion"

export default function Logo() {
  return (
    <motion.div
      className="z-1000 fixed w-full "
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <MediaQuery minWidth={992}>
        <div
          className="h-40 w-32 top-0 border-4 border-white absolute mt-4 z-40 bg-black p-2"
          style={{ left: "1rem" }}
        >
          <div className="relative h-full w-full flex flex-wrap">
            <div className="w-full flex" style={{ height: "60%" }}>
              <img
                className="fill-current text-white bg-cover "
                alt="logo"
                src="https://images.unsplash.com/photo-1533134486753-c833f0ed4866?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
              />
            </div>
            <div className="w-full" style={{ height: "40%" }}>
              <p className="text-white font-semibold">Pasquale Parillo</p>
            </div>
          </div>
        </div>
      </MediaQuery>
      <MediaQuery maxWidth={992}>
        <div
          className="h-24 w-20 top-0 border-4 border-white absolute mt-4 z-40 bg-black p-2"
          style={{ right: "1rem" }}
        >
          <div className="relative h-full w-full flex flex-wrap">
            <div className="w-full flex" style={{ height: "60%" }}>
              <img
                className="fill-current text-white bg-cover"
                alt="logo"
                src="https://images.unsplash.com/photo-1533134486753-c833f0ed4866?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
              />
            </div>
            <div className="w-full" style={{ height: "40%" }}>
              <p className="text-white font-semibold text-xs">Pat Parillo</p>
            </div>
          </div>
        </div>
      </MediaQuery>
    </motion.div>
  )
}
