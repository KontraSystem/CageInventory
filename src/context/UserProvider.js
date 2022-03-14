import React, { useState } from 'react'
import UserContext from './DialogContext'

function UserProvider(props) {
	const [user, setUser] = useState({
		username: '',
		roleCode: '',
		token: '',
		firstName: '',
		lastName: '',
	})

	return (
		<UserContext.Provider value={{ user, setUser }} {...props}>
			{props.children}
		</UserContext.Provider>
	)
}

export default DialogProvider
