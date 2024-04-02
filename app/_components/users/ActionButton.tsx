"use client"
import { Button } from "@/components/ui/button";
import React from "react";
import { useFormStatus } from "react-dom";

interface IProps {
  title: string;
}
 
function ActionButton({ title }: IProps) {

    // console.log("first")
    const {pending} = useFormStatus();
    
  return <Button type="submit">
    
    {
        pending ? "Submitting" : title
    }
    </Button>;
}

export default ActionButton;
