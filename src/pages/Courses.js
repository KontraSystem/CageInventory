import NavigationBar from '../components/NavigationBar'

export default function Courses() {
	return (
		<div
			className={`${navBarClicked ? 'grid grid-flow-col auto-cols-min' : ''}`}
		>
			<div className="w-screen">
				<NavigationBar onClick={toggleVisibility} />
				<div>courses</div>
			</div>
		</div>
	)
}
