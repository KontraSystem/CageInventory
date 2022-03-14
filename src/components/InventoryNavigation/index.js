import { useEffect, useState } from "react";

export default function InventoryNavigation() {
	const [isAdmin, SetIsAdmin] = useState(false)

	useEffect(() => {
		SetIsAdmin(localStorage.getItem('role') == 'Administrator')
	}, [])

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

	return (
		<div className="bg-orange text-white grid grid-cols-3 gap-4 text-center">
			{isAdmin ? (
				<> </>
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
