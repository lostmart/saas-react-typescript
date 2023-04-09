import User from '../types/User'

export const Greet = ({ userData }: User) => {
	return (
		<div>
			<h2>
				Hi, {userData.f_name} {userData.l_name} !
			</h2>
			<p>You are {userData.age} years old </p>
			<p>You have unread {userData.messages} messages</p>
		</div>
	)
}

Greet.defaultProps = {
	userData: null,
}
