import React from 'react'
import {modalState} from '../atom/modalAtom'
import { useRecoilState } from 'recoil'

export default function UploadModal() {
  const [open, setOpen] = useRecoilState(modalState)
  
  return (
    <div>
      Modal
      {open && <h1>The modal is open</h1>}
    </div>
  )
}
