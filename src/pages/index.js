import React, { useContext, useEffect } from 'react';
import { Row, Square } from '../components/styled/container';
import MediaQuery from 'react-responsive';
import { Link } from 'gatsby';
import { AnimationContext } from '../components/store/animation';
import { motion, AnimatePresence } from 'framer-motion';
export default function IndexPage() {
	const { pageLocation, setPageLocation } = useContext(AnimationContext);
	useEffect(() => {
		setPageLocation('/');
	}, []);

	const parent = {
		enter: {
			opacity: 1,
			transition: {
				when: 'beforeChildren',
				staggerChildren: 0.1
			}
		},
		initial: {
			opacity: 0,
			transition: {
				when: 'afterChildren'
			}
		}
	};
	const parentTwo = {
		enter: {
			opacity: 1,
			transition: {
				when: 'beforeChildren',
				staggerChildren: 0.1,
				delay: 0.5
			}
		},
		initial: {
			opacity: 0,
			transition: {
				when: 'afterChildren'
			}
		}
	};
	const parentThree = {
		enter: {
			opacity: 1,
			transition: {
				when: 'beforeChildren',
				staggerChildren: 0.1,
				delay: 1
			}
		},
		initial: {
			opacity: 0,
			transition: {
				when: 'afterChildren'
			}
		}
	};
	const child = {
		enter: {
			y: 0,
			opacity: 1,
			transition: {
				duration: 0.4
			}
		},
		initial: {
			y: '50px',
			opacity: 0
		}
	};
	return (
		<>
			<div className="flex flex-wrap w-full h-full relative">
				<div className="lg:w-3/5 flex justify-center flex-wrap items-start lg:pl-56 pl-10 z-20">
					<motion.div
						className="w-full flex self-start justify-start items-start hover:text-gray-400 transform"
						animate="enter"
						initial="initial"
						variants={parent}
					>
						<motion.span
							variants={child}
							className=" font-bold lg:text-11vw text-7xl margin-0 cursor-pointer"
							style={{ lineHeight: '.85' }}
						>
							A
						</motion.span>
						<motion.span
							variants={child}
							className=" font-bold lg:text-11vw text-7xl margin-0 cursor-pointer"
							style={{ lineHeight: '.85' }}
						>
							b
						</motion.span>
						<motion.span
							variants={child}
							className=" font-bold lg:text-11vw text-7xl margin-0 cursor-pointer"
							style={{ lineHeight: '.85' }}
						>
							o
						</motion.span>
						<motion.span
							variants={child}
							className=" font-bold lg:text-11vw text-7xl margin-0 cursor-pointer"
							style={{ lineHeight: '.85' }}
						>
							u
						</motion.span>
						<motion.span
							variants={child}
							className=" font-bold lg:text-11vw text-7xl margin-0 cursor-pointer"
							style={{ lineHeight: '.85' }}
						>
							t
						</motion.span>
					</motion.div>
					<motion.div
						className="w-full flex self-start justify-start items-start  hover:text-gray-400 transform"
						animate="enter"
						initial="initial"
						variants={parentTwo}
					>
						<motion.span
							variants={child}
							className=" font-bold lg:text-11vw text-7xl margin-0 cursor-pointer"
							style={{ lineHeight: '.85' }}
						>
							P
						</motion.span>
						<motion.span
							variants={child}
							className=" font-bold lg:text-11vw text-7xl margin-0 cursor-pointer"
							style={{ lineHeight: '.85' }}
						>
							r
						</motion.span>
						<motion.span
							variants={child}
							className=" font-bold lg:text-11vw text-7xl margin-0 cursor-pointer"
							style={{ lineHeight: '.85' }}
						>
							o
						</motion.span>
						<motion.span
							variants={child}
							className=" font-bold lg:text-11vw text-7xl margin-0 cursor-pointer"
							style={{ lineHeight: '.85' }}
						>
							j
						</motion.span>
						<motion.span
							variants={child}
							className=" font-bold lg:text-11vw text-7xl margin-0 cursor-pointer"
							style={{ lineHeight: '.85' }}
						>
							e
						</motion.span>
						<motion.span
							variants={child}
							className=" font-bold lg:text-11vw text-7xl margin-0 cursor-pointer"
							style={{ lineHeight: '.85' }}
						>
							c
						</motion.span>
						<motion.span
							variants={child}
							className=" font-bold lg:text-11vw text-7xl margin-0 cursor-pointer"
							style={{ lineHeight: '.85' }}
						>
							t
						</motion.span>
						<motion.span
							variants={child}
							className=" font-bold lg:text-11vw text-7xl margin-0 cursor-pointer"
							style={{ lineHeight: '.85' }}
						>
							s
						</motion.span>
					</motion.div>
					<motion.div
						className="w-full flex self-start justify-start items-start  hover:text-gray-400 transform"
						animate="enter"
						initial="initial"
						variants={parentThree}
					>
						<motion.span
							variants={child}
							className=" font-bold lg:text-11vw text-7xl margin-0 cursor-pointer"
							style={{ lineHeight: '.85' }}
						>
							C
						</motion.span>
						<motion.span
							variants={child}
							className=" font-bold lg:text-11vw text-7xl margin-0 cursor-pointer"
							style={{ lineHeight: '.85' }}
						>
							o
						</motion.span>
						<motion.span
							variants={child}
							className=" font-bold lg:text-11vw text-7xl margin-0 cursor-pointer"
							style={{ lineHeight: '.85' }}
						>
							n
						</motion.span>
						<motion.span
							variants={child}
							className=" font-bold lg:text-11vw text-7xl margin-0 cursor-pointer"
							style={{ lineHeight: '.85' }}
						>
							t
						</motion.span>
						<motion.span
							variants={child}
							className=" font-bold lg:text-11vw text-7xl margin-0 cursor-pointer"
							style={{ lineHeight: '.85' }}
						>
							a
						</motion.span>
						<motion.span
							variants={child}
							className=" font-bold lg:text-11vw text-7xl margin-0 cursor-pointer"
							style={{ lineHeight: '.85' }}
						>
							c
						</motion.span>
						<motion.span
							variants={child}
							className=" font-bold lg:text-11vw text-7xl margin-0 cursor-pointer"
							style={{ lineHeight: '.85' }}
						>
							t
						</motion.span>
					</motion.div>
				</div>
			</div>
			<div className="w-1/2 absolute h-screen right-0 z-10">
				<div className="h-full flex justify-center bg-red-100"></div>
			</div>
		</>
	);
}
