import React from 'react'
import { AdminTable, ContentWrapper } from '../components'

export default function Admin() {
	const info = {
		user: 'User',
		item: 'item1',
		dateTaken: '1/1/2022',
		dateReturned: '4/1/2022',
	}
	return (
		<ContentWrapper>
			<AdminTable />
		</ContentWrapper>
	)
}
