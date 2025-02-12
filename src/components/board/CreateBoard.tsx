"use client";
import { Plus } from "lucide-react";
import { useState } from "react";
import { createBoard } from "@/app/actions/createBoard";

const CreateBoard = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const [formErrors, setFormErrors] = useState<{ title?: string }>({});

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const title = formData.get('title') as string;

        if (!title.trim()) {
            setFormErrors({ title: 'Title is required' });
            return;
        }

        setFormErrors({});
        setLoading(true);

        try {
            await createBoard(formData);
            setIsOpen(false);
        } catch (error) {
            console.error('Failed to create board:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <div
                className="flex flex-col items-center gap-2"
                onClick={() => setIsOpen(true)}
            >
                <div className="bg-white border w-full aspect-square rounded-lg flex justify-center items-center">
                    <Plus
                        size={48}
                        className="bg-zinc-100 text-zinc-400 p-2 rounded-full"
                    />
                </div>
                <p>Create New Board</p>
            </div>

            {isOpen && (
                <div
                    className="bg-black/10 min-w-screen w-full flex justify-center items-center min-h-screen absolute top-0 left-0 z-10"
                    onClick={() => setIsOpen(false)}
                >
                    <div
                        className="bg-white p-4 border rounded w-[90vw] max-w-80"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                            <input
                                type="text"
                                name="title"
                                className={`border py-1 px-2 rounded ${
                                    formErrors.title ? 'border-red-500' : ''
                                }`}
                                placeholder="Board Name"
                            />
                            {formErrors.title && (
                                <span className="text-red-500 text-sm">
                                    {formErrors.title}
                                </span>
                            )}
                            <input
                                type="text"
                                name="description"
                                className="border py-1 px-2 rounded"
                                placeholder="Board Description"
                            />
                            <button
                                type="submit"
                                disabled={loading}
                                className="text-white bg-black w-fit mx-auto py-1 px-2 rounded"
                            >
                                {loading ? 'Creating...' : 'Create'}
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CreateBoard;
