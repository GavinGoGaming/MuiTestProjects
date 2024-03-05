'use client';
import Draggable from "react-draggable";

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
        </div>
    )
}