import React, { Component, useState, useRef } from 'react'
import { useSpring, a } from 'react-spring'

export default function Spring() {
	const [active, setActive] = useState(false)

	const springProps = useSpring({
		opacity: 1,
		from: { opacity: 0 },
		lineHeight: active ? '100%' : '0%',
	})

	const spring = useSpring({
		height: active ? '100px' : '20px',
	})

	const funktion = () => {
		alert('poop')
	}

	function AccordianContent() {
		const cRef = useRef()
		const style = {
			// opacity: springProps.opacity,
			lineHeight: springProps.lineHeight,
		}

		return (
			<a.div style={style}>
				<p>1</p>
				<p>2</p>
				<p>3</p>
				<p>4</p>
			</a.div>
		)
	}

	const animDivStyle = {
		height: spring.height,
		background: 'white',
		display: 'flex',
		flexDirection: 'column',
	}

	return (
		<div style={springStyle.div}>
			<button>Click</button>
			{/* <a.div style={springProps}>hejsan</a.div> */}
			<a.div onClick={() => setActive(!active)} style={animDivStyle}>
				{active ? (
					<>
						<p>Close</p>
						<AccordianContent />
					</>
				) : (
					<p>Open</p>
				)}
			</a.div>
		</div>
	)
}

const springStyle = {
	div: {
		height: '100vh',
		width: '100vw',
		background: 'hotpink',
	},
}
