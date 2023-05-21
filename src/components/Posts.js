import React from 'react'
import Post from './Post'

export default function Posts() {
    const posts = [
      {
        id: '1',
        username: 'tboyexperience',
        userImg: '/avatar.png',
        img: 'https://images.unsplash.com/photo-1682687982167-d7fb3ed8541d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80',
        caption: 'In the wild',
      },
      {
        id: '2',
        username: 'thiagomm',
        userImg: '/avatar.png',
        img: 'https://images.unsplash.com/photo-1508107222753-0c236c337911?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=986&q=80',
        caption: 'Paradise',
      },
    ]
    
  return (
    <div className=''>
      {posts.map((post) => (
        <Post key={post.id} username={post.username} id={post.id} userImg={post.userImg} img={post.img} caption={post.caption} />
      ))
      } 
    </div>
  )
}
