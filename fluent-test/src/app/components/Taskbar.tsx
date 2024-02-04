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
    function toggle(app: TaskbarApp) {
        let window = document.getElementById(app.window);
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
            <div className="w11-taskbar-app active">
                <img src="/start.png" alt="Start" />
                <span>Start</span>
            </div>

            {apps.map((app) => (
                <div key={app.window+'-tb-key'} className="w11-taskbar-app" onClick={function(){toggle(app)}}>
                    <img src={app.icon} alt={app.name} />
                    <span>{app.name}</span>
                </div>
            ))}
        </div>
    )
}