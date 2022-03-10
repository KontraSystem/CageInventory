import React, { useState, useRef } from 'react';
import { Popover } from 'react-tiny-popover';
export default function CartIcon(props) {
	const [shoppingOpen, isShoppingOpen] = useState(false)
	const popoverRef = useRef(null)
	const onShoppingClick = () => isShoppingOpen(!shoppingOpen)
  const shopping = [
	    { items: "Laptop", count: "1"},
	    { items: "Cable", count: "5"},
	    { items: "Sample", count: "5"},
	    { items: "Neki kurac", count: "5"},
	    { items: "Neki kurac", count: "5"}
    ]
	return (
		<Popover
			isOpen={shoppingOpen}
			positions={["bottom"]}
			align="end"
			onClickOutside={onShoppingClick}
			ref={popoverRef.current}
			reposition={false}
			content={(
				<div
					className="bg-white 
						border-orange
						border-4
						rounded-lg 
						text-center 
						shadow-lg 
						align-center"
				>
	        <table className="table-auto">
	        	<thead className="bg-white-100 dark:bg-white-700">
	            <tr>
	              <th
	                scope="col"
	                className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
	              >
	                Item/Kit
	              </th>
								<th
	                scope="col"
	                className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
	              >
	                Count
	              </th>
	              <th
	                scope="col"
	                className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"	
	              >
	              	Remove
	              </th>
	            </tr>
	          </thead>
	          <tbody>
	          	{shopping.map((item, index) => (
	              <tr key={index} className="border-b odd:bg-white even:bg-gray-50 odd:dark:bg-white-400 even:dark:bg-gray-200 dark:border-gray-600">
	                <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
	                  {item.items}
	                </td>
	                <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
	                	<span className="mr-1"><i className="fa-solid fa-minus"/></span>
	                  {item.count}
	                  <span className="ml-1"><i className="fa-solid fa-plus"/></span>
	                </td>
	                <td
	                	scope="col"
	                	className="py-3 px-6 text-xs  font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"	
	              	>
	              		<span className="place-content-center"><i className="text-red-500 fa-solid fa-trash"/></span>
	              	</td>
	              </tr>
	          	))}
	          </tbody>
	        </table>
		          <div className="min-h-max min-w-max ml-auto absolute right-0">
			        	<button className=" mt-2 mb-2 mr-2 ml-2 float-left
			        		bg-red-600 
			        		hover:bg-red-400 
			        		transition 
			        		text-white 
			        		font-bold 
			        		p-2 
			        		rounded 
			        		w-15"
			      		>Remove All</button>
			        	<button className=" mt-2 mb-2 mr-2 ml-auto float-right
			        		bg-green-500 
			        		hover:bg-green-300 
			        		transition 
			        		text-white 
			        		font-bold 
			        		p-2 
			        		rounded 
			        		w-15"
			      		>Go to Checkout</button>
		          </div>
	    	</div>
	    )}
		>
			<span ref={popoverRef} className="hover:cursor-pointer" onClick={onShoppingClick}><i className="ml-10 text-lg opacity-70 fa fa-solid fa-cart-shopping text-white"/></span>
		</Popover>
	);
}