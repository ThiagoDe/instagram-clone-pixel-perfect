import Image from 'next/image'
import React from 'react'

export default function Header() {
  return (
    <div className="">
      {/* left */}
      <div className="flex items-center justify-between max-w-6xl">
        <div className="h-24 w-24 relative hidden lg:inline-grid cursor-pointer">
          <Image
            alt="insta logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/800px-Instagram_logo.svg.png?20160616034027"
            layout="fill"
            className="object-contain"
          />
        </div>
        <div className="h-24 w-24 relative lg:hidden cursor-pointer">
          <Image
            alt="insta icon"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Instagram-Icon.png/1200px-Instagram-Icon.png"
            layout="fill"
            className="object-contain"
          />
        </div>

        <h1>right side</h1>
      </div>
    </div>
  )
}
