import { ContentWrapper } from '../components'
import CourseCard from '../components/CourseCard'
import SearchField from 'react-search-field'
import CourseData from './Kits.js'

export default function CourseKits() {
	new URLSearchParams(this.props.location.search).get("#")
	let renderSwitch;
	//Fucking useless
	renderSwitch = () => {
		switch (URLSearchParams) {
			case 'SeniorDevelopmentProjectII':
				return Object.keys(CourseData.name)[0]
			case 'DesigningTheUserExperience':
				return Object.keys(CourseData.name)[1]
			case 'NMDDigitalSurveyI':
				return Object.keys(CourseData.name)[2]
			default:
				return 'rip in peace'
		}
	}

	return (
		<ContentWrapper>
			<div className="bg-gray-200 m-5">
				<div className="inline-block">
					<SearchField
						placeholder="Search"
						classNames="searchContainer mx-12 my-2"
					/>
				</div>
				<p>{CourseData.name}</p>
				{CourseData.map((course) => (
					<CourseCard
						course={course.name}
						img={course.img}
						key={course.id}
					/>
				))}
			</div>
		</ContentWrapper>
	)
}
