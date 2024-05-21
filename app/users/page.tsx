import React from 'react'
import Link from "next/link";
import TimeBlock from "@/app/components/TimeBlock";

interface User {
    id: number,
    name: string,
    email: string,
}

const page = async () => {
    const re = await fetch(`https://jsonplaceholder.typicode.com/users`);
    const users: User[] = await re.json();
    return (
        <div>
            <h1>Users List</h1>
            <p><TimeBlock/></p>
            <table className='table table-bordered'>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                </tr>
                </thead>
                <tbody>
                {users.map(item => <tr key={item.id}>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                </tr>)}
                </tbody>
            </table>

            <Link href='/' className='blue'>Back</Link>
        </div>
    )
}

export default page