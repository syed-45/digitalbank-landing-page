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
            <main className="grid pb-10">
                <div className="w-full overflow-hidden [grid-area:1/1] ">
                    <Image src={'/bg-intro-mobile.svg'} alt="bg-intro-mobile" height={1000} width={1000} className="w-full h-full mt-[-9%]"/>
                </div>
                <div className={`w-full overflow-hidden [grid-area:1/1] transition-all transition-discrete duration-500 ${isMenuOpen ? "hidden opacity-0 mt-[-10%]" : "block opacity-100 " } starting:opacity-0 starting:mt-[-10%]`}>
                    <Image src={'/image-mockups-cropped.png'} alt="image-mockups" height={1000} width={1000} className="[grid-area:1/1] w-full px-4"/>
                </div>
                <h1 className="text-Blue-950 mb-10 text-4xl px-6 -mt-10">Next generation digital banking</h1>
                <p className="mb-12 px-6">
                    Take your financial life online. Your Digitalbank account will be a one-stop-shop for
                    spending, saving, budgeting, investing, and much more. 
                </p>
                <RequestInvBtn/>
            </main>
        </>
    )
}