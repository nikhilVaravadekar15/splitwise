import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

type Props = {}

export default function Navigation() {
    return (
        <div className="container w-full">
            <div className="p-6 flex gap-4 flex-col items-center justify-between sm:flex-row">
                <Link href="/" className="cursor-pointer">
                    <Image
                        width={128} height={64} draggable={false}
                        src="/assets/images/logo/logo.svg" alt="logo" />
                </Link>
                <div className="w-full flex gap-8 items-center justify-center sm:w-6/12 sm:justify-around md:w-4/12 lg:w-3/12 lg:justify-evenly">
                    <Link
                        href={"/auth/signin"}
                        title="sign-in"
                        className="px-3 py-2 sm:px-5 sm:py-3 font-bold rounded-lg text-white shadow-xl cursor-pointer bg-teal-400 hover:bg-teal-500"
                    >
                        sign in
                    </Link>
                    <Link
                        href={"/auth/signup"}
                        title="sign-up"
                        className="px-3 py-2 sm:px-5 sm:py-3 font-bold rounded-lg text-white shadow-xl cursor-pointer bg-teal-400 hover:bg-teal-500"
                    >
                        sign up
                    </Link>
                </div>
            </div>
        </div>
    )
}
