'use client'
import React from 'react'
import Link from "next/link";
import {useRouter} from "next/navigation";

const newUser = () => {
    const router = useRouter()
    return (
        <div>
            <h1 className='my-5'>New User</h1>
            <button className='btn btn-secondary my-5' onClick={() => router.push('../../users')}>Create</button>
        </div>
    )
}

export default newUser