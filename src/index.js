import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import DialogProvider from './context/DialogProvider'

ReactDOM.render(
	<React.StrictMode>
		<DialogProvider>
			<App />
		</DialogProvider>
	</React.StrictMode>,
	document.getElementById('root')
)
