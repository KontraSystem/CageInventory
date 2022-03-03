import { useNavigate } from 'react-router-dom'
import { CgLogOut } from 'react-icons/cg'
import {
	MdOutlineInventory2,
	MdOutlineAdminPanelSettings,
	MdOutlineInventory,
} from 'react-icons/md'

export default function SideBar() {
	const role = localStorage.getItem('role')
	const firstName = localStorage.getItem('first_name')
	const lastName = localStorage.getItem('last_name')
	const navigate = useNavigate()

	const onLogout = () => {
		localStorage.clear()
		navigate('/')
	}

	const createNavItem = (text, route, icon) => (
		<a
			href={route}
			className="border-b-2 p-4 block hover:bg-gray-200 transition flex items-center justify-between"
		>
			<span>{text}</span>
			{icon}
		</a>
	)

	return (
		<div className="flex flex-col group h-screen shadow bg-white w-60 sidebar">
			<div className="border-b-4 border-gray-400">
				<div className="flex flex-row p-3 pt-3.5 items-center">
					<img
						className="object-cover w-12 h-12 rounded-full"
						src="http://cdn.onlinewebfonts.com/svg/img_568657.png"
						alt="Profile image"
					/>
					<div className="flex flex-col items-center w-full">
						<p className="font-bold text-xl">
							{firstName} {lastName}
						</p>
						<p>{role}</p>
					</div>
				</div>
			</div>
			<div className="flex flex-col h-full">
				{createNavItem('Cage Inventory', '/', <MdOutlineInventory2 />)}
				{role == 'Administrator' &&
					createNavItem(
						'Admin page',
						'/admin',
						<MdOutlineAdminPanelSettings />
					)}
				{(role == 'Administrator' || role == 'Professor') &&
					createNavItem(
						'Professor Kits',
						'/professor-kits',
						<MdOutlineInventory />
					)}
				<a
					href={'/'}
					className="border-t-2 p-4 block hover:bg-gray-200 transition mt-auto flex items-center justify-between"
					onClick={onLogout}
				>
					<span>Logout</span>
					<CgLogOut />
				</a>
			</div>
		</div>
	)
}
