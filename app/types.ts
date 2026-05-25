export interface IReply extends IComment {
    replyingTo: string;
}

export interface IComment {
    id: string;
    content: string;
    createdAt: string;
    score: number;
    user: {
        image: {
            png: string;
            webp: string;
        };
        username: string;
    };
    replies: IReply[]
}

export interface ICommentProps {
    id: string
    date: string,
    name: string,
    numOfLikes: number,
    comment: string
    isOwnComment: boolean
    deleteFn: (id: string) => void,
    replyFn(replyText: string, commentId: string): void
    replies: IReply[],
}