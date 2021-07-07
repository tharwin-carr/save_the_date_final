import React, { useState } from 'react'
import { useGlobalContext } from '../DateContext'

const DatesPage = () => {
	const [tempDate, setTempDate] = useState([])
	const [headerMessage, setHeaderMessage] = useState('Lets Generate A Date!')
	const [saveBtn, setSaveBtn] = useState(false)

	const { dates } = useGlobalContext()

	//produces a random date idea that will later be displayed
	const generateRandomDate = (date) => {
		//get random numbers for new date idea
		let randomNum = Math.floor(Math.random() * date.length)
		let randomDate = date[randomNum]

		setHeaderMessage('Your Random Date Idea Is:')
		setSaveBtn(true)
		setTempDate(randomDate)
		shuffleDates(date)
	}

	//shuffle dates
	const shuffleDates = (arr) => {
		return arr.sort(() => {
			return 0.5 - Math.random()
		})
	}

	return (
		<div className='dates-page__container'>
			<h2 className='dates-page__header'>{headerMessage}</h2>
			<p className='dates-page__date'>{tempDate.content}</p>

			<div className='add-date-btn__container'>
				<button
					className='btn generate-btn'
					onClick={() => generateRandomDate(dates)}
				>
					Generate Date
				</button>
				{saveBtn && <button className='btn save-btn'>Save the Date!</button>}
				<button className='btn add-date-btn' type='button'>
					Submit A New Date Idea{' '}
				</button>
			</div>
		</div>
	)
}

export default DatesPage
