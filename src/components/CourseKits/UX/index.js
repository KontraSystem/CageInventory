import SearchField from 'react-search-field'
import KitCard from '../../KitCard'
import UXImage from '../../../assets/UX-png.png'
import ContentWrapper from '../../ContentWrapper'

export default function UXKits() {
	return (
		<ContentWrapper>
			<div className="m-5">
				<h2 className="text-center text-3xl font-normal leading-normal mt-0 mb-2 text-amber-600">Designing The User Experience</h2>
				<div className="inline-block">
					<SearchField
						placeholder="Search"
						classNames="searchContainer mx-12 my-2"
					/>
				</div>
				<KitCard
					course="Senior Project II"
					img={UXImage}
					description="Main Senior Kit"
				/>
				<KitCard
					course="Senior Project II"
					img={UXImage}
					description="Secondary Senior Kit"
				/>
			</div>
		</ContentWrapper>
	)
}
