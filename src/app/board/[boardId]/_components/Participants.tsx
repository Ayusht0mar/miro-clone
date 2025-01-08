import { auth } from "@/auth";
import { prisma } from "@/prisma";
import { redirect} from "next/navigation";

export async function Participants () {

    const session = await auth()
    if (!session || !session.user) return redirect("/signin")
    

    const members = await prisma.boardMember.findMany({
        where: { id: session.user?.id },
    });

    return ( 
        <div className="absolute top-2 right-2 bg-white rounded px-1.5 h-12 flex items-center shadow-md">



            {members.map((member) => (
                <div key={member.id}>
                    {member.id}
                </div>
            ))}
        </div>
     );
}
 
export default Participants;