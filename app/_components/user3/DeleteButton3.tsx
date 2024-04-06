import { Button } from '@/components/ui/button'
import React from 'react'
import { deleteUser } from './Action3'

function DeleteButton({id} : {id: string}) {
  return (
    <form action={deleteUser} className=''>
        <input type="hidden" name='id' value={id} />
        <Button className='w-full'>Delete</Button>
    </form>
  )
}

export default DeleteButton