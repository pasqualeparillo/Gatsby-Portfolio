import React, { useContext } from 'react';
import MediaQuery from 'react-responsive';
import { AnimatePresence, motion } from 'framer-motion';
import { AnimationContext } from '../store/animation';
import { AboutImg } from './aboutImg';
export default function AboutContent() {
	const { aboutActive } = useContext(AnimationContext);
	const variant = {
		enter: {
			transition: {
				delay: 1
			}
		},
		exit: {}
	};
	return (
		<AnimatePresence>
			{aboutActive && (
				<div className="flex lg:flex-row flex-col  w-full lg:mt-0 mt-32">
					<div className="lg:h-screen lg:w-11vw w-full relative flex lg:justify-center items-center p-6">
						<MediaQuery minWidth={992}>
							<h1
								style={{ transform: 'rotate(90deg)' }}
								className="text-white text-12vw absolute uppercase  "
							>
								About
							</h1>
						</MediaQuery>
						<MediaQuery maxWidth={992}>
							<h1 className="text-white text-12vw  uppercase  ">About</h1>
						</MediaQuery>
					</div>
					<motion.div
						className="lg:w-3/4 w-full lg:mt-32 lg:p-12 p-6 relative border-t-2 lg:border-l-2 border-white flex-grow"
						variants={variant}
						animate="enter"
						exit="exit"
					>
						<div className="flex">
							<div className="flex flex-col">
								<p className="lg:text-12vw text-3xl uppercase text-white   leading-none">
									Hey there, I'm
								</p>
								<p className="lg:text-12vw text-3xl uppercase text-gray-400   leading-none">
									Pasquale Parillo.
								</p>
							</div>
						</div>
						<div className="flex w-full lg:pt-12 pt-6 flex-wrap">
							<div className="lg:w-1/3 w-full flex flex-col mr-6">
								<div className="text-white  ">
									I’m a creative developer (he/him/él) currently based in Denver, Colorado. I’m really
									into CSS, animation, developer experience, and deleting code.
								</div>
								<div className="lg:pt-12 pt-6 text-white  ">
									I love bending the rules of CSS, making generative art, and playing with WebGL. I
									have a lot of experience with style code at scale, JS-agnostic design systems, and
									static site generators. In my non-code time, I foster greyhounds, tweet too much,
									and ride bikes.
								</div>
								<div className="lg:pt-12 pt-6 text-white  ">
									I’ve recently taken an amazing opportunity with Faculty, Doing Good Work for the
									web. I’m not currently available for freelance work.
								</div>
							</div>
							<div className="flex flex-col w-1/3">
								<AboutImg />
							</div>
						</div>
					</motion.div>
				</div>
			)}
		</AnimatePresence>
	);
}
