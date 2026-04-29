import Image from "next/image";
import { articleData, featureData } from "./data";
import { Footer } from "./components/footer";
import { HeaderAndMain } from "./components/header&main";

export default function Home() {
  return (
    <div className="text-Gray-600 text-center lg:text-left">
      <HeaderAndMain/>
      <section className="flex flex-col items-center px-6 pb-12 bg-Gray-100">
        <h2 className="text-3xl text-Blue-950 mb-4 mt-30 font-normal"> 
          Why choose Digitalbank?
        </h2>
        <p className="tracking-tighter text-base">
          We leverage Open Banking to turn your bank account into your financial hub. Control 
          your finances like never before.
        </p>        
        {featureData.map(feature => 
          <FeatureCard 
            key={feature.heading + feature.text}
            iconSVG={feature.iconSVG}
            heading={feature.heading}
            text={feature.text}
          />
        )}                             
      </section>
      <section className="flex flex-col items-center px-6 pb-16 bg-Gray-50"> 
        <h2 className="text-Blue-950 mt-12 mb-8 text-3xl font-normal">Latest Articles</h2>
        {articleData.map(article => 
          <ArticleCard 
              key={article.heading+article.text}
              imageSrc={article.imageSrc}
              heading={article.heading}
              text={article.text}
              author={article.author}
          />
        )}
      </section>
      <Footer/>
    </div>
  );
}






export interface IFeatureCardProps {
  iconSVG: string
  heading: string
  text: string
}

const FeatureCard = ({ iconSVG, heading, text }: IFeatureCardProps) => {
  return (
    <div className="flex flex-col items-center py-2">
        <Image src={iconSVG} alt={iconSVG.slice(0,-4)} width={500} height={500} className="w-20 mt-10 mb-8" />      
        <h3 className="text-Blue-950 mb-4 text-xl font-normal">{heading}</h3>
        <p className="tracking-tighter text-base">{text}</p>
    </div>
  )
}

export interface IArticleCardProps {
  imageSrc: string
  heading: string
  text: string
  author: string
}

const ArticleCard = ({ imageSrc, heading, text, author }: IArticleCardProps) => {
  return (
    <>
      <Image src={imageSrc} alt={imageSrc.slice(0,-4)} width={5000} height={5000} className="w-full h-full object-cover aspect-5/3 mt-5 rounded-t-lg"/>              
      <div className="flex flex-col py-6 px-8 bg-white text-left">
          <p className="text-sm mb-5">By {author}</p>
          <h3 className="text-Blue-950 mb-4 text-md font-normal">{heading}</h3>
          <p className="leading-6">{text}</p>
      </div>
    </>
  )
}

export const RequestInvBtn = () => {
  return (
    <button className="px-11 py-3 bg-linear-to-tr from-Cyan-400 to-Green-500 text-white font-bold rounded-4xl my-3 w-fit mx-auto cursor-pointer">
      Request Invite
    </button>
  )
}
