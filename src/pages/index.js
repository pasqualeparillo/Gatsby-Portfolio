import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'gatsby';
import { AnimationContext } from '../components/store/animation';
import { motion, AnimatePresence } from 'framer-motion';
import { MdArrowForward } from 'react-icons/md';

export default function IndexPage() {
	const { setPageLocation, indexHover, setIndexHover } = useContext(AnimationContext);
	const [hoverTextValue, setHoverTextValue] = useState('');
	useEffect(() => {
		setPageLocation('/');
	}, []);

	const circle = {
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
	};
	return (
		<>
			<div className="flex flex-wrap-reverse w-full h-full relative">
				<div className="lg:w-1/2 w-full h-screen flex relative">
					<div className="flex z-30 w-full h-full absolute lg:-ml-8">
						<div className="w-1/4 lg:border-r-2 border-r-0 border-black lg:shadow-2xl" />
						<div className="w-1/4 lg:border-r-2 border-r-0 border-black lg:shadow-2xl" />
						<div className="w-1/4" />
						<div className="w-1/4" />
					</div>
					<div className="lg:w-2/3 w-full flex items-center justify-center flex-wrap z-20 bg-transparent z-50">
						<div className="flex lg:w-1/3 justify-center items-center h-full">
							<div className="relative overflow-hidden w-3/4">
								<motion.div
									initial={{ x: '-100%' }}
									animate={{ x: ['-100%', '0%', '0%', '0%', '102%'] }}
									transition={{
										duration: 1.2,
										type: 'spring',
										ease: [0.17, 0.41, 0.2, 0.67]
									}}
									className="bg-black h-full w-full absolute"
								/>
								<motion.p
									className="relative font-black text-2xl pl-4 cursor-pointer font__work-sans link-hover"
									initial={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									transition={{ delay: 0.3, duration: 0.1 }}
									onMouseEnter={() => setIndexHover(true)}
									onMouseLeave={() => setIndexHover(false)}
								>
									<Link className="font__work-sans " to="/about">
										About
									</Link>
								</motion.p>
							</div>
						</div>
						<div className="flex lg:w-1/3 justify-center items-center h-full">
							<div className="relative overflow-hidden w-3/4">
								<motion.div
									initial={{ x: '-100%' }}
									animate={{ x: ['-100%', '0%', '0%', '0%', '102%'] }}
									transition={{
										duration: 1.2,
										delay: 0.15,
										type: 'spring',
										ease: [0.17, 0.41, 0.2, 0.67]
									}}
									className="bg-black h-full w-full absolute"
								/>
								<motion.p
									className="relative font-black text-2xl pl-4 cursor-pointer font__work-sans link-hover"
									initial={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									transition={{ delay: 0.4, duration: 0.1 }}
								>
									Work
								</motion.p>
							</div>
						</div>
						<div className="flex lg:w-1/3 justify-center items-center h-full">
							<div className="relative overflow-hidden w-3/4">
								<motion.div
									initial={{ x: '-100%' }}
									animate={{ x: ['-100%', '0%', '0%', '0%', '102%'] }}
									transition={{
										duration: 1.2,
										delay: 0.3,
										type: 'spring',
										ease: [0.17, 0.41, 0.2, 0.67]
									}}
									className="bg-black h-full w-full absolute"
								/>
								<motion.p
									className="relative font-black text-2xl pl-4 cursor-pointer font__work-sans link-hover"
									initial={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									transition={{ delay: 0.4, duration: 0.1 }}
								>
									Contact
								</motion.p>
							</div>
						</div>
					</div>
				</div>
				<div className="lg:w-1/2 w-full flex justify-center flex-wrap items-end lg:pl-10 z-20 h-screen">
					<div className="flex lg:w-3/5 justify-center items-center h-full lg:ml-48 tracking-tighter">
						<div className="flex flex-col w-full flex-wrap">
							<div className="p-4 break-normal leading-none tracking-tighter">
								<motion.h1
									className="lg:text-6xl text-3xl font__work-sans font-light"
									initial={{ opacity: 0, y: 50 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ duration: 1, delay: 1 }}
								>
									Pat Parillo{' '}
								</motion.h1>
								<motion.p
									className="text-6xl font-black font__work-sans"
									initial={{ opacity: 0, y: 50 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ duration: 1, delay: 1.1 }}
								>
									Web Developer
								</motion.p>
							</div>
							<div className="p-4 break-normal  tracking-normal w-5/6">
								<motion.p
									className=" font__work-sans"
									initial={{ opacity: 0, y: 50 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ duration: 1, delay: 1.2 }}
								>
									It was popularised in the 1960s with the release of Letraset sheets containing Lorem
									Ipsum passages, and more recently with desktop publishing software like Aldus
									PageMaker including versions of Lorem Ipsum.
								</motion.p>
							</div>
							<div className="p-4 break-normal leading-none tracking-normal relative flex flex-grow-0">
								<motion.p
									className="relative font-black text-lg font__work-sans"
									initial={{ opacity: 0, y: 50 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ duration: 1, delay: 1.3, type: 'tween' }}
								>
									Explore more
									<motion.span
										className="pl-12 -mt-1 text-3xl absolute"
										animate={{ x: [20, 0, 20] }}
										transition={{
											duration: 2,
											type: 'spring',
											delay: 2,
											loop: Infinity
										}}
									>
										<MdArrowForward />
									</motion.span>
								</motion.p>
								<div className="relative"></div>
							</div>
						</div>
					</div>
				</div>
				<motion.div
					className="absolute bg-red-500 z-40 shadow-2xl"
					animate={['size', 'pulse']}
					initial={{ scale: 0, x: '-50%', y: '-50%' }}
					variants={circle}
					style={{
						left: '50%',
						top: '50%',
						height: '15vw',
						width: '15vw'
					}}
				>
					<AnimatePresence>
						{indexHover && (
							<motion.div
								initial={{ y: 20, opacity: 0 }}
								animate={{ y: 0, opacity: 1 }}
								exit={{ opacity: 0, y: 20 }}
								transition={{ duration: 0.4 }}
								className="flex justify-center absolute w-1/4 right-0 bottom-0 bg-white pt-4 pb-4 pr-8 pl-8 shadow"
								style={{ bottom: '-10%', right: '-10%' }}
							>
								<p>{hoverTextValue}</p>
							</motion.div>
						)}
					</AnimatePresence>
					{console.log(hoverTextValue)}
				</motion.div>
			</div>
		</>
	);
}
