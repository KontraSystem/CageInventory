import React from 'react'

// ** Router Components
import {
	BrowserRouter as AppRouter,
	Route,
	Routes,
	Navigate,
} from 'react-router-dom'

// ** Routes & Default Routes
import { DefaultRoute, LoginRoute, ErrorRoute, AllRoutes } from './routes'

const Router = () => {
	const isUserLoggedIn = () => !!localStorage.getItem('token')

	return (
		<AppRouter basename={process.env.REACT_APP_BASENAME}>
			<Routes>
				<Route
					exact
					path="/"
					render={() => {
						return isUserLoggedIn() ? (
							<Navigate to={DefaultRoute} />
						) : (
							<Navigate to={LoginRoute} />
						)
					}}
				/>

				{AllRoutes.map((route) => {
					return (
						<Route
							key={route.path}
							path={route.path}
							exact={route.exact === true}
							render={(props) => <route.component {...props} />}
						/>
					)
				})}

				<Route path="*" render={() => <Navigate to={ErrorRoute} />} />
			</Routes>
		</AppRouter>
	)
}

export default Router
