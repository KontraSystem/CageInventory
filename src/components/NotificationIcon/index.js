import React, { useState, useRef } from 'react'
import { Popover } from 'react-tiny-popover'
export default function CartIcon(props) {
	const [notificationsOpen, isNotificationsOpen] = useState(false)
	const popoverRef = useRef(null)
	const onNotificationClick = () => isNotificationsOpen(!notificationsOpen)

	return (
		<Popover
			isOpen={notificationsOpen}
			position={['bottom']}
			content={(
				{ position, nudgedLeft, nudgedTop, targetRect, popoverRect } // you can also provide a render function that injects some useful stuff!
			) => (
				<div>
					<div>Hi! Im popover content. Heres my position</div>
				</div>
			)}
			onClickOutside={onNotificationClick}
		>
			<span className="hover:cursor-pointer" onClick={onNotificationClick}>
				<i className="ml-10 text-lg opacity-70 fa fa-bell text-white" />
			</span>
		</Popover>
	)
}
