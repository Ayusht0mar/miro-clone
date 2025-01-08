import BoardInfo from "./BoardInfo";
import Participants from "./Participants";
import BoardToolbar from "./Toobar";

interface CanvasProps {
    boardId: string;
};


const Canvas = ({boardId} : CanvasProps) => {
    return ( 
        <div>
            <BoardInfo boardId={boardId}/>
            <Participants/>
            <BoardToolbar/>
            Canvas
        </div>
     );
}
 
export default Canvas;