import React from 'react'
import logo from '../images/logo.png'
import { useHistory } from 'react-router-dom'

export default function NavBar() {
	let history = useHistory()
	return (
		<div className='nav-bar__container'>
			<div className='nav-bar__header'>
				<button
					className='nav-bar__title'
					onClick={() => {
						return history.push('/')
					}}
				>
					Save The Date{' '}
					<img className='logo' src={logo} alt='calendar with a heart in it' />
				</button>
			</div>
			<div className='nav-bar-links__container'>
				<button
					className='nav-bar__btn'
					onClick={() => {
						return history.push('/dates')
					}}
				>
					Dates
				</button>
				<button
					className='nav-bar__btn'
					onClick={() => {
						return history.push('/favorites')
					}}
				>
					Favorites
				</button>
			</div>
		</div>
	)
}
