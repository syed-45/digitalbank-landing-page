import Image from "next/image"
import { IComment } from "./comment"
import { Dispatch, SetStateAction, useState } from "react"
import { calculateTimePosted } from "../utils"
import { ReplyBtn } from "./reply-btn"
import { EditDeleteBtns } from "./edit-delete-btns"

type ICommentMain = Pick<IComment, "name" | "date" | "isOwnComment" | "comment" | "deleteFn" | "id" > & {
    isReplyOpen: boolean,
    setIsReplyOpen: Dispatch<SetStateAction<boolean>>
    isEditable: boolean,
    setIsEditable: Dispatch<SetStateAction<boolean>>
}

export const CommentMain = ({name, date, isOwnComment, comment, deleteFn, id, setIsReplyOpen, isEditable, setIsEditable}:ICommentMain) => {
    const [commentState, setCommentState] = useState(comment)
    
    return (
        <div className="grow flex flex-col pl-3 sm:pl-6 w-full">
            <div className="flex items-center w-full">
                <Image src={`/avatars/image-${name}.png`} alt={`${name}-avatar`} height={1000} width={1000} className="size-9 mr-3"/>
                <div className="mr-5 text-Grey-800 font-bold">{name}</div>
                {isOwnComment && <div className="bg-Purple-600 px-2 text-white rounded-sm mr-5 text-md font-bold">you</div>}
                <div>{calculateTimePosted(new Date(date))}</div>
                <div className="grow justify-end hidden sm:flex">
                    {isOwnComment 
                    ? <EditDeleteBtns
                        isEditable={isEditable}
                        setIsEditable={setIsEditable} 
                        deleteFn={deleteFn}
                        id={id}
                       />
                    : <ReplyBtn 
                        onReplyClick={() => setIsReplyOpen(prev => !prev)}
                       />
                    }
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
                <button
                    onClick={() => setIsEditable(false)} 
                    className="self-end mt-1 py-3 px-4 bg-Purple-600 text-white font-bold rounded-lg cursor-pointer transition hover:opacity-40">
                    UPDATE
                </button>
              </>
            : <div 
                className={`py-3 wrap-anywhere`}
               >                
                {commentState}
            </div>}
        </div>
    )
}