import { Button } from '@/components/ui/button'
import React from 'react'
import DeleteButton from './DeleteButton3'

type UserProps = {
    user: IUSER
}

function SingleUser3 ({user}:UserProps) {
   
  return (
    <div className="grid grid-cols-12 py-2 items-center p-2 border-b">
        <div className="col-span-3 capitalize">{user?.name}</div>
        <div className="col-span-6 capitalize">{user?.email}</div>
        <div className="col-span-3 capitalize">
          <DeleteButton id={user?._id.toString()} />
        </div>
      </div>
  )
}

export default SingleUser3