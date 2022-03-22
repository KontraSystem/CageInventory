import React, { useEffect, useCallback, useContext } from 'react'
import { getCourseKits } from '../../api'
import DialogContext from '../../context/DialogContext'

export default function CourseCardDetailed(props) {
	const { id } = props;
	const { dialog, setDialog } = useContext(DialogContext)
	const { img, course, description } = dialog

	useEffect(() => {
		console.log('id', id)
		if(id) {
			getCourseKits(id).then((resp) => {
				console.log(resp)
			})
		}
	}, [id])

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
								{description}
							</p>
							<div className="bg-gray-200 m-2">
								
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
