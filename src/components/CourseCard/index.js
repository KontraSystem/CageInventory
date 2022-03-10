import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function CourseCard(props) {
	let navigate = useNavigate()
	let reroute

	const routeChange = () => {
		let path = `/course-kits#${props.course.id}`
		navigate(path)
	}

	reroute = () => {
		routeChange()
	}

	return (
		<div
			className="bg-white border border-gray-100 rounded-lg text-center shadow-lg align-center hover:cursor-pointer
        hover:shadow-xl hover:-translate-y-2 transition m-6"
			onClick={reroute} id={props.id}
		>
			<div>
				<img
					src={props.img}
					alt={props.course + ' Course Hero'}
					className="w-full h-44 object-cover"
				/>
			</div>
			<p
				style={{
					textOverflow: 'ellipsis',
					whiteSpace: 'nowrap',
					overflow: 'hidden',
				}}
				className="px-10 py-2 mb-3 mt-3 text-gray-500"
			>
				{props.course}
			</p>
		</div>
	)
}
