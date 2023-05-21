"user client"

import React from 'react'

export default function Story({username, img}) {
    
  return (
    <div className=''>
      <img src={img}  alt={username} />
      <p>{username}</p>
    </div>
  )
}
