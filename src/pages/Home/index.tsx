import { useState } from 'react'
import { FaEnvelope, FaEye, FaEyeSlash } from 'react-icons/fa'
import logoImg from '../../assets/logo-round.png'
import styles from './index.module.css'

const Home = () => {
	const [showPassword, togglePassword] = useState(true)

	const handleClick = (): void => {
		togglePassword(!showPassword)
	}

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
					<FaEnvelope className="form_inputIcon" />

					<input type="text" placeholder="Email" className="form_email" />
				</div>

				<div className="form_control">
					{!showPassword ? (
						<FaEye className="form_inputIcon" onClick={handleClick} />
					) : (
						<FaEyeSlash className="form_inputIcon" onClick={handleClick} />
					)}

					<input
						type={showPassword ? 'password' : 'text'}
						placeholder="Password"
						className="form_email"
					/>
				</div>

				<div className="form_control">
					<button className="form_email btn btn-primary">Connect</button>
				</div>
				<p>Forgot stupid password?</p>
			</form>
		</div>
	)
}

export default Home
