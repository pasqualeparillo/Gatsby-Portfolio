import React, { useContext } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { AnimationContext } from "../store/animation"
import { ProjectContainer } from "../styled/container"
import WorkArrow from "./workArrow"

export default function WorkContent() {
  const { pageLocation, workActive } = useContext(AnimationContext)
  const variant = {
    enter: {
      opacity: 1,
      transition: {
        delay: 1,
        when: "beforeChildren",
        staggerChildren: 0.2,
        duration: 0.5,
      },
    },
    exit: {
      opacity: 0,
      transition: {},
    },
  }

  const child = {
    enter: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        type: "tween",
      },
    },
  }
  return (
    <AnimatePresence>
      {pageLocation === "/work" && (
        <motion.div
          className="min-h-screen bg-gray-1000 w-full pt-16 pr-16 pl-16 relative"
          variants={variant}
          animate="enter"
          exit="exit"
          key={workActive}
          initial={{ opacity: 0, y: 50 }}
        >
          <div className="flex flex-col flex-wrap w-full ">
            <div className="flex flex-col w-8/12 pb-12">
              <h2 className="text-white   text-5xl font-semibold">
                Work
              </h2>
            </div>
          </div>
          <div className="pb-24 flex flex-col">
            <div className="flex flex-col flex-wrap w-full pb-24">
              <div className="flex flex-col flex-wrap w-full pb-24 w-8/12">
                {[0, 1, 2, 3, 4].map(id => (
                  <ProjectContainer className="text-white hover:text-gray-800 transform overflow-hidden">
                    <motion.div
                      className="flex w-full justify-between items-center"
                      variants={child}
                      key={id}
                      initial={{ opacity: 0, y: 50 }}
                    >
                      <p className="uppercase text-xl  ">
                        Project Title
                      </p>
                      <p className="uppercase text-xs  ">
                        Interactive Website - Project Description
                      </p>
                      <WorkArrow styles={"fill-current"} />
                    </motion.div>
                  </ProjectContainer>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
