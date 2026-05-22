import { Dispatch, SetStateAction } from "react"

interface IModalProps {
    isModalOpen: boolean
    setIsModalOpen: Dispatch<SetStateAction<boolean>>
    deleteComment(): void
}

export const Modal = ({isModalOpen, setIsModalOpen, deleteComment}: IModalProps) => {
    return (
        <div className={`[grid-area:1/1] min-h-screen w-full flex justify-center items-center bg-black/40 starting:opacity-0 transition transition-discrete duration-450 ${isModalOpen ? "block opacity-100" : "hidden opacity-0"}`}>
            <div className="bg-white p-8 rounded-lg max-w-102">
                <h1 className="text-2xl text-Grey-800 font-bold">Delete comment</h1>
                <p className="text-lg py-4 text-Grey-500">Are you sure you want to delete this comment? This will remove the comment and can&apos;t be undone.</p>
                <div className="grid grid-cols-2 w-full gap-4">
                    <button 
                        onClick={() => setIsModalOpen(false)} 
                        className="bg-Grey-500 transition hover:opacity-80 cursor-pointer p-3 rounded-lg font-bold text-white"
                    >
                        NO, CANCEL
                    </button>
                    <button 
                        onClick={() => deleteComment()} 
                        className="bg-Pink-400 transition hover:opacity-80 cursor-pointer p-3 rounded-lg font-bold text-white"
                    >
                        YES, DELETE
                    </button>
                </div>
            </div>
        </div>
    )
}