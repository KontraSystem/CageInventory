import React, { useState, useEffect } from 'react'
import '../App.css'
import { useNavigate } from 'react-router-dom'
import { postLogin } from '../api'
import { RegisterRoute } from '../util/router/routes'
import { InputField } from '../components/'

export default function Login() {
	const [error, setError] = useState('')

	const navigate = useNavigate()

	useEffect(() => {
		if (localStorage.getItem('token')) {
			navigate('/')
		}
	})

	const onLogin = (event) => {
		event.preventDefault()
		const { email, password } = event.target

		postLogin({
			email: email.value,
			password: password.value,
		})
			.then((res) => {
				if (res.data.response.token) {
					localStorage.setItem('token', res.data.response.token)
					navigate('/')
				}
			})
			.catch((err) => {
				setError(err.response.data?.message ?? 'Something went wrong')
			})
	}

	return (
		<div className="bg-orange overflow-hidden">
			<div className="h-screen px-[20vw] flex flex-col gap-8 justify-center items-center overflow-auto p-8">
				<div className="p-4 w-[100%] bg-white rounded flex justify-center items-center flex-col shadow-lg z-10">
					<img src="RIT_rgb_hor_k.png" width={500} />
					<h1 className="font-bold text-2xl">Cage Inventory</h1>
				</div>
				<form
					className="w-[100%] p-10 bg-white rounded flex gap-5 justify-center items-center flex-col shadow-lg z-10"
					onSubmit={onLogin}
				>
					<h3 className="font-bold text-2xl">Login</h3>

					<div className="w-80 max-w-[100%] flex flex-col gap-5">
						<InputField type="email" name="email" label="Email" />
						<InputField
							type="password"
							name="password"
							label="Password"
						/>
					</div>

					{error && <p className="text-red-500">{error}</p>}
					<button
						className="bg-green-500 hover:bg-green-300 transition text-white font-bold p-2 rounded w-32"
						type="submit"
					>
						Login
					</button>

					<a
						href="/"
						className="text-sm text-gray-400 hover:text-green-600"
					>
						Forgot password?
					</a>
				</form>
				<div className="p-4 w-[100%] bg-white rounded flex justify-center items-center flex-col shadow-lg z-10">
					<p>
						New to Cage Inventory?
						<a
							href={RegisterRoute.path}
							className="text-lg text-green-500 hover:text-green-300 ml-5"
						>
							Register
						</a>
					</p>
				</div>
			</div>
			<div className="absolute top-24 -left-80">
				<img src="tigerLogo.png" width="1000" />
			</div>
		</div>
	)
}
