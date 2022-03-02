import SearchField from 'react-search-field'
import { ContentWrapper, InventoryCard } from '../components'

export default function Home() {
	return (
		<ContentWrapper>
			<div className="inline-block">
				<SearchField
					placeholder="Search"
					classNames="searchContainer mx-12 my-2"
				/>
				<div className="bg-white inline ml-24">
					<input type="checkbox" />
					<h2 className="inline-block">Available</h2>
				</div>
			</div>
			<InventoryCard />
		</ContentWrapper>
	)
}
