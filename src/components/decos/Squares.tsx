import styles from './Squares.module.css'

interface SquareStyles {
	cssRules?: {
		left: string
		top: string
		nameOfClass: string
		rotation: number
	}
}

const Square = ({ cssRules }: SquareStyles) => {
	return (
		<div>
			<svg
				className={styles.square_container}
				style={{
					top: '-27px',
					left: '105px',
					transform: `rotate(${41}deg)`,
				}}
				viewBox="0 0 100 100">
				<rect
					className={styles.square_secondary}
					x="10"
					y="10"
					width="80"
					height="80"
					stroke-width="2"
					fill="none"
				/>
			</svg>
		</div>
	)
}

export default Square
