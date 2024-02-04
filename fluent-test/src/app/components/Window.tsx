'use client';
import Draggable from "react-draggable";

export default function Window({
    children,
    title,
    id,
    taskbarIconID,
  }: Readonly<{
    children: React.ReactNode;
    title: String;
    id: string;
    taskbarIconID: string;
  }>) {

    function close() {
      (document.getElementById(id) as HTMLDivElement).classList.add('closing');
      if(document.getElementById(taskbarIconID)) {
        (document.getElementById(taskbarIconID) as HTMLDivElement).classList.remove('active');
      }
    }

    return (
        <Draggable handle=".w11-window > .w11-top" defaultPosition={{x:40, y:40}}>
        <div id={id} className="w11-window" style={{width:'800px',height:'500px'}}>
          <div className="w11-top">
            <div className="w11-title">{title}</div>
            <div className="w11-controls">
              <div className="w11-minimize left">-</div>
              <div className="w11-fullscreen mid">F</div>
              <div className="w11-close end" onClick={close}>X</div>
            </div>
          </div>
          <div className="w11-content">
            {children}
          </div>
        </div>
      </Draggable>
    )
}