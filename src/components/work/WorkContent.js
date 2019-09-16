import React, { useContext } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AnimationContext } from '../store/animation';
import { ProjectContainer } from '../styled/container';
import WorkArrow from './workArrow';

export default function WorkContent() {
	const { pageLocation } = useContext(AnimationContext);
	const parent = {
		animation: {
			opacity: 1,
			y: 0,
			transition: {
				when: 'beforeChildren',
				delay: 1.5,
				staggerChildren: 0.2,
				duration: 0.5
			}
		},
		exit: {
			opacity: 0,
			transition: {
				duration: 0.2
			}
		}
	};
	const child = {
		animation: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.4,
				type: 'tween'
			}
		}
	};
	return (
		<>
			{pageLocation === '/work' && (
				<AnimatePresence>
					<motion.div
						className="min-h-screen bg-gray-1000 w-full pt-16 pr-16 pl-16 relative"
						variants={parent}
						animate="animation"
						exit="exit"
						key={pageLocation === '/work' ? true : false}
						initial={{ opacity: 0, y: 50 }}
					>
						<div className="flex flex-col flex-wrap w-full ">
							<div className="flex flex-col w-8/12 pb-12">
								<h2 className="text-white font__work-sans text-5xl font-semibold">Work</h2>
							</div>
						</div>
						<div className="pb-24 flex flex-col">
							<div className="flex flex-col flex-wrap w-full pb-24">
								<div className="flex flex-col flex-wrap w-full pb-24 w-8/12">
									{[0, 1, 2, 3, 4].map(project => (
										<ProjectContainer className="text-white hover:text-gray-800 transform overflow-hidden">
											<motion.div
												className="flex w-full justify-between items-center"
												key={project}
												variants={child}
												initial={{ opacity: 0, y: 50 }}
											>
												<p className="uppercase text-xl font__work-sans">Project Title</p>
												<p className="uppercase text-xs font__work-sans">
													Interactive Website - Project Description
												</p>
												<WorkArrow styles={'fill-current'} />
											</motion.div>
										</ProjectContainer>
									))}
								</div>
							</div>
						</div>
					</motion.div>
				</AnimatePresence>
			)}
		</>
	);
}
