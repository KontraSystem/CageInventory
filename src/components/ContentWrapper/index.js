import React, { useState } from 'react'
import { InventoryNavigation, NavigationBar, SideBar } from '..'

function ContentWrapper({ children }) {
	const [navBarClicked, isNavbarClicked] = useState(false)
	const toggleVisibility = () => isNavbarClicked(!navBarClicked)

	return (
		<div className="flex">
			<div className={navBarClicked ? 'visible' : 'hidden'}>
				<SideBar />
			</div>
			<div className="w-[100%] h-[100vh] flex flex-col">
				<NavigationBar onClick={toggleVisibility} />
				<InventoryNavigation />
				<div className="h-[100%] pb-16 overflow-auto">{children}</div>
			</div>
		</div>
	)
}
export default ContentWrapper
