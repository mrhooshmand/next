'use client'
import React from 'react'

interface Props {
    error: Error;
    reset: () => void
}

const ErrorPage = ({error,reset}: Props) => {
    console.log(error)
    return (
        <div className='flex justify-center items-center'>An Error with Code <kbd
            className="kbd mx-5 bg-error text-white">500</kbd> has happened
            <br/>
            <button className="btn btn-link" onClick={() => reset()}>Retry</button>
        </div>
    )
}

export default ErrorPage