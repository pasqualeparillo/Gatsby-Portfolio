import React from 'react';
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
						scale: 2,
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
						y: '0',
						x: '-50%',
						transition: {
							duration: 1.8,
							delay: 1,
							type: 'spring',
							stiffness: 25,
							ease: [0.17, 0.67, 0.83, 0.67]
						}
					}
				});
			default:
				return;
		}
	}
	animation();
	return (
		<>
			<motion.div
				className="absolute bg-red-500 z-40 shadow-2xl"
				animate={['size', 'pulse']}
				variants={square}
				initial={{ x: '-50%', y: '-50%', scale: 0 }}
				style={{
					left: '50%',
					top: '50%',
					height: '15vw',
					width: '15vw'
				}}
			/>
		</>
	);
}
