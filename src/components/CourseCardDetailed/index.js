import React, { useEffect, useCallback, useContext } from 'react'

import DialogContext from '../../context/DialogContext'

export default function CourseCardDetailed() {
	const { dialog, setDialog } = useContext(DialogContext)
	const { img, course } = dialog

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

	if (!course) return null

	return (
		<div className="w-screen h-screen bg-black bg-opacity-50 absolute top-0 flex justify-center items-center px-[10vw]">
			<div className="bg-white border border-gray-100 rounded-lg tansform text-center">
				<div className="w-[70vw] max-w-[800px] relative">
					<a
						className="absolute -right-4 -top-4 rounded-full bg-white shadow-lg w-10 h-10 hover:bg-gray-200 hover:cursor-pointer transition flex justify-center items-center z-99"
						onClick={resetDialog}
					>
						X
					</a>
					<div className="grid grid-cols-2 p-3 gap-5">
						<div>
							<img src={img} className="rounded-md" />
						</div>
						<div>
							<h1 className="font-bold text-2xl border-b p-4">
								{course}
							</h1>
							<p className="mt-2">
								This is a brief description of the course
							</p>
							<div className="bg-gray-200 m-2">
								<table className="min-w-full m-2">
									<thead className="font-bold text-lg">
										Items in kit
									</thead>
									<thead>
										<tbody>
											<th>
												<tr>what</tr>
												<tr>what2s</tr>
											</th>
											<th>
												<tr>what</tr>
											</th>
										</tbody>
									</thead>
								</table>
							</div>
						</div>
					</div>
					<button className="bg-green-500 p-2 rounded-md my-3 float-left mx-4">
						Edit
					</button>
				</div>
			</div>
		</div>
	)
}
