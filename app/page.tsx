"use client"
import {  useState } from "react"
import { currentUser, comments} from "../data.json"
import { Comment } from "./components/comment"
import { Modal } from "./components/modal"
import { WriteComment } from "./components/write-comment"
import { IComment, IReply } from "./types"

const Page = () => {
    const [commentsState, setCommentsState] = useState<IComment[]>(comments)
    const [deleteId, setDeleteId] = useState("")
    const [IsModalOpen, setIsModalOpen] = useState(false)

    function onDeleteClick(id: string) {
        setDeleteId(id)
        setIsModalOpen(true)
    }

    function writeComment(comment: string):void {
        setCommentsState(prevComments => [...prevComments, {
                id: crypto.randomUUID(),
                content: comment,
                createdAt: (new Date()).toString(),
                score: 0,
                user: {...currentUser},
                replies: []
            }]
        )
    }

    function deleteComment():void {
        setCommentsState(prevComments => {
            const newComments:IComment[] = []

            for (let idx = 0; idx < prevComments.length; idx++) {
                const comment = prevComments[idx]
                if (comment.id === deleteId) {
                } else {
                    newComments.push({
                            ...comment,
                            replies: traverseComments(comment.replies),
                        }
                    )
                }
            }    

            function traverseComments(comments:IReply[]): IReply[] {
                const newComments = []
                for (let idx = 0; idx < comments.length; idx++) {
                    const comment = comments[idx]
                    if (comment.id === deleteId) {
                    } else {
                        newComments.push({
                                ...comment,
                                replies: traverseComments(comment.replies),
                        })
                    }                    
                }                
                
                return newComments
            }
            
            return newComments
        })
        setIsModalOpen(false)
    }

    function replyToComment(replyText: string, commentId: string) {
        setCommentsState(prevComments => {
            let commentFound = false
            const newReply: IComment = {
                id: crypto.randomUUID(),
                content: replyText,
                createdAt: (new Date()).toString(),
                score: 0,
                user: { ...currentUser },
                replies: []
            }

            let newComments:IComment[] = prevComments.map(comment => {
                if (comment.id === commentId) {
                    commentFound = true 
                    return {
                        ...comment,
                        replies: [...comment.replies, {
                                ...newReply,
                                replyingTo: comment.user.username
                            },
                        ]
                    }
                }
                return comment
            })

            if (commentFound) return newComments

            function traverseReplies(replies: IReply[]): IReply[] {
                return replies.map(reply => {
                    if (reply.id === commentId) {                        
                        return { ...reply, replies: [...reply.replies, {
                                ...newReply,
                                replyingTo: reply.user.username
                            }] 
                        }
                    }
                    if (reply.replies.length > 0) {
                        return { ...reply, replies: traverseReplies(reply.replies) }
                    }
                    return reply
                })
            }

            newComments = newComments.map(comment => ({
                    ...comment,
                    replies: traverseReplies(comment.replies)
                })
            )
            return newComments
        })
    }

    return (
        <>            
            <div className="[grid-area:1/1] bg-Grey-50 min-h-screen w-full flex">
                <div className="mx-auto w-full max-w-5xl pt-10 px-5 sm:px-8">
                    {commentsState.map(comment => {
                        return (
                            <Comment
                                key={comment.id}
                                id={comment.id}
                                comment={comment.content}
                                name={comment.user.username}
                                date={comment.createdAt}
                                isOwnComment={currentUser.username === comment.user.username}                  
                                deleteFn={onDeleteClick}
                                replyFn={replyToComment}
                                numOfLikes={comment.score}
                                replies={comment.replies}
                            />
                        )
                    })}    
                    <WriteComment
                        writeFn={writeComment}
                    />                              
                </div>
            </div>
            <Modal 
                isModalOpen={IsModalOpen}
                setIsModalOpen={setIsModalOpen}
                deleteComment={deleteComment}
            />
        </>
    )
}

export default Page

