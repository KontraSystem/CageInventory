import { LoadingIndicator } from '..'

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
			<LoadingIndicator color="white-400" size={6} isLoading={isLoading} />
			{text}
		</button>
	)
}

export default LoadingButton
