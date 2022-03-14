import React, { useEffect, useState } from 'react'
import { Popover } from 'react-tiny-popover'
import './navigationCSS.css'
import { ShoppingCartIcon, NotificationIcon } from '../'

export default function NavigationBar({ onClick }) {
	const [navBarOpen, isNavBarOpen] = useState(false)

	const [notificationsOpen, isNotificationsOpen] = useState(false)
	const [isAdmin, SetIsAdmin] = useState(false)

	useEffect(() => {
		SetIsAdmin(localStorage.getItem('role') == 'Administrator')
	}, [])

	const role = localStorage.getItem('role')

	const onNavBarClick = () => isNavBarOpen(!navBarOpen)

	const onNotificationClick = () => isNotificationsOpen(!notificationsOpen)

	const genericHamburgerLine = `h-1 w-6 my-1 rounded-full bg-white transition ease transform duration-200`
	return (
		<div>
			<div className="flex bg-orange border-b-2 border-gray-300 items-center gap-4 px-4">
				<div
					className="flex flex-col h-20 w-12 rounded justify-center items-center group hover:cursor-pointer"
					onClick={onClick}
					onClickCapture={onNavBarClick}
				>
					<div
						className={`${genericHamburgerLine} ${
							navBarOpen ? 'rotate-45 translate-y-3' : 'my-0.5'
						}`}
					/>
					<div
						className={`${genericHamburgerLine} ${
							navBarOpen ? 'opacity-0' : 'my-0.5'
						}`}
					/>
					<div
						className={`${genericHamburgerLine} ${
							navBarOpen ? '-rotate-45 -translate-y-3' : 'my-0.5'
						}`}
					/>
				</div>
				<h1 className="text-white text-xl font-bold">RIT Cage Inventory</h1>
				<div className="ml-auto">
					{isAdmin ? (
						<> </>
					) : (
						<>
							{' '}
							<ShoppingCartIcon />{' '}
						</>
					)}
					<NotificationIcon />
				</div>
			</div>
		</div>
	)
}
