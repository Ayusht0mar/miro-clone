"use client"
import { Plus } from "lucide-react";
import { useState } from "react";
import { createBoard } from "@/app/actions/createBoard";


const CreateBoard = () => {
    const [isOpen, setIsOpen] = useState(false);

    return ( 
        <div>
            <div className="flex flex-col items-center gap-2" onClick={() => setIsOpen(true)}>
                <div className="bg-white border w-full aspect-square rounded-lg flex justify-center items-center">
                        <Plus size={48} className="bg-zinc-100 text-zinc-400 p-2 rounded-full"/>
                </div>
                <p>Create New Board</p>
            </div>

            {isOpen && 
                    <div className="bg-black/10 min-w-screen w-full flex justify-center items-center min-h-screen absolute top-0 left-0 z-10 ">
                        <div className="bg-white p-4 border rounded">
                            <form action={createBoard} className="flex flex-col gap-4">
                                <input type="text" name="title" className="border py-1 px-2 rounded" placeholder="Title" />
                                <input type="text" name="description" className="border py-1 px-2 rounded" placeholder="Description" />
                                <button onClick={() => setIsOpen(false)} type="submit" className="text-white bg-black w-fit mx-auto py-1 px-2 rounded">Create</button>
                            </form>

                        </div>

                    </div>
            }
        </div>
     );
}
 
export default CreateBoard;