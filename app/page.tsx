"use client"
import {  useState } from "react"
import { currentUser, comments} from "../data.json"
import { Comment } from "./components/comment"
import { Modal } from "./components/modal"

export type IReply = typeof comments[0]['replies'][0] 

const Page = () => {
    const [commentsState, setCommentsState] = useState(comments)
    const [deleteId, setDeleteId] = useState(0)
    const [IsModalOpen, setIsModalOpen] = useState(false)

    function onDeleteClick(id: number) {
        setDeleteId(id)
        setIsModalOpen(true)
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

    return (
        <>            
            <div className="[grid-area:1/1] bg-Grey-50 min-h-screen w-full flex">
                <div className="mx-auto w-full max-w-5xl pt-10 px-8">
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
                                numOfLikes={comment.score}
                                replies={comment.replies}
                            />
                        )
                    })}                                  
                </div>
            </div>
            <Modal 
                IsModalOpen={IsModalOpen}
                setIsModalOpen={setIsModalOpen}
                deleteComment={deleteComment}
            />
        </>
    )
}

export default Page