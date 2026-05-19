import Image from "next/image"

interface ILikeDislikeCounter {
  commentId: number
  numOfLikes: number,
  likeFn: (num: number) => void,
  dislikeFn: (num: number) => void
}

export const LikeDislikeCounter = ({numOfLikes, likeFn, dislikeFn, commentId}: ILikeDislikeCounter) => {
  return (
    <div className="bg-gray-100 text-white rounded-xl flex flex-col p-3 h-24">
        <button 
          onClick={() => likeFn(commentId)}
        >
            <Image src={"/icon-plus.svg"} alt="plus-icon" width={1000} height={1000} className="w-4" />
        </button>
        <div className="grow content-center text-center text-Purple-600 font-bold">{numOfLikes}</div>
        <button 
          onClick={() => dislikeFn(commentId)}          
        >
            <Image src={"/icon-minus.svg"} alt="minus-icon" width={1000} height={1000} className="w-4" />                            
        </button>
    </div>
  )
}