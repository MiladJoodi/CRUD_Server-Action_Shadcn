"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const UserSearch = ({ search }: { search?: string }) => {
  const [searchKeyword, setSearchKeyword] = useState(search || undefined);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const router = useRouter();

  useEffect(() => {
    if (formSubmitted) {
      router.push(`/user?search=${searchKeyword}`);
    } else {
      router.push(`/user`);
    }
  }, [formSubmitted, searchKeyword, router]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const keyword = formData.get("keyword") as string;
    setSearchKeyword(keyword);
    setFormSubmitted(true);
  };

  // Reset Button
  const handleResetSearch = (e: any) => {
    e.preventDefault();
    setSearchKeyword("");
    setFormSubmitted(false);
  };

  return (
    <div className="w-full">
      <form
        onSubmit={(e) => handleSubmit(e)}
        className="flex gap-5 border bg-slate-200 p-5"
      >
        <div className="relative w-full">
          <Input defaultValue={searchKeyword} type="text" name="keyword" />
          {formSubmitted && (
            <Button className="absolute right-0 top-0" onClick={(e) => handleResetSearch(e)} type="reset">
              X
            </Button>
          )}
        </div>

        {/* <Input value={searchKeyword} onChange={(e)=> setSearchKeyword(e.target.value)} type="text"  name="searchKeyword" /> */}
        <Button type="submit">Search</Button>
      
      </form>
    </div>
  );
};

export default UserSearch;
