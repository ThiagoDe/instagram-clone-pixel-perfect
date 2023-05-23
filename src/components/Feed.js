"use client"
import React from 'react'
import Stories from './Stories'
import Posts from './Posts'
import MiniProfile from './MiniProfile'
import Suggestions from './Suggestions'
import { useSession } from 'next-auth/react'

export default function Feed() {
  const {data: session} = useSession()

  return (
    <main
      className={` grid ${
        session
          ? 'grid-cols-1 md:grid-cols-3 md:max-w-[999px] mx-auto'
          : 'grid-cols-1 md:grid-cols-2 md:max-w-[985px] mx-auto'
      } `}
    >
      <section className="md:col-span-2">
        {/* stories */}
        <Stories />
        {/* post */}
        <Posts />
      </section>
      <section className="hidden md:inline-grid md:col-span-1">
        <div className="fixed w-[380px]">
          {/* mini profile */}
          <MiniProfile className="" />
          {/* suggestions  */}
          <Suggestions />
        </div>
      </section>
    </main>
  )
}
