import { ContentWrapper } from '../components'
import CourseCard from '../components/CourseCard'
import SearchField from 'react-search-field'
import SeniorImage from '../assets/SeniorTeamManagment.jpg'
import UXImage from '../assets/UX-png.png'
import SurveyImage from '../assets/NMDHero.png'

export default function Kits() {
	const CourseData = [
		{
			id: 1,
			name: 'SeniorDevelopmentProjectII',
			img: SeniorImage,
			ref: '/SeniorDevelopmentProjectII',
		},
		{
			id: 2,
			name: 'DesigningTheUserExperience',
			img: UXImage,
			ref: '/DesigningTheUserExperience',
		},
		{
			id: 3,
			name: 'NMDDigitalSurveyI',
			img: SurveyImage,
			ref: '/NMDDigitalSurveyI',
		},
	]
	return (
		<ContentWrapper>
			<div className="m-5">
				<div className="inline-block">
					<SearchField
						placeholder="Search"
						classNames="searchContainer mx-12 my-2"
					/>
				</div>
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
