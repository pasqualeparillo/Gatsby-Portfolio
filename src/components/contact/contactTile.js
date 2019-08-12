import React, { useContext } from "react"
import { AnimationContext } from "../store/animation"
import { motion } from "framer-motion"
import MediaQuery from "react-responsive"

export default function ContactTile() {
  const { isContactOpen, setIsContactOpen } = useContext(AnimationContext)

  const contactOpen = {
    open: { backgroundColor: '#000', zIndex: 45, borderWidth: '2rem', borderColor: '#f6e05e' },
    closed: { backgroundColor: '#fff', zIndex: 45, borderWidth: '0rem', borderColor: '#000' },
  }
  return (
    <motion.div
      className="flex justify-between absolute h-full justify-end w-full"
      animate={isContactOpen ? "open" : "closed"}
      transition={{ duration: .2, type: "tween" }}
      variants={contactOpen}
      onClick={() => setIsContactOpen(!isContactOpen)}
    >
      <motion.div className="flex h-full w-full flex items-center justify-center cursor-pointer">
        <MediaQuery minWidth={992}>
          <div className="flex flex-col h-full w-full content-end items-end justify-end absolute cursor-pointer">
            <div
              className="flex items-center justify-center tracking-tighter  w-full p-4 relative hover:bg-black hover:text-white transform"
              style={{ height: "100%" }}
            >
              <motion.p
                className={"font-extrabold uppercase whitespace-no-wrap" + `${isContactOpen ? ' text-white' : 'text-black'}`}
                style={{ fontSize: "calc(25vw / 6)" } }
              >
                Contact
              </motion.p>
            </div>
          </div>
        </MediaQuery>

        <MediaQuery maxWidth={992}>
          <div className="flex flex-col h-full w-full content-end items-end justify-end absolute cursor-pointer">
            <div
              className="flex items-center justify-center tracking-tighter w-full p-4 bg-black text-white relative hover:bg-white hover:text-black transform"
              style={{ height: "100%" }}
            >
              <motion.p
                className="uppercase font-extrabold "
                style={{ fontSize: "calc(25vw)" }}
              >
                C
              </motion.p>
            </div>
          </div>
        </MediaQuery>
      </motion.div>
    </motion.div>
  )
}
