import React, { useContext } from 'react';
import { AnimationContext } from "../store/animation"
import { motion } from "framer-motion"
import MediaQuery from "react-responsive"

export default function ContactModal() {
    const { isContactOpen, setIsContactOpen } = useContext(AnimationContext);
    const desktop = {
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
            height: '200%', 
            width: '201%', 
            zIndex: 40,
            y: '-50%', 
            transition: {
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
      const contactOpen = {
        open: { backgroundColor: '#000' },
        closed: { backgroundColor: '#fff'  },
      }
    return (
        <>
        <MediaQuery minWidth={992}>
            <motion.div
            onClick={()=> setIsContactOpen(!isContactOpen)} 
            className="absolute flex flex-1 flex-grow h-full w-full transform" 
            animate={isContactOpen ? "open" : "closed"}
            variants={desktop}
            >
                <motion.div
                    className="w-full h-full hover:bg-black z-40"
                    variants={contactOpen}>

                </motion.div>
            </motion.div>
        </MediaQuery>
        <MediaQuery maxWidth={992}>
        <motion.div
            onClick={()=> setIsContactOpen(!isContactOpen)} 
            className="absolute flex flex-1 flex-grow h-full w-full transform" 
            animate={isContactOpen ? "open" : "closed"}
            variants={phone}
            >
                <motion.div
                    className="w-full h-full hover:bg-black z-40"
                    variants={contactOpen}>

                </motion.div>
            </motion.div>
        </MediaQuery>
        </>
    )
}