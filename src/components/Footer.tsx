"use client"

import {
    Facebook, Twitter, Youtube
} from 'lucide-react'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'


type Props = {}

export default function Footer() {
    const [currentYear, setCurrentYear] = React.useState<string>()

    React.useEffect(() => {
        setCurrentYear(new Date().getUTCFullYear().toString())
    }, [])

    return (
        <footer className="py-12 mt-6 w-full relative flex items-center justify-center">
            <div className="py-5 mb-4 z-10">
                <div className="flex gap-6 justify-center">
                    <span className="w-10 h-10 flex items-center justify-center cursor-pointer rounded-full text-slate-700 bg-slate-200 hover:text-slate-800 hover:bg-slate-300">
                        <Facebook />
                    </span>
                    <span className="w-10 h-10 flex items-center justify-center cursor-pointer rounded-full text-slate-700 bg-slate-200 hover:text-slate-800 hover:bg-slate-300">
                        <Youtube />
                    </span>
                    <span className="w-10 h-10 flex items-center justify-center cursor-pointer rounded-full text-slate-700 bg-slate-200 hover:text-slate-800 hover:bg-slate-300">
                        <Twitter />
                    </span>
                </div>
                <p className="py-5 text-slate-500">
                    Copyright © {currentYear} All rights reserved
                </p>
                <p className="text-center text-slate-500">
                    <Link href={"/#"}>
                        <span className="text-slate-700 hover:text-teal-600">Terms </span>
                    </Link>
                    &
                    <Link href={"/#"}>
                        <span className="text-slate-700 hover:text-teal-600"> Conditions</span>
                    </Link>
                </p>
            </div>
            <Image
                alt="footer"
                height={256}
                width={2560}
                draggable={false}
                className="absolute -bottom-10"
                src={"/assets/images/bg/cover__footer.svg"}
            />
        </footer>
    )
}
