import { useState } from "react"
import { IReply } from "../page"
import { CommentMain } from "./comment-main"
import { LikeDislikeCounter } from "./like-dislike-counter"
import { Replies } from "./replies"
import { WriteReply } from "./write-reply"
import { EditDeleteBtns } from "./edit-delete-btns"
import { ReplyBtn } from "./reply-btn"

export interface IComment {
    id: string
    date: string,
    name: string,
    numOfLikes: number,
    comment: string
    isOwnComment: boolean
    deleteFn: (id: string) => void,
    replyFn(replyText: string, commentId: string): void
    replies: IReply[],
}

export const Comment = ({id, comment, date, name, numOfLikes, isOwnComment, deleteFn, replies, replyFn}: IComment) => {
    const [isReplyOpen, setIsReplyOpen] = useState(false)
    const [isEditable, setIsEditable] = useState(false)

    return (
      <>
        <div className="bg-white flex flex-col-reverse sm:flex-row items-center justify-center rounded-lg w-full shadow-xs p-3 sm:p-6 mb-3">
          <div className="w-full sm:w-auto flex justify-between sm:block px-3 sm:px-0">
            <LikeDislikeCounter 
              commentId={id}
              numOfLikes={numOfLikes} 
            />
            <div className="sm:hidden flex">
              {isOwnComment 
              ? <EditDeleteBtns
                  isEditable={isEditable} 
                  setIsEditable={setIsEditable}
                  id={id}
                  deleteFn={deleteFn}
                /> 
              : <ReplyBtn onReplyClick={() => setIsReplyOpen(prev => !prev)}/>}
            </div>
          </div>
          <CommentMain
            id={id}
            comment={comment}
            date={date}
            name={name}
            isOwnComment={isOwnComment}
            deleteFn={deleteFn}
            setIsReplyOpen={setIsReplyOpen}
            isReplyOpen={isReplyOpen}
            isEditable={isEditable}
            setIsEditable={setIsEditable}
          />         
        </div>
        {replies?.length > 0 && 
        <Replies 
          replies={replies} 
          deleteFn={deleteFn}
          replyFn={replyFn}
          />}
        {<WriteReply 
          isReplyOpen={isReplyOpen} 
          setIsReplyOpen={setIsReplyOpen} 
          replyFn={replyFn} 
          id={id}
        />}
      </>
    )
}