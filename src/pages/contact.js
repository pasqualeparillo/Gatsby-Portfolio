import React, { useEffect, useContext } from 'react';
import { Row, Square } from '../components/styled/container';
import { CloseTile } from '../components/contact/tile';
import { AnimationContext } from '../components/store/animation';

export default function IndexPage() {
	const { setPageLocation } = useContext(AnimationContext);
	useEffect(() => {
		setPageLocation('/contact');
	});
	return (
		<div className="flex flex-1 flex-wrap w-full h-full relative">
			<Row>
				{console.log(window.location.pathname)}
				<Square className="w-1/2 overflow-hidden flex items-center justify-center">
					<form className="w-1/2 h-full flex justify-center items-center">
						<input
							className="bg-transparent z-50 w-full h-16 font-extrabold uppercase whitespace-no-wrap"
							style={{ fontSize: 'calc(25vw / 5)' }}
							type="text"
							name="name"
							placeholder="Phone"
						/>
					</form>
				</Square>
				<Square className="w-1/2 overflow-hidden flex items-center justify-center">
					<form className="w-1/2 h-full flex justify-center items-center">
						<input
							className="bg-transparent z-50 w-full h-16 font-extrabold uppercase whitespace-no-wrap"
							style={{ fontSize: 'calc(25vw / 5)' }}
							type="text"
							name="name"
							placeholder="Message"
						/>
					</form>
				</Square>
			</Row>
			<Row>
				<Square className="w-1/2 overflow-hidden flex items-center justify-center">
					<form className="w-1/2 h-full flex justify-center items-center">
						<input
							className="bg-transparent z-50 w-full h-16 font-extrabold uppercase whitespace-no-wrap"
							style={{ fontSize: 'calc(25vw / 5)' }}
							type="email"
							name="name"
							placeholder="Email"
						/>
					</form>
				</Square>

				<Square className="w-1/4 overflow-hidden flex items-center justify-center border-white border-2">
					<button className="flex flex-col bg-black h-full w-full items-center justify-center absolute overflow-hidden ">
						<p
							className="font-extrabold uppercase text-white whitespace-no-wrap"
							style={{ fontSize: 'calc(25vw / 5)' }}
						>
							Submit
						</p>
					</button>
				</Square>

				<Square className="w-1/4 overflow-hidden flex items-center justify-center">
					<CloseTile />
				</Square>
			</Row>
		</div>
	);
}
