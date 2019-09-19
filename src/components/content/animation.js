function animation() {
    switch (location) {
        case '/':
            return (variant = {
                enter: {
                    x: '-50%',
                    y: '-50%',
                    top: '50%',
                    left: '50%',
                    height: '30vw',
                    width: '30vw',
                    transition: {
                        duration: 0.4,
                        type: 'tween',
                        ease: [0.43, 0.13, 0.23, 0.96],
                        when: 'afterChildren'
                    }
                },
                exit: {
                    x: '-50%',
                    y: '-50%',
                    transition: {
                        duration: 0.4,
                        type: 'tween',
                        ease: [0.43, 0.13, 0.23, 0.96],
                        when: 'beforeChildren'
                    }
                }
            });
        case '/about':
            return (variant = {
                enter: {
                    width: '78vw',
                    top: '100%',
                    bottom: 0,
                    y: '-100%',
                    transition: {
                        duration: 0.4,
                        delay: 0.5,
                        type: 'tween',
                        ease: [0.43, 0.13, 0.23, 0.96],
                        when: 'afterChildren'
                    }
                },

                exit: {
                    x: '-50%',
                    y: '-50%',
                    left: '50%',
                    top: '50%',
                    width: '30vw',
                    transition: {
                        duration: 0.4,
                        delay: 1,
                        type: 'tween',
                        ease: [0.43, 0.13, 0.23, 0.96],
                        when: 'beforeChildren'
                    }
                }
            });
        case '/contact':
            return (variant = {
                enter: {
                    width: '78vw',
                    height: '100vh',

                    transition: {
                        duration: 0.4,
                        delay: 0.5,
                        type: 'tween',
                        ease: [0.43, 0.13, 0.23, 0.96],
                        when: 'afterChildren'
                    }
                },

                exit: {
                    left: '50%',
                    x: '-50%',
                    y: '-50%',
                    top: '50%',
                    height: '30vw',
                    width: '30vw',
                    transition: {
                        duration: 0.4,
                        type: 'tween',
                        ease: [0.43, 0.13, 0.23, 0.96],
                        when: 'beforeChildren'
                    }
                }
            });
        case '/work':
            return (variant = {
                enter: {
                    width: '78vw',
                    left: 'calc(100% - 39vw)',
                    top: '100%',
                    height: '100vh',
                    bottom: 0,
                    right: 0,
                    y: '-100%',
                    transition: {
                        duration: 0.4,
                        delay: 0.5,
                        type: 'tween',
                        ease: [0.43, 0.13, 0.23, 0.96],
                        when: 'afterChildren'
                    }
                },
                exit: {
                    left: '50%',
                    x: '-50%',
                    y: '-50%',
                    top: '50%',
                    height: '30vw',
                    width: '30vw',
                    transition: {
                        duration: 0.4,
                        type: 'tween',
                        ease: [0.43, 0.13, 0.23, 0.96],
                        when: 'beforeChildren'
                    }
                }
            });
        default:
            return (variant = {
                enter: {
                    x: '-50%',
                    y: '-50%',
                    top: '50%',
                    left: '50%',
                    height: '30vw',
                    width: '30vw',
                    transition: {
                        duration: 0.4,
                        type: 'tween',
                        ease: [0.43, 0.13, 0.23, 0.96],
                        when: 'afterChildren'
                    }
                },
                exit: {
                    x: '-50%',
                    y: '-50%',
                    transition: {
                        duration: 0.4,
                        type: 'tween',
                        ease: [0.43, 0.13, 0.23, 0.96],
                        when: 'beforeChildren'
                    }
                }
            });
    }
}
animation();