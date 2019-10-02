import React, { useContext, useEffect, useState, useRef, useLayoutEffect } from 'react';
import MediaQuery from 'react-responsive';
import { motion, useAnimation, AnimatePresence } from 'framer-motion';
import { AnimationContext } from '../store/animation';

export function SquareIndex({ location }) {
	const { pageLocation, indexActive, mouseCoords } = useContext(AnimationContext);
	const animation = useAnimation();
	const [position, setPosition] = useState(0);
	const circleRef = useRef();
	useLayoutEffect(() => {
		setPosition(circleRef.current.getBoundingClientRect());
	}, [circleRef.current]);
	useEffect(() => {
		if (location === '/') {
			animation.start({
				zIndex: 40,
				filter: 'blur(0px)',
				backgroundColor: '#272727',
				borderRadius: '9999px',
				scale: 1,
				transition: {
					type: 'spring',
					mass: 0.5,
					damping: 200,
					when: 'afterChildren'
				}
			});
		} else if (location === '/about') {
			animation.start({
				zIndex: 40,
				filter: 'blur(0px)',
				backgroundColor: '#272727',
				borderRadius: '0px',
				scale: 4,
				transition: {
					type: 'spring',
					mass: 0.5,
					damping: 200,
					when: 'beforeChildren'
				}
			});
		} else if (location === '/work') {
			animation.start({
				scale: 4,
				transition: {
					duration: 1,
					type: 'spring',
					stiffness: 50,
					damping: 200,
					when: 'beforeChildren'
				}
			});
		} else if (location === '/contact') {
			animation.start({
				scale: 4,
				transition: {
					duration: 1,
					type: 'spring',
					stiffness: 50,
					damping: 200,
					when: 'beforeChildren'
				}
			});
		}
	}, [pageLocation]);

	return (
		<>
			<MediaQuery minWidth={992}>
				<motion.div
					ref={circleRef}
					className="absolute bg-black rounded-full"
					animate={animation}
					initial={{
						scale: 1,
						x: '-50%',
						y: '-50%',
						top: '50%',
						left: '50%',
						height: '30vw',
						width: '30vw'
					}}
				>
					<AnimatePresence>
						{indexActive && (
							<motion.div
								initial={{ opacity: 1 }}
								animate={{
									x: (mouseCoords.x - position.x) / 18,
									y: (mouseCoords.y - position.y) / 18
								}}
								exit={{ opacity: 0 }}
								className="w-full h-full absolute bg-white rounded-full"
							/>
						)}
						{console.log(position.x)}
					</AnimatePresence>
				</motion.div>
			</MediaQuery>
			<MediaQuery maxWidth={992}>
				<motion.div
					className="absolute bg-black rounded-full"
					ref={circleRef}
					animate={animation}
					initial={{
						scale: 1,
						x: '-50%',
						y: '-50%',
						top: '50%',
						left: '50%',
						height: '75vw',
						width: '75vw'
					}}
				>
					<AnimatePresence>
						{indexActive && (
							<motion.div
								initial={{ opacity: 1 }}
								animate={{
									x: (mouseCoords.x - position.x) / 18,
									y: (mouseCoords.y - position.y) / 18
								}}
								exit={{ opacity: 0 }}
								className="w-full h-full absolute rounded-full bg-white"
							/>
						)}
					</AnimatePresence>
				</motion.div>
			</MediaQuery>
		</>
	);
}
