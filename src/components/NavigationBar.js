import React, { useState } from 'react'
import '../App.css'

export default function NavigationBar({ onClick }) {
	const [navBarOpen, isNavBarOpen] = useState(false)
	const onNavBarClick = () => {
		isNavBarOpen(!navBarOpen)
	}

	const genericHamburgerLine = `h-1 w-6 my-1 rounded-full bg-white transition ease transform duration-200`
	return (
		<div>
			<div className="flex bg-orange border-b-2 border-gray-300">
				<div
					className={`flex flex-col h-20 w-12 rounded justify-center items-center group hover:cursor-pointer ml-2`}
					onClick={onClick}
					onClickCapture={onNavBarClick}
				>
					<div
						className={`${genericHamburgerLine} ${
							navBarOpen ? 'rotate-45 translate-y-3 ' : ''
						}`}
					/>
					<div
						className={`${genericHamburgerLine} ${
							navBarOpen ? 'opacity-0' : ''
						}`}
					/>
					<div
						className={`${genericHamburgerLine} ${
							navBarOpen ? '-rotate-45 -translate-y-3' : ''
						}`}
					/>
				</div>
				<h1 className={`pt-6 text-white text-xl font-bold ml-2`}>
					RIT Cage Inventory
				</h1>
				<i className="absolute opacity-70 right-0 mr-36 top-8 mt-1 hover:cursor-pointer fa fa-bell text-white"></i>
				<div className="flex right-0 absolute mr-12 mt-4">
					<a
						href="/login"
						className={`bg-white rounded p-2 hover:cursor-pointer hover:text-orange`}
					>
						<p>Logut</p>
					</a>
				</div>
			</div>
		</div>
	)
}
