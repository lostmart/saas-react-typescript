import styles from './Circles.module.css'

interface CircleStyles {
	cssRules: {
		left: string
		top: string
		width: string
		height: string
		nameOfClass: string
		borderWidth: string
	}
}

const Circles = ({ cssRules }: CircleStyles) => {
	return (
		<div
			style={{
				left: cssRules.left,
				top: cssRules.top,
				width: cssRules.width,
				height: cssRules.height,
				borderWidth: cssRules.borderWidth,
			}}
			className={styles.circles + ' ' + cssRules.nameOfClass}></div>
	)
}

export default Circles
