'use server'

import { auth } from "@/auth";
import { prisma } from "@/prisma";

 
export async function createBoard(formData: FormData): Promise<void> {
  const title = formData.get('title') as string;
  const description = formData.get('description') as string;
 
  if (!title || !description) {
    throw new Error("Title and description are required.");
  }


  try {

    const session = await auth();
    if (!session?.user?.id) {
      throw new Error("User is not authenticated.");
    }

    const ownerId = session.user.id;


    // Save to the database
    const newBoard = await prisma.board.create({
      data: {
        title,
        description,
        owner: { connect: { id: ownerId } },
      },
    });

    return console.log(`${newBoard.title} created successfully`);
  } catch (error) {
    console.error("Error creating board:", error);
    throw new Error("Failed to create board.");
  }

  
}