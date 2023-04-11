import { createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import NotFound from './pages/404'

const Router = createBrowserRouter([
	{
		path: '/',
		element: <Home />,
	},
	{
		path: '*',
		element: <NotFound />,
	},
])

export default Router
