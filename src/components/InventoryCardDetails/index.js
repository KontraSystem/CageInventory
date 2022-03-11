import React, { useContext, useCallback, useEffect, useState } from 'react'
import { LoadingIndicator } from '..'
import { getItemById, postCartAdd } from '../../api'
import style from './InventoryCardDetails.module.scss'

import DialogContext from '../../context/DialogContext'
import LoadingButton from '../LoadingButton'

export default function DetailedCard() {
	const { dialog, setDialog } = useContext(DialogContext)
	const { image, itemId } = dialog
	const [data, setData] = useState()
	const { item_name, item_description, items: models } = data ?? {}
	const [loadingAddToCart, setLoadingAddToCart] = useState()

	const resetDialog = useCallback(() => {
		setDialog({})
	}, [setDialog])

	useEffect(() => {
		const handleKeydown = (e) => {
			if (e.key === 'Escape') resetDialog()
		}
		window.addEventListener('keydown', handleKeydown)
		return () => window.removeEventListener('keydown', handleKeydown)
	}, [resetDialog])

	useEffect(() => {
		setData()
		if (itemId) getItemById(itemId).then(({ data }) => setData(data.response))
		// .catch((err) => console.error(err))
	}, [itemId])

	if (!itemId) return <></>

	// const getAvailabilityPill = (availability) =>
	// 	availability ? (
	// 		<span className="rounded-full bg-blue-400 px-2 text-white">
	// 			Available
	// 		</span>
	// 	) : (
	// 		<span className="rounded-full bg-red-400 px-2 text-white">Taken</span>
	// 	)

	//* Functionality
	const onAddToCart = () => {
		setLoadingAddToCart(true)
		postCartAdd({ isKit: false, itemId }).then(() => setLoadingAddToCart(false))
	}

	return (
		<div className="w-screen h-screen bg-black bg-opacity-50 absolute top-0 flex justify-center items-center px-[10vw]">
			<div className="bg-white border border-gray-100 rounded-lg tansform text-center">
				{!data ? (
					<div className="p-16">
						<LoadingIndicator isLoading={true} />
					</div>
				) : (
					<div className="w-[70vw] max-w-[800px] relative">
						<a
							className="absolute -right-4 -top-4 rounded-full bg-white shadow-lg w-10 h-10 hover:bg-gray-200 hover:cursor-pointer transition flex justify-center items-center z-99"
							onClick={resetDialog}
						>
							X
						</a>
						<h1 className="font-bold text-2xl border-b p-4">
							{item_name}
						</h1>
						<div className="grid grid-cols-2 h-[240px] w-full relative">
							<div className="h-[240px] p-4">
								<div className="h-full w-full relative">
									<img
										src={image}
										className="rounded-lg max-w-full max-h-full m-auto absolute top-0 left-0 right-0 bottom-0 shadow-lg"
									/>
								</div>
							</div>
							<div className="h-[240px] flex flex-col relative">
								<div className="max-h-full overflow-auto p-4">
									{item_description}
								</div>
							</div>
							<div className="absolute bottom-[-16px] right-4 z-20">
								<LoadingButton
									onClick={onAddToCart}
									isLoading={loadingAddToCart}
									text="Add to cart"
									className="w-48"
								/>
							</div>
						</div>
						{/* <div>
							<div
								className={`${style.customTableRow} ${style.header} pr-4`}
							>
								<span>Name</span>
								<span>Location</span>
								<span>Availability</span>
							</div>
							<div className="max-h-[170px] overflow-auto">
								{models.map((model) => (
									<div
										className={`${style.customTableRow} border-t`}
									>
										<span>{model.model}</span>
										<span>{model.location_name}</span>
										<span>
											{getAvailabilityPill(model.availability)}
										</span>
										<div className="flex justify-center">
											<button
												className="flex bg-green-500 rounded-full hover:bg-green-300 transition text-white p-1"
												onClick={() => addRequest(model.id)}
											>
												<i className="fa-solid fa-plus"></i>
											</button>
										</div>
									</div>
								))}
							</div>
						</div> */}
					</div>
				)}
			</div>
		</div>
	)
}
