import { useState } from "react"
import Image from "next/image"
import { currentUser } from "../../data.json"

interface IWriteCommentProps {
    writeFn(comment: string): void,
}

export const WriteComment = ({writeFn}: IWriteCommentProps) => {
    const [comment, setComment] = useState('')

    return <>
                <div className={`bg-white p-6 mb-3 rounded-lg w-full shadow-xs flex items-start`}>
                    <Image src={`/avatars/image-${currentUser.username}.png`} alt={`${currentUser.username}-avatar`} height={1000} width={1000} className="size-9 mr-3"/>
                    <textarea
                        className="grow px-6 py-3 border-2 border-Grey-100 h-26 sm:h-32 rounded-xl cursor-pointer focus:cursor-auto placeholder:text-Grey-500"
                        value={comment}
                        placeholder="Add a comment..."
                        onChange={(e) => setComment(e.target.value)}
                    >
                    </textarea>
                    <button
                        onClick={() => {
                            writeFn(comment)
                            setComment('')
                        }}
                        disabled={comment===''}
                        className="ml-4 py-3 px-6 bg-Purple-600 text-white font-bold rounded-lg cursor-pointer transition hover:opacity-40"
                    >
                        SEND
                    </button>
                </div>
            </>
}