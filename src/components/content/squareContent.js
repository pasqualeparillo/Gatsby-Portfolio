import React from "react"
import IndexContent from "../index/indexContent"
import AboutContent from "../about/aboutContent"
import ContactContent from "../contact/contactContent"
import WorkContent from "../work/WorkContent"

export default function SquareContent({ location }) {
  switch (location) {
    case "/":
      return <IndexContent />
    case "/about":
      return <AboutContent />
    case "/contact":
      return <ContactContent />
    case "/work":
      return <WorkContent />
    default:
      return <IndexContent />
  }
}
