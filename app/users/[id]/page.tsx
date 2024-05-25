import React from 'react'

interface Props {
    params: { id: number }
}
interface User {
    id: number,
    name: string,
    email: string,
}
const UserDetail = async ({params: {id}}: Props) => {
    const re = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    const users: User[] = await re.json();
    return (
       <div>{id}</div>
    )
}

export default UserDetail