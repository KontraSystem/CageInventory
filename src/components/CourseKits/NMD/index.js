import SearchField from 'react-search-field'
import KitCard from '../../KitCard'
import NMDImg from '../../../assets/NMDHero.png'
import ContentWrapper from '../../ContentWrapper'

export default function NMDKits() {
	return (
		<ContentWrapper>
			<div className="m-5">
				<h2 className="text-center text-3xl font-normal leading-normal mt-0 mb-2 text-amber-600">
					NMD Digital Survey I
				</h2>
				<div className="inline-block">
					<SearchField
						placeholder="Search"
						classNames="searchContainer mx-12 my-2"
					/>
				</div>
				<KitCard course="NMD" img={NMDImg} description="Main NMD Kit" />
				<KitCard
					course="Senior Project II"
					img={NMDImg}
					description="Secondary NMD Kit"
				/>
			</div>
		</ContentWrapper>
	)
}
