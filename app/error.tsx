'use client'
import React from 'react'

interface Props {
    error: Error;
    reset: () => void
}

const ErrorPage = ({error,reset}: Props) => {
    console.log(error)
    return (
        <div className='flex flex-col  items-center'>
            <label className="swap swap-flip text-9xl my-5">
                <div className="swap-off">😈</div>
            </label>
            <div className="my-5">
            An Error with Code <kbd
            className="kbd mx-5 bg-error text-white">500</kbd> has happened
            </div>
            <button className="btn btn-ghost" onClick={() => reset()}>Retry</button>
        </div>
    )
}

export default ErrorPage