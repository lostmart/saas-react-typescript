import { Link } from 'react-router-dom'

const Dashboard = () => {
	return (
		<div>
			Dashboard page
			<ul>
				<li>
					<Link to="/"> home </Link>
				</li>
				<li>
					<Link to="/calendar"> calendar </Link>
				</li>
				<li>
					<Link to="/chat"> chat </Link>
				</li>
				<li>
					<Link to="/todo"> toco </Link>
				</li>
				<li>
					<Link to="/create"> not found </Link>
				</li>
			</ul>
		</div>
	)
}

export default Dashboard
