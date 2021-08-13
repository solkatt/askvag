import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'

import './App.css'
import Hero from './components/Hero/Hero'
import Projects from './components/projects/Projects'
import Hover from './components/webgl-hover/Hover'


function App() {
	return (

		<Router>
			<div className='App'>
				{/* <Hero /> */}

					<Hero />
			

			
					<Route render={({ location }) => (

						<AnimatePresence
							initial={false}
							exitBeforeEnter>
							<Switch location={location} key={location.pathname}>
								{/* <Spring /> */}

								{/* <Hero /> */}

								<Route path="/" exact>
									<Hover />
								</Route>
								<Route path="/work/:id" exact>
									<Projects />
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
