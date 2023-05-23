import React from 'react'
import { EllipsisVerticalIcon, } from '@heroicons/react/24/solid'
import { HeartIcon, ChatBubbleOvalLeftEllipsisIcon, BookmarkIcon, FaceSmileIcon } from '@heroicons/react/24/outline'
import { useSession } from 'next-auth/react'

export default function Post({id, username, userImg, img, caption}) {
  const {data:session} = useSession()

  return (
    <div className="bg-white my-7 border rounded-md ">
      {/* post header */}
      <div className="flex items-center p-5">
        <img
          className="h-12 rounded-full object-cover border p-1 mr-3"
          src={userImg}
          alt="user image"
        />
        <p className="font-bold flex-1">{username}</p>
        <EllipsisVerticalIcon className="h-5 " />
      </div>
      {/* post image */}
      <img className='object-cover w-full' src={img} alt='post image'/>
     
      {/* post buttons  */}
      {session && (
        <div className='flex justify-between px-4 pt-4'>
          <div className='flex space-x-4'>
              <HeartIcon className='btn'/>
              <ChatBubbleOvalLeftEllipsisIcon className='btn'/>
              
          </div>
              <BookmarkIcon className='btn'/>
        </div>
      )}
        {/* post comments */}
      <p className='p-5 truncate '><span className='font-bold mr-2'>{username}</span>{caption}</p>
      {/* post input box */}
      {session && (
        <form className='flex items-center p-4' action=''>
            <FaceSmileIcon className='h-7 '/>
            <input className='border-none flex-1 focus:ring-0 ' type="text" name="" value="" placeholder='Enter your comments...'/>
            <button className='text-blue-400 font-bold ' type="">Post</button>
        </form>
      
      )}
    </div>
  )
}
