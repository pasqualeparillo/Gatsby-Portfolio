import React, { useEffect, useContext } from 'react';
import { Row, Square } from '../components/styled/container';
import { CloseTile } from '../components/contact/tile';
import { AnimationContext } from '../components/store/animation';
import MediaQuery from 'react-responsive';

export default function IndexPage() {
	const { setPageLocation } = useContext(AnimationContext);
	useEffect(() => {
		setPageLocation('/contact');
	});
	return (
		<>
			<MediaQuery minWidth={992}>
				<div className="flex flex-1 flex-wrap w-full h-full relative">
					<Row>
						<Square className="lg:w-1/4 w-full flex items-center justify-center">
							<form className="w-full h-full flex justify-center items-center absolute">
								<input
									className="bg-transparent z-50 w-full h-full font-extrabold uppercase "
									style={{ fontSize: 'calc(25vw / 5)' }}
									type="text"
									name="name"
									placeholder="Phone"
								/>
							</form>
						</Square>
						<Square className="lg:w-1/4 w-full overflow-hidden flex items-center justify-center">
							<form className="w-full h-full flex justify-center items-center absolute">
								<input
									className="bg-transparent z-50 w-full h-full font-extrabold uppercase "
									style={{ fontSize: 'calc(25vw / 5)' }}
									type="email"
									name="name"
									placeholder="Email"
								/>
							</form>
						</Square>
						<Square className="lg:w-1/2 w-full overflow-hidden flex items-center justify-center">
							<form className="w-full h-full flex justify-center items-center absolute">
								<input
									className="bg-transparent z-50 w-full h-full font-extrabold uppercase "
									style={{ fontSize: 'calc(25vw / 5)' }}
									type="text"
									name="name"
									placeholder="Message"
								/>
							</form>
						</Square>
					</Row>
					<Row>
						<Square className="w-1/2 overflow-hidden flex items-center justify-center border-white border-2">
							<button className="flex flex-col bg-black h-full w-full items-center justify-center absolute overflow-hidden ">
								<p
									className="font-extrabold uppercase text-white whitespace-no-wrap"
									style={{ fontSize: 'calc(25vw / 5)' }}
								>
									Submit
								</p>
							</button>
						</Square>
						<Square className="lg:w-1/4 w-1/2 overflow-hidden flex items-center justify-center">
							<CloseTile />
						</Square>
						<MediaQuery minWidth={992}>
							<Square wfourth="true" className="lg:border-none border z-0">
								<Row className="h-full w-full flex flex-1 z-0">
									<Square wfourth="true" rb="true" className="bg-yellow-400 z-0" />
									<Square
										wfourth="true"
										lb="true"
										bb="true"
										className="lg:bg-white bg-blue-700 z-0"
									/>
									<Square wfourth="true" tr="true" br="true" className="lg:bg-white bg-red-600 z-0" />
									<Square wfourth="true" tl="true" className="lg:bg-white bg-white z-0" />
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
								</Row>
							</Square>
						</MediaQuery>
					</Row>
				</div>
			</MediaQuery>
			<MediaQuery maxWidth={992}>
				<div className="flex flex-1 flex-wrap w-full h-full relative">
					<Row style={{ minHeight: '75vh' }}>
						<Square className="lg:w-1/4 w-full flex items-center justify-center">
							<form className="w-full h-full flex justify-center items-center absolute">
								<input
									className="bg-transparent z-50 w-full h-full font-extrabold uppercase "
									style={{ fontSize: 'calc(25vw / 5)' }}
									type="text"
									name="name"
									placeholder="Phone"
								/>
							</form>
						</Square>
						<Square className="lg:w-1/4 w-full overflow-hidden flex items-center justify-center">
							<form className="w-full h-full flex justify-center items-center absolute">
								<input
									className="bg-transparent z-50 w-full h-full font-extrabold uppercase "
									style={{ fontSize: 'calc(25vw / 5)' }}
									type="email"
									name="name"
									placeholder="Email"
								/>
							</form>
						</Square>
						<Square className="lg:w-1/2 w-full overflow-hidden flex items-center justify-center">
							<form className="w-full h-full flex justify-center items-center absolute">
								<input
									className="bg-transparent z-50 w-full h-full font-extrabold uppercase "
									style={{ fontSize: 'calc(25vw / 5)' }}
									type="text"
									name="name"
									placeholder="Message"
								/>
							</form>
						</Square>
					</Row>
					<Row style={{ minHeight: '25vh' }}>
						<Square className="w-1/2 overflow-hidden flex items-center justify-center border-white border-2">
							<button className="flex flex-col bg-black h-full w-full items-center justify-center absolute overflow-hidden ">
								<p
									className="font-extrabold uppercase text-white whitespace-no-wrap"
									style={{ fontSize: 'calc(25vw / 5)' }}
								>
									Submit
								</p>
							</button>
						</Square>
						<Square className="lg:w-1/4 w-1/2 overflow-hidden flex items-center justify-center">
							<CloseTile />
						</Square>
						<MediaQuery minWidth={992}>
							<Square wfourth="true" className="lg:border-none border z-0">
								<Row className="h-full w-full flex flex-1 z-0">
									<Square wfourth="true" rb="true" className="bg-yellow-400 z-0" />
									<Square
										wfourth="true"
										lb="true"
										bb="true"
										className="lg:bg-white bg-blue-700 z-0"
									/>
									<Square wfourth="true" tr="true" br="true" className="lg:bg-white bg-red-600 z-0" />
									<Square wfourth="true" tl="true" className="lg:bg-white bg-white z-0" />
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
								</Row>
							</Square>
						</MediaQuery>
					</Row>
				</div>
			</MediaQuery>
		</>
	);
}
