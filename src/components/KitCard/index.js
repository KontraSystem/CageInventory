import React, { useContext } from 'react'
import DialogContext from '../../context/DialogContext'

export default function KitCard(kit) {
	const { id, img, course, description } = kit
	const { setDialog } = useContext(DialogContext)
	const toggleDialog = () => setDialog({ kitId: id, img, course, description })

	return (
		<div
			className="bg-white border border-stone-300 rounded-lg text-center shadow-lg align-center hover:cursor-pointer
        hover:shadow-xl hover:-translate-y-2 transition m-6"
		>
			<button onClick={toggleDialog} className="text-center align-center">
				<div>
					<img
						src={img}
						alt={course + ' Kit Sample Image'}
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
					{description}
				</p>
			</button>
		</div>
	)
}
