"use client"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const UserSearch = () => {
    const [searchKeyword, setSearchKeyword] = useState("")
    const router = useRouter();

    useEffect(()=>{
        if(searchKeyword){
            router.push(`user?search=${searchKeyword}`)
        }
    },[searchKeyword,router])



    const handleSubmit = (e: React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const keyword = formData.get("searchKeyword");
        console.log(keyword)

        setSearchKeyword(keyword)

    }

    
    return (
        <div className="w-full">
            <form onSubmit={(e)=>handleSubmit(e)} className="flex gap-5 border bg-slate-200 p-5">
                <Input type="text"  name="searchKeyword" />
                <Button>Search</Button>
            </form>
        </div>
    );
}

export default UserSearch;