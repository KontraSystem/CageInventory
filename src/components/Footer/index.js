export default function Index() {
	return (
		<footer className="shadow-inner py-6 justify-between fixed inset-x-0 bottom-0 flex">
				<p className='ml-16 mt-4 font-bold text-md'>&copy; Copyright 2022, RIT Cage Inventory</p>
				<img
					src={require('../../assets/rit-logo-rochester-institute-of-technology.png')}
					alt="Rochester Institute of Technology Logo"
					className="w-1/6 mb-2"
				/>
		</footer>
	)
}
