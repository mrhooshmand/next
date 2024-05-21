import React, {Fragment} from 'react'
import Link from "next/link";

const newUser = () => {
    return (
        <Fragment>
            <div>New User</div>
            <Link href='/'>Got to Users</Link>
        </Fragment>
    )
}

export default newUser