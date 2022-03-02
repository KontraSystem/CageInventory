function LoadingButton({ text, isLoading, className }) {
	return (
		<button
			className={
				'bg-green-500 hover:bg-green-300 transition text-white font-bold p-2 rounded w-32 flex gap-4 justify-center ' +
				className
			}
			type="submit"
			disabled={isLoading}
		>
			{isLoading && (
				<div
					style={{ borderTopColor: 'transparent' }}
					className="w-6 h-6 border-4 border-white-400 border-solid rounded-full animate-spin"
				></div>
			)}
			{text}
		</button>
	)
}

export default LoadingButton
