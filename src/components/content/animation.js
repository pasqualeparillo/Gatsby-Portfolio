export default function Animation(location) {
  switch (location) {
    case "/":
      return (square = {
        size: {
          x: "-50%",
          y: "-50%",
          transition: {
            duration: 0.4,
            type: "tween",
            ease: [0.43, 0.13, 0.23, 0.96],
          },
        },
        pulse: {
          y: ["-50%", "-55%", "-50%"],
          transition: {
            loop: Infinity,
            delay: 1,
            duration: 4,
          },
        },
        exit: {
          x: "-50%",
          y: "-50%",
          transition: {
            duration: 0.4,
            type: "tween",
            ease: [0.43, 0.13, 0.23, 0.96],
            when: "afterChildren",
          },
        },
      })
    case "/about":
      return (square = {
        size: {
          width: "78vw",
          transition: {
            duration: 0.4,
            delay: 0.5,
            type: "tween",
            ease: [0.43, 0.13, 0.23, 0.96],
          },
        },
        pulse: {
          top: "100%",
          bottom: 0,
          y: "-100%",
          transition: {
            duration: 0.4,
            delay: 1.2,
            type: "tween",
            ease: [0.43, 0.13, 0.23, 0.96],
          },
        },
        exit: {
          x: "-50%",
          y: "-50%",
          left: "50%",
          top: "50%",
          width: "30vw",
          transition: {
            duration: 0.4,
            type: "tween",
            ease: [0.43, 0.13, 0.23, 0.96],
            when: "afterChildren",
          },
        },
        enter: {
          opacity: 1,
          transition: {
            duration: 0.4,
            type: "tween",
            ease: [0.43, 0.13, 0.23, 0.96],
          },
        },
      })
    case "/contact":
      return (square = {
        size: {
          width: "78vw",
          left: "calc(100% - 39vw)",
          transition: {
            duration: 0.4,
            delay: 0.5,
            type: "tween",
            ease: [0.43, 0.13, 0.23, 0.96],
          },
        },
        pulse: {
          top: "100%",
          height: "100vh",
          bottom: 0,
          right: 0,
          y: "-100%",
          transition: {
            duration: 0.4,
            delay: 1.2,
            type: "tween",
            ease: [0.43, 0.13, 0.23, 0.96],
          },
        },
        exit: {
          left: "50%",
          x: "-50%",
          y: "-50%",
          top: "50%",
          height: "30vw",
          width: "30vw",
          transition: {
            duration: 0.4,
            type: "tween",
            ease: [0.43, 0.13, 0.23, 0.96],
            when: "afterChildren",
          },
        },
        enter: {
          opacity: 1,
          transition: {
            duration: 0.4,
            type: "tween",
            ease: [0.43, 0.13, 0.23, 0.96],
          },
        },
      })
    case "/work":
      return (square = {
        size: {
          width: "78vw",
          left: "calc(100% - 39vw)",
          transition: {
            duration: 0.4,
            delay: 0.5,
            type: "tween",
            ease: [0.43, 0.13, 0.23, 0.96],
          },
        },
        pulse: {
          top: "100%",
          height: "100vh",
          bottom: 0,
          right: 0,
          y: "-100%",
          transition: {
            duration: 0.4,
            delay: 1.2,
            type: "tween",
            ease: [0.43, 0.13, 0.23, 0.96],
          },
        },
        exit: {
          left: "50%",
          x: "-50%",
          y: "-50%",
          top: "50%",
          height: "30vw",
          width: "30vw",
          transition: {
            duration: 0.4,
            type: "tween",
            ease: [0.43, 0.13, 0.23, 0.96],
            when: "afterChildren",
          },
        },
        enter: {
          opacity: 1,
          transition: {
            duration: 0.4,
            type: "tween",
            ease: [0.43, 0.13, 0.23, 0.96],
          },
        },
      })
    default:
      return
  }
}
animation()
