import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { DateProvider } from './DateContext'

ReactDOM.render(
	<React.StrictMode>
		<DateProvider>
			<App />
		</DateProvider>
	</React.StrictMode>,
	document.getElementById('root')
)
