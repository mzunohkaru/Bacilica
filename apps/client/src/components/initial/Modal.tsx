import React, { forwardRef } from 'react'

type ModalProps = {
  onClose: () => void;
}

const Modal = forwardRef<HTMLDivElement, ModalProps>(({onClose}, ref) => {
  return (
    <div ref={ref} className='w-[70vw] h-[70vh] text-white text-9xl z-10'>
      Modal
      <button onClick={onClose} className='text-white text-xl'>close</button>
    </div>
  )
})

export default Modal

