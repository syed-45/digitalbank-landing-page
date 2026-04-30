import Image from "next/image";
import { articleData, featureData } from "./data";
import { Footer } from "./components/footer";
import { HeaderAndMain } from "./components/header&main";
import Link from "next/link";

export default function Home() {
  return (
    <div className="text-Gray-600 text-center lg:text-left flex flex-col min-h-dvh">
      <HeaderAndMain/>
      <section className="bg-Gray-100">
        <div className="mx-auto max-w-7xl flex flex-col items-center lg:items-start px-6 pb-12 lg:pb-16">          
          <h2 className="text-3xl text-Blue-950 mb-4 mt-30 font-normal"> 
            Why choose Digitalbank?
          </h2>
          <p className="tracking-tighter text-base">
            We leverage Open Banking to turn your bank account into your financial hub. Control 
            your finances like never before.
          </p>
          <div className="flex flex-col lg:flex-row lg:gap-12">
            {featureData.map(feature => 
              <FeatureCard 
                key={feature.heading + feature.text}
                iconSVG={feature.iconSVG}
                heading={feature.heading}
                text={feature.text}
              />
            )}                             
          </div>
        </div>
      </section>
      <section className="bg-Gray-50 pt-12 lg:pt-16 lg:px-6">
        <h2 className="text-Blue-950 mb-8 lg:mb-12 text-3xl font-normal max-w-7xl mx-auto">Latest Articles</h2>
        <div className="flex flex-col items-center lg:flex-row lg:items-start px-6 lg:px-0 lg:gap-8 pb-16 max-w-7xl mx-auto">
          {articleData.map(article => 
            <ArticleCard 
                key={article.heading+article.text}
                imageSrc={article.imageSrc}
                heading={article.heading}
                text={article.text}
                author={article.author}
            />
          )}
        </div>
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
    <div className="flex flex-col items-center py-2 w-full">
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
    <div className="lg:flex flex-col">
      <Image src={imageSrc} alt={imageSrc.slice(0,-4)} width={5000} height={5000} className="w-full h-full object-cover aspect-5/3 mt-5 lg:mt-0 rounded-t-lg"/>              
      <div className="flex flex-col py-6 px-8 lg:px-5 bg-white text-left">
          <p className="text-sm mb-5">By {author}</p>
          <h3 className="text-Blue-950 mb-4 text-md font-normal hover:text-Green-500 transition-colors duration-300">
            <Link href={'/'}>{heading}</Link>
          </h3>
          <p className="leading-6">{text}</p>
      </div>
    </div>
  )
}

export const RequestInvBtn = () => {
  return (
    <div className="relative z-10 w-fit mx-auto lg:mx-0">
      <button className="px-11 py-3 bg-linear-to-tr from-Cyan-400 to-Green-500 text-white transition-opacity hover:opacity-70 duration-300 font-bold rounded-4xl w-fit cursor-pointer relative">
        Request Invite
      </button>
      <div className="bg-white min-w-full min-h-full absolute top-0 left-0 -z-5 rounded-4xl"></div>
    </div>
  )
}
