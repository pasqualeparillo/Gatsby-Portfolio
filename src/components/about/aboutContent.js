import React from 'react';
import { Link } from 'gatsby';
export default function AboutContent() {
	return (
		<div className="min-h-screen bg-gray-1000 w-full pt-16 pr-16 pl-16 relative">
			<div className="pb-24 flex flex-col">
				<div className="flex flex-col flex-wrap w-full ">
					<div className="flex flex-col w-8/12 pb-24">
						<h2 className="text-white font__work-sans text-5xl font-semibold mt-16 mb-32">About</h2>

						<p className="text-white font__work-sans text-2xl tracking-wide leading-chill break-words">
							White Square Capital is an alternative investment manager focused on turning human
							behavioural patterns into repeatable investment strategies following a strict set of rules.
						</p>
					</div>
				</div>

				<div className="flex flex-wrap w-full ">
					<div className="w-2/5 flex items-center border-t border-b border-gray-1100 pr-12 pt-24 pb-24">
						<h2 className="text-white font__work-sans text-5xl font-semibold mt-12 mb-12">About</h2>
					</div>
					<div className="w-3/5 border-t border-l border-b border-gray-1100 pl-16 pt-24 pb-24">
						<p className="text-gray-800 font__work-sans text-sm w-full tracking-wide leading-chill pb-6 break-words">
							Human behaviour is at the center of all investment decisions, whether they are taken by
							humans following discretionary strategies or by computers trying to anticipate human
							decisions.
						</p>

						<p className="text-gray-800 font__work-sans text-sm w-full tracking-wide leading-chill pt-6 break-words">
							These behavioural patterns are often repetitive and create significant investment
							opportunities.
						</p>
					</div>
				</div>

				<div className="flex flex-wrap w-full ">
					<div className="w-1/2 flex items-center border-t border-b border-gray-1100 pr-12 pt-24 pb-24">
						<h2 className="text-white font__work-sans text-5xl font-semibold mt-12 mb-12">About</h2>
					</div>
					<div className="w-1/2 border-t border-l border-b border-gray-1100 pl-16 pt-24 pb-24">
						<p className="text-gray-800 font__work-sans text-sm w-3/4 tracking-wide leading-chill pb-6 break-words">
							Human behaviour is at the center of all investment decisions, whether they are taken by
							humans following discretionary strategies or by computers trying to anticipate human
							decisions.
						</p>

						<p className="text-gray-800 font__work-sans text-sm w-3/4 tracking-wide leading-chillt pt-6 break-words">
							These behavioural patterns are often repetitive and create significant investment
							opportunities.
						</p>
					</div>
				</div>

				<div className="flex flex-wrap w-full mb-24">
					<div className="w-5/12 flex flex-col border-t border-b border-gray-1100 pr-12 pt-16 pb-24">
						<h2 className="text-white font__work-sans text-5xl font-semibold mb-12">Original Thought</h2>
						<p className="text-gray-800 font__work-sans text-sm w-3/4 tracking-wide leading-chill pb-6 break-words">
							Attentive observation, unambiguous structure and out-of-the box thinking are at the heart of
							White Square’s investment process. It draws on a combination of insights gained from
							quantitative analysis, fundamental research as well as cognitive and behavioural
							neuroscience to achieve its target of delivering absolute returns with low market
							correlation.
						</p>
					</div>
					<div className="w-7/12 flex flex-col border-t border-l border-b border-gray-1100 pl-16 pt-16 pb-16">
						<h2 className="text-white font__work-sans text-5xl font-semibold flex">Continous</h2>
						<h2 className="text-white font__work-sans text-5xl font-semibold  mb-12 flex">Improvement</h2>
						<p className="text-gray-800 font__work-sans text-sm w-3/4 tracking-wide leading-chill pb-6 break-words">
							Acknowledging the competitive nature of modern capital markets, White Square strives to
							constantly further its processes, and continuous feedback mechanisms furthering learning and
							improvement are built into its methods.
						</p>
					</div>
				</div>
			</div>
			<div className="flex flex-wrap w-full mt-20 bottom-0">
				<div className="w-1/2 flex border-t border-b border-gray-1100 pt-24 pb-24 cursor-pointer">
					<div className="w-1/2 flex items-center justify-start">
						<div className="border border-gray-500 w-1/2 h-px" />
					</div>
					<div className="w-1/2 flex justify-center items-center">
						<Link to="/contact">
							<p className="font-bold text-white font__work-sans">Contact</p>
						</Link>
					</div>
				</div>

				<div className="w-1/2 flex border-t border-l border-b border-gray-1100 pt-24 pb-24 cursor-pointer">
					<div className="w-1/2 flex justify-center items-center">
						<Link to="/work">
							<p className="font-bold text-white font__work-sans">Work</p>
						</Link>
					</div>

					<div className="w-1/2 flex items-center justify-end relative">
						<div
							className="border border-gray-500 w-1/2 h-px absolute"
							style={{ transform: 'translateY(50%)', top: '50%' }}
						/>
					</div>
				</div>
			</div>
		</div>
	);
}
