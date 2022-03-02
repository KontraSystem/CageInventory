export default function SideBar() {
	const createNavItem = (text, route) => (
		<li className="hover:bg-gray-200 transition">
			<a href={route}>
				<div className="border-b-2 p-4">{text}</div>
			</a>
		</li>
	)

	return (
		<div className="flex flex-col group h-screen shadow bg-white w-60 sidebar">
			<div className="border-b-4 border-gray-400">
				<div className="flex flex-row gap-4 p-4 items-center">
					<img
						className="object-cover w-12 h-12 rounded-full"
						src="http://cdn.onlinewebfonts.com/svg/img_568657.png"
						alt="Profile image"
					/>
					<div className="flex flex-col width-[100%]">
						<p className="font-bold text-xl">Josip Muzić</p>
						<p className="ml-8">Admin</p>
					</div>
				</div>
			</div>
			<ul>
				{createNavItem('Cage Inventory', '/')}
				{createNavItem('Admin page', '/admin')}
				{createNavItem('Professor Kits', '/professor-kits')}
			</ul>
		</div>
	)
}
