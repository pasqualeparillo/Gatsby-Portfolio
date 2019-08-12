import React from "react"
import { Row, Square } from "../components/styled/container"
import MediaQuery from "react-responsive"
import FooterIndex from "../components/footer/footerIndex"

export default function IndexPage() {
  return (
    <div className="flex flex-1 flex-wrap w-full h-full bg-white relative">
      <Row>
        <Square>
          <div className="flex flex-col h-full w-full content-end items-end justify-end absolute ">
            <div className="flex items-center justify-center tracking-tighter lg:border-t-4 border-t-2 border-black w-full p-4 relative">
              <MediaQuery minWidth={992}>
                <p
                  className="font-extrabold uppercase whitespace-no-wrap"
                  style={{ fontSize: "calc(25vw / 10)" }}
                >
                  Pasquale Parillo
                </p>
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
          </div>
        </Square>
        <Square />
        <Square>
          <MediaQuery minWidth={992}>
            <div className="flex flex-col h-full w-full content-end items-end justify-end absolute cursor-pointer">
              <div
                className="flex items-center justify-center tracking-tighter w-full p-4 relative bg-white text-black hover:bg-black hover:text-white transform"
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
        <Square />
      </Row>
      <Row>
        <Square />
        <Square>
          <MediaQuery minWidth={992}>
            <div className="flex flex-col h-full w-full content-end items-end justify-end absolute cursor-pointer">
              <div
                className="flex items-center justify-center tracking-tighter  w-full p-4 relative hover:bg-black hover:text-white transform"
                style={{ height: "100%" }}
              >
                <p
                  className="font-extrabold uppercase whitespace-no-wrap"
                  style={{ fontSize: "calc(25vw / 6)" }}
                >
                  Projects
                </p>
              </div>
            </div>
          </MediaQuery>
          <MediaQuery maxWidth={992}>
            <div className="flex flex-col h-full w-full content-end items-end justify-end absolute cursor-pointer">
              <div
                className="flex items-center justify-center tracking-tighter w-full p-4 bg-black text-white relative hover:bg-white hover:text-black transform"
                style={{ height: "100%" }}
              >
                <p
                  className="font-extrabold uppercase whitespace-no-wrap "
                  style={{ fontSize: "calc(25vw)" }}
                >
                  P
                </p>
              </div>
            </div>
          </MediaQuery>
        </Square>
        <Square>
          <FooterIndex />
        </Square>
        <Square className="lg:border-none border">
          <Row className="h-full w-full flex flex-1">
            <Square rb="true" className="bg-yellow-400" />
            <Square lb="true" bb="true" className="lg:bg-white bg-blue-700" />
            <Square tr="true" br="true" className="lg:bg-white bg-red-600" />
            <Square tl="true" className="lg:bg-white bg-white" />
            <MediaQuery minWidth={992}>
              <Square className="lg:inline-block" />
              <Square className="lg:inline-block" />
              <Square className="lg:inline-block" />
              <Square className="lg:inline-block bg-black" />
              <Square className="lg:inline-block" />
              <Square className="lg:inline-block bg-blue-700" />
              <Square className="lg:inline-block" />
              <Square className="lg:inline-block" />
              <Square className="lg:inline-block bg-red-600" />
              <Square className="lg:inline-block" />
              <Square className="lg:inline-block" />
              <Square className="lg:inline-block" />
            </MediaQuery>
          </Row>
        </Square>
      </Row>
    </div>
  )
}
