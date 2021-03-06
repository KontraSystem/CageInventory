import Active from '../../pages/Active'
import Admin from '../../pages/Admin'
import Courses from '../../pages/Courses'
import Home from '../../pages/Home'
import Kits from '../../pages/Kits'
import Login from '../../pages/Login'
import Register from '../../pages/Register'
import ImpendingReturns from '../../pages/ImpendingReturns'
import Error from '../../pages/Error'
import CourseKits from '../../pages/CourseKits'
import ProfessorTable from "../../components/ProfessorTable";
import AdminLogs from "../../pages/AdminLogs";

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
	//this will be changed
	{
		path: '/admin',
		component: <Admin />,
	},
	{
		path: '/admin/requests-returns',
		component: <ImpendingReturns />
	},
	{
		path: '/admin/logs',
		component: <AdminLogs/>
	},
	{
		path: '/professor-kits',
		component: <ProfessorTable />,
	},
	{
		path: '/course-kits',
		component: <CourseKits />,
	},
	{
		path: '*',
		component: <Error />,
	},
]

export { RegisterRoute, LoginRoute, AllRoutes }
