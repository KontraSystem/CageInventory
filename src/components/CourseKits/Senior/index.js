import KitCard from '../../KitCard'
import SearchField from 'react-search-field'
import SeniorImage from '../../../assets/Team-image.png'
import ContentWrapper from '../../ContentWrapper'

export default function SeniorKits() {
	return (
		<ContentWrapper>
			<div className="m-5">
				<h2 className="text-center text-3xl font-normal leading-normal mt-0 mb-2 text-amber-600">Senior Project II</h2>
				<div className="inline-block">
					<SearchField
						placeholder="Search"
						classNames="searchContainer mx-12 my-2"
					/>
				</div>
				<KitCard
					course="Senior Project II"
					img={SeniorImage}
					description="Main Senior Kit"
				/>
				<KitCard
					course="Senior Project II"
					img={SeniorImage}
					description="Secondary Senior Kit"
				/>
			</div>
		</ContentWrapper>
	)
}
