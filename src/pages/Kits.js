import { ContentWrapper } from '../components'
import CourseCard from '../components/CourseCard'
import CourseCardDetailed from '../components/CourseCardDetailed'
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
		},
		{
			id: 2,
			name: 'DesigningTheUserExperience',
			img: UXImage,
		},
		{
			id: 3,
			name: 'NMDDigitalSurveyI',
			img: SurveyImage,
		},
	]
	return (
		<ContentWrapper>
			<div>
				<div className="inline-block">
					<SearchField
						placeholder="Search"
						classNames="searchContainer ml-6 my-2"
					/>
				</div>
				{CourseData.map((course) => (
					<CourseCard
						course={course.name}
						img={course.img}
						key={course.id}
					/>
				))}
				<CourseCardDetailed />
			</div>
		</ContentWrapper>
	)
}
