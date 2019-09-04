import React from 'react';
import { motion } from 'framer-motion';
export default function LayoutTransition({ location }) {
	switch (location) {
		case '/':
			return <FourTransition />;
		case '/contact':
			return <TwoTransition />;
		default:
			return <FourTransition />;
	}
}

function FourTransition() {
	const square = {
		enter: {
			x: '100%',
			z: [0, 9999, 0],
			backgroundColor: 'black',
			transition: {
				duration: 0.5
			}
		},
		exit: {
			x: '-100%',
			z: 0,
			backgroundColor: 'transparent',
			transition: {
				duration: 0.5
			}
		}
	};
	return (
		<motion.div className="flex flex-1 flex-wrap w-full h-full absolute">
			<motion.div className="flex w-full flex-wrap overflow-hidden relative ">
				<div className="relative  lg:w-1/4 w-1/2 overflow-hidden">
					<motion.div
						initial={{ x: '-100%' }}
						className="w-full h-full overflow-hidden"
						variants={square}
						enter="enter"
						exit="exit"
					/>
				</div>
				<div className="relative  lg:w-1/4 w-1/2 overflow-hidden">
					<motion.div
						initial={{ x: '-100%' }}
						className="w-full h-full overflow-hidden"
						variants={square}
						enter="enter"
						exit="exit"
					/>
				</div>
				<div className="relative  lg:w-1/4 w-1/2 overflow-hidden">
					<motion.div
						initial={{ x: '-100%' }}
						className="w-full h-full overflow-hidden"
						variants={square}
						enter="enter"
						exit="exit"
					/>
				</div>
				<div className="relative  lg:w-1/4 w-1/2 overflow-hidden">
					<motion.div
						initial={{ x: '-100%' }}
						className="w-full h-full overflow-hidden"
						variants={square}
						enter="enter"
						exit="exit"
					/>
				</div>
			</motion.div>
			<motion.div className="flex w-full flex-wrap overflow-hidden relative ">
				<div className="relative  lg:w-1/4 w-1/2 overflow-hidden">
					<motion.div
						initial={{ x: '-100%' }}
						className="w-full h-full overflow-hidden"
						variants={square}
						enter="enter"
						exit="exit"
					/>
				</div>
				<div className="relative  lg:w-1/4 w-1/2 overflow-hidden">
					<motion.div
						initial={{ x: '-100%' }}
						className="w-full h-full overflow-hidden"
						variants={square}
						enter="enter"
						exit="exit"
					/>
				</div>
				<div className="relative  lg:w-1/4 w-1/2 overflow-hidden">
					<motion.div
						initial={{ x: '-100%' }}
						className="w-full h-full overflow-hidden"
						variants={square}
						enter="enter"
						exit="exit"
					/>
				</div>
				<div className="relative  lg:w-1/4 w-1/2 overflow-hidden">
					<motion.div
						initial={{ x: '-100%' }}
						className="w-full h-full overflow-hidden"
						variants={square}
						enter="enter"
						exit="exit"
					/>
				</div>
			</motion.div>
		</motion.div>
	);
}

function TwoTransition() {
	const square = {
		enter: {
			x: '100%',
			z: [0, 9999, 0],
			backgroundColor: 'black',
			transition: {
				duration: 0.5
			}
		},
		exit: {
			x: '-100%',
			z: 0,
			backgroundColor: 'black',
			transition: {
				duration: 0.5
			}
		}
	};
	return (
		<motion.div className="flex flex-1 flex-wrap w-full h-full absolute">
			<motion.div className="flex w-full flex-wrap overflow-hidden relative ">
				<div className="relative  w-full overflow-hidden">
					<motion.div
						initial={{ x: '-100%' }}
						className="w-full h-full overflow-hidden"
						variants={square}
						enter="enter"
						exit="exit"
					/>
				</div>
			</motion.div>
		</motion.div>
	);
}
