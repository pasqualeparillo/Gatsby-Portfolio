import React, { useContext, useEffect } from 'react';
import { Link } from 'gatsby';
import MediaQuery from 'react-responsive';
import { motion, AnimatePresence } from 'framer-motion';
import { AnimationContext } from '../store/animation';
import { variant } from '../store/variants';
export default function ProjectTile() {
	const { pageLocation, setPageLocation } = useContext(AnimationContext);
	useEffect(() => {
		setPageLocation('/');
	}, [pageLocation]);

	return (
		<div className="flex justify-between absolute h-full justify-end w-full overflow-hidden">
			<div className="flex h-full w-full flex items-center justify-center cursor-pointer">
				<Link className="w-full h-full" to="/projects">
					<MediaQuery minWidth={992}>
						<div className="flex flex-col h-full w-full content-end items-end justify-end absolute cursor-pointer">
							<div
								className="flex items-center justify-center tracking-tighter  w-full p-4 relative text-black transform hover:bg-black overflow-hidden border-black hover:text-white "
								style={{ height: '100%' }}
							>
								<AnimatePresence>
									{pageLocation === '/' && (
										<motion.p
											variants={variant}
											initial={{ opacity: 0 }}
											animate="enter"
											exit="exit"
											className="font-extrabold uppercase whitespace-no-wrap text-vw"
										>
											Projects
										</motion.p>
									)}
								</AnimatePresence>
							</div>
						</div>
					</MediaQuery>

					<MediaQuery maxWidth={992}>
						<div className="flex flex-col h-full w-full content-end items-end justify-end absolute cursor-pointer">
							<div className="flex items-center justify-center tracking-tighter w-full h-full p-4 bg-black text-white relative hover:bg-white hover:text-black transform">
								<p className="uppercase font-extrabold " style={{ fontSize: 'calc(25vw)' }}>
									P
								</p>
							</div>
						</div>
					</MediaQuery>
				</Link>
			</div>
		</div>
	);
}
