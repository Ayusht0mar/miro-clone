import { prisma } from "@/prisma";
import Image from "next/image";
import Link from "next/link";

interface BoardInfoProps {
    boardId: string;
}

async function BoardInfo ({ boardId }: BoardInfoProps) {

    const board = await prisma.board.findUnique({
        where: {id: boardId }
    })


    return ( 
        <div className="absolute top-2 left-2 bg-white rounded px-3 py-2 flex items-baseline shadow-md">

                <Link href="/" className="flex gap-2">              
                    <Image
                        src="/images/mirologo.svg"
                        alt="Miro Logo"
                        width={68}
                        height={30}
                    />                    
                </Link>
                <p className="mx-2 text-3xl text-zinc-300">|</p>
                <h3>{board?.title}</h3>

        </div>
     );
}
 
export default BoardInfo;