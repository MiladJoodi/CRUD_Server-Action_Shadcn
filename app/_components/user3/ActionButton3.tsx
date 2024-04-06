"use client"
import { Button } from '@/components/ui/button'
import React from 'react'
import { useFormStatus } from 'react-dom'

type TitleProps = {
  title: string
}

function ActionButton3({title}:TitleProps) {

  const {pending} = useFormStatus();

  return (
    <Button type='submit' className='w-full'>
                  {pending ? title+"..." : title}
    </Button>
  )
}

export default ActionButton3