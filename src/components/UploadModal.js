import React, { useRef, useState } from 'react'
import {modalState} from '../atom/modalAtom'
import { useRecoilState } from 'recoil'
import Modal from 'react-modal'
import { CameraIcon } from '@heroicons/react/24/outline'

export default function UploadModal() {
  const [open, setOpen] = useRecoilState(modalState)
  const [selectedFile, setSelectedFile] = useState(null)
  const filePickerRef = useRef(null)

  const addImageToPost = (e) => {
    const reader = new FileReader()
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0])
    }
    reader.onload = (readerEvent) => {
      setSelectedFile(readerEvent.target.result)
    }
  }
  
  return (
    <div>
      Modal
      {open && (
        <Modal
          className="max-w-lg w-[90%] p-6 absolute top-56 left-[50%] translate-x-[-50%] bg-white border-2 rounded-md shadow-md "
          isOpen={open}
          onRequestClose={() => {
            setOpen(false) 
            setSelectedFile(null)
          }}
        >
          <div className="flex flex-col justify-center items-center h-[100%]">
           { selectedFile ? (
            <img onClick={() => setSelectedFile(null)} className='w-full max-h-[250] object-cover cursor-pointer ' src={selectedFile} alt='selected file'/>
           ) : <CameraIcon
              onClick={() => filePickerRef.current.click()}
              className="cursor-pointer h-14 bg-red-200 p-2 rounded-full border-2 text-red-500 "
            />}
            <input onChange={addImageToPost} hidden ref={filePickerRef} type="file" name="" value="" />
            <input
              type="text"
              maxLength="150"
              placeholder="Please enter your caption"
              className="m-4 border-none text-center w-full focus:ring-0 "
            />
            <button
              disabled
              className="w-full bg-red-600 text-white p-2 shadow-md hover:brightness-125 disabled:bg-gray-200 disabled:cursor-not-allowed disabled:hover:brightness-100"
            >
              Upload Post
            </button>
          </div>
        </Modal>
      )}
    </div>
  )
}
