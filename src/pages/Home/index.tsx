import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaEnvelope, FaEye, FaEyeSlash } from 'react-icons/fa'
import logoImg from '../../assets/logo-round.png'
import styles from './index.module.css'
import triangleStyles from '../../components/decos/Triangles.module.css'
import squareStyles from '../../components/decos/Squares.module.css'

import Circles from '../../components/decos/Circles'
import Triangles from '../../components/decos/Triangles'
import Square from '../../components/decos/Squares'

const Home = () => {
	const [showPassword, togglePassword] = useState(true)

	const handleClick = (): void => {
		togglePassword(!showPassword)
	}

	const firstCircle = {
		left: '42px',
		top: '240px',
		width: '24px',
		height: '24px',
		nameOfClass: 'second_clr',
		borderWidth: '5px',
	}

	const secondCircle = {
		left: '50%',
		top: '285px',
		width: '14px',
		height: '14px',
		nameOfClass: 'accent_clr',
		borderWidth: '3px',
	}

	const thirdCircle = {
		left: '74%',
		top: '5px',
		width: '10px',
		height: '10px',
		nameOfClass: '',
		borderWidth: '1px',
	}

	const firstTriangle = {
		top: '25px',
		left: '29px',
		rotation: -44,
		nameOfClass: triangleStyles.triangle_secondary,
		size: '25px',
	}

	const secondTriangle = {
		top: '32px',
		left: '311px',
		rotation: 72,
		nameOfClass: triangleStyles.triangle_accent,
		size: '15px',
	}

	const thirdTriangle = {
		top: '258px',
		left: '287px',
		rotation: 254,
		nameOfClass: triangleStyles.triangle_accent,
		size: '34px',
	}

	const firstSquare = {
		top: '-21px',
		left: '114px',
		rotation: -44,
		size: '20px',
		nameOfClass: squareStyles.square_secondary,
	}

	const secondSquare = {
		top: '192px',
		left: '326px',
		rotation: -3,
		size: '17px',
		nameOfClass: squareStyles.square_third,
	}

	return (
		<div className={styles.container}>
			<Circles cssRules={firstCircle} />
			<Circles cssRules={secondCircle} />
			<Circles cssRules={thirdCircle} />
			<Triangles cssRules={firstTriangle} />
			<Triangles cssRules={secondTriangle} />
			<Triangles cssRules={thirdTriangle} />
			<Square cssRules={firstSquare} />
			<Square cssRules={secondSquare} />
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
					<button className={'form_email btn btn-primary ' + styles.submit_btn}>
						Connect
					</button>
				</div>
				<div className="form_control">
					<Link to="/rest">Forgot your stupid password? </Link>
				</div>
			</form>
		</div>
	)
}

export default Home
