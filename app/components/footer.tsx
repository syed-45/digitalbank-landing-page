import { JSX } from "react"
import Image from "next/image"
import Link from "next/link"
import { RequestInvBtn } from "../page"

export const Footer = (): JSX.Element => {
    return (
        <footer className="bg-Blue-950 min-h-fit grow">
            <div className="max-w-7xl mx-auto lg:px-6 flex flex-col items-center py-12 lg:flex-row lg:items-center lg:py-14">
                <div className="lg:pr-28">
                    <Image src="/logo-light.svg" alt="logo" width={5000} height={5000} className="w-[160px]"/>
                    <div className="flex gap-5 py-10 lg:py-14 font-normal">
                        <Link href={"/"}>
                            <Image width={1000} height={1000} className="w-5" src={'/icon-facebook.svg'} alt="facebook-icon"/>
                        </Link>
                        <Link href={"/"}>
                            <Image width={1000} height={1000} className="w-5" src={'/icon-youtube.svg'} alt="youtube-icon"/>
                        </Link>
                        <Link href={"/"}>
                            <Image width={1000} height={1000} className="w-5" src={'/icon-x.svg'} alt="x-icon"/>
                        </Link>
                        <Link href={"/"}>
                            <Image width={1000} height={1000} className="w-5" src={'/icon-pinterest.svg'} alt="pinterest-icon"/>
                        </Link>
                        <Link href={"/"}>
                            <Image width={1000} height={1000} className="w-5" src={'/icon-instagram.svg'} alt="instagram-icon"/>
                        </Link>
                    </div>
                </div>
                <div className="text-white pb-6 lg:grid lg:grid-cols-2 lg:w-1/3">
                    <div className="flex flex-col items-center lg:items-start gap-4 lg:gap-8 mb-4 lg:mb-0">
                        <Link href={'/'} className="hover:text-Green-500 transition-colors duration-300 w-fit">About Us</Link>
                        <Link href={'/'} className="hover:text-Green-500 transition-colors duration-300 w-fit">Contact</Link>
                        <Link href={'/'} className="hover:text-Green-500 transition-colors duration-300 w-fit">Blog</Link>
                    </div>
                    <div className="flex flex-col items-center lg:items-start gap-4 lg:gap-8">
                        <Link href={'/'} className="hover:text-Green-500 transition-colors duration-300 w-fit">Careers</Link>
                        <Link href={'/'} className="hover:text-Green-500 transition-colors duration-300 w-fit">Support</Link>
                        <Link href={'/'} className="hover:text-Green-500 transition-colors duration-300 w-fit">Privacy Policy</Link>
                    </div>
                </div>
                <div className="lg:grow lg:flex-col lg:flex lg:items-end">
                    <RequestInvBtn/>
                    <p className="pt-6 pb-16">© Digitalbank. All Rights Reserved</p>
                </div>
            </div>
        </footer>
    )
} 

