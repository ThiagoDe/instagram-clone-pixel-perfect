"use client"
import React, { useEffect, useState } from 'react'
import minifaker, { jobTitle } from 'minifaker'

export default function Suggestions() {
    const [suggestions, setSuggestion] = useState([])

    useEffect(() => {
        const suggestions = minifaker.array(5, i => ({
            username: minifaker.username({locale: 'en'}).toLowerCase(),
            jobTitle: minifaker.jobTitle(),
            id: i 
            
        }))
        setSuggestion(suggestions)
    },[])
    
  return (
    <div className="mt-4 ml-10">
      <div className="flex justify-between mb-5 text-sm">
        <h3 className="font-bold text-gray-400 ">Suggestions for you</h3>
        <button className="text-gray-600 font-semibold ">See all</button>
      </div>
      {suggestions.map((suggestion) => (
        <div className='flex items-center justify-between mt-3' key={suggestion.id}>
          <img className='h-10 rounded-full border p-[2px]'
            src={`https://i.pravatar.cc/150?img=${Math.ceil(
              Math.random() * 70
            )}`} alt='avatar random'
          />
          <div className='flex-1 ml-4'>
            
            <h2 className='font-semibold text-sm'>{suggestion.username}</h2>
            <h3 className='ml-0 text-gray-400 text-sm truncate max-w-[230px]'>{suggestion.jobTitle}</h3>
          </div>
          <button className='font-semibold text-blue-400 text-sm' type="">Follow</button>
        </div>
      ))}
    </div>
  )
}
