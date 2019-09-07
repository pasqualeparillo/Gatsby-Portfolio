import React from "react"
import Icon from "../../images/logo-3.svg"
import MediaQuery from "react-responsive"

export default function Logo() {
  return (
    <>
      <MediaQuery minWidth={992}>
        <div
          className="h-20 w-40 top-0 border-2 border-black flex flex-wrap absolute mt-12 z-50 bg-teal-100 shadow "
          style={{ left: "46%" }}
        >
          <div className="w-1/2 flex flex-wrap justify-center items-center">
            <img
              className="fill-current text-black w-1/2 self-center flex items-center"
              alt="#"
              src={Icon}
              style={{ transform: "translateY(5px)" }}
            />
          </div>
          <div className="w-1/2 flex flex-wrap border-l-2 border-black">
            <div className="w-1/2 flex relative items-end justify-end">
              <p className="font-black m-px font__work-sans ">P</p>
            </div>
            <div className="w-1/2 flex relative items-end justify-start">
              <p className="font-black m-px font__work-sans ">A</p>
            </div>
            <div className="w-1/2 flex relative items-start justify-end">
              <p className="font-black m-px font__work-sans ">T</p>
            </div>
            <div className="w-1/2 flex relative items-start justify-start">
              <p className="font-black m-px font__work-sans ">P</p>
            </div>
          </div>
        </div>
      </MediaQuery>
      <MediaQuery maxWidth={992}>
        <div className="h-20 w-40 top-0 left-0 border-2 border-black flex flex-wrap absolute z-50 bg-teal-100 shadow ">
          <div className="w-1/2 flex flex-wrap justify-center items-center">
            <img
              className="fill-current text-black w-1/2 self-center flex items-center"
              alt="#"
              src={Icon}
              style={{ transform: "translateY(5px)" }}
            />
          </div>
          <div className="w-1/2 flex flex-wrap border-l-2 border-black">
            <div className="w-1/2 flex relative items-end justify-end">
              <p className="font-black m-px font__work-sans ">P</p>
            </div>
            <div className="w-1/2 flex relative items-end justify-start">
              <p className="font-black m-px font__work-sans ">A</p>
            </div>
            <div className="w-1/2 flex relative items-start justify-end">
              <p className="font-black m-px font__work-sans ">T</p>
            </div>
            <div className="w-1/2 flex relative items-start justify-start">
              <p className="font-black m-px font__work-sans ">P</p>
            </div>
          </div>
        </div>
      </MediaQuery>
    </>
  )
}
