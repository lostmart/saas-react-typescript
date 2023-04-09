import User from '../types/User'

export const Greet = (props: User) => {
	return (
		<div>
			<h2>Hi {props.userName}</h2>
		</div>
	)
}
