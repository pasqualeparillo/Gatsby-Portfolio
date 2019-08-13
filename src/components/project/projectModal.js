import React, { useContext } from 'react';
import { AnimationContext } from "../store/animation"
import { motion } from "framer-motion"
import MediaQuery from "react-responsive"

export default function ProjectModal() {
    const { isProjectOpen, setIsProjectOpen } = useContext(AnimationContext);
    const desktop = {
      closed: {
        scaleX: [2.021, 1],
        x: ['-50%', '0%'],
        zIndex: 40,
        transition: {
          type: "tween",
          delay: .4,
          duration: .2,
        },
      },
      open: {
        scaleX: [1, 2.021],
        x: ['0%', '-50%'],
          zIndex: 40,
          transition: {
            type: "tween",
            delay: 0,
            duration: .2,
        },
      },
      heightOpen: {
        scaleY: [1, 2.021],
        y: ['0%', '-50%'],
          zIndex: 40,
          transition: {
            delay: .4,
            duration: .2,
            type: "tween",
        },
      },
      heightClosed: {
        scaleY: [2.021, 1],
        y: ['-50%', '0%'],
          zIndex: 40,
          transition: {
            delay: 0,
            duration: .2,
            type: "tween",
        },
      },
  }

      const phone = {
        closed: {
          height: '100%', 
          width: '100%', 
          zIndex: 0,
          y:'0%', 
          transition: {
            type: "tween",
            when: "beforeChildren",
            delayChildren: 1,
          },
        },
        open: {
            height: '302%', 
            width: '201.5%', 
            zIndex: 40,
            y: '-66.5%', 
            transition: {
            type: "tween",
          },
        },
      }

    return (
        <>
        <MediaQuery minWidth={992}>
            <motion.div
            onClick={()=> setIsProjectOpen(!isProjectOpen)} 
            className="absolute flex flex-1 flex-grow transform h-full w-full" 
            animate={isProjectOpen ? ["open", "heightOpen"] : ["closed", "heightClosed"]}
            variants={desktop}
            initial={{scaleY: [0], scaleX: [0]}}
            >
                <motion.div
                    className="w-full h-full hover:bg-black bg-black z-40">

                </motion.div>
            </motion.div>
        </MediaQuery>
        <MediaQuery maxWidth={992}>
        <motion.div
            onClick={()=> setIsProjectOpen(!isProjectOpen)} 
            className="absolute flex flex-1 flex-grow h-full w-full transform" 
            animate={isProjectOpen ? "open" : "closed"}
            variants={phone}
            >
                <motion.div className="w-full h-full hover:bg-black bg-black z-40">

                </motion.div>
            </motion.div>
        </MediaQuery>
        </>
    )
}