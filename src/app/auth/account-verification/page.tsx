import {
  ArrowBigLeft, ArrowBigRight
} from 'lucide-react'
import React from 'react'
import Link from 'next/link'


export default function AccountVerification() {
  return (
    <div className="relative h-screen flex items-center justify-center">
      <div className="flex items-center justify-center my-4">
        <div className="bg-gradient-to-r from-indigo-500 via-teal-500 to-yellow-500 p-1 rounded-md">
          <div className="flex gap-2 flex-col px-4 py-4 bg-white sm:px-4 lg:px-6 sm:py-8 lg:py-12">
            <Link href={"/"} className="flex gap-2 items-center cursor-pointer font-bold text-[#3c3c3c] hover:text-[#212121]">
              <ArrowBigLeft className="w-5 h-5" />
              <span className="text-xl leading-tight sm:text-2xl">Home</span>
            </Link>
            <div className="xl:w-full xl:max-w-sm 2xl:max-w-md xl:mx-auto">
              <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl">
                Account verification
              </h2>
              <div className="mt-2 text-sm text-slate-600">
                {"We have sent an account verification link to your email "}
                {"If you don't see it, check your spam folder. "}
                {"If you didn't receive the email, click the below button"}
              </div>
              <div className="mt-4">
                <button className="w-full inline-flex gap-2 items-center justify-center rounded-md shadow-xl cursor-pointer bg-teal-400 px-3.5 py-2.5 text-base font-semibold leading-7 text-white hover:bg-teal-500">
                  Re-send Email
                  <ArrowBigRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

