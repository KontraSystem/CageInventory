import React, { useState, useEffect, Fragment } from "react";

import { ContentWrapper, Footer, LoadingIndicator } from '../'

import { getRequests, postAcceptRequest, postRejectRequest } from "../../api"

export default function RequestTable(props) {

	const [requestData, setRequestData] = useState();

	useEffect(() => {
		handleGetRequests()
	}, [])

	const handleGetRequests = () => {
		getRequests().then((resp) => {
			console.log(resp.data.response)
			if(resp.data.message === "Success") {
				setRequestData(resp.data.response)
			}
		})
	}

	const handleAcceptRequest = (userId, requestId) => {
		postAcceptRequest({userId, requestId}).then((resp) => {
			if(resp.data.message === "Success") {
				console.log(resp)
			}
		}).finally(() => {
			handleGetRequests()
		})
	}

	const handleRejectRequest =(userId, requestId) => {
		postRejectRequest({userId, requestId}).then((resp) => {
			console.log(resp)
		}).finally(() => {
			handleGetRequests()
		});
	}

	return (		
			<div className="flex py-2 min-w-min sm:px-6 lg:px-8">
					{ requestData ? 
						(
							<table className="grid table-fixed">
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
													Count
												</th>
												<th
													scope="col"
													className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase "
												>
													Email
												</th>
												<th/>
												<th/>
											</tr>
										</thead>
										<tbody className=" block h-1/4 overflow-scroll">
											{requestData.map((item, index) => (
												<tr
													key={index}
													className="border-b odd:bg-white even:bg-gray-50"
												>
													<td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap">
														{item.first_name}
													</td>
													<td className="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap ">
														{item.last_name}	
													</td>
													<td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap ">
														{item.count}
													</td>
													<td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap ">
														{item.email}
													</td>
													<td className="py-4 px-6 text-sm text-white whitespace-nowrap ">
														<button onClick={() => handleAcceptRequest(item.user_id, item.id)} className="bg-green-500 p-2 rounded-md my-3 float-left mx-4">
															Accept
														</button>
														<button onClick={() => handleRejectRequest(item.user_id, item.id)} className="bg-red-500 p-2 rounded-md my-3 float-left mx-4">
															Reject
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