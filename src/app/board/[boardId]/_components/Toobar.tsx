"use client"

import { MousePointer2, Redo, Shapes, StickyNote, Type, Undo } from "lucide-react";
import { JSX, useState} from "react";

const tools = [
    {
        icon: <MousePointer2 />,
        label: "Mouse",
        handleOnClick: () => {}
    },
    {
        icon: <StickyNote />,
        label: "Add sticky note",
        handleOnClick: () => {}
    },
    {
        icon: <Type />,
        label: "Add Text",
        handleOnClick: () => {}
    },
    {
        icon: <Shapes />,
        label: "Add Rectangle",
        handleOnClick: () => {}
    },
    {
        icon: <Type />,
        label: "Add Circle",
        handleOnClick: () => {}
    },
    {
        icon: <Type />,
        label: "Add ",
        handleOnClick: () => {}
    }
]

const BoardToolbar = () => {

    const [activeTool, setActiveTool] = useState<Tool | null>(tools.find(tool => tool.label === "Mouse") || null)

    interface Tool {
        icon: JSX.Element;
        label: string;
        handleOnClick: () => void;
    }

    const handleOnClick = (tool: Tool) => setActiveTool(tool);

    return ( 
        <div className="absolute space-y-2  top-[50%] -translate-y-[50%] left-2">
            <div className="bg-white rounded p-1.5 flex gap-y-1 flex-col items-center shadow-md">
                {tools.map((tool) => (
                    <div key={tool.label} onClick={() => handleOnClick(tool)} className={`group flex items-center relative`}>
                        <div className={` p-1.5 rounded ${activeTool === tool ? "text-blue-600 bg-blue-100" : "text-zinc-600 hover:bg-zinc-100"} `}>
                            {tool.icon}
                        </div>
                        <p className="hidden group-hover:block absolute bg-white text-nowrap left-10 border py-1 px-2 rounded ">{tool.label}</p>
                    </div>
                ))}
            </div>
            <div className="bg-white rounded p-1.5 flex gap-y-1 flex-col items-center shadow-md">
                <div className="p-1.5 rounded">
                    <Undo />
                </div>
                <div className="p-1.5 rounded">
                    <Redo />
                </div>            
            </div>
        </div>
     );
}
 
export default BoardToolbar;