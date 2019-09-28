import React, { useContext, useEffect } from "react"
import { motion, useAnimation, AnimatePresence } from "framer-motion"
import { AnimationContext } from "../store/animation"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

export function SquareIndex({ location }) {
  const { pageLocation, indexActive } = useContext(AnimationContext)
  const animation = useAnimation()
  useEffect(() => {
    if (location === "/") {
      animation.start({
        filter: "blur(0px)",
        backgroundColor: "#272727",
        borderRadius: "9999px",
        scale: 1,
        transition: {
          type: "spring",
          mass: 0.5,
          damping: 200,
          when: "afterChildren",
        },
      })
    } else if (location === "/about") {
      animation.start({
        filter: "blur(0px)",
        zIndex: 40,
        backgroundColor: "#272727",
        borderRadius: "0px",
        scale: 4,
        transition: {
          type: "spring",
          mass: 0.5,
          damping: 200,
          when: "beforeChildren",
        },
      })
    } else if (location === "/work") {
      animation.start({
        scale: 4,
        transition: {
          duration: 1,
          type: "spring",
          stiffness: 50,
          damping: 200,
          when: "beforeChildren",
        },
      })
    } else if (location === "/contact") {
      animation.start({
        scale: 4,
        transition: {
          duration: 1,
          type: "spring",
          stiffness: 50,
          damping: 200,
          when: "beforeChildren",
        },
      })
    }
  }, [pageLocation])

  return (
    <StaticQuery
      query={graphql`
        query {
          file(relativePath: { eq: "circle-bg.jpg" }) {
            childImageSharp {
              fluid(maxHeight: 600) {
                srcSet
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      `}
      render={data => (
        <motion.div
          className="absolute bg-gray-1000 z-50 rounded-full overflow-hidden"
          animate={animation}
          initial={{
            scale: 1,
            x: "-50%",
            y: "-50%",
            top: "50%",
            left: "50%",
            height: "30vw",
            width: "30vw",
          }}
        >
          <AnimatePresence>
            {indexActive && (
              <motion.div
                initial={{ opacity: 1 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="w-full h-full absolute"
              >
                <Img
                  className="bg-cover h-full w-full absolute"
                  fluid={data.file.childImageSharp.fluid}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    ></StaticQuery>
  )
}
