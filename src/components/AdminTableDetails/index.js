import { useCallback } from "react"
import DialogContext from "../../context/DialogContext"


export default function AdminTavleDetails(){
	// const { dialog, setDialog } = useContext(DialogContext)
	// const {itemId, item } = dialog
     
    // const resetDialog = useCallback(() => {
    //     setDialog({})
    // }, [setDialog])

    // useEffect(() => {
	// 	const handleKeydown = (e) => {
	// 		if (e.key === 'Escape') resetDialog()
	// 	}
	// 	window.addEventListener('keydown', handleKeydown)
	// 	return () => window.removeEventListener('keydown', handleKeydown)
	// }, [resetDialog])

    // useEffect(() => {
	// 	setData()
	// 	if (itemId) getItemById(itemId).then(({ data }) => setData(data.response))
	// 	// .catch((err) => console.error(err))
	// }, [itemId])

    // if (!itemId) return <>No itemID found</>

    return(
        <div className="w-screen h-screen bg-black bg-opacity-50 absolute top-0 flex justify-center items-center px-[10vw]">
			<div className="bg-white border border-gray-100 rounded-lg tansform text-center">
                <div className="w-[70vw] max-w-[800px] relative">
                    <a
                        className="absolute -right-4 -top-4 rounded-full bg-white shadow-lg w-10 h-10 hover:bg-gray-200 hover:cursor-pointer transition flex justify-center items-center z-99"
                        onClick={resetDialog}
                    >
                        X
                    </a>
                </div>
            </div>
        </div>
    )
}