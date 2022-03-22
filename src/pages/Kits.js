import React, { useEffect, useState } from 'react';
import { ContentWrapper } from '../components'
import CourseCard from '../components/CourseCard'
import CourseCardDetailed from '../components/CourseCardDetailed'
import SearchField from 'react-search-field'
import SeniorImage from '../assets/SeniorTeamManagment.jpg'
import UXImage from '../assets/UX-png.png'
import LoadingIndicator from '../components/LoadingIndicator'
import SurveyImage from '../assets/NMDHero.png'
import { getUserCourses } from '../api'

export default function Kits() {

	const [courseData, setCourseData] = useState([]);
	const [courseId, setCourseId] = useState(undefined);

	useEffect(() => {
		getUserCourses().then((resp) => {
		if(resp) {
			setCourseData(resp.data.response);
		}
	});
		console.log(courseData)
	}, [])

	const handleCardOpen = (id_) => {
		setCourseId(id_)
	};

	return (
		<ContentWrapper>
			<div>
				<div className="inline-block">
					<SearchField
						placeholder="Search"
						classNames="searchContainer ml-6 my-2"
					/>
				</div>
				{courseData.length > 0 ? courseData.map((course) => (
					<CourseCard
						handleCardOpen={() => handleCardOpen(course.id)}
						course={course.course_name}
						description={course.course_description}
						img={SurveyImage}
						key={course.id}
					/>
				)): <LoadingIndicator/>}
				<CourseCardDetailed id={courseId} />
			</div>
		</ContentWrapper>
	)
}
