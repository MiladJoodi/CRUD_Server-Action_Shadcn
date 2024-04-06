import { Button } from '@/components/ui/button'
import React from 'react'
import { deleteUser } from './Action3'
import ActionButton3 from './ActionButton3'

function DeleteButton({id} : {id: string}) {
  return (
    <form action={deleteUser} className=''>
        <input type="hidden" name='id' value={id} />
        <ActionButton3 title="Delete" />
    </form>
  )
}

export default DeleteButton