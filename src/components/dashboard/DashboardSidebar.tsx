import { Clock, House, Search, Star } from "lucide-react";

const DashboardSidebar = () => {
    return ( 
        <div className="bg-white w-1/5 min-h-screen max-w-60 p-3 border-r border-gray-100">
            <p className="p-2 border rounded-md mb-3">Team Name</p>
            <p className="p-2 rounded-md bg-zinc-100 text-zinc-500 flex gap-2 items-center"> <Search size={18}/> Search</p>
            <div className="flex flex-col gap-1 mt-4">
                <div className="flex gap-2 items-center hover:bg-slate-100 p-2 rounded-md">
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
 
export default DashboardSidebar;