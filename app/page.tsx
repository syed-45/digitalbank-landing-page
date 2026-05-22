"use client"
import {  useState } from "react"
import { currentUser, comments} from "../data.json"
import { Comment } from "./components/comment"
import { Modal } from "./components/modal"
import { WriteComment } from "./components/write-comment"

export type IReply = Omit<typeof comments[0]['replies'][0], 'replies'> & {
    'replies' : IReply[]
}

const Page = () => {
    const [commentsState, setCommentsState] = useState(comments)
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
            let newComments = prevComments.filter(comment => comment.id !== deleteId)
            newComments = newComments.map(comment => ({
                    ...comment, 
                    replies: comment.replies.filter(reply => reply.id !== deleteId)
                })
            )
            return newComments
        })
        setIsModalOpen(false)
    }

    function replyToComment(replyText: string, commentId: string) {
        setCommentsState(prevComments => prevComments.map(comment => comment.id === commentId 
            ? {
                ...comment, 
                replies: [
                    ...comment.replies,                                       
                    {
                        id: crypto.randomUUID(),
                        content: replyText,
                        createdAt: (new Date()).toString(),
                        score: 0,
                        replyingTo: prevComments.find(c => c.id === commentId)?.user.username || 'unkown',
                        user: {...currentUser},
                        replies: []
                    }
                ]
            } : comment)
        )
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

