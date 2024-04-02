import { showerUsers } from '@/actions/user'
import React from 'react'
import SingleUser from './SingleUser';

async function UserList() {

    const users = await showerUsers();

  return (
    <div>
        {
            users !== undefined && users.map((user: IUSER, index: number)=>(
                <SingleUser key={index} user={user} />
                
            ))
        }
    </div>
  )
}

export default UserList