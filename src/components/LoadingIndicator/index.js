export default function LoadingIndicator({
	isLoading = true,
	color = 'orange',
	size = 32,
}) {
	if (!isLoading) return <></>

	const getDynamicCss = () => `border-${color} `

	return (
		<div className="w-full h-[80%] flex justify-center items-center">
			<div
				style={{
					borderTopColor: 'transparent',
					width: size,
					height: size,
				}}
				className={`border-4 ${getDynamicCss()} border-solid rounded-full animate-spin`}
			></div>
		</div>
	)
}
