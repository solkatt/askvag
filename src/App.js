import React, {useState} from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'

import './App.css'
import Hero from './components/Hero/Hero'
import Projects from './components/projects/Projects'
import CarouselSlider from './components/work/CarouselSlider'
import Navbar from './components/navbar/Navbar'

function App() {


const [cameraPos, setCameraPos] = useState({ x: 0, y: 0, z: 5 })
const [color, setColor] = useState('white')
const [morphState, setMorphState] = useState({ index: 0, value: 0 })


const [test, setTest] = useState('Burgir')

	return (

		<Router>
			
			<div className='App'>
				{/* <Hero /> */}

			
				<Navbar test={test}/>
				<Hero cameraPos={cameraPos} color={color} morphState={morphState}/>
			
					<Route render={({ location }) => (

						<AnimatePresence
							initial={false}
							exitBeforeEnter>
							<Switch location={location} key={location.pathname}>
								{/* <Spring /> */}

								{/* <Hero /> */}

								<Route path="/" exact>
									<CarouselSlider style={{zIndex: 1}} setCameraPos={setCameraPos}/>
								</Route>
								<Route path="/work/:id" exact>
									<Projects setCameraPos={setCameraPos} />
								</Route>

							</Switch>
						</AnimatePresence>




					)}
					/>

				</div>


	

		</Router>

	)
}

export default App
