import React, { useContext, useCallback, useEffect } from 'react'

import DialogContext from '../../context/DialogContext'

export default function DetailedCard() {
	const { dialog, setDialog } = useContext(DialogContext)
	const { isOpen, productName, image, numberOfItems, description } = dialog

	const resetDialog = useCallback(() => {
		setDialog({
			isOpen: false,
			description: '',
			productName: '',
			numberOfItems: null,
			imageUrl: null,
		})
	}, [setDialog])

	useEffect(() => {
		const handleKeydown = (e) => {
			if (e.key === 'Escape') resetDialog()
		}
		window.addEventListener('keydown', handleKeydown)
		return () => window.removeEventListener('keydown', handleKeydown)
	}, [resetDialog])

	if (!isOpen) return null

	return (
		<div className="w-screen h-screen bg-black bg-opacity-50 absolute top-0 justify-center items-center">
			<div className="bg-white border border-gray-100 rounded-lg top-1/2 left-1/2 tansform -translate-x-1/2 -translate-y-1/2 text-center absolute">
				<div className="grid grid-cols-2">
					<img src={image} className="rounded-t-lg" />
					<div>
						<div
							className="absolute right-0 p-5 hover:cursor-pointer"
							onClick={resetDialog}
						>
							<i className="fa-solid fa-x"></i>
						</div>
						<p className="font-bold text-2xl pt-3 mb-1">{productName}</p>
						<p
							className={`${
								numberOfItems == 0 ? 'text-red-500' : 'text-black'
							} text-lg mb-4`}
						>
							Number of items:{' '}
							{numberOfItems == 0 ? 'Out of stock' : numberOfItems}
						</p>
						<p>{description}</p>
					</div>
				</div>
				<p className="my-3 text-gray-500">Tabel of models</p>
				<div className="flex float-right">
					<button className="flex py-2 px-3 bg-green-500 rounded my-1 mx-2 active:bg-green-600">
						<i className="fa-solid fa-pen-to-square"></i>
						<p className="ml-3">Edit</p>
					</button>
					<button className="flex py-2 px-3 bg-blue-500 rounded my-1 mx-2 active:bg-blue-600">
						<i className="fa-solid fa-plus"></i>
						<p className="ml-3">Add</p>
					</button>
				</div>
			</div>
		</div>
	)
}
