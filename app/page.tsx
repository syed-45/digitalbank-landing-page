"use client"
import Image from "next/image"

const Page = () => {
    return (
        <div className="bg-Grey-50 min-h-screen w-full flex">
            <div className="mx-auto w-full max-w-5xl pt-10 px-8">
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
            </div>
        </div>
    )
}

export default Page

interface ILikeDislikeCounter {
  commentId: number
  numOfLikes: number,
  likeFn: (num: number) => void,
  dislikeFn: (num: number) => void
}

const LikeDislikeCounter = ({numOfLikes, likeFn, dislikeFn, commentId}: ILikeDislikeCounter) => {
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