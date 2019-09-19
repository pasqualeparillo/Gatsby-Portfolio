import React, { useContext, useEffect } from 'react';
import { motion, useAnimation, AnimatePresence } from 'framer-motion';
import AboutContent from '../about/aboutContent';
import { AnimationContext } from '../store/animation';
export function SquareIndex({ location }) {
	const { aboutActive, pageLocation } = useContext(AnimationContext);
	const animation = useAnimation();
	useEffect(() => {
		if (location === '/') {
			animation.start({
				x: '-50%',
				y: '-50%',
				top: '50%',
				left: '50%',
				height: '30vw',
				width: '30vw',
				transition: {
					duration: 0.5,
					when: 'afterChildren'
				}
			});
		} else if (location === '/about') {
			animation.start({
				top: '100%',
				bottom: 0,
				y: '-100%',
				width: '78vw',
				transition: {
					duration: 0.5,
					when: 'beforeChildren'
				}
			});
		} else if (location === '/work') {
			animation.start({
				width: '78vw',
				left: 'calc(100% - 39vw)',
				top: '100%',
				height: '100vh',
				bottom: 0,
				right: 0,
				y: '-100%',
				transition: {
					type: 'tween',
					duration: 0.5,
					when: 'beforeChildren'
				}
			});
		} else if (location === '/contact') {
			animation.start({
				width: '78vw',
				height: '100vh',
				transition: {
					type: 'tween',
					duration: 0.5,
					when: 'beforeChildren'
				}
			});
		}
	}, [pageLocation]);

	return (
		<motion.div
			className="absolute bg-gray-1000 z-50 shadow-2xl"
			animate={animation}
			initial={{ x: '-50%', y: '-50%', top: '50%', left: '50%', height: '30vw', width: '30vw' }}
		>
			<AnimatePresence>
				<motion.div className="w-full" exit="exit" animate="enter" initial="initial">
					{aboutActive && <AboutContent />}
				</motion.div>
			</AnimatePresence>
		</motion.div>
	);
}
