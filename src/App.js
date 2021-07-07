import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './css/app.css'
import LandingPage from './components/LandingPage/LandingPage'
import Navbar from './components/NavBar'
import DatesPage from './components/DatesPage'
import history from './history'

export default function App() {
	return (
		<BrowserRouter history={history}>
			<div className='app__container'>
				<nav>
					<Navbar />
				</nav>
				<main className='main__container'>
					<Switch>
						<Route exact path='/' component={() => <LandingPage />} />
						<Route path='/dates' component={DatesPage} />
					</Switch>
				</main>
			</div>
		</BrowserRouter>
	)
}
