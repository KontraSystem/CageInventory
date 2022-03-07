import '../NavigationBar/navigationCSS.css'

export default function Index() {
	return (
		<footer className="footer ">
			<img
				src={require('../../assets/rit-logo-rochester-institute-of-technology.png')}
				alt="Rochester Institute of Technology Logo"
				className="footer-logo w-1/6 m-6"
			/>
		</footer>
	)
}
