import React, { useContext, useState } from 'react'
import DialogContext from '../../context/DialogContext'

export default function CourseCard(props) {
	const { img, course } = props

	const { setDialog } = useContext(DialogContext)

	const toggleDialog = () => {
		setDialog({ img, course })
	}

	return (
		<div
			className="bg-white border border-gray-100 rounded-lg text-center shadow-lg align-center hover:cursor-pointer
        hover:shadow-xl m-6"
			onClick={toggleDialog}
			id={props.id}
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
