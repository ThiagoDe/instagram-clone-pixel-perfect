'use client'
import React from 'react'
import {getProviders, signIn} from "next-auth/react"
import '../../app/globals.css'
import Header from "../../components/Header"
import Provider from '../../components/Provider'
import { RecoilRoot } from 'recoil'

export default function signin({providers}) {
  return (
    <>
      <Provider>
        <RecoilRoot>
          <Header />
          <div className="flex justify-center space-x-7 mt-20">
            <img
              className="hidden object-cover rotate-6 md:inline-flex md:w-48  "
              src="https://superviral.com.au/wp-content/uploads/2021/08/instagix-banner-graphic.png"
              alt="instagram-image"
            />

            <div className="">
              {Object.values(providers).map((provider) => (
                <div className="flex flex-col items-center " key={provider.name}>
                  <img
                    className="w-32 object-cover "
                    src="https://socodigital.com/wp-content/uploads/2021/03/Instagram.png"
                    alt=""
                  />
                  <p className="text-sm italic my-10 text-center">
                    This app is created for learning purposes{' '}
                  </p>
                  <button
                    onClick={() => signIn(provider.id, { callbackUrl: '/' })}
                    className="bg-red-400 rounded-lg p-3 text-white hover:bg-red-500"
                    type=""
                  >
                    Sign in with {provider.name}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </RecoilRoot>
      </Provider>
    </>
  )
}

export async function getServerSideProps() {
    const providers = await getProviders() 
    return {
        props: {providers}
    }
}