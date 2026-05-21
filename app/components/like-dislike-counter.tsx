import { useState } from "react"

interface ILikeDislikeCounter {
  commentId: number
  numOfLikes: number,
}

export const LikeDislikeCounter = ({numOfLikes, commentId}: ILikeDislikeCounter) => {
  const [isLiked, setIsLiked] = useState(false)
  const [isDisliked, setIsDisliked] = useState(false)

  const onLikeClick = () => {
    // POST req to API
    setIsLiked(prev => {
      if (isDisliked) {
        setIsDisliked(false)
        return false
      }
      return !prev
    })
  }

  const onDisikeClick = () => {
    // POST req to API    
    setIsDisliked(prev => {
      if (isLiked) {
        setIsLiked(false)
        return false
      }
      return !prev
    })
  }
  return (
    <div className="bg-gray-100 text-white rounded-xl flex flex-col px-2 h-fit self-start">
        <button 
          onClick={onLikeClick}
          className={`text-4xl cursor-pointer mx-auto transition hover:text-Purple-600 h-fit ${isLiked ? 'text-Purple-600' : 'text-Purple-200'}`}
        >
          +
        </button>
        <div className="grow content-center text-center text-Purple-600 font-bold w-7 h-8">
          {isLiked ? numOfLikes + 1 : isDisliked ? numOfLikes - 1 : numOfLikes}
        </div>
        <button 
          onClick={onDisikeClick}     
          className="h-10 cursor-pointer hover:*:bg-Purple-600"               
        >
            <div className={`w-4 ${isDisliked ? 'bg-Purple-600' : 'bg-Purple-200'} h-1 rounded-[1px] mx-auto transition`}></div>                         
        </button>
    </div>
  )
}