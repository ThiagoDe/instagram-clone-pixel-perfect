import React from 'react'

export default function MiniProfile() {
  return (
    <div className='flex items-center justify-between mt-14 ml-10'>
      <img className='h-16 rounded-full border p-[2px] ' src="/avatar.png" alt="user avatar" />
      <div className='flex-1 ml-4'>
        <h2 className='font-bold '>tboyexperience</h2>
        <h3 className='text-sm text-gray-400 mx-0' >Welcome to Instagram</h3>
      </div>
      <button className='font-semibold text-blue-400 text-sm' type="">Sign out </button>
    </div>
  )
}