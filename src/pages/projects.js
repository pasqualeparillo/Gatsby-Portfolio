import React, { useContext } from "react"
import { Row, Square } from "../components/styled/container"
import MediaQuery from "react-responsive"
import ContactTile from "../components/contact/contactTile"
import ContactModal from "../components/contact/contactModal"
import ProjectModal from "../components/project/projectModal"
import ProjectTile from "../components/project/projectTile"
import { Link } from "gatsby"
import { motion, AnimatePresence } from "framer-motion"
import { AnimationContext } from "../components/store/animation"

export default function IndexPage(props) {
  const { pageLocation, setPageLocation } = useContext(AnimationContext)

  const item = {
    open: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
        delay: 1,
      },
    },
    exit: {
      y: -600,
      opacity: 0,
      transition: {
        duration: 1,
      },
    },
  }

  return (
    <motion.div className="flex flex-1 flex-wrap w-full h-full bg-white relative">
      <Row>
        <Square wfourth="true" className="overflow-hidden">
          <AnimatePresence>
            <motion.div
              key={pageLocation}
              variants={item}
              initial={{ y: 300, opacity: 0 }}
              animate="open"
              exit="exit"
              transition={{ duration: 1 }}
              className="flex flex-col h-full w-full content-end items-end justify-end absolute overflow-hidden"
            >
              <div className="flex items-center justify-center tracking-tighter lg:border-t-4 border-t-2 border-black w-full p-4 relative">
                <MediaQuery minWidth={992}>
                  <Link to="/" onClick={() => setPageLocation("/")}>
                    <p
                      className="font-extrabold uppercase whitespace-no-wrap"
                      style={{ fontSize: "calc(25vw / 10)" }}
                    >
                      Pat Parillo
                    </p>
                  </Link>
                </MediaQuery>
                <MediaQuery maxWidth={992}>
                  <p
                    className="font-extrabold uppercase whitespace-no-wrap"
                    style={{ fontSize: "calc(25vw / 5)" }}
                  >
                    Pasquale Parillo
                  </p>
                </MediaQuery>
              </div>
            </motion.div>
          </AnimatePresence>
        </Square>
        <Square wfourth="true" />
        <Square wfourth="true">
          <MediaQuery minWidth={992}>
            <div className="flex flex-col h-full w-full content-end items-end justify-end absolute cursor-pointer bg-black">
              <div
                className="flex items-center justify-center tracking-tighter w-full p-4 relative bg-white text-black hover:bg-black hover:text-white transform "
                style={{ height: "100%" }}
              >
                <p
                  className="font-extrabold uppercase whitespace-no-wrap"
                  style={{ fontSize: "calc(25vw / 6)" }}
                >
                  About
                </p>
              </div>
            </div>
          </MediaQuery>
          <MediaQuery maxWidth={992}>
            <div className="flex flex-col h-full w-full content-end items-end justify-end absolute cursor-pointer">
              <div
                className="flex items-center justify-center tracking-tighter w-full p-4 relative bg-white text-black hover:bg-black hover:text-white transform"
                style={{ height: "100%" }}
              >
                <p
                  className="font-extrabold uppercase whitespace-no-wrap "
                  style={{ fontSize: "calc(25vw)" }}
                >
                  A
                </p>
              </div>
            </div>
          </MediaQuery>
        </Square>
        <Square wfourth="true" />
      </Row>
      <Row>
        <Square wfourth="true" />
        <Square wfourth="true">
          <ProjectModal />
          <ProjectTile />
        </Square>
        <Square wfourth="true">
          <ContactTile />
          <ContactModal />
        </Square>
        <Square
          wfourth="true"
          className="lg:border-none border wfourth='true' "
        >
          <Row className="h-full w-full flex flex-1 z-0">
            <Square wfourth="true" rb="true" className="bg-yellow-400" />
            <Square
              wfourth="true"
              lb="true"
              bb="true"
              className="lg:bg-white bg-blue-700"
            />
            <Square
              wfourth="true"
              tr="true"
              br="true"
              className="lg:bg-white bg-red-600"
            />
            <Square wfourth="true" tl="true" className="lg:bg-white bg-white" />
            <MediaQuery minWidth={992}>
              <Square wfourth="true" className="lg:inline-block" />
              <Square wfourth="true" className="lg:inline-block" />
              <Square wfourth="true" className="lg:inline-block" />
              <Square wfourth="true" className="lg:inline-block bg-black" />
              <Square wfourth="true" className="lg:inline-block" />
              <Square wfourth="true" className="lg:inline-block bg-blue-700" />
              <Square wfourth="true" className="lg:inline-block" />
              <Square wfourth="true" className="lg:inline-block" />
              <Square wfourth="true" className="lg:inline-block bg-red-600" />
              <Square wfourth="true" className="lg:inline-block" />
              <Square wfourth="true" className="lg:inline-block" />
              <Square wfourth="true" className="lg:inline-block" />
            </MediaQuery>
          </Row>
        </Square>
      </Row>
    </motion.div>
  )
}
