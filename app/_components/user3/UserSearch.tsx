import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const UserSearch = () => {

    
    return (
        <div className="w-full">
            <form action="" className="flex gap-5 border bg-slate-200 p-5">
                <Input type="text"  />
                <Button>Search</Button>
            </form>
        </div>
    );
}

export default UserSearch;