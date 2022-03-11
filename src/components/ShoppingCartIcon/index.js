import React, { useState, useRef, useEffect, useContext, useMemo } from 'react'
import { Popover } from 'react-tiny-popover'
import { LoadingIndicator } from '..'
import {
	deleteCartAll,
	deleteCartItem,
	getCart,
	postCartSetCount,
	postCartSubmit,
} from '../../api'
import DialogContext from '../../context/DialogContext'
import debounce from 'lodash.debounce'

let debounceInstance
let differences = []

export default function CartIcon() {
	const { setDialog } = useContext(DialogContext)
	const [isOpen, setIsOpen] = useState(false)
	const popoverRef = useRef(null)
	const [data, setData] = useState()

	useEffect(() => {
		if (!isOpen) return

		getCart().then(({ data }) => setData(data.response))
	}, [isOpen])

	const onShoppingClick = () => setIsOpen(!isOpen)

	const onDeleteItem = (id) => {
		setDialog({
			message: 'Do you want to remove the selected item from your cart?',
			title: 'Are you sure?',
			onConfirm: () => {
				differences = differences.filter((item) => item.itemId !== id)
				if (!differences.length) cancelDebounce()

				deleteCartItem(id).then(() =>
					setData(data.filter((item) => item.id != id))
				)
			},
			isRedButton: true,
		})
	}

	const onChangeDifference = (id, difference) => {
		const newData = [...data]

		const item = newData.find((item) => item.id === id)
		if (item.item_count + difference < 1) return onDeleteItem(id)

		item.item_count += difference
		setData(newData)

		const countItem = differences.find((item) => item.itemId === id)
		if (countItem) {
			if (countItem.difference + difference == 0) {
				differences = differences.filter((item) => item.itemId !== id)
			} else {
				countItem.difference += difference
			}
		} else {
			differences.push({ difference, itemId: id })
		}

		if (!differences.length) {
			cancelDebounce()
		} else {
			debounceChangeDifference()
		}
	}

	const updateChangeDifference = () => {
		differences.forEach((dif) => postCartSetCount(dif)) // TODO: Add handlers for errors

		differences = []
	}

	const debounceChangeDifference = useMemo(
		() => (debounceInstance = debounce(updateChangeDifference, 3000)),
		[]
	)

	const cancelDebounce = () => {
		debounceInstance?.cancel()
		debounceInstance = null
	}

	const onDeleteCart = () => {
		setDialog({
			message: 'Do you want to remove all items from your cart?',
			title: 'Are you sure?',
			onConfirm: () => {
				if (differences.length) {
					differences = []
					cancelDebounce()
				}
				deleteCartAll().then(() => setData([]))
			},
			isRedButton: true,
		})
	}

	const submitRequest = () => {
		setDialog({
			message:
				'Do you want to submit a official request for the items in your shopping cart?',
			title: 'Are you sure?',
			onConfirm: () => postCartSubmit().then(() => setData([])),
		})
	}

	return (
		<Popover
			isOpen={isOpen}
			positions={['bottom']}
			align="end"
			onClickOutside={onShoppingClick}
			ref={popoverRef.current}
			reposition={false}
			content={
				<div className="bg-white rounded-lg text-center shadow-[0_10px_60px_0px_rgba(0,0,0,0.3)] overflow-hidden align-center">
					{!data ? (
						<div className="p-16">
							<LoadingIndicator isLoading={true} />
						</div>
					) : data.length == 0 ? (
						<div className="p-16">
							<h1>Nothing has been added to the shopping cart yet</h1>
						</div>
					) : (
						<>
							<table className="table-auto">
								<thead className="bg-orange text-white uppercase font-medium text-xs">
									<tr>
										<th className="py-3 px-6">Item/Kit</th>
										<th className="py-3 px-6">Count</th>
										<th></th>
									</tr>
								</thead>
								<tbody>
									{!data ? (
										<div className="p-16">
											<LoadingIndicator isLoading={true} />
										</div>
									) : (
										data.map((item, index) => (
											<tr
												key={index}
												className="border-b odd:bg-white even:bg-[#f768021a] text-sm text-gray-700"
											>
												<td className="p-2 px-4">
													{item.item_name}
												</td>
												<td className="p-2">
													<div className="flex justify-between align-center">
														<button
															className="rounded-full border-2 border-red-500 hover:bg-red-100  transition text-red-500 w-6 h-6"
															onClick={() =>
																onChangeDifference(
																	item.id,
																	-1
																)
															}
														>
															<i className="fa-solid fa-minus" />
														</button>
														<span className="pt-[2px]">
															{item.item_count}
														</span>
														<button
															className="rounded-full border-2 border-green-500 hover:bg-green-100 transition text-green-500 w-6 h-6"
															onClick={() =>
																onChangeDifference(
																	item.id,
																	1
																)
															}
														>
															<i className="fa-solid fa-plus" />
														</button>
													</div>
												</td>
												<td className="p-2 px-4">
													<div className="flex justify-center align-center">
														<button
															className="flex rounded-full bg-red-500 hover:bg-red-300 transition text-white p-1"
															onClick={() =>
																onDeleteItem(item.id)
															}
														>
															<i className="fa-solid fa-trash" />
														</button>
													</div>
												</td>
											</tr>
										))
									)}
								</tbody>
							</table>
							<div className="flex px-4 py-2 justify-between">
								<button
									className="bg-red-600 hover:bg-red-400 transition text-white p-2 rounded"
									onClick={onDeleteCart}
								>
									Remove All
								</button>
								<button
									className="bg-green-500 hover:bg-green-300 transition text-white p-2 rounded"
									onClick={submitRequest}
								>
									Submit request
								</button>
							</div>
						</>
					)}
				</div>
			}
		>
			<span
				ref={popoverRef}
				className="hover:cursor-pointer"
				onClick={onShoppingClick}
			>
				<i className="ml-10 text-lg opacity-70 fa fa-solid fa-cart-shopping text-white" />
			</span>
		</Popover>
	)
}
