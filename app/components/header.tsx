import { Dispatch, JSX, SetStateAction } from "react"
import Image from "next/image"
import Link from "next/link"
import { RequestInvBtn } from "../page"

interface IHeaderProps {
    isMenuOpen: boolean
    setMenuIsOpen: Dispatch<SetStateAction<boolean>>
}

export const Header = ({isMenuOpen, setMenuIsOpen}: IHeaderProps): JSX.Element => {
    return (
        <header className="max-w-7xl mx-auto flex items-center justify-center lg:justify-start pl-5 pr-7 py-6 lg:py-3 bg-white">
            <div className="w-full grow lg:grow-0 lg:w-fit">
                <Image src="/logo-dark.svg" alt="logo" width={5000} height={5000} className="w-[150px] lg:w-46"/>
            </div>
            <nav 
                className="hidden lg:flex grow justify-center gap-12"
                onClick={(e) => {
                    e.preventDefault()
                    e.stopPropagation()
                }}
            >
                <Link href={'/'} onClick={() => setMenuIsOpen(false)}>Home</Link>
                <Link href={'/'} onClick={() => setMenuIsOpen(false)}>About</Link>
                <Link href={'/'} onClick={() => setMenuIsOpen(false)}>Contact</Link>
                <Link href={'/'} onClick={() => setMenuIsOpen(false)}>Blog</Link>
                <Link href={'/'} onClick={() => setMenuIsOpen(false)}>Careers</Link>
            </nav>
            <div className="hidden lg:block ">
                <RequestInvBtn/>
            </div>
            <button 
                className={`lg:hidden transition transition-discrete starting:opacity-0 opacity-100 duration-400`}
                key={isMenuOpen.toString()}
                onClick={() => setMenuIsOpen(prev => !prev)}
            >
                {isMenuOpen ? <CloseIcon/>: <MenuIcon/>}
            </button>
            <div 
                className={`lg:hidden transition transition-discrete duration-500 ${isMenuOpen ? "block opacity-100 " : "hidden opacity-0 "} starting:opacity-0 h-dvh w-full bg-linear-to-b from-black/50 absolute top-[69.4px] left-0 flex`}
                onClick={() => setMenuIsOpen(false)}
            >
                <nav 
                    className="mt-6 mx-5 h-fit w-full bg-white text-Blue-950 rounded-lg flex flex-col items-center gap-8 py-8"
                    onClick={(e) => {
                        e.preventDefault()
                        e.stopPropagation()
                    }}
                >
                    <Link href={'/'} onClick={() => setMenuIsOpen(false)}>Home</Link>
                    <Link href={'/'} onClick={() => setMenuIsOpen(false)}>About</Link>
                    <Link href={'/'} onClick={() => setMenuIsOpen(false)}>Contact</Link>
                    <Link href={'/'} onClick={() => setMenuIsOpen(false)}>Blog</Link>
                    <Link href={'/'} onClick={() => setMenuIsOpen(false)}>Careers</Link>
                </nav>
            </div>
        </header>
    )
} 


const MenuIcon = () => <svg
    xmlns="http://www.w3.org/2000/svg" 
    width="24" 
    height="12"
    className="text-gray-500"
    >
        <g fill="currentColor" fillRule="evenodd">
        <path d="M0 0h24v1H0zM0 5h24v1H0zM0 10h24v1H0z"/>
        </g>
    </svg>

const CloseIcon = () => <svg
        xmlns="http://www.w3.org/2000/svg" 
        width="18"
        height="19"
        className=""
    >
        <g fill="#2D314D" fillRule="evenodd">
        <path d="M.868.661l16.97 16.97-.706.708L.162 1.369z"/>
        <path d="M.161 17.632L17.131.662l.708.706-16.97 16.97z"/>
        </g>
    </svg>