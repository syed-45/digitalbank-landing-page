import { IArticleCardProps, IFeatureCardProps } from "./page"

export const articleData: IArticleCardProps[] = [
    {
        imageSrc:"/image-currency.jpg",
        author:"Claire Robinson",
        heading:"Receive money in any currency with no fees",
        text:"The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single …"
    },
    {
        imageSrc: "/image-currency.jpg", //todo get restaurant img from unsplash
        heading: "Treat yourself without worrying about money",
        text: "Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you …",
        author: "Wilson Hutton"
    },
    {
        imageSrc: "/image-plane.jpg",
        heading: "Take your Digitalbank card wherever you go",
        text: "We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you …",
        author: "Wilson Hutton"
    },
    {
        imageSrc: "/image-confetti.jpg",
        heading: "Our invite-only Beta accounts are now live!",
        text: "After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site ...",
        author: "Claire Robinson"
    }      
]

export const featureData: IFeatureCardProps[] = [
    { 
        heading:"Online Banking" ,
        text:"Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.",
        iconSVG:"icon-online.svg",        
    },
    { 
        heading:"Simple Budgeting" ,
        text:"See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits.",
        iconSVG:"icon-budgeting.svg",
    }
    ,{ 
        heading:"Fast Onboarding" ,
        text:"We don’t do branches. Open your account in minutes online and start taking control of your finances right away.",
        iconSVG:"icon-onboarding.svg",
    },
    { 
        heading:"Open API" ,
        text:"Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.",
        iconSVG:"icon-api.svg",
    }                        
]

        