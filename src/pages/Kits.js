import { ContentWrapper } from '../components'
import CourseCard from '../components/CourseCard'
import SearchField from 'react-search-field'
import SeniorImage from '../assets/Team-image.png'
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
			<div className="bg-gray-200 m-5">
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
