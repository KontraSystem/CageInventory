import Active from '../../pages/Active'
import Courses from '../../pages/Courses'
import Home from '../../pages/Home'
import Inventory from '../../pages/Inventory'
import Login from '../../pages/Login'
import Register from '../../pages/Register'
import Error from '../../pages/Error'

// ** Default Route
const LoginRoute = {
	path: '/login',
	component: <Login />,
}
const RegisterRoute = {
	path: '/register',
	component: <Register />,
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

export { RegisterRoute, LoginRoute, AllRoutes }
