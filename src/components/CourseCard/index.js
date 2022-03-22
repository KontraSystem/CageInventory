import React, { useContext } from 'react'
import DialogContext from '../../context/DialogContext'

export default function CourseCard(props) {
	const { handleCardOpen, img, course, description, id } = props

	const { setDialog } = useContext(DialogContext)

	const toggleDialog = () => {
		handleCardOpen();
		setDialog({ id, img, course, description })
	}

	return (
		<div
			className="bg-white border border-gray-100 rounded-lg text-center shadow-lg align-center hover:cursor-pointer
        hover:shadow-xl m-6"
			onClick={toggleDialog}
			id={id}
		>
			<div>
				<img
					src={img}
					alt={course + ' Course Hero'}
					className="w-full h-48 object-cover"
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
				{course}
			</p>
		</div>
	)
}
