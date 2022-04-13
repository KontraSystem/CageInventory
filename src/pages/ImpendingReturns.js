import { ContentWrapper, Footer, RequestTable, ReturnsTable } from '../components'

export default function ImpendingReturns() {
	return (
		<ContentWrapper page="admin">
			<div className="grid grid-rows-2 grid-flow-row h-full" >
				<div className="" >
					<RequestTable/>
				</div>
				<div className="">
					<ReturnsTable/>
				</div>
			</div>
			<Footer/>			
		</ContentWrapper>
	)
}
