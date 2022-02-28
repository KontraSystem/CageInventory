import React from 'react'
import './navigationCSS.css'

export default function InventoryNavigation() {
	return (
		<div className="bg-orange text-white">
			<ul className="grid grid-cols-3 gap-4 text-center mb-1.5">
				<li className="mr-6 primary">
					<a className="hover:text-blue-800" href="#">
						Inventory
					</a>
				</li>
				<li className="mr-6 secondary">
					<a className="hover:text-blue-800" href="#">
						Kits
					</a>
				</li>
				<li className="mr-6 secondary">
					<a className="hover:text-blue-800 " href="#">
						Impending Returns
					</a>
				</li>
			</ul>
		</div>
	)
}
