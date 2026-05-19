import { LikeDislikeCounter } from "./like-dislike-counter"
import Image from "next/image"

interface IComment {
    id: number
    date: Date,
    name: string,
    numOfLikes: number,
    likeFn: () => void
    disLikeFn: () => void
    replyFn: () => void
    isOwnComment: boolean
    editFn: () => void
    deleteFn: () => void
}

export const comment = ({id, date, name, numOfLikes, likeFn, disLikeFn, replyFn, isOwnComment, editFn, deleteFn}: IComment) => {
    return (
        <div className="bg-white flex items-center justify-center rounded-lg w-full shadow-xs p-6">
            <LikeDislikeCounter 
              commentId={1}
              numOfLikes={3} 
              likeFn={(commentId) => console.log(commentId)} 
              dislikeFn={(commentId) => console.log(commentId)} 
            />
            <div className="grow flex flex-col">
              <div className="flex items-center w-full pl-6">
                <Image src={'/avatars/image-maxblagun.png'} alt="maxblagun" height={1000} width={1000} className="size-9 mr-3"/>
                <div className="mr-5 text-Grey-800 font-bold">maxblagun</div>
                <div>2 weeks ago</div>
                <div className="grow flex justify-end">
                  <button
                    onClick={() => ""}
                    className="text-Purple-600 font-bold w-20 flex justify-center items-center"
                  >
                  <Image src={'/icon-reply.svg'} alt="reply-icon" height={1000} width={1000} className="size-4 mr-2"/>
                    Reply
                  </button>
                </div>
              </div>
              <div className="px-6 py-3 text">
                Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You&apos;ve nailed the design and the responsiveness at various breakpoints works really well.
              </div>
            </div>
        </div>
    )
}