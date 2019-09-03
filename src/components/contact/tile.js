import React, { useContext, useEffect } from 'react';
import { Link } from 'gatsby';
import { AnimationContext } from '../store/animation';
import { motion, AnimatePresence } from 'framer-motion';
import { animationDuration } from '../store/animation';

export function CloseTile() {
	const { pageLocation, setPageLocation } = useContext(AnimationContext);
	useEffect(() => {
		setPageLocation('/projects');
	}, [pageLocation]);

	const animateHorizontal = {
		enter: {
			x: 0,
			opacity: 1,
			transition: {
				delay: animationDuration * 1.2,
				x: { stiffness: 1000 }
			}
		},
		exit: {
			x: 150,
			opacity: 0,
			transition: {
				x: { stiffness: 1000 }
			}
		}
	};

	const animateVertical = {
		enter: {
			y: 0,
			opacity: 1,
			transition: {
				delay: animationDuration * 1.4,
				y: { stiffness: 1000 }
			}
		},
		exit: {
			y: 150,
			opacity: 0,
			transition: {
				y: { stiffness: 1000 }
			}
		}
	};

	return (
		<Link className="h-full w-full" to="/">
			<div className="flex flex-col bg-black h-full w-full absolute cursor-pointer overflow-hidden">
				<AnimatePresence>
					{pageLocation === '/contact' && (
						<ParentContainer>
							<motion.div
								initial="exit"
								variants={animateHorizontal}
								className="w-4 h-full bg-white absolute"
								exit="exit"
							/>

							<motion.div
								initial="exit"
								variants={animateVertical}
								exit="exit"
								className="w-full h-4 bg-white absolute"
							/>
						</ParentContainer>
					)}
				</AnimatePresence>
			</div>
		</Link>
	);
}
function ParentContainer({ children }) {
	const parentVariant = {
		enter: {
			opacity: 1,
			transition: {
				duration: 0.2,
				when: 'beforeChildren',
				staggerChildren: 0.3
			}
		},
		exit: {
			opacity: 0,
			transition: {
				duration: 0.2,
				when: 'afterChildren',
				staggerChildren: 0.3
			}
		}
	};
	return (
		<motion.div
			className="flex w-full h-full flex-wrap relative justify-center items-center"
			initial="exit"
			variants={parentVariant}
			animate="enter"
			exit="exit"
		>
			{children}
		</motion.div>
	);
}
