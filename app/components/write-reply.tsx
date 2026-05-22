import { Dispatch, SetStateAction, useState } from "react"
import Image from "next/image"
import { currentUser } from "../../data.json"

interface IWriteReplyProps {
    isReplyOpen: boolean
    setIsReplyOpen: Dispatch<SetStateAction<boolean>>
    replyFn(replyText: string, commentId: string): void,
    id: string
}

export const WriteReply = ({isReplyOpen, setIsReplyOpen, replyFn, id}: IWriteReplyProps) => {
    const [replyTxt, setReplyTxt] = useState('')
    
    return <>
            <form className={`${isReplyOpen ? "block opacity-100" : "hidden opacity-0"} transition transition-discrete duration-400 starting:opacity-0 bg-white p-6 mb-3 rounded-lg w-full shadow-xs flex items-start`}>
                <Image src={`/avatars/image-${currentUser.username}.png`} alt={`${currentUser.username}-avatar`} height={1000} width={1000} className="size-9 mr-3"/>
                <textarea
                    className="grow px-6 py-3 border-2 border-Grey-100 h-26 sm:h-32 rounded-xl cursor-pointer focus:cursor-auto"
                    value={replyTxt}
                    onChange={(e) => setReplyTxt(e.target.value)}
                >
                </textarea>
                <button
                    onClick={() => {
                        replyFn(replyTxt, id)
                        setIsReplyOpen(false)
                        setReplyTxt("")
                    }}
                    type="submit"
                    disabled={replyTxt===''}
                    className="ml-4 py-3 px-6 bg-Purple-600 text-white font-bold rounded-lg cursor-pointer transition hover:opacity-40"
                >
                    REPLY
                </button>
            </form>
    </>
}