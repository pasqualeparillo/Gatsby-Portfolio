import React from 'react';
import { Row, Square } from '../components/styled/container';
import MediaQuery from 'react-responsive';
import ContactTile from '../components/contact/contactTile';
import ProjectTile from '../components/projects/projectTile';
import { Link } from 'gatsby';

export default function IndexPage() {
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
				<Square className="w-3/4" />
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
