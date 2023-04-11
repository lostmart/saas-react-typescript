import { createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import Calendar from './pages/Calendar'
import Chat from './pages/Chat'
import ToDo from './pages/ToDo'
import NotFound from './pages/404'

const Router = createBrowserRouter([
	{
		path: '/',
		element: <Home />,
	},
	{
		path: '/calendar',
		element: <Calendar />,
	},
	{
		path: '/chat',
		element: <Chat />,
	},
	{
		path: '/todo',
		element: <ToDo />,
	},
	{
		path: '*',
		element: <NotFound />,
	},
])

export default Router
