export default function InventoryNavigation() {
	const createChild = (text, route) => (
		<li className={route == window.location.pathname ? 'primary' : 'secondary'}>
			<a className="hover:text-blue-800" href={route}>
				{text}
			</a>
		</li>
	)

	return (
		<div className="bg-orange text-white">
			<ul className="grid grid-cols-3 gap-4 text-center mb-1.5">
				{createChild('Inventory', '/')}
				{createChild('Kits', '/kits')}
				{createChild('Impending Returns', '/returns')}
			</ul>
		</div>
	)
}
