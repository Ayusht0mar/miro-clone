import { auth } from "@/auth";
import { Clock, House, Search, Star } from "lucide-react";

export default async function DashboardSidebar () {

        const session = await auth();

    return ( 
        <div className="hidden lg:block bg-white w-1/5 min-h-screen max-w-60 p-3 border-r border-gray-100">
            <p className="p-2 border rounded-md mb-3">{session?.user?.name}&apos;s Board</p>
            <p className="p-2 rounded-md bg-zinc-100 text-zinc-500 flex gap-2 items-center"> <Search size={18}/> Search</p>
            <div className="flex flex-col gap-1 mt-4">
                <div className="flex gap-2 items-center hover:bg-slate-100 p-2 rounded-md bg-zinc-100 text-zinc-700">
                    <House size={20}/>
                    Home 
                </div>
                <div className="flex gap-2 items-center p-2 rounded-md hover:bg-slate-100">
                    <Clock size={20}/>
                    Recent 
                </div>
                <div className="flex gap-2 items-center p-2 rounded-md hover:bg-slate-100">
                    <Star size={20}/>
                    Starred 
                </div>
            </div>
        </div>
     );
}