import React from 'react'

export default function AdminTable() {
    
	return (
		<div className="flex flex-col">
			<div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
				<div className="inline-block py-2 min-w-full sm:px-6 lg:px-8">
					<div className="overflow-hidden shadow-md sm:rounded-lg">
						<table className="min-w-full">
							<thead className="bg-gray-100 dark:bg-gray-700">
								<tr>
									<th
										scope="col"
										className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
									>
										User
									</th>
									<th
										scope="col"
										className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
									>
										Items
									</th>
									<th
										scope="col"
										className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
									>
										Date Taken
									</th>
									<th
										scope="col"
										className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
									>
										Date Returned
									</th>
								</tr>
							</thead>
							<tbody>
								<tr className="border-b odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700 dark:border-gray-600">
									<td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
										Apple MacBook Pro 17
									</td>
									<td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
										[2]
									</td>
									<td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
										Laptop
									</td>
									<td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
										$2999
									</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
	)
}
