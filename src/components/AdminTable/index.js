import React, {useContext} from 'react'
import SearchField from 'react-search-field'
import DialogContext from '../../context/DialogContext'

export default function AdminTable() {

    // const{} = items
	// const { setDialog } = useContext(DialogContext)
	// const toggleDialog = () => setDialog({itemId: id, item}); console.log("clicked")
    
    const userInfo = [
        {user: "fg2027", items: "2", dateTaken: "2/1/2022", dateReturned: "5/1/2022"},
        {user: "lk1574", items: "6", dateTaken: "2/1/2022", dateReturned: "5/1/2022"},
        {user: "mxm9894", items: "1", dateTaken: "2/1/2022", dateReturned: "5/1/2022"},
        {user: "jm1132", items: "3", dateTaken: "2/1/2022", dateReturned: "5/1/2022"}
    ]
    
    const handleSearch = () => {
        userInfo.find(el => el.length < 7)
    }

    
	return (
        <div>
            <SearchField
                placeholder="Search user"
                classNames="flex sm:mx-12 lg:mx-16 my-2"
                onEnter={handleSearch}
            />
            <div className="flex flex-col">
                <div className="overflow-x-auto sm:mx-6 lg:mx-8">
                    <div className="inline-block py-2 min-w-full sm:px-6 lg:px-8">
                        <div className="overflow-hidden shadow-md sm:rounded-lg">
                            <table className="min-w-full">
                                <thead className="bg-gray-100 dark:bg-gray-700">
                                    <tr>
                                        <th
                                            scope="col"
                                            className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                                        >
                                            User
                                        </th>
                                        <th
                                            scope="col"
                                            className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                                        >
                                            Items
                                        </th>
                                        <th
                                            scope="col"
                                            className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                                        >
                                            Date Taken
                                        </th>
                                        <th
                                            scope="col"
                                            className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                                        >
                                            Date Returned
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {userInfo.map((item, index) => (
                                        <tr key={index} className="border-b odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700 dark:border-gray-600">
                                            <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                {item.user}
                                            </td>
                                            <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                                                <button className='text-blue-500' >[{item.items}]</button>
                                            </td>
                                            <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                                                {item.dateTaken}
                                            </td>
                                            <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                                                {item.dateReturned}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
	)
}
