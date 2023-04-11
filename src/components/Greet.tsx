import User from '../types/User'
import { FaKickstarter } from 'react-icons/fa'
import styles from './Greet.module.css'

export const Greet = ({ userData }: User) => {
	return (
		<div className={styles.container}>
			<h2>
				Hi, <FaKickstarter /> {userData.f_name} {userData.l_name} !
			</h2>

			<p>You are {userData.age} years old </p>
			<p>You have unread {userData.messages} messages</p>
		</div>
	)
}

Greet.defaultProps = {
	userData: null,
}
