import React from 'react'
import { useHistory } from 'react-router'

const Hero = () => {
	let history = useHistory()
	return (
		<div className='hero__container'>
			<div className='hero-header__container'>
				<h1 className='hero-header__text'>Find the perfect date idea.</h1>
			</div>

			<div className='hero-description__container'>
				<p className='hero-description__text'>
					<span className='hero-title'>Save The Date</span> helps make those
					"What should we do today?" conversations a little easier!
				</p>
			</div>

			<div className='hero-button__container'>
				<button className='btn hero-button__btn'>
					<span
						className='hero-btn__title'
						onClick={() => {
							return history.push('/dates')
						}}
					>
						Get Started
					</span>
				</button>
			</div>
		</div>
	)
}

export default Hero
