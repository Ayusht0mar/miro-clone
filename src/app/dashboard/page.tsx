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
                <div className="p-6 grid grid-cols-6 gap-4">

                    <CreateBoard/>
                    {boards.map((board) => (
                        <div key={board.id} className="bg-white">
                            <a href={`/board/${board.id}/`}>
                                <h3>{board.title}</h3>
                                <p>{board.description}</p>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
     );
}; 
