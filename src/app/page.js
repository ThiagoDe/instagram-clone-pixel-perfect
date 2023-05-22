"use client"
import Feed from '../components/Feed'
import Header from "../components/Header";
import UploadModal from '../components/UploadModal'
import {RecoilRoot} from 'recoil'
import { useSession } from 'next-auth/react';


export default function Home() {
  const { data: session } = useSession()
  console.log(session, 'session here')
  return (
    // <div className="bg-gray-50 min-h-screen">
    <div className="">
      <RecoilRoot>
        <Header/>
        <Feed />
        <UploadModal/>
      </RecoilRoot>
    </div>
  )
}
