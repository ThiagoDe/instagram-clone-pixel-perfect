import React from 'react'
import { EllipsisVerticalIcon } from '@heroicons/react/24/solid'

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
    </div>
  )
}
