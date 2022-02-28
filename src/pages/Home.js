import React, { useState } from 'react'
import NavigationBar from '../components/NavigationBar'
import InventoryCard from '../components/InventoryCard'
import '../App.css'
import SecondNavBar from '../components/SecondNavBar'
import SearchField from 'react-search-field'
import InventoryNavigation from '../components/InventoryNavigation'

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
				<InventoryNavigation />
				<div className="inline-block">
					<SearchField
						placeholder="Search"
						classNames="searchContainer mx-12 my-2"
					/>
					<div className="bg-white inline ml-24">
						<input type="checkbox" />
						<h2 className="inline-block">Available</h2>
					</div>
				</div>
				<div className="fixed">
					<InventoryCard />
				</div>
			</div>
		</div>
	)
}
