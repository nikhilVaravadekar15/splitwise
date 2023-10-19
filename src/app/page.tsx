import React from 'react'
import Link from 'next/link'
import Navigation from '@/components/Navigation'
import CustomSwiper from '@/components/CustomSwiper'
import Footer from '@/components/Footer'

export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center">
      <Navigation />
      <div className="container mt-20 w-full mx-auto flex flex-col items-center justify-center text-center sm:w-[640px] lg:w-[896px]">
        <div className="relative max-w-5xl mx-auto pt-4">
          <h1 className=" text-slate-900 text-4xl font-extrabold tracking-tighter md:text-6xl lg:text-7xl xl:text-8xl">
            Less stress when sharing expenses
            <br />
            <CustomSwiper />
          </h1>
        </div>
        <p className="mt-3 w-10/12 text-base text-gray-700 sm:mt-4 sm:w-11/12 sm:text-xl lg:text-lg lg:mt-5 xl:text-xl xl:mt-6">
          Less stress when sharing expenses with your partner.
          Keep track of your shared expenses and balances with housemates, trips, groups, friends, and family.
        </p>
        <div className="my-4 flex justify-center space-x-6 text-sm">
          <Link href={"/get-started"} className="bg-teal-400 hover:bg-teal-500 focus:outline-none text-white text-lg font-bold h-12 px-6 rounded-lg w-full flex items-center justify-center sm:w-auto">
            Get started
          </Link>
        </div>
      </div>
      <Footer />
    </main>
  )
}
