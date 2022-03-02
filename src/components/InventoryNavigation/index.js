export default function InventoryNavigation() {
	const createChild = (text, route) => (
		<li
			className={`${
				route == window.location.pathname ? 'primary' : 'secondary'
			}  p-2`}
		>
			<a className="hover:text-blue-800" href={route}>
				{text}
			</a>
		</li>
	)

	return (
		<div className="bg-orange text-white">
			<ul className="grid grid-cols-3 gap-4 text-center">
				{createChild('Inventory', '/')}
				{createChild('Kits', '/kits')}
				{createChild('Impending Returns', '/returns')}
			</ul>
		</div>
	)
}
