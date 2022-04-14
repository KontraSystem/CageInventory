import { useEffect, useState } from 'react'

export default function InventoryNavigation({ page }) {
	const [isAdmin, SetIsAdmin] = useState(localStorage.getItem('role') == 'Administrator')

	const createChild = (text, route) => (
		<a
			className={`hover:text-blue-800 w-full p-2 ${
				route == window.location.pathname ? 'primary' : 'secondary'
			}`}
			href={route}
		>
			{text}
		</a>
	)
	switch(page) {
		case "admin": return (
			<div className="bg-orange text-white grid grid-cols-3 gap-4 text-center">
				<> 
					{' '}
					{createChild('Users', '/admin')}
					{createChild('Requests and Returns', '/admin/requests-returns')}
					{createChild('App logs', '/admin/logs')}
				</>
			</div>
		)
		case "home": 
			default: return (
			<div className="bg-orange text-white grid grid-cols-3 gap-4 text-center">
				{isAdmin ? (
					<> 
					</>
				) : (
					<>
						{' '}
						{createChild('Inventory', '/')}
						{createChild('Kits', '/kits')}
						{createChild('Impending Returns', '/returns')}{' '}
					</>
				)}
			</div>
		)

	}

}
