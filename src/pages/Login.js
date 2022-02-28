import React, { useState, useEffect } from 'react'
import axios from 'axios'
import '../App.css'
import { useNavigate } from 'react-router-dom'

export default function Login() {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const navigate = useNavigate()

	useEffect(() => {
		if (localStorage.getItem('token')) {
			navigate('/')
		}
	})

	const routeChange = () => {
		let path = `home`
		navigate(path)
	}

	const handleLogin = () => {
		axios
			.post(
				'/auth/login',
				{},
				{
					auth: {
						username: email,
						password: password,
					},
				}
			)
			.then((resp) => {
				if (resp.data.message === 'Success' && resp.data.response.token) {
					localStorage.setItem('token', resp.data.response.token)
					routeChange()
				}
			})
	}

	const handleChange = (evt) => {
		if (evt.target.id === 'email_field') {
			setEmail(evt.target.value)
		} else {
			setPassword(evt.target.value)
		}
	}

	return (
		<div className="h-screen flex justify-center items-center bg-orange">
			<div className="p-10 mx-5 bg-white rounded flex justify-center items-center flex-col shadow-lg z-10">
				<img src="RIT_rgb_hor_k.png" className="mb-3" width={500} />
				<h1 className="font-bold text-2xl mb-5">CAGE INVENTORY</h1>
				<input
					id="email_field"
					value={email}
					onChange={handleChange}
					type="email"
					name="email"
					className="mb-5 p-3 w-80 focus:border-purple-700 rounded border-2 outline-none"
					autoComplete="off"
					placeholder="Username"
					required
				/>
				<input
					id="password_field"
					value={password}
					onChange={handleChange}
					type="password"
					name="password"
					className="mb-5 p-3 w-80 focus:border-purple-700 rounded border-2 outline-none "
					autoComplete="off"
					placeholder="Password"
					required
				/>
				<button
					className="bg-green-600 hover:bg-green-900 text-white font-bold p-2 rounded w-32 mb-3"
					id="login"
					type="submit"
					onClick={handleLogin}
				>
					<span>Login</span>
				</button>
				<a href="/" className="text-sm text-gray-400 hover:text-green-600">
					Forgot password?
				</a>
			</div>
			<div className="absolute top-24 -left-80">
				<img src="tigerLogo.png" width="1000" />
			</div>
		</div>
	)
}
