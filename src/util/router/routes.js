import Active from '../../pages/Active'
import Courses from '../../pages/Courses'
import Home from '../../pages/Home'
import Inventory from '../../pages/Inventory'
import Login from '../../pages/Login'
import Error from '../../pages/Error'

// ** Default Route
const LoginRoute = {
	path: '/login',
	component: <Login />,
}

// ** Merge Routes
const AllRoutes = [
	{
		path: '/active',
		component: <Active />,
	},
	{
		path: '/courses',
		component: <Courses />,
	},
	{
		path: '/',
		component: <Home />,
	},
	{
		path: '/inventory',
		component: <Inventory />,
	},
	{
		path: '*',
		component: <Error />,
	},
]

export { LoginRoute, AllRoutes }
