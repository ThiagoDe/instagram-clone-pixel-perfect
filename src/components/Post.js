import React from 'react'
import { EllipsisVerticalIcon, } from '@heroicons/react/24/solid'
import { HeartIcon, ChatBubbleOvalLeftEllipsisIcon, BookmarkIcon } from '@heroicons/react/24/outline'

export default function Post({id, username, userImg, img, caption}) {
  return (
    <div className="bg-white my-7 border rounded-md ">
      <div className="flex items-center p-5">
        <img
          className="h-12 rounded-full object-cover border p-1 mr-3"
          src={userImg}
          alt="user image"
        />
        <p className="font-bold flex-1">{username}</p>
        <EllipsisVerticalIcon className="h-5 " />
      </div>

      <img className='object-cover w-full' src={img} alt='post image'/>

      <div className='flex justify-between px-4 pt-4'>
        <div className='flex space-x-4'>
            <HeartIcon className='btn'/>
            <ChatBubbleOvalLeftEllipsisIcon className='btn'/>
            
        </div>
            <BookmarkIcon className='btn'/>
      </div>
      
    </div>
  )
}
