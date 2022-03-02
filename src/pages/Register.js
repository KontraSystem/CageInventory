import React, { useState, useEffect } from 'react'
import '../App.css'
import { useNavigate } from 'react-router-dom'
import { postRegister } from '../api'
import { LoginRoute } from '../util/router/routes'
import { InputField, LoadingButton } from '../components/'

export default function Register() {
	const [error, setError] = useState('')
	const [isLoading, setIsLoading] = useState(false)

	const navigate = useNavigate()

	useEffect(() => {
		if (localStorage.getItem('token')) {
			navigate('/')
		}
	})

	const onRegister = (event) => {
		setIsLoading(true)
		event.preventDefault()
		const { email, password, firstName, lastName, username } = event.target

		// RoleId is currently hardcoded, change this in order to get the role id you want
		// Admin - 111
		// Worker - 222
		// Student - 333
		// Professor - 444
		postRegister({
			email: email.value,
			password: password.value,
			firstName: firstName.value,
			lastName: lastName.value,
			username: username.value,
			roleId: 333,
		})
			.then((res) => {
				setIsLoading(false)
				if (res.data.response.token) {
					localStorage.setItem('token', res.data.response.token)
					navigate('/')
				}
			})
			.catch((err) => {
				setIsLoading(false)
				setError(err.response.data?.message ?? 'Something went wrong')
			})
	}

	return (
		<div className="bg-orange overflow-hidden">
			<div className="h-screen p-8 px-[20vw] flex flex-col gap-8 justify-center items-center overflow-auto">
				<div className="p-4 w-[100%] bg-white rounded flex justify-center items-center flex-col shadow-lg z-10">
					<img src="RIT_rgb_hor_k.png" width={500} />
					<h1 className="font-bold text-2xl">Cage Inventory</h1>
				</div>
				<form
					className="w-[100%] p-10 bg-white rounded flex gap-5 justify-center items-center flex-col shadow-lg z-10"
					onSubmit={onRegister}
				>
					<h3 className="font-bold text-2xl">Register</h3>

					<div className="w-[100%] grid grid-cols-1 gap-4 lg:grid-cols-2">
						<InputField type="email" name="email" label="Email" />
						<InputField
							type="password"
							name="password"
							label="Password"
						/>
						<InputField name="firstName" label="First Name" />
						<InputField name="lastName" label="Last Name" />
						<InputField name="username" label="Username" />
					</div>

					{error && <p className="text-red-500">{error}</p>}
					<LoadingButton isLoading={isLoading} text={'Register'} />
				</form>
				<div className="p-4 w-[100%] bg-white rounded flex justify-center items-center flex-col shadow-lg z-10">
					<p>
						Already have an account?
						<a
							href={LoginRoute.path}
							className="text-lg text-green-500 hover:text-green-300 ml-5"
						>
							Login
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
