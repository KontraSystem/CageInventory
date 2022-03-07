import { useEffect, useState } from 'react'
import SearchField from 'react-search-field'
import { getItems } from '../api'
import { ContentWrapper, InventoryCard, InventoryCardDetails } from '../components'
import LoadingIndicator from '../components/LoadingIndicator'

export default function Home() {
	const [data, setData] = useState()

	useEffect(() => {
		getItems()
			.then(({ data }) => {
				const { response } = data

				setData(
					response.map((item) => {
						return {
							...item,
							image: 'https://images.prismic.io/frameworkmarketplace/cca31de3-3b75-4932-af96-7646b7eba6c7__DSC3630-Edit-cropped.jpg?auto=compress,format',
						}
					})
				)
			})
			.catch((err) => {
				setIsLoading(false)
				setError(err.response.data?.message ?? 'Something went wrong')
			})
	}, [])

	return (
		<ContentWrapper>
			<div className="inline-block">
				<SearchField
					placeholder="Search"
					classNames="mx-12 my-2"
				/>
				<div className="bg-white inline ml-24">
					<input type="checkbox" />
					<h2 className="inline-block">Available</h2>
				</div>
			</div>
			<LoadingIndicator isLoading={!data} />
			{data && (
				<div className="mx-12 overflow-x-auto px-4 py-8 grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-8">
					{data.map((item) => (
						<InventoryCard item={item} key={item.id} />
					))}
				</div>
			)}
			<InventoryCardDetails />
		</ContentWrapper>
	)
}
