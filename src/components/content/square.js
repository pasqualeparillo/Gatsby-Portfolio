import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'gatsby';
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
						x: '-50%',
						y: '-50%',
						transition: {
							duration: 0.4,
							type: 'tween',
							ease: [0.43, 0.13, 0.23, 0.96]
						}
					},
					pulse: {
						y: ['-50%', '-55%', '-50%'],
						transition: {
							loop: Infinity,
							delay: 1,
							duration: 4
						}
					},
					exit: {
						x: '-50%',
						y: '-50%',
						transition: {
							duration: 0.4,
							type: 'tween',
							ease: [0.43, 0.13, 0.23, 0.96]
						}
					}
				});
			case '/about':
				return (square = {
					size: {
						width: '78vw',
						transition: {
							duration: 0.4,
							delay: 0.5,
							type: 'tween',
							ease: [0.43, 0.13, 0.23, 0.96]
						}
					},
					pulse: {
						top: '100%',
						bottom: 0,
						y: '-100%',
						transition: {
							duration: 0.4,
							delay: 1.2,
							type: 'tween',
							ease: [0.43, 0.13, 0.23, 0.96]
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
							type: 'tween',
							ease: [0.43, 0.13, 0.23, 0.96]
						}
					},
					enter: {
						opacity: 1,
						transition: {
							duration: 0.4,
							type: 'tween',
							ease: [0.43, 0.13, 0.23, 0.96]
						}
					}
				});
			default:
				return;
		}
	}
	animation();
	return (
		<AnimatePresence exitBeforeEnter>
			<motion.div
				className="absolute bg-gray-1000 z-40 shadow-2xl"
				animate={['size', 'pulse']}
				key={location}
				exit="exit"
				enter="enter"
				variants={square}
				initial={
					location !== '/'
						? { x: '-50%', y: '-50%', scale: 1, left: '50%', top: '50%' }
						: { x: '-50%', y: '-50%', scale: 1, left: '50%', top: '50%' }
				}
				style={{
					height: '30vw',
					width: '30vw'
				}}
			>
				<Link to="/">
					<button>Home</button>
				</Link>
			</motion.div>
		</AnimatePresence>
	);
}
