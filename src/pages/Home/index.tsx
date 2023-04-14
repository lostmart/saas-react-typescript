import { FaEnvelope } from 'react-icons/fa'
import logoImg from '../../assets/logo-round.png'
import styles from './index.module.css'

const Home = () => {
	return (
		<div>
			<div className={styles.grey_circle}>
				<div className="mobile-phone">
					<div className="speaker"></div>
					<div className="screen">
						<img src={logoImg} className={styles.logo} alt="home school" />
						<h2 className={styles.title}>
							Learn <br />
							@ <br />
							Home
						</h2>
					</div>
					<div className="microphone"></div>
				</div>
			</div>
			<form className="form">
				<div className="form_control">
					<FaEnvelope className='form_inputIcon' />

					<input type="text" placeholder="Email" className="form_email" />
				</div>
			</form>
		</div>
	)
}

export default Home
