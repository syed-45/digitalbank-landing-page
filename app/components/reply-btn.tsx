import Image from "next/image"

interface IReplyBtn {
    onReplyClick: () => void
}

export const ReplyBtn = ({onReplyClick}: IReplyBtn) => {
    return (
        <button
            onClick={onReplyClick}
            className="text-Purple-600 cursor-pointer font-bold w-20 flex justify-end items-center"
        >
            <Image src={'/icon-reply.svg'} alt="reply-icon" height={1000} width={1000} className="size-4 mr-2"/>
            Reply
        </button>
    )
}