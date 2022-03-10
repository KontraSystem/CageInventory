import React, { useContext } from 'react'

import DialogContext from '../../context/DialogContext'

export default function Card({ item }) {
	const { id, image, item_name } = item

	const { setDialog } = useContext(DialogContext)
	const toggleDialog = () => setDialog({ itemId: id, image })

	return (
		<div
			onClick={toggleDialog}
			className="bg-white border border-gray-100 rounded-lg text-center shadow-lg align-center hover:cursor-pointer hover:shadow-xl hover:-translate-y-2 transition"
		>
			<div>
				<img src={image} className="rounded-t-lg w-full h-44 object-cover" />
			</div>
			<p
				style={{
					textOverflow: 'ellipsis',
					whiteSpace: 'nowrap',
					overflow: 'hidden',
				}}
				className="px-10 py-2 mb-3 mt-3 text-gray-500"
			>
				{item_name}
			</p>
		</div>
	)
}
