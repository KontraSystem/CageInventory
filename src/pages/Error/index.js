import NotFound from '../../assets/unDraw/404.svg'

function ErrorPage() {
	return (
		<div className="flex items-center justify-center w-screen h-screen">
			<div className="px-4 lg:py-12">
				<div className="lg:gap-4 lg:flex">
					<div className="flex flex-col items-center justify-center md:py-24 lg:py-32">
						<p className="mb-2 text-2xl font-bold text-center text-gray-800 md:text-3xl">
							<span className="text-red-500">Oops!</span> Page not
							found
						</p>
						<p className="mb-8 text-center text-gray-500 md:text-lg">
							{"The page you're looking for doesn't exist."}
						</p>
						<a
							href="/"
							className="px-6 py-2 text-sm font-semibold text-blue-800 bg-blue-100"
						>
							Go home
						</a>
					</div>
					<div className="mt-4">
						<img
							src={NotFound}
							alt="Page not found image"
							className="object-cover w-96"
						/>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ErrorPage
