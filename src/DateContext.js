import React, { useState, useContext } from 'react'
import data from './data'

const DateContext = React.createContext()

const DateProvider = ({ children }) => {
	const [dates, setDates] = useState(data)
	const [favorites, setFavorites] = useState([])

	const dateContextValue = {
		dates: dates,
		favorites: favorites,
		setDates,
		setFavorites,
	}

	return (
		<DateContext.Provider value={dateContextValue}>
			{children}
		</DateContext.Provider>
	)
}

//custom hook
export const useGlobalContext = () => {
	return useContext(DateContext)
}

export { DateContext, DateProvider }
