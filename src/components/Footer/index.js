import '../NavigationBar/navigationCSS.css'

export default function Index() {
	return (
		<footer className="footer shadow-inner">
			<small className="footer-text">
				&copy; Copyright 2022, RIT Cage Inventory
				<img
					src={require('../../assets/rit-logo-rochester-institute-of-technology.png')}
					alt="Rochester Institute of Technology Logo"
					className="footer-logo w-1/6"
				/>
			</small>
		</footer>
	)
}
