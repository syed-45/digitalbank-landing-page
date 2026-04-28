import { JSX } from "react"
import Image from "next/image"
import Link from "next/link"
import { RequestInvBtn } from "../page"

export const Footer = (): JSX.Element => {
    return (
    <footer className="flex flex-col items-center py-12 bg-Blue-950">
        <Image src="/logo-light.svg" alt="logo" width={5000} height={5000} className="w-[160px]"/>
        <div className="flex gap-5 py-10 font-normal">
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
        <div className="text-white flex flex-col gap-4 pb-6">
            <Link href={'/'}>About Us</Link>
            <Link href={'/'}>Contact</Link>
            <Link href={'/'}>Blog</Link>
            <Link href={'/'}>Careers</Link>
            <Link href={'/'}>Support</Link>
            <Link href={'/'}>Privacy Policy</Link>
        </div>
        <RequestInvBtn/>
        <p className="pt-6 pb-16">© Digitalbank. All Rights Reserved</p>

    </footer>
    )
} 

