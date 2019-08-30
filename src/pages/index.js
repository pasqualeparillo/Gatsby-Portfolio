import React, { useContext } from 'react';
import { Row, Square } from '../components/styled/container';
import MediaQuery from 'react-responsive';
import ContactTile from '../components/contact/contactTile';
import ProjectTile from '../components/project/projectTile';
import { Link } from 'gatsby';
import { AnimationContext } from '../components/store/animation';
import { motion, AnimatePresence } from 'framer-motion';
import { variant } from '../components/store/variants';
export default function IndexPage() {
	const { pageLocation } = useContext(AnimationContext);

	return (
		<div className="flex flex-1 flex-wrap w-full h-full relative">
			<Row>
				<Square wfourth="true" className="overflow-hidden">
					<div className="flex flex-col h-full w-full content-end items-end justify-end absolute overflow-hidden">
						<div className="flex items-center justify-center tracking-tighter lg:border-t-4 border-t-2 border-black w-full p-4 relative">
							<MediaQuery minWidth={992}>
								<Link to="/projects">
									<p
										className="font-extrabold uppercase whitespace-no-wrap"
										style={{ fontSize: 'calc(25vw / 10)' }}
									>
										Pasquale Parillo
									</p>
								</Link>
							</MediaQuery>
							<MediaQuery maxWidth={992}>
								<p
									className="font-extrabold uppercase whitespace-no-wrap"
									style={{ fontSize: 'calc(25vw / 5)' }}
								>
									Pasquale Parillo
								</p>
							</MediaQuery>
						</div>
					</div>
				</Square>
				<Square wfourth="true" />
				<Square wfourth="true">
					<MediaQuery minWidth={992}>
						<AnimatePresence>
							<motion.div
								className="flex flex-col h-full w-full content-end items-end justify-end absolute cursor-pointer overflow-hidden"
								key={pageLocation}
								variants={variant}
								initial={{ opacity: 0 }}
								animate="enter"
								exit="exit"
							>
								<div
									className="flex items-center justify-center tracking-tighter w-full p-4 bg-white text-black relative hover:bg-black hover:text-white transform"
									style={{ height: '100%' }}
								>
									<p className="font-extrabold uppercase whitespace-no-wrap text-vw">About</p>
								</div>
							</motion.div>
						</AnimatePresence>
					</MediaQuery>
					<MediaQuery maxWidth={992}>
						<div className="flex flex-col h-full w-full content-end items-end justify-end absolute cursor-pointer">
							<div
								className="flex items-center justify-center tracking-tighter w-full p-4 relative bg-white text-black hover:bg-black hover:text-white transform"
								style={{ height: '100%' }}
							>
								<p
									className="font-extrabold uppercase whitespace-no-wrap "
									style={{ fontSize: '25vw' }}
								>
									A
								</p>
							</div>
						</div>
					</MediaQuery>
				</Square>
				<Square wfourth="true" />
			</Row>
			<Row>
				<Square wfourth="true" />
				<Square wfourth="true">
					<ProjectTile />
				</Square>
				<Square wfourth="true">
					<ContactTile />
				</Square>
				<Square wfourth="true" className="lg:border-none border z-0">
					<Row className="h-full w-full flex flex-1 z-0">
						<Square wfourth="true" rb="true" className="bg-yellow-400 z-0" />
						<Square wfourth="true" lb="true" bb="true" className="lg:bg-white bg-blue-700 z-0" />
						<Square wfourth="true" tr="true" br="true" className="lg:bg-white bg-red-600 z-0" />
						<Square wfourth="true" tl="true" className="lg:bg-white bg-white z-0" />
						<MediaQuery minWidth={992}>
							<Square wfourth="true" className="lg:inline-block" />
							<Square wfourth="true" className="lg:inline-block" />
							<Square wfourth="true" className="lg:inline-block" />
							<Square wfourth="true" className="lg:inline-block bg-black z-0" />
							<Square wfourth="true" className="lg:inline-block" />
							<Square wfourth="true" className="lg:inline-block bg-blue-700 z-0" />
							<Square wfourth="true" className="lg:inline-block" />
							<Square wfourth="true" className="lg:inline-block" />
							<Square wfourth="true" className="lg:inline-block bg-red-600 z-0" />
							<Square wfourth="true" className="lg:inline-block" />
							<Square wfourth="true" className="lg:inline-block" />
							<Square wfourth="true" className="lg:inline-block" />
						</MediaQuery>
					</Row>
				</Square>
			</Row>
		</div>
	);
}
