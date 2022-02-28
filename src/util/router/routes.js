import { lazy } from 'react'

// ** Default Route
const DefaultRoute = '/home'
const LoginRoute = '/login'
const ErrorRoute = '/error'

// ** Merge Routes
const AllRoutes = [
	{
		path: '/active',
		component: lazy(() => import('../../pages/Active')),
	},
	{
		path: '/courses',
		component: lazy(() => import('../../pages/Courses')),
	},
	{
		path: DefaultRoute,
		component: lazy(() => import('../../pages/Home')),
	},
	{
		path: '/inventory',
		component: lazy(() => import('../../pages/Inventory')),
	},
	{
		path: LoginRoute,
		component: lazy(() => import('../../pages/Login')),
	},
	{
		path: ErrorRoute,
		component: lazy(() => import('../../pages/Error')),
	},
]

export { DefaultRoute, LoginRoute, ErrorRoute, AllRoutes }
