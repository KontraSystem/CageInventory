import React, { useState } from 'react'

export default function SecondNavBar() {
	const [iconClick, isIconClick] = useState()
	return (
		<div className={`flex flex-col group h-screen shadow bg-white w-96`}>
			<div className="border-b-2 border-gray-600">
				<div className="flex ml-12 p-4 ">
					<img
						className=" object-cover w-16 h-16 rounded-full"
						src="http://cdn.onlinewebfonts.com/svg/img_568657.png"
						alt="Profile image"
					/>
					<div className="ml-5">
						<p className="font-bold text-xl mt-2">Username</p>
						<p className="ml-8">role</p>
					</div>
				</div>
			</div>
			{/** navigation bar */}
			<div
				className="flex bg-gray-200 text-black py-4 pl-16 hover:cursor-pointer hover:bg-gray-300"
				onClick={() => isIconClick(!iconClick)}
			>
				<p className="font-bold text-xl mt-3">Cage Inventory</p>
				<i
					className={`ml-5 mt-4 fas ${
						iconClick ? 'fa-chevron-up' : 'fa-chevron-down'
					}`}
				></i>{' '}
			</div>
			<div className={`${iconClick ? 'visible' : 'hidden'}`}>
				<ul>
					<li className="bg-gray-100 hover:bg-gray-200">
						<a href="/Home">
							<div className="border-b-2 p-3">
								<p className="font-bold text-xl mt-3 ml-20">
									Inventory
								</p>
							</div>
						</a>
					</li>
					<li className="bg-gray-100 hover:bg-gray-200">
						<a href="/Courses">
							<div className="border-b-2 p-3">
								<p className="font-bold text-xl mt-3 ml-20">Kits</p>
							</div>
						</a>
					</li>
					<li className="bg-gray-100 hover:bg-gray-200">
						<a className={``} href="/Active">
							<div className=" border-b-2 p-3">
								<p className="font-bold text-xl mt-3 ml-20">
									Impending returns
								</p>
							</div>
						</a>
					</li>
				</ul>
			</div>
		</div>
	)
}
