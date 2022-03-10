import React from 'react'
import { useEffect } from 'react'

// ** Router Components
import {
	BrowserRouter as AppRouter,
	Route,
	Routes,
	useNavigate,
} from 'react-router-dom'
import { ShortDialog } from '../../components'

// ** Routes & Default Routes
import { LoginRoute, RegisterRoute, AllRoutes } from './routes'

const Router = () => {
	return (
		<>
			<AppRouter>
				<Routes>
					{AllRoutes.map((route) => (
						<Route
							key={route.path}
							path={route.path}
							element={<PrivateRoute>{route.component}</PrivateRoute>}
						/>
					))}
					<Route
						exact
						path={LoginRoute.path}
						element={LoginRoute.component}
					/>
					<Route
						exact
						path={RegisterRoute.path}
						element={RegisterRoute.component}
					/>
				</Routes>
			</AppRouter>
			<ShortDialog />
		</>
	)
}

export default Router

const PrivateRoute = (props) => {
	const navigate = useNavigate()
	const { children } = props

	useEffect(() => {
		if (!localStorage.getItem('token')) {
			navigate('/login')
		}
	})

	if (!localStorage.getItem('token')) {
		return <></> //TODO: Add loading indicator
	}

	return children
}
