import { Dispatch, SetStateAction } from "react"
import Image from "next/image"

interface IEditDeleteBtns {
    isEditable: boolean
    setIsEditable: Dispatch<SetStateAction<boolean>>
    deleteFn: (id: string) => void,
    id: string
}

export const EditDeleteBtns = ({isEditable, setIsEditable, deleteFn, id}: IEditDeleteBtns) => {
    return (
        <>
            <button
                onClick={() => deleteFn(id)}
                className="text-Pink-400 transition hover:opacity-40 cursor-pointer font-bold w-20 flex justify-end items-center"
            >
                <Image src={'/icon-delete.svg'} alt="delete-icon" height={1000} width={1000} className="size-4 mr-2"/>
                Delete
            </button>
            <button
                onClick={() => setIsEditable(prev => !prev)}
                disabled={isEditable}
                className={`text-Purple-600 transition hover:opacity-40 disabled:opacity-40 disabled:cursor-auto cursor-pointer font-bold w-20 flex justify-end items-center`}
            >
                <Image src={'/icon-edit.svg'} alt="edit-icon" height={1000} width={1000} className="size-4 mr-2"/>
                Edit
            </button>
        </>
    )
}