import React from 'react';
import { Row, Square } from '../components/styled/container';
import MediaQuery from 'react-responsive';
import { Link } from 'gatsby';
import { motion } from 'framer-motion';
import { Tile, CloseTile } from '../components/projects/tile';

export default function IndexPage() {
	return (
		<motion.div className="flex flex-1 flex-wrap w-full h-full relative">
			<Row>
				<Square wfourth="true" className="overflow-hidden">
					<div className="flex flex-col h-full w-full content-end items-end justify-end absolute overflow-hidden">
						<div className="flex items-center justify-center tracking-tighter lg:border-t-4 border-t-2 border-black w-full p-4 relative">
							<MediaQuery minWidth={992}>
								<Link to="/">
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
				<Square wfourth="true">
					<Tile title={'devrebase'} />
				</Square>
				<Square wfourth="true">
					<Tile title={'portfolio'} />
				</Square>

				<Square wfourth="true" />
			</Row>
			<Row>
				<Square wfourth="true" />
				<Square wfourth="true">
					<CloseTile title={'devrebase'} />
				</Square>
				<Square wfourth="true" />
				<Square wfourth="true" className="lg:border-none border wfourth='true'">
					<Row className="h-full w-full flex flex-1 z-0">
						<Square wfourth="true" rb="true" className="bg-yellow-400" />
						<Square wfourth="true" lb="true" bb="true" className="lg:bg-white bg-blue-700" />
						<Square wfourth="true" tr="true" br="true" className="lg:bg-white bg-red-600" />
						<Square wfourth="true" tl="true" className="lg:bg-white bg-white" />
						<MediaQuery minWidth={992}>
							<Square wfourth="true" className="lg:inline-block" />
							<Square wfourth="true" className="lg:inline-block" />
							<Square wfourth="true" className="lg:inline-block" />
							<Square wfourth="true" className="lg:inline-block bg-black" />
							<Square wfourth="true" className="lg:inline-block" />
							<Square wfourth="true" className="lg:inline-block bg-blue-700" />
							<Square wfourth="true" className="lg:inline-block" />
							<Square wfourth="true" className="lg:inline-block" />
							<Square wfourth="true" className="lg:inline-block bg-red-600" />
							<Square wfourth="true" className="lg:inline-block" />
							<Square wfourth="true" className="lg:inline-block" />
							<Square wfourth="true" className="lg:inline-block" />
						</MediaQuery>
					</Row>
				</Square>
			</Row>
		</motion.div>
	);
}
