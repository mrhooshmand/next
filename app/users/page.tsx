import React from 'react'
import Link from "next/link";
import {sort} from 'fast-sort';

interface Props {
    params: {
        slug: string[]
    };
    searchParams: {
        sortKey: string
    };
}

interface User {
    id: number,
    name: string,
    email: string,
    username: string,
}

const page = async ({searchParams: {sortKey}}: Props) => {
    const re = await fetch(`https://jsonplaceholder.typicode.com/users`);
    const users: User[] = await re.json();
    const sortedList = sort(users).asc((user) => user[sortKey])
    return (
        <div className="overflow-x-auto">
            <table className='table table-bordered'>
                <thead>
                <tr>
                    <th><Link href='/users?sortKey=id'>ID</Link></th>
                    <th><Link href='/users?sortKey=name'>Name</Link></th>
                    <th><Link href='/users?sortKey=username'>username</Link></th>
                    <th><Link href='/users?sortKey=email'>Email</Link></th>
                </tr>
                </thead>
                <tbody>
                {sortedList.map(item => <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.username}</td>
                    <td>{item.email}</td>
                </tr>)}
                </tbody>
            </table>

            <div className='text-center my-5 flex justify-between'>
                <Link href='/' className='btn btn-link  w-20'>Back</Link>
                <Link href='../users/new' className='btn text-blue-500 w-52'>Add New User</Link>
            </div>
        </div>
    )
}

export default page