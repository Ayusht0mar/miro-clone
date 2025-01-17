import { auth } from "@/auth";
import DashboardNavbar from "@/components/dashboard/DashboardNavbar";
import DashboardSidebar from "@/components/dashboard/DashboardSidebar";
import { redirect } from "next/navigation";
import { prisma } from "@/prisma";
import CreateBoard from "@/components/board/CreateBoard";


export default async function DashboardPage() {


        const session = await auth()
        if (!session || !session.user) return redirect("/signin")

        const boards = await prisma.board.findMany({
            where: { ownerId: session.user?.id },
        });

    return ( 
        <div className="flex">
                <DashboardSidebar/>
            <div className="w-full">
                <DashboardNavbar/>
                <div className="p-6 grid grid-cols-3 lg:grid-cols-6 gap-4">

                    <CreateBoard/>
                    {boards.map((board) => (
                        <div key={board.id} >
                            <a href={`/board/${board.id}/`}>
                                <div className="bg-white aspect-square rounded-lg border"/>
                                <div className="p-2">
                                    <h3 className="font-semibold ">{board.title}</h3>
                                    <p className="text-sm">{board.description}</p>
                                </div>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
     );
}; 
