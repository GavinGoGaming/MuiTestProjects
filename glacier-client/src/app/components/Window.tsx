'use client';
import { useEffect } from "react";
import Draggable from "react-draggable";
import { Resizable, ResizableBox } from "react-resizable";
import { Rnd } from "react-rnd";

export default function Window({
    children,
    title,
    id,
    taskbarIconID,
    color="glass",
    seperateBorder="none",
    className="",
    defaultClosed=true,
    defaultPosition={x:40,y:40},
    defaultSize={width:800,height:500},
    onClose=()=>{}
  }: Readonly<{
    children: React.ReactNode;
    title: String;
    id: string;
    taskbarIconID: string;
    color?: string;
    seperateBorder?: string;
    className?: string;
    defaultClosed?: boolean;
    defaultPosition?: {x:number,y:number};
    defaultSize?: {width:number,height:number};
    onClose?: ()=>void;
  }>) {

    function close() {
      (document.getElementsByClassName(id)[0] as HTMLDivElement).classList.add('closing');
      if(document.getElementById(taskbarIconID+'-tb-app')) {
        (document.getElementById(taskbarIconID+'-tb-app') as HTMLDivElement).classList.remove('active');
      }
      onClose();
    }

    useEffect(() => {
      if(defaultClosed) {
        close();
      }
      (document.getElementsByClassName(id)[0] as HTMLDivElement).addEventListener('click', ()=>{
        let allWindows = document.querySelectorAll('.w11-window');
        allWindows.forEach((x)=>{
          (x as HTMLDivElement).style.zIndex = '4';
        });

        (document.getElementsByClassName(id)[0] as HTMLDivElement).style.zIndex = '5';
      })
    }, []);

    return (
      <Rnd
          default={{
            x: defaultPosition.x,
            y: defaultPosition.y,
            width: defaultSize.width,
            height: defaultSize.height,
          }}
          dragHandleClassName="w11-top"
          className={`w11-window ${color} ${id}`}
        >
            <div className="w11-top">
              <div className="w11-title">{title}</div>
              <div className="w11-controls">
                <div className="w11-minimize left"><img src="/windows/icons/minimize.png" alt="" style={{width:'18px',marginTop:'1px',filter:(color=='white'?'none':'brightness(0) invert(1)')}} /></div>
                <div className="w11-fullscreen mid"><img src="/windows/icons/maximize.png" alt="" style={{width:'18px',marginTop:'1px',filter:(color=='white'?'none':'brightness(0) invert(1)')}} /></div>
                <div className="w11-close end" onClick={close}><img src="/windows/icons/close.png" alt="" style={{width:'18px',marginTop:'1px',filter:(color=='white'?'none':'brightness(0) invert(1)')}} /></div>
              </div>
            </div>
            <div className="w11-content" style={{borderTop:seperateBorder}}>
              {children}
            </div>
        </Rnd>
    )
}