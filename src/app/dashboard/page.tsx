import { auth } from "@/auth";
import { SignOut } from "@/components/auth/SignOutButton";
import DashboardNavbar from "@/components/dashboard/DashboardNavbar";
import DashboardSidebar from "@/components/dashboard/DashboardSidebar";
import { redirect } from "next/navigation";

export default async function DashboardPage() {

    const session = await auth()
    if (!session) return redirect("/signin")

    return ( 
        <div className="flex">
            <DashboardSidebar/>
            <div className="w-full">
                <DashboardNavbar/>
                <div>
                </div>

            </div>
        </div>
     );
}; 
