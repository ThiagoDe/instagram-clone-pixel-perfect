import Image from 'next/image'
import React from 'react'
import { MagnifyingGlassIcon, PlusCircleIcon } from '@heroicons/react/24/outline'
import { BeakerIcon, HomeIcon } from '@heroicons/react/24/solid'

export default function Header() {
  return (
    <div className="flex items-center justify-between max-w-6xl mx-4 xl:mx-auto">
      {/* left */}
      <div className="h-24 w-24 relative hidden lg:inline-grid cursor-pointer">
        <Image
          alt="insta logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/800px-Instagram_logo.svg.png?20160616034027"
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
        <PlusCircleIcon className="h-6 cursor-pointer hover:scale-125 transition-transform duration-200 ease-out" />
        <img
          className="h-10 w-10 object-contain rounded-full  "
          src="/avatar.png"
          alt="user image"
        />
      </div>
    </div>
  )
}
