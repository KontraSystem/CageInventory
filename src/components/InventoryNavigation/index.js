export default function InventoryNavigation() {
	const createChild = (text, route) => (
		<a
			className={`hover:text-blue-800 w-[100%] p-2 ${
				route == window.location.pathname ? 'primary' : 'secondary'
			}`}
			href={route}
		>
			{text}
		</a>
	)

	return (
		<div className="bg-orange text-white grid grid-cols-3 gap-4 text-center">
			{createChild('Inventory', '/')}
			{createChild('Kits', '/kits')}
			{createChild('Impending Returns', '/returns')}
		</div>
	)
}
