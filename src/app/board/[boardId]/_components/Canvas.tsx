"use client";

import { Minus, MousePointer2, Plus, Redo, StickyNote, Type, Undo, Circle, Square } from "lucide-react";
import { useState, useRef } from "react";
import { Rnd } from "react-rnd";
import { v4 as uuidv4 } from "uuid";

interface CanvasElement {
  id: string;
  x: number;
  y: number;
  width: number;
  height: number;
  type: "rectangle" | "text" | "stickyNote" | "circle" ;
  content?: string;
  color?: string;
}

type Tool = "select" | "pen" | "shapes" | "text" | "stickyNote" | "circle";

export default function CanvasPage() {
  const [elements, setElements] = useState<CanvasElement[]>([]);
  const [history, setHistory] = useState<CanvasElement[][]>([[]]);
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [selectedElementId, setSelectedElementId] = useState<string | null>(null);
  const [activeTool, setActiveTool] = useState<Tool>("select");
  const [zoomLevel, setZoomLevel] = useState<number>(1);

  const canvasRef = useRef<HTMLDivElement>(null);

  const saveHistory = (newElements: CanvasElement[]) => {
    const updatedHistory = [...history.slice(0, currentStep + 1), newElements];
    setHistory(updatedHistory);
    setCurrentStep(updatedHistory.length - 1);
  };

  const undo = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
      setElements(history[currentStep - 1]);
    }
  };

  const redo = () => {
    if (currentStep < history.length - 1) {
      setCurrentStep((prev) => prev + 1);
      setElements(history[currentStep + 1]);
    }
  };

  const addRectangle = () => {
    const newRectangle: CanvasElement = {
      id: uuidv4(),
      x: 100,
      y: 100,
      width: 150,
      height: 100,
      type: "rectangle",
      color: "#FFEB3B",
    };
    const updatedElements = [...elements, newRectangle];
    setElements(updatedElements);
    saveHistory(updatedElements);
    setActiveTool("select");
  };

  const addCircle = () => {
    const newCircle: CanvasElement = {
      id: uuidv4(),
      x: 150,
      y: 150,
      width: 100,
      height: 100,
      type: "circle",
      color: "#FF5722",
    };
    const updatedElements = [...elements, newCircle];
    setElements(updatedElements);
    saveHistory(updatedElements);
    setActiveTool("select");
  };

  const addText = () => {
    const newText: CanvasElement = {
      id: uuidv4(),
      x: 100,
      y: 100,
      width: 200,
      height: 50,
      type: "text",
      content: "Double-click to edit text",
    };
    const updatedElements = [...elements, newText];
    setElements(updatedElements);
    saveHistory(updatedElements);
    setActiveTool("select");
  };

  const addStickyNote = () => {
    const newStickyNote: CanvasElement = {
      id: uuidv4(),
      x: 100,
      y: 100,
      width: 200,
      height: 150,
      type: "stickyNote",
      content: "Write something...",
      color: "#FFC107",
    };
    const updatedElements = [...elements, newStickyNote];
    setElements(updatedElements);
    saveHistory(updatedElements);
    setActiveTool("select");
  };
  

    const updateElement = (id: string, updatedProps: Partial<CanvasElement>) => {
        setElements((prevElements) =>
            prevElements.map((el) =>
                el.id === id ? { ...el, ...updatedProps } : el
            )
        );
        saveHistory(
            elements.map((el) =>
                el.id === id ? { ...el, ...updatedProps } : el
            )
        );
    };

    function handleDoubleClick(id: string): void {
        const element = elements.find((el) => el.id === id);
        if (element && (element.type === "text" || element.type === "stickyNote")) {
            const newContent = prompt("Edit content:", element.content);
            if (newContent !== null) {
                updateElement(id, { content: newContent });
            }
        }
    }

  return (
    <div className="h-full w-full min-w-[100vw] min-h-screen bg-gray-100 flex flex-col">
      {/* Toolbar */}
      <div className="bg-white shadow absolute z-50 top-[50%] -translate-y-[50%] left-2 rounded p-1.5 flex flex-col gap-4 items-center">
        <button
          onClick={() => setActiveTool("select")}
          className={`p-2 rounded ${activeTool === "select" ? "bg-blue-600 text-white" : "bg-gray-200"}`}
          title="Select Tool"
        >
          <MousePointer2 />
        </button>
        <button
          onClick={addRectangle}
          className={`p-2 rounded ${activeTool === "shapes" ? "bg-blue-600 text-white" : "bg-gray-200"}`}
          title="Shapes Tool"
        >
          <Square />
        </button>
        <button
          onClick={addCircle}
          className={`p-2 rounded ${activeTool === "circle" ? "bg-blue-600 text-white" : "bg-gray-200"}`}
          title="Circle Tool"
        >
          <Circle />
        </button>
        <button
          onClick={addText}
          className={`p-2 rounded ${activeTool === "text" ? "bg-blue-600 text-white" : "bg-gray-200"}`}
          title="Text Tool"
        >
          <Type />
        </button>
        <button
          onClick={addStickyNote}
          className={`p-2 rounded ${activeTool === "stickyNote" ? "bg-blue-600 text-white" : "bg-gray-200"}`}
          title="Sticky Note Tool"
        >
          <StickyNote />
        </button>
        <button onClick={undo} className="p-2 rounded bg-gray-200 hover:bg-gray-300" title="Undo">
          <Undo />
        </button>
        <button onClick={redo} className="p-2 rounded bg-gray-200 hover:bg-gray-300" title="Redo">
          <Redo />
        </button>
        <button onClick={() => setZoomLevel((prev) => Math.min(prev + 0.1, 2))} className="p-2 rounded bg-gray-200 hover:bg-gray-300" title="Zoom In">
          <Plus />
        </button>
        <button onClick={() => setZoomLevel((prev) => Math.max(prev - 0.1, 0.5))} className="p-2 rounded bg-gray-200 hover:bg-gray-300" title="Zoom Out">
          <Minus />
        </button>
      </div>

      {/* Canvas */}
      <div
        ref={canvasRef}
        className="flex-1 relative overflow-hidden"
        style={{
          transform: `scale(${zoomLevel})`,
          transformOrigin: "0 0",
        }}
      >
        {elements.map((element) => (
          <Rnd
            key={element.id}
            size={{ width: element.width, height: element.height }}
            position={{ x: element.x, y: element.y }}
            onDragStop={(_, d) =>
              activeTool === "select" && updateElement(element.id, { x: d.x, y: d.y })
            }
            onResizeStop={(_, __, ref, ___, position) => {
              if (activeTool === "select") {
                updateElement(element.id, {
                  width: parseFloat(ref.style.width),
                  height: parseFloat(ref.style.height),
                  x: position.x,
                  y: position.y,
                });
              }
            }}
            className={`cursor-pointer border ${
              selectedElementId === element.id ? "border-blue-500 shadow-lg" : "border-gray-400"
            }`}
            onClick={() => activeTool === "select" && setSelectedElementId(element.id)}
          >
            {element.type === "rectangle" && (
              <div className="w-full h-full" style={{ backgroundColor: element.color }}></div>
            )}
            {element.type === "circle" && (
              <div
                className="w-full h-full rounded-full"
                style={{ backgroundColor: element.color }}
              ></div>
            )}
            {element.type === "text" && (
              <div
                onDoubleClick={() => handleDoubleClick(element.id)}
                className="text-sm font-medium p-2"
              >
                {element.content}
              </div>
            )}
            {element.type === "stickyNote" && (
              <div
                className="p-4 text-sm font-medium h-full"
                style={{ backgroundColor: element.color }}
                onDoubleClick={() => handleDoubleClick(element.id)}
              >
                {element.content}
              </div>
            )}
          </Rnd>
        ))}
      </div>
    </div>
  );
}
