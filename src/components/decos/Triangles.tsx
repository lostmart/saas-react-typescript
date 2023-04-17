import styles from './Triangles.module.css'

interface TriangleStyles {
	cssRules: {
		left: string
		top: string
		nameOfClass: string
		rotation: number
		size: string
	}
}

const Triangle = ({ cssRules }: TriangleStyles) => {
	return (
		<div>
			<svg
				viewBox="-10 -10 200 200"
				className={styles.triangle_container}
				style={{
					top: cssRules.top,
					left: cssRules.left,
					transform: `rotate(${cssRules.rotation}deg)`,
					maxWidth: cssRules.size,
				}}>
				<polygon
					className={cssRules.nameOfClass}
					fill="none"
					points="50 0, 0 100, 100 100"
				/>
			</svg>
		</div>
	)
}

export default Triangle
