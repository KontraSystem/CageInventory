import React, { useState } from 'react'
import NavigationBar from '../components/NavigationBar'
import InventoryCard from '../components/InventoryCard'
import '../App.css'
import SecondNavBar from '../components/SecondNavBar'

export default function Home() {
	const [navBarClicked, isNavbarClicked] = useState(false)
	const toggleVisibility = () => {
		isNavbarClicked(!navBarClicked)
	}
	return (
		<div
			className={`${navBarClicked ? 'grid grid-flow-col auto-cols-min' : ''}`}
		>
			<div className={`${navBarClicked ? 'visible' : 'hidden'}`}>
				<SecondNavBar />
			</div>
			<div
				className={`${
					navBarClicked ? 'w-screen' : 'w-full'
				} overflow-x-hidden`}
			>
				<NavigationBar onClick={toggleVisibility} />
				<InventoryCard />
			</div>
		</div>
	)
}
