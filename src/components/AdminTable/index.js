import React, { useState, useRef } from 'react'
import SearchField from 'react-search-field'
import { Popover } from 'react-tiny-popover'

export default function AdminTable() {
	const userInfo = [
		{
			user: 'fg2027',
			items: [
				{ name: 'laptop', dateReturned: '5/1/2022' },
				{ name: 'laptop2', dateReturned: '5/1/2022' },
			],
			dateTaken: '2/1/2022',
			dateReturned: '5/1/2022',
		},
		{
			user: 'lk1574',
			items: [
				{ name: 'laptop', dateReturned: '5/1/2022' },
				{ name: 'laptop2', dateReturned: '5/1/2022' },
				{ name: 'laptop3', dateReturned: '5/1/2022' },
				{ name: 'laptop4', dateReturned: '5/1/2022' },
			],
			dateTaken: '2/1/2022',
			dateReturned: '5/1/2022',
		},
		{
			user: 'mxm9894',
			items: [{ name: 'laptop', dateReturned: '5/1/2022' }],
			dateTaken: '2/1/2022',
			dateReturned: '5/1/2022',
		},
		{
			user: 'jm1132',
			items: [
				{ name: 'laptop', dateReturned: '5/1/2022' },
				{ name: 'laptop2', dateReturned: '5/1/2022' },
				{ name: 'laptop3', dateReturned: '5/1/2022' },
			],
			dateTaken: '2/1/2022',
			dateReturned: '5/1/2022',
		},
	]

	const handleSearch = () => {
		userInfo.find((el) => el.length < 7)
	}

	const [listOpen, isListOpen] = useState(false)
	const onListClick = () => isListOpen(!listOpen)

	console.log(listOpen)

	return (
		<div>
			<SearchField
				placeholder="Search user"
				classNames="flex sm:mx-12 lg:mx-16 my-2"
				onEnter={handleSearch}
			/>
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
											User
										</th>
										<th
											scope="col"
											className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase "
										>
											Items
										</th>
										<th
											scope="col"
											className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase "
										>
											Date Taken
										</th>
										<th
											scope="col"
											className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase "
										>
											Date Returned
										</th>
									</tr>
								</thead>
								<tbody>
									{userInfo.map((item, index) => (
										<tr
											key={index}
											className="border-b odd:bg-white even:bg-gray-50"
										>
											<td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap">
												{item.user}
											</td>
											<td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap ">
												<button
													className="text-blue-500"
													onClick={onListClick}
												>
													[{item.items.length}]
												</button>
											</td>
											<td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap ">
												{item.dateTaken}
											</td>
											<td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap ">
												{item.dateReturned}
											</td>
										</tr>
									))}
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
