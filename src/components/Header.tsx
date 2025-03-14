import Image from "next/image"
import Link from "next/link"

const Header = () => {
    return (
        <header className="custom-container flex justify-between items-center">
            <Image
                src='/logo.svg'
                width={50}
                height={50}
                alt="logo"
                priority />

            <nav
                role="navigation"
                aria-label="menu">
                <ul className="flex justify-center items-center gap-5">
                    <li><Link href={''}>Home</Link></li>
                    <li><Link href={''}>New</Link></li>
                    <li><Link href={''}>Popular</Link></li>
                    <li><Link href={''}>Trending</Link></li>
                    <li><Link href={''}>Categories</Link></li>
                </ul>

            </nav>

        </header>
    )
}

export default Header