import React from 'react'
import SingleUser3 from './SingleUser3'
import { getUser } from '@/app/_components/user3/Action3'

async function UserList3() {

    const users = await getUser()
    console.log(users)


  return (
    <div className="w-full">
       {users !== undefined && users.map((user, index)=>(
            <SingleUser3 key={index}  user={user} />
       ))}
    </div>
  )
}

export default UserList3