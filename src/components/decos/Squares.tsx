import styles from './Squares.module.css'

interface SquareStyles {
	cssRules: {
		left: string
		top: string
		nameOfClass: string
		rotation: number
		size: string
	}
}

const Square = ({ cssRules }: SquareStyles) => {
	return (
		<div>
			<svg
				className={styles.square_container}
				style={{
					top: cssRules.top,
					left: cssRules.left,
					transform: `rotate(${cssRules.rotation}deg)`,
					maxWidth: cssRules.size,
				}}
				viewBox="0 0 100 100">
				<rect
					className={styles.square_secondary}
					x="10"
					y="10"
					width="80"
					height="80"
					fill="none"
				/>
			</svg>
		</div>
	)
}

export default Square
