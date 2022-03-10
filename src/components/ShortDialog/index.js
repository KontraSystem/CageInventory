import React, { useContext, useCallback } from 'react'

import DialogContext from '../../context/DialogContext'

export default function ShortDialog() {
	const { dialog, setDialog } = useContext(DialogContext)
	const { message, title, onConfirm, isRedButton } = dialog

	const resetDialog = useCallback(() => {
		setDialog({})
	}, [setDialog])

	if (!message) return <></>

	return (
		<div className="w-screen h-screen bg-black bg-opacity-50 absolute top-0 flex justify-center items-center px-[10vw] z-10">
			<div className="bg-white border border-gray-100 rounded-lg tansform text-center w-[400px] max-w-[80vw] p-4 flex flex-col gap-4">
				{title && <h1 className="text-2xl font-bold">{title}</h1>}
				<h2>{message}</h2>
				{onConfirm ? (
					<div className="flex gap-4 justify-center">
						<button
							className="bg-gray-500 hover:bg-gray-300 transition text-white p-2 rounded"
							onClick={resetDialog}
						>
							Cancel
						</button>
						<button
							className={`bg-${
								isRedButton ? 'red' : 'green'
							}-500 hover:bg-${
								isRedButton ? 'red' : 'green'
							}-300 transition text-white p-2 rounded`}
							onClick={() => {
								resetDialog()
								onConfirm()
							}}
						>
							Confirm
						</button>
					</div>
				) : (
					<button
						className="bg-blue-500 hover:bg-blue-300 transition text-white p-2 rounded"
						onClick={resetDialog}
					>
						Close
					</button>
				)}
			</div>
		</div>
	)
}
