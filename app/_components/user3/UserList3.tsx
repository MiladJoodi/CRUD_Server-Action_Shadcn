import React from 'react'
import SingleUser3 from './SingleUser3'
import { getUser } from '@/app/_components/user3/Action3'


async function UserList3() {
  

    const users = await getUser();
    // console.log(users)


  return (
    <div className="w-full bg-slate-200 p-5">
       {users !== undefined && users?.map((user: IUSER, index: number)=>(
                <SingleUser3 key={index} user={user} />
       ))}
    </div>
  )
}

export default UserList3