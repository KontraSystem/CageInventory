import { ContentWrapper } from '../components'
//import CourseData from './Kits.js'
//import { useSearchParams } from 'react-router-dom'
import SeniorKits from '../components/CourseKits/Senior/index'
//import UXKits from "../components/CourseKits/UX"
//import NMDKits from "../components/CourseKits/NMD"

export default function CourseKits() {
	/**
	const [searchParams] = useSearchParams()

	const renderSwitch = () => {
		const course = searchParams.get('course')

		switch (course) {
			case 'SeniorDevelopmentProjectII':
				return Object.keys(CourseData.name)[0]

			case 'DesigningTheUserExperience':
				return Object.keys(CourseData.name)[1]

			case 'NMDDigitalSurveyI':
				return Object.keys(CourseData.name)[2]

			default:
				return 'rip in peace'
		}
	}*/

	return (
		<ContentWrapper>
			<SeniorKits />
		</ContentWrapper>
	)
}
