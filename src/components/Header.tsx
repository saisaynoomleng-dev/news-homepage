'use client'

import clsx from "clsx"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"

type NavLink = {
    name: string
    url: string
}

const Header = () => {
    const navLinks = [
        { name: 'home', url: '/' },
        { name: 'new', url: '/new' },
        { name: 'popular', url: '/popular' },
        { name: 'trending', url: '/trending' },
        { name: 'categories', url: '/categories' },
    ]
    const pathname = usePathname();

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
                    {navLinks.map((link: NavLink) => (
                        <li
                            key={link.name}
                            className={clsx('hover:text-brand-orange',
                                pathname === link.url && 'text-brand-orange font-semibold'
                            )}>
                            <Link
                                href={link.url}
                                className="capitalize">
                                {link.name}
                            </Link>
                        </li>
                    ))

                    }
                </ul>
            </nav>
        </header>
    )
}

export default Header