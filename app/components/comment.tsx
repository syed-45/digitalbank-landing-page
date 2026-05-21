import { IReply } from "../page"
import { CommentMain } from "./comment-main"
import { LikeDislikeCounter } from "./like-dislike-counter"
import { Replies } from "./replies"

export interface IComment {
    id: number
    date: string,
    name: string,
    numOfLikes: number,
    comment: string
    isOwnComment: boolean
    deleteFn: (id: number) => void,
    
    replies: IReply[]
}

export const Comment = ({id, comment, date, name, numOfLikes, isOwnComment, deleteFn, replies}: IComment) => {
    return (
      <>
        <div className="bg-white flex items-center justify-center rounded-lg w-full shadow-xs p-6 mb-3">
          <LikeDislikeCounter 
            commentId={id}
            numOfLikes={numOfLikes} 

          />
          <CommentMain
            id={id}
            comment={comment}
            date={date}
            name={name}
            isOwnComment={isOwnComment}
            deleteFn={deleteFn}
          />         
        </div>
        {replies?.length > 0 && 
        <Replies 
          replies={replies} 
          deleteFn={deleteFn}
          />}
      </>
    )
}