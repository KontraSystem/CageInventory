import React, { useState, useEffect, Fragment } from "react";

import { ContentWrapper, Footer, LoadingIndicator } from '../'

import { getInventoryCheckout } from "../../api"


export default function ReturnsTable(props) {

	const [returnData, setReturnData] = useState();

	useEffect(() => {
		getInventoryCheckout().then((resp) => {
				console.log(resp.data.response)
			if(resp.data.message === "Success") {
				setReturnData(resp.data.response)
			}
		})
	}, [])

	return (					
		<div className="flex py-2 min-w-min sm:px-6 lg:px-8">
			{ returnData ? 
				(
					<table className="grid table-fixed ">
								<thead className="bg-gray-100">
									<tr>
										<th
											scope="col"
											className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase "
										>
											First Name
										</th>
										<th
											scope="col"
											className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase "
										>
											Last Name
										</th>
										<th
											scope="col"
											className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase "
										>
											Email
										</th>
										<th
											scope="col"
											className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase "
										>
											Item Count
										</th>
										<th
											scope="col"
											className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase "
										></th>
									</tr>
								</thead>
								<tbody className="block h-1/4 overflow-scroll">
									{returnData.map((item, index) => (
										<tr
											key={index}
											className="border-b odd:bg-white even:bg-gray-50"
										>
											<td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap">
												{item.first_name}
											</td>
											<td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap ">
												{item.last_name}	
											</td>
											<td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap ">
												{item.email}
											</td>
											<td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap ">
												{item.count}
											</td>
											<td className="py-4 px-6 text-sm text-white whitespace-nowrap ">
												<button className="bg-gray-500 p-2 rounded-md my-3 float-left mx-4">
													Details
												</button>
											</td>
										</tr>
									))}
								</tbody>
							</table>
				) : <LoadingIndicator/>
			}
		</div>
		);
}