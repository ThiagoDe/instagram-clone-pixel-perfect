import React from 'react'
import Stories from './Stories'
import Posts from './Posts'

export default function Feed() {
  return (
    <main>
        <section>
            {/* stories */}
            <Stories/>
            {/* post */}
            <Posts/>
        </section>
        <section>
            {/* min profile */}
            {/* suggestions  */}
        </section>
      
    </main>
  )
}
