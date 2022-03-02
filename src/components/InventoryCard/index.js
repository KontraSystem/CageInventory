import React, { useContext } from 'react'

import DialogContext from '../../context/DialogContext'

export default function Card({ item }) {
	const { image, item_name } = item

	const { setDialog } = useContext(DialogContext)
	const toggleDialog = () => {
		setDialog({
			isOpen: true,
			...item,
		})
	}

	return (
		<>
			<div
				onClick={toggleDialog}
				className="bg-white border border-gray-100 rounded-lg text-center shadow-lg align-center hover:cursor-pointer hover:shadow-xl hover:-translate-y-2 transition"
			>
				<div>
					<img src={image} className="rounded-t-lg w-full h-44" />
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
		</>
	)
}

// import React, { useContext, useCallback, useEffect } from 'react'

// import DialogContext from './../context/DialogContext'
// import './searchBar.css'

// export default function InventoryCard() {
// 	const { setDialog } = useContext(DialogContext)

// 	const handleDialogOpen = (_productName, url, _numberOfItems, _description) => {
// 		setDialog({
// 			isOpen: true,
// 			productName: _productName,
// 			imageUrl: url,
// 			numberOfItems: _numberOfItems,
// 			description: _description,
// 		})
// 	}

// 	return (
// 		<div className="mx-12 bg-gray-300 shadow rounded relative">
// 			<div className="p-4 grid grid-cols-6 gap-8"></div>
// 			<DetailedCard />
// 		</div>
// 	)
// }

//
