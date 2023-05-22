"use client"

import Image from 'next/image'
import React from 'react'
import { MagnifyingGlassIcon, PlusCircleIcon } from '@heroicons/react/24/outline'
import { HomeIcon } from '@heroicons/react/24/solid'
import { useSession, signIn, signOut } from 'next-auth/react'
import {useRecoilState} from 'recoil'
import {modalState} from '../atom/modalAtom'

export default function Header() {
    const {data: session} = useSession()
    const [open, setOpen] = useRecoilState(modalState)
    
  return (
    <div className='shadow-sm border-b sticky top-0 bg-white z-30'>
        
        <div className="flex items-center justify-between max-w-6xl mx-4 xl:mx-auto">
        {/* left */}
            <div className="h-24 w-28 ml-6 relative hidden lg:inline-grid cursor-pointer">
                <Image
                alt="insta logo"
                src="/instagram-logo.png"
                layout="fill"
                className="object-contain"
                />
            </div>
            <div className="h-24 w-12 relative lg:hidden cursor-pointer">
                <Image
                alt="insta icon"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Instagram-Icon.png/1200px-Instagram-Icon.png"
                layout="fill"
                className="object-contain "
                />
            </div>
            {/* middle */}
            <div className="relative mt-1">
                <div className="absolute top-2 left-2 ">
                <MagnifyingGlassIcon className="h-5 text-gray-500" />
                </div>
                <input
                className="bg-gray-50 pl-10 border-gray-500 text-sm focus:ring-black focus:border-black rounded-md "
                type="text"
                placeholder="Search"
                />
            </div>

            <div className="flex space-x-4 items-center">
                <HomeIcon className="hidden md:inline-flex h-6 cursor-pointer hover:scale-125 transition-transform duration-200 ease-out cursor-pointer" />
                {session ? (
                    <>  
                        <PlusCircleIcon onClick={() => setOpen(true)} className="h-6 cursor-pointer hover:scale-125 transition-transform duration-200 ease-out" />
                        <img
                        onClick={signOut}
                        className="h-10 w-10 object-contain rounded-full  cursor-pointer"
                        src={session.user.image}
                        alt="user image"
                        />
                    </>
                ): (
                    <button onClick={signIn}>Sign in</button>
                )}
            </div>
        </div>
    </div>
  )
}
