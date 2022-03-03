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
			<div className="w-full h-[100vh] flex flex-col">
				<NavigationBar onClick={toggleVisibility} />
				<InventoryNavigation />
				<div className="h-full pb-16 overflow-auto">{children}</div>
			</div>
		</div>
	)
}
export default ContentWrapper
