import Image from "next/image"
import { IComment } from "./comment"
import { Dispatch, SetStateAction, useState } from "react"

type ICommentMain = Pick<IComment, "name" | "date" | "isOwnComment" | "comment" | "deleteFn" | "id">

export const CommentMain = ({name, date, isOwnComment, comment, deleteFn, id}:ICommentMain) => {
    const [commentState, setCommentState] = useState(comment)
    const [isEditable, setIsEditable] = useState(false)
    
    return (
        <div className="grow flex flex-col pl-6">
            <div className="flex items-center w-full">
                <Image src={`/avatars/image-${name}.png`} alt={`${name}-avatar`} height={1000} width={1000} className="size-9 mr-3"/>
                <div className="mr-5 text-Grey-800 font-bold">{name}</div>
                {isOwnComment && <div className="bg-Purple-600 px-2 text-white rounded-sm mr-5 text-md font-bold">you</div>}
                <div>{date}</div>
                <div className="grow flex justify-end">
                    {isOwnComment 
                    ? <EditDeleteBtns
                        isEditable={isEditable}
                        setIsEditable={setIsEditable} 
                        deleteFn={deleteFn}
                        id={id}
                       />
                    : <ReplyBtn/>}
                </div>
            </div>
            {isEditable 
            ? <>
                <textarea 
                    className="my-3 px-6 py-3 border h-40 rounded-xl cursor-pointer focus:cursor-auto"
                    defaultValue={commentState}
                    onChange={(e) => setCommentState(e.target.value)}
                >
                    
                </textarea> 
                <div
                    onClick={() => setIsEditable(false)} 
                    className="self-end mt-1 py-3 px-4 bg-Purple-600 text-white font-bold rounded-lg cursor-pointer transition hover:opacity-40">
                    UPDATE
                </div>
              </>
            : <div 
                className={` py-3`}
               >                
                {commentState}
            </div>}
        </div>
    )
}


const ReplyBtn = () => {
    return (
        <button
            onClick={() => ""}
            className="text-Purple-600 cursor-pointer font-bold w-20 flex justify-center items-center"
        >
            <Image src={'/icon-reply.svg'} alt="reply-icon" height={1000} width={1000} className="size-4 mr-2"/>
            Reply
        </button>
    )
}

interface IEditDeleteBtns {
    isEditable: boolean
    setIsEditable: Dispatch<SetStateAction<boolean>>
    deleteFn: (id: number) => void,
    id: number
}

const EditDeleteBtns = ({isEditable, setIsEditable, deleteFn, id}: IEditDeleteBtns) => {
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