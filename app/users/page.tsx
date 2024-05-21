import React from 'react'
import Link from "next/link";

interface User {
    id: number,
    name: string
}
const page = async () => {
    const re = await fetch(`https://jsonplaceholder.typicode.com/users`,{cache:'no-store'});
    const users: User[] = await re.json();
    return (
        <div>
            <h1>Users List</h1>
            <p>{new Date().toLocaleTimeString('fa-ir')}</p>
            <ul>
                {users.map(item => <li key={item.id}>{item.name}</li>)}
            </ul>

            <Link href='/'>Back</Link>
        </div>
    )
}

export default page