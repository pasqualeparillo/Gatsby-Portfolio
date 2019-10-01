import React, { useContext, useEffect } from 'react';
import { motion, useAnimation, AnimatePresence } from 'framer-motion';
import { AnimationContext } from '../store/animation';

export function SquareIndex({ location }) {
	const { pageLocation, indexActive, mouseCoords } = useContext(AnimationContext);
	const animation = useAnimation();
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
		<motion.div
			className="absolute bg-gray-1000 rounded-full overflow-hidden"
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
							boxShadow: `inset 0px ${mouseCoords / 50}px 80px ${mouseCoords / 50}px rgba(255,255,255,1)`
						}}
						exit={{ opacity: 0 }}
						className="w-full h-full absolute rounded-full"
					/>
				)}
			</AnimatePresence>
		</motion.div>
	);
}
