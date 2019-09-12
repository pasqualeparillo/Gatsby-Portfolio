import React, { useContext } from 'react';
import { AnimationContext } from '../store/animation';
import { motion } from 'framer-motion';

export default function Square({ location }) {
	switch (location) {
		case '/':
			return <SquareIndex location={location} />;
		case '/about':
			return <SquareIndex location={location} />;
		default:
			return <SquareIndex location={location} />;
	}
}

function SquareIndex({ location }) {
	let square = '';
	function animation() {
		switch (location) {
			case '/':
				return (square = {
					size: {
						scale: 1,
						x: '-50%',
						y: '-50%',
						transition: {
							duration: 1.8,
							type: 'spring',
							stiffness: 25,
							ease: [0.17, 0.67, 0.83, 0.67]
						}
					},
					pulse: {
						y: ['-50%', '-55%', '-50%'],
						transition: {
							loop: Infinity,
							delay: 2,
							duration: 4
						}
					}
				});
			case '/about':
				return (square = {
					size: {
						width: '78vw',
						transition: {
							delay: 1,
							type: 'spring',
							damping: 100,
							ease: [0.17, 0.41, 0.2, 0.67]
						}
					},
					pulse: {
						top: '100%',
						bottom: 0,
						y: '-100%',
						transition: {
							delay: 2.2,
							type: 'spring',
							damping: 100,
							ease: [0.17, 0.41, 0.2, 0.67]
						}
					}
				});
			default:
				return;
		}
	}
	animation();
	return (
		<motion.div
			className="absolute bg-gray-1000 z-40 shadow-2xl"
			animate={['size', 'pulse']}
			variants={square}
			initial={
				location !== '/'
					? { x: '-50%', y: '-50%', scale: 1, left: '50%', top: '50%' }
					: { x: '-50%', y: '-50%', scale: 0, left: '50%', top: '50%' }
			}
			style={{
				height: '30vw',
				width: '30vw'
			}}
		></motion.div>
	);
}
