export default function LoadingIndicator({
	isLoading = true,
	color = 'orange',
	size = 10,
}) {
	if (!isLoading) return <></>

	return (
		<div className="w-[100%] h-[80%] flex justify-center items-center">
			<div
				style={{ borderTopColor: 'transparent' }}
				className={`w-${size} h-${size} border-4 border-${color} border-solid rounded-full animate-spin`}
			></div>
		</div>
	)
}
