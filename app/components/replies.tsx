import { IReply } from "../page"
import { Comment } from "./comment"
import { currentUser } from '../../data.json'

interface IReplies {
    replies: IReply[]
    deleteFn: (id: string) => void,
    replyFn(replyText: string, commentId: string): void
}

export const Replies = ({replies, deleteFn, replyFn}: IReplies) => {
    return (
        <div className="w-full my-3 flex">
            <div className="mx-3 sm:mx-7 min-w-1 rounded-sm min-h-full bg-[#EBECF0]"></div>
            <div className="grow">
                {replies.map(reply => {
                return (
                    <Comment
                        key={reply.id}
                        id={reply.id} 
                        date={reply.createdAt} 
                        name={reply.user.username} 
                        numOfLikes={reply.score} 
                        comment={reply.content}
                        isOwnComment={currentUser.username === reply.user.username} 
                        deleteFn={deleteFn}
                        replyFn={replyFn}
                        replies={reply.replies}
                    /> 
                )
                })}
            </div>
        </div>
    )
}