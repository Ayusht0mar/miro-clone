import { auth } from "@/auth";
import { redirect } from "next/navigation";
import Canvas from "./_components/Canvas";
import { Room } from "./_components/Room";

interface BoardIdPageProps {
    params: Promise<{ boardId: string }>;
  }
  
  export default async function BoardPage({ params }: BoardIdPageProps) {
    const resolvedParams = await params;
    const { boardId } = resolvedParams;
  
    const session = await auth();
    if (!session?.user) {
      return redirect("/signin");
    }
  
    if (!boardId) {
      return redirect("/boards"); // Fallback route
    }
  
    return (
      <main>
        <Room roomId={boardId}>
          <Canvas boardId={boardId} />
        </Room>
      </main>
    );
  }
  