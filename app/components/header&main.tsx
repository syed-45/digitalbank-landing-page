"use client"
import { useState } from "react"
import { RequestInvBtn } from "../page"
import { Header } from "./header"
import Image from "next/image"

export const HeaderAndMain = () => {
    const [isMenuOpen, setMenuIsOpen] = useState(false)
    return (
        <>
            <Header isMenuOpen={isMenuOpen} setMenuIsOpen={setMenuIsOpen}/>
            <main className="max-w-7xl mx-auto grid pb-10 lg:flex justify-start items-start lg:items-center lg:w-full lg:h-125">
                <div className="w-full [grid-area:1/1] overflow-hidden lg:hidden">
                    <Image src={'/bg-intro-mobile.svg'} alt="bg-intro-mobile" height={1000} width={1000} className="w-full h-full mt-[-9%]"/>
                </div>
                <div className={`lg:hidden overflow-hidden w-full [grid-area:1/1]`}>
                    <Image src={'/image-mockups-cropped.png'} alt="image-mockups" height={1000} width={1000} className={`w-full px-4 transition-all transition-discrete duration-500 ${isMenuOpen ? "hidden opacity-0 mt-[-40%]" : "block opacity-100 " } starting:opacity-0 starting:mt-[-40%]`}/>
                </div>                
                <div className="lg:pl-6 lg:content-center lg:w-[32%]">
                    <h1 className="lg:px-0 text-Blue-950 mb-6 text-[39px] font-normal px-6 -mt-10 lg:mt-0">Next generation digital banking</h1>
                    <p className="lg:px-0 mb-3 px-6 tracking-tighter leading-5">
                        Take your financial life online. Your Digitalbank account will be a one-stop-shop for
                        spending, saving, budgeting, investing, and much more. 
                    </p>
                    <RequestInvBtn/>
                </div>
                <div className="hidden lg:grid absolute top-24 right-0 w-150">
                    <div className="[grid-area:1/1] overflow-hidden">
                        <Image src={'/bg-intro-desktop.svg'} alt="bg-intro-desktop" height={5000} width={5000} className="w-full scale-[1.6] ml-[26%] mt-[-18%]"/>
                    </div>
                    <div className="[grid-area:1/1] overflow-hidden">
                        <Image src={'/image-mockups.png'} alt="image-mockups-desktop" height={5000} width={5000} className="w-full relative bottom-[18%] left-[17%]"/>
                    </div>                
                </div>
            </main>
        </>
    )
}

