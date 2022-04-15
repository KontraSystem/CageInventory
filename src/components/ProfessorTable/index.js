import React, { useContext, useState, useEffect } from 'react'
import { Popover } from 'react-tiny-popover'
import SearchField from 'react-search-field'
import DialogContext from '../../context/DialogContext'
import { ContentWrapper } from '../index'
import { getCourseKits, getUserCourses } from '../../api'
import LoadingIndicator from '../LoadingIndicator'
import NewKitDialog from '../NewKitDialog';

export default function ProfessorTable(props) {
	const [courses, setCourses] = useState([])
	const [professorKits, setProfessorKits] = useState([]);
	const [showItems, setShowItems] = useState([]);

	const { setDialog } = useContext(DialogContext)

	useEffect(() => {
	 	getUserCourses().then((resp) => {
			if(resp.data.response) {
				setCourses(resp.data.response.map((course) => course));
			}
		})

	}, [])

	useEffect(() => {
		if(courses.length > 0) {
			let temp_kits = []
			let counter = 0;
			courses.forEach((course, c) => {
				getCourseKits(course.id).then((resp) => {
					temp_kits = temp_kits.concat(resp.data.response)
				}).finally(() => {
					if(counter === courses.length) {
						const tempShowItems = []
						setProfessorKits(temp_kits.map((kit) => {
							const tableItem = kit
							tableItem.course = course.course_name
							tempShowItems.push(false);
							return tableItem
						}));
						setShowItems(tempShowItems)
					}
				})
				counter++;
			})
		}
	}, [courses])

	const handleShowItems =(index) => {
		const tempShow = showItems;
		tempShow[index] = !tempShow[index] 
		console.log(tempShow)
		setShowItems(tempShow);
	}

	const handleSearch = () => {
		userInfo.find((el) => el.length < 7)
	}

	const handleDialog = () => {
		setDialog({ isOpen: true, courses: courses })
	}

	useEffect(() => {
		console.log(showItems[0])
	}, [showItems])


	return (
		<ContentWrapper>
			<div>
				<div>
					<SearchField
						placeholder="Search user"
						classNames="flex sm:mx-12 lg:mx-16 my-2"
						onEnter={handleSearch}
					/>
					<button onClick={handleDialog} className="bg-green-500 p-2 rounded-md my-3 float-right mx-4">
						{"+ New Kit"} 
					</button>
				</div>
				<div className="flex flex-col">
					<div className="overflow-x-auto sm:mx-6 lg:mx-8">
						<div className="inline-block py-2 min-w-full sm:px-6 lg:px-8">
							<div className="overflow-hidden shadow-md sm:rounded-lg">
								<table className="min-w-full">
									<thead className="bg-gray-100">
										<tr>
											<th
												scope="col"
												className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase "
											>
												Kit name
											</th>
											<th
												scope="col"
												className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase "
											>
												Kit description
											</th>
											<th
												scope="col"
												className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase "
											>
												Item Count
											</th>
										</tr>
									</thead>
									<tbody>
										{professorKits.length > 0 ? professorKits.map((item, index) => (
											<tr
												key={index}
												className="border-b odd:bg-white even:bg-gray-50"
											>
												<td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap">
													{item.kit_name}
												</td>
												<td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap ">
													<Popover
														isOpen={showItems[index]}
														position={['bottom']}
														content={() => (
															<div>
																<table>
																	<thead>
																		Item Name
																	</thead>
																	<tbody>		
																		{item.item_ids_list.map((item) => {
																			<td>{item}</td>
																		})}
																	</tbody>
																</table>
															</div>
														)}
														onClickOutside={() => handleShowItems(index)}
													>
														<button onClick={() => handleShowItems(index)} className="text-blue-500">
															<a>{item.kit_description}</a>
														</button>
													</Popover>
												</td>
												<td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap ">
													{item.item_ids_list.length}
												</td>
											</tr>
										)) : <LoadingIndicator/>}
									</tbody>
								</table>
							</div>
						</div>
					</div>
				</div>
			</div>
			<NewKitDialog/>
		</ContentWrapper>
	)
}
