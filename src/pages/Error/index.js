import React from 'react'

function ErrorPage() {
	const onRetry = () => {}

	return (
		<div className="misc-wrapper">
			<div className="misc-inner p-2 p-sm-3">
				<div className="w-100 text-center">
					<h2 className="mb-1">Something went wrong</h2>
					<p className="mb-2">
						It appears that something went wrong. Please try again later.
					</p>
					<div>
						<button
							className="bg-blue-600 hover:bg-blue-900 text-white font-bold p-2 rounded w-32 mb-3"
							type="submit"
							onClick={onRetry}
						>
							<span>Retry</span>
						</button>
					</div>
					<img
						className="img-fluid"
						src={`/assets/unDraw/error.svg`}
						alt="Error image"
					/>
				</div>
			</div>
		</div>
	)
}

export default ErrorPage
