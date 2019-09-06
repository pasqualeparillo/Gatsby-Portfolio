import React from 'react';
import Icon from '../../images/logo-3.svg';
export default function Logo() {
	return (
		<div className="h-20 w-26 left-0 top-0 border-4 border-black flex flex-wrap absolute mt-12 ml-8">
			<div className="w-1/2 flex flex-wrap justify-center items-center">
				<img className="fill-current text-black w-1/2 self-center flex items-center" src={Icon} />
			</div>
			<div className="w-1/2 flex flex-wrap border-l-4 border-black">
				<div className="w-1/2 flex relative items-end justify-end">
					<p className="font-black m-px">P</p>
				</div>
				<div className="w-1/2 flex relative items-end justify-start">
					<p className="font-black m-px">A</p>
				</div>
				<div className="w-1/2 flex relative items-start justify-end">
					<p className="font-black m-px">T</p>
				</div>
				<div className="w-1/2 flex relative items-start justify-start">
					<p className="font-black m-px">P</p>
				</div>
			</div>
		</div>
	);
}
