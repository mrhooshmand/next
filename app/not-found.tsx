import React from 'react'

const NotFoundPage = () => {
  return (
    <div className='flex flex-col items-center'>
        <div className='my-5'>
            <b className='text-error'>404</b> | Page Not Found !
        </div>


        <div className="flex justify-center gap-1 my-1 w-full">
            <kbd className="kbd">?</kbd>
            <kbd className="kbd">?</kbd>
            <kbd className="kbd">?</kbd>
            <kbd className="kbd">?</kbd>
            <kbd className="kbd">?</kbd>
            <kbd className="kbd">?</kbd>
            <kbd className="kbd">?</kbd>
            <kbd className="kbd">?</kbd>
            <kbd className="kbd">?</kbd>
            <kbd className="kbd">?</kbd>
        </div>
        <div className="flex justify-center gap-1 my-1 w-full">
            <kbd className="kbd">!</kbd>
            <kbd className="kbd">!</kbd>
            <kbd className="kbd">!</kbd>
            <kbd className="kbd">!</kbd>
            <kbd className="kbd">!</kbd>
            <kbd className="kbd">!</kbd>
            <kbd className="kbd">!</kbd>
            <kbd className="kbd">!</kbd>
            <kbd className="kbd">!</kbd>
        </div>
        <div className="flex justify-center gap-1 my-1 w-full">
            <kbd className="kbd">*</kbd>
            <kbd className="kbd">*</kbd>
            <kbd className="kbd">*</kbd>
            <kbd className="kbd">*</kbd>
            <kbd className="kbd">*</kbd>
            <kbd className="kbd">*</kbd>
            <kbd className="kbd">*</kbd>
            <kbd className="kbd">*</kbd>
        </div>
    </div>
  )
}

export default NotFoundPage