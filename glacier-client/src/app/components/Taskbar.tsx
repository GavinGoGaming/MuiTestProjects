'use client';
import { useEffect } from "react";
import Draggable from "react-draggable";
import { Battery10Regular, Battery5Regular, Battery1Regular, Wifi1Regular, WifiOffRegular, Speaker2Regular } from "@fluentui/react-icons";
import { useBattery } from "@uidotdev/usehooks";
import useOnlineStatus from '../utils/useOnlineStatus';

// class taskbarapp
export class TaskbarApp {
    name: string;
    icon: string;
    window: string;
    constructor(name: string, icon: string, window: string) {
        this.name = name;
        this.icon = icon;
        this.window = window;
    }
}

export default function Taskbar({
    apps,
  }: Readonly<{
    apps: TaskbarApp[];
  }>) {
    const battery = useBattery();
    const wifi = useOnlineStatus();

    function toggle(app: TaskbarApp, addCurrent: boolean = false) {
        let taskbarApp = document.getElementById(app.window+'-tb-app');
        if(taskbarApp) {
            taskbarApp.classList.toggle('active');
            if(addCurrent)
                taskbarApp.classList.toggle('current');
        }
        let window = document.getElementsByClassName(app.window)[0];
        if(window) {
            if(window.classList.contains('closing')) {
                window.classList.remove('closing');
                window.classList.add('opening');
            }else {
                window.classList.remove('opening');
                window.classList.add('closing');
            }
        }
    }
    useEffect(()=>{
        setInterval(()=>{
            let time = document.getElementById('tbtime');
            let date = document.getElementById('tbdate');
            if(time && date) {
                time.innerHTML = `${new Date().getHours()>12?new Date().getHours()-12:new Date().getHours()}:${new Date().getMinutes()} ${new Date().getHours()>12?'PM':'AM'}`;
                date.innerHTML = `${(new Date().getMonth()+1) + '/' + new Date().getDay() + '/' + new Date().getFullYear()}`;
            }
        }, 1000);
    })
    return (
        <div id="taskbar" className="w11-taskbar">
            <div className="w11-taskbar-app" id="startmenu-tb-app" onClick={function(){toggle({window: 'startmenu',icon:'',name:''}, true)}}>
                <img src="/windows/start.png" alt="Start" />
                <span>Start</span>
            </div>

            {apps.map((app) => (
                <div key={app.window+'-tb-key'} id={app.window+'-tb-app'} className="w11-taskbar-app" onClick={function(){toggle(app)}}>
                    <img src={app.icon} alt={app.name} />
                    <span>{app.name}</span>
                </div>
            ))}

            <div className="w11-rightside">
                <div className="rightside-item align-center">
                    {wifi ? <Wifi1Regular fontSize={'20px'} /> : <WifiOffRegular fontSize={'20px'} />}
                    <Speaker2Regular fontSize={'20px'} />
                    {battery.level as number > 0.5 ? <Battery10Regular fontSize={'20px'} /> : (battery.level as number > 0.2 ? <Battery5Regular fontSize={'20px'} /> : <Battery1Regular fontSize={'20px'} />)}
                </div>
                <div className="rightside-item flex-column">
                    <div id='tbtime'>{new Date().getHours()>12?new Date().getHours()-12:new Date().getHours()}:{new Date().getMinutes()<10?'0'+new Date().getMinutes():new Date().getMinutes()} {new Date().getHours()>12?'PM':'AM'}</div>
                    <div id='tbdate'>{new Date().getMonth()+1}/{new Date().getDay()}/{new Date().getFullYear()}</div>
                </div>
            </div>
        </div>
    )
}