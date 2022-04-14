import React, { useState, useEffect } from "react";
import { ContentWrapper, Footer, LoadingIndicator } from '../components'

import { getLogs } from "../api"

export default function AdminLogs() {

	const [logsData, setLogsData] = useState(null)

	useEffect(() => {
		getLogs().then((resp) => {
				console.log(resp.data.response)
			if(resp.data.message === "Success") {
				setLogsData(resp.data.response)
			}
		})
	}, [])

	const getSeverity = (severity) => {
		const severityInt = parseInt(severity)
		switch(severityInt) {
			case 1: return "Low"
			case 2: return "Moderate"
			case 3: return "High"
			case 4: return "Very High"
			case 5: return "Urgent"
		}
	}

	return (
		<ContentWrapper page="admin">
			{ logsData ? 
				(
					<table className="min-w-full">
								<thead className="bg-gray-100">
									<tr>
										<th
											scope="col"
											className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase "
										>
											Activity
										</th>
										<th
											scope="col"
											className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase "
										>
											Activity Description
										</th>
										<th
											scope="col"
											className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase "
										>
											Activity On
										</th>
										<th
											scope="col"
											className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase "
										>
											Username
										</th>
										<th
											scope="col"
											className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase "
										>
											Severity
										</th>
									</tr>
								</thead>
								<tbody>
									{logsData.map((item, index) => (
										<tr
											key={index}
											className="border-b odd:bg-white even:bg-gray-50"
										>
											<td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap">
												{item.activity}
											</td>
											<td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap ">
												{item.activity_description}	
											</td>
											<td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap ">
												{item.activity_on}
											</td>
											<td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap ">
												{item.username}
											</td>
											<td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap ">
												{getSeverity(item.severity)}
											</td>
										</tr>
									))}
								</tbody>
							</table>
				) : <LoadingIndicator/>
			}
			<Footer/>			
		</ContentWrapper>
	)
}
