import Active from '../../pages/Active'
import Courses from '../../pages/Courses'
import Home from '../../pages/Home'
import Kits from '../../pages/Kits'
import Login from '../../pages/Login'
import Register from '../../pages/Register'
import ImpendingReturns from '../../pages/ImpendingReturns'
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
		path: '/kits',
		component: <Kits />,
	},
	{
		path: '/returns',
		component: <ImpendingReturns />,
	},
	{
		path: '*',
		component: <Error />,
	},
]

export { RegisterRoute, LoginRoute, AllRoutes }
