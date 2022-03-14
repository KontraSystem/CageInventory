import React, { useContext } from 'react'
import SearchField from 'react-search-field'
import DialogContext from '../../context/DialogContext'
import { ContentWrapper } from '../index'

export default function ProfessorTable() {
	const userInfo = [
		{
			professor: 'Martin Žagar',
			kits: '2',
			course: 'SeniorDevelopmentProjectII',
		},
		{
			professor: 'Aleksander Radovan',
			kits: '2',
			course: 'DesigningTheUserExperience',
		},
		{
			professor: 'Ante Poljičak',
			kits: '2',
			course: 'NMDDigitalSurveyI',
		},
	]

	const handleSearch = () => {
		userInfo.find((el) => el.length < 7)
	}

	return (
		<ContentWrapper>
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
												Professor
											</th>
											<th
												scope="col"
												className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase "
											>
												Kits
											</th>
											<th
												scope="col"
												className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase "
											>
												Courses
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
													{item.professor}
												</td>
												<td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap ">
													<button className="text-blue-500">
														<a href={item.course}>[{item.kits}]</a>
													</button>
												</td>
												<td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap ">
													{item.course}
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
		</ContentWrapper>
	)
}
