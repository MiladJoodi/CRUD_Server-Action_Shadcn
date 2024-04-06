"use client"
import { Button } from '@/components/ui/button'
import React from 'react'
import { deleteUser, deleteUserWithConfirm } from './Action3'
import ActionButton3 from './ActionButton3'
import toast from 'react-hot-toast'

function DeleteButton({id} : {id: string}) {

    const handleDeleteUser = async (e: React.FormEvent<HTMLFormElement>)=>{
      e.preventDefault();
      
      const confirmation = window.confirm("Are you sure you want to delete this user?")
      console.log("confirmation", confirmation)

      if(confirmation){
        const response = await  deleteUserWithConfirm(id);
      if(response?.error){
        toast.error(response?.error)
      }else{
        toast.success("Delete user successfully")
      }
      }
      

    }

  return (
    <form onSubmit={(e)=>handleDeleteUser(e)} className=''>
        <input type="hidden" name='id' value={id} />
        <ActionButton3 title="Delete" />
    </form>
  )
}
 
export default DeleteButton