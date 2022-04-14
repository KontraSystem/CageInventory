import React, { useEffect, useCallback, useContext, useState } from 'react'
import { getKitItems, postNewKit } from '../../api'
import DialogContext from '../../context/DialogContext'
import InputField from '../InputField'
import Select from 'react-select'
import LoadingIndicator from '../LoadingIndicator'

export default function NewKitDialog(props) {
	const { dialog, setDialog } = useContext(DialogContext)
	const { courses } = dialog
	const [data, setData] = useState()
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

	const getItems = (e) => {
		setData()
		getKitItems(e.target.value).then(({ data }) => setData(data.response))
	}

	useEffect(() => {
		if(courses?.length)
		getKitItems(courses[0].id).then(({ data }) => setData(data.response))
	}, [courses])

	const addNewKit = () => {
		setData(true)
		postNewKit({name, description, itemIds}).then(() => setData(false))
	}
	if(!dialog.isOpen) return null

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
					<form>
						<div className="grid grid-cols-2 p-3 gap-5">
							<div>
								<h1 className="font-bold text-2xl border-b p-4">
									Create a new kit
								</h1>
								<div className=" m-2">
									<div>
										<label htmlFor="classes">For course:</label>
									  	<select name="classes" id="classes" onChange={getItems}>
										    {courses.map((course) => {
												return <option value={course.id} >{course.course_name}</option>			
																    									    	
										    })}
											
									  	</select>
									</div>	
									<div className='mt-4'> 
											{
												data? 
												<Select 
													isMulti
													options={data.map((item) => {
														return {
															label: item.item_name,
															value: item.id
														}
													})}
													isSearchable={false}
													name="kitItems"
												/>
											:  <LoadingIndicator />}
									</div>
								</div>
							</div>
							<div>
								<div className="w-80 max-w-full flex flex-col gap-5">
									<InputField
										id="kit_name"
										name="kit_name"
										label="Kit name"
									/>
									<InputField
										id="kit_name"
										name="kit_name"
										label="Kit description"
										multiline
									/>
								</div>
							</div>
						</div>
					</form>
					<div className="my-3  float-right">
						<button onClick={resetDialog} className="bg-gray-500 p-2 mx-2 rounded-md ">
							Cancel
						</button>
						<button className="bg-green-500 mx-2 p-2 rounded-md" onClick={addNewKit}>
							Save
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}
