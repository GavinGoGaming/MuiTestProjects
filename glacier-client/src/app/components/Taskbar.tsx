'use client';
import { useEffect, useState } from "react";
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
    const [selectedOS, setSelectedOS] = useState("windows");
    useEffect(() => {
        const os = window.localStorage.getItem("os");
        if (os) {
            setSelectedOS(os);
        } else {
            window.localStorage.setItem("os", "windows");
        }
    }, []);
    const battery = useBattery();
    const wifi = useOnlineStatus();

    function toggle(app: TaskbarApp, addCurrent: boolean = false) {
        let taskbarApp = document.getElementById(app.window + '-tb-app');
        if (taskbarApp) {
            taskbarApp.classList.toggle('active');
            if (addCurrent)
                taskbarApp.classList.toggle('current');
        }
        let window = document.getElementsByClassName(app.window)[0];
        if (window) {
            if (window.classList.contains('closing')) {
                window.classList.remove('closing');
                window.classList.add('opening');
            } else {
                window.classList.remove('opening');
                window.classList.add('closing');
            }
        }
    }
    const [curTime, setCurTime] = useState(``);
    const [curDate, setCurDate] = useState(``);
    const [maccurDate, setMacCurDate] = useState(``);

    useEffect(() => {
        setInterval(() => {
            setCurTime(`${new Date().getHours() > 12 ? new Date().getHours() - 12 : new Date().getHours()}:${new Date().getMinutes() < 10 ? '0' + new Date().getMinutes() : new Date().getMinutes()} ${new Date().getHours() > 12 ? 'PM' : 'AM'}`);
            setCurDate(`${(new Date().getMonth() + 1) + '/' + new Date().getDate() + '/' + new Date().getFullYear()}`);
            const d = new Date();
            let months = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"];
            let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
            setMacCurDate(`${days[d.getDay()]} ${months[d.getMonth()]} ${d.getDate()}`);
        }, 1000);
    })
    return (
        <>
            <div id="taskbar" className="w11-taskbar">
                <div className="w11-taskbar-app" id="startmenu-tb-app" onClick={function () { toggle({ window: 'startmenu', icon: '', name: '' }, true) }}>
                    <img src={`/${selectedOS}/start.png`} alt="Start" />
                    <span>Start</span>
                </div>

                {apps.map((app) => (
                    <div key={app.window + '-tb-key'} id={app.window + '-tb-app'} className="w11-taskbar-app" onClick={function () { toggle(app) }}>
                        <img src={app.icon} alt={app.name} />
                        <span>{app.name}</span>
                    </div>
                ))}

                <div className="w11-rightside">
                    <div className="rightside-item align-center windows-only-flex">
                        {wifi ? <Wifi1Regular fontSize={'20px'} /> : <WifiOffRegular fontSize={'20px'} />}
                        <Speaker2Regular fontSize={'20px'} />
                        {battery.level as number > 0.5 ? <Battery10Regular fontSize={'20px'} /> : (battery.level as number > 0.2 ? <Battery5Regular fontSize={'20px'} /> : <Battery1Regular fontSize={'20px'} />)}
                    </div>
                    <div className="rightside-item flex-column windows-only-flex">
                        <div id='tbtime'>{curTime}</div>
                        <div id='tbdate'>{curDate}</div>
                    </div>
                </div>
            </div>

            <div className="mac-only topbar">
                <span style={{ margin: '1px 12px', display: 'inline-flex', alignItems: 'center' }} id="macicon" onClick={() => {
                    if (document.documentElement.requestFullscreen) {
                        document.documentElement.requestFullscreen();
                    }
                }}><img src="/macos/apple.svg" width={'12px'} height={'15px'} /></span>
                <b style={{ margin: '0px 6px' }}>Finder</b>
                <div style={{ float: 'right', marginRight: '10px', display: 'flex', alignItems: 'center' }}>
                    <span style={{ marginLeft: '6px', display: 'flex', alignItems: 'center' }}>{wifi ? <Wifi1Regular fontSize={'16px'} /> : <WifiOffRegular fontSize={'16px'} />}</span>
                    <span style={{ marginLeft: '6px', display: 'flex', alignItems: 'center' }}><Speaker2Regular fontSize={'16px'} /></span>
                    <span style={{ marginLeft: '6px', display: 'flex', alignItems: 'center' }}>{battery.level as number > 0.5 ? <Battery10Regular fontSize={'16px'} /> : (battery.level as number > 0.2 ? <Battery5Regular fontSize={'16px'} /> : <Battery1Regular fontSize={'20px'} />)}</span>
                    <span style={{ marginLeft: '6px', display: 'flex', alignItems: 'center' }}>{maccurDate}</span>
                    <span style={{ marginLeft: '6px', display: 'flex', alignItems: 'center' }}>{curTime}</span>
                </div>
            </div>
        </>
    )
}