import React, { useContext, useCallback, useEffect } from 'react'

import DialogContext from './../context/DialogContext'
import './searchBar.css'

export default function InventoryCard() {
	const { setDialog } = useContext(DialogContext)

	const handleDialogOpen = (_productName, url, _numberOfItems, _description) => {
		setDialog({
			isOpen: true,
			productName: _productName,
			imageUrl: url,
			numberOfItems: _numberOfItems,
			description: _description,
		})
	}

	return (
		<div className="m-12 bg-gray-300 shadow rounded">
			<div className="p-4 grid grid-cols-6 gap-8">
				<Cards
					imageUrl={
						'https://cdn.pixabay.com/photo/2014/02/27/16/10/tree-276014__340.jpg'
					}
					productName={'Name of the product'}
					onClick={() =>
						handleDialogOpen(
							'Name of the product',
							'https://cdn.pixabay.com/photo/2014/02/27/16/10/tree-276014__340.jpg',
							1,
							'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris'
						)
					}
				/>
				<Cards
					imageUrl={
						'https://media.istockphoto.com/photos/mountain-landscape-picture-id517188688?k=20&m=517188688&w=0&h=pCjvUkNlz9_esVvQw2Wgc8VJZBMgJrB0FQmktCA0KYY='
					}
					productName={'Name of the product'}
					onClick={() =>
						handleDialogOpen(
							'Name of the product',
							'https://media.istockphoto.com/photos/mountain-landscape-picture-id517188688?k=20&m=517188688&w=0&h=pCjvUkNlz9_esVvQw2Wgc8VJZBMgJrB0FQmktCA0KYY=',
							2,
							'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris'
						)
					}
				/>
				<Cards
					imageUrl={
						'https://images.unsplash.com/photo-1610878180933-123728745d22?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2FuYWRhJTIwbmF0dXJlfGVufDB8fDB8fA%3D%3D&w=1000&q=80'
					}
					onClick={() =>
						handleDialogOpen(
							'Name of the product',
							'https://images.unsplash.com/photo-1610878180933-123728745d22?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2FuYWRhJTIwbmF0dXJlfGVufDB8fDB8fA%3D%3D&w=1000&q=80',
							5,
							'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris'
						)
					}
					productName={'Name of the product'}
				/>
				<Cards
					imageUrl={
						'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg'
					}
					onClick={() =>
						handleDialogOpen(
							'Name of the product',
							'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
							0,
							'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris'
						)
					}
					productName={'Name of the product'}
				/>
				<Cards
					imageUrl={
						'https://media.istockphoto.com/photos/renewable-energy-and-sustainable-development-picture-id1186330948?k=20&m=1186330948&s=612x612&w=0&h=5aNPCcQ8FcZraX44PEhb2mqcHkow2xMITJMHdh28xNg='
					}
					onClick={() =>
						handleDialogOpen(
							'Name of the product',
							'https://media.istockphoto.com/photos/renewable-energy-and-sustainable-development-picture-id1186330948?k=20&m=1186330948&s=612x612&w=0&h=5aNPCcQ8FcZraX44PEhb2mqcHkow2xMITJMHdh28xNg=',
							5,
							'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris'
						)
					}
					productName={'Name of the product'}
				/>
				<Cards
					imageUrl={'https://wallpapercave.com/wp/wp2568543.jpg'}
					onClick={() =>
						handleDialogOpen(
							'Name of the product',
							'https://wallpapercave.com/wp/wp2568543.jpg',
							9,
							'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris'
						)
					}
					productName={'Name of the product'}
				/>
				<Cards
					imageUrl={
						'https://upload.wikimedia.org/wikipedia/commons/c/c8/Altja_j%C3%B5gi_Lahemaal.jpg'
					}
					onClick={() =>
						handleDialogOpen(
							'Name of the product',
							'https://upload.wikimedia.org/wikipedia/commons/c/c8/Altja_j%C3%B5gi_Lahemaal.jpg',
							10,
							'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris'
						)
					}
					productName={'Name of the product'}
				/>
			</div>
			<DetailedCard />
		</div>
	)
}

function Cards({ imageUrl, productName, onClick }) {
	return (
		<div
			onClick={onClick}
			className="bg-white border border-gray-100 rounded-lg text-center hover:shadow-lg align-center hover:cursor-pointer"
		>
			<div>
				<img src={imageUrl} className="rounded-t-lg w-full h-44" />
			</div>
			<p className="px-10 py-2 mb-3 mt-3 text-gray-500">{productName}</p>
		</div>
	)
}

function DetailedCard() {
	const { dialog, setDialog } = useContext(DialogContext)
	const { isOpen, productName, imageUrl, numberOfItems, description } = dialog

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
		<div className="-ml-12 w-screen h-screen bg-black bg-opacity-50 absolute top-0 justify-center items-center">
			<div className="bg-white border border-gray-100 rounded-lg top-1/2 left-1/2 tansform -translate-x-1/2 -translate-y-1/2 text-center absolute">
				<div className="grid grid-cols-2">
					<img src={imageUrl} className="rounded-t-lg" />
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
