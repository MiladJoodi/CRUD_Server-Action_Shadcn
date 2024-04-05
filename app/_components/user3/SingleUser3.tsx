import { Button } from '@/components/ui/button'
import React from 'react'

type UserProps = {
    user: IUSER
}

function SingleUser3 ({user}:UserProps) {
   
  return (
    <div className="grid grid-cols-12 py-2 items-center p-2 border-b">
        <div className="col-span-3 capitalize">{user?.name}</div>
        <div className="col-span-6 capitalize">{user?.email}</div>
        <div className="col-span-3 capitalize">
          <Button className="w-full">Delete</Button>
        </div>
      </div>
  )
}

export default SingleUser3