import FrameWindow from '@/app/components/FrameWindow';
import Window from '@/app/components/Window';
import { getApps } from '@/app/utils/AppListHelper';
import React, { useState, useEffect } from 'react';

export function toggleStoreApp(id: string, app: any) {
  if(app.url.startsWith('glacier://')) {
    let window = document.getElementsByClassName(app.url.substring('glacier://'.length))[0];
    if(window) {
        if(window.classList.contains('closing')) {
            window.classList.remove('closing');
            window.classList.add('opening');
            let allWindows = document.querySelectorAll('.w11-window');
            allWindows.forEach((x)=>{
                (x as HTMLDivElement).style.zIndex = '4';
            });
  
            (document.getElementsByClassName(id)[0] as HTMLDivElement).style.zIndex = '5';
        }else {
            window.classList.remove('opening');
            window.classList.add('closing');
        }
    }   
  }else {
    let window = document.getElementsByClassName(id)[0];
    if(window) {
        if(window.classList.contains('closing')) {
            window.classList.remove('closing');
            window.classList.add('opening');
            
              var frame = (document.querySelector(`.${id} > .w11-content > div > iframe`) as HTMLIFrameElement);
              frame.src = frame.dataset.src as string;
              frame.focus();

            let allWindows = document.querySelectorAll('.w11-window');
            allWindows.forEach((x)=>{
                (x as HTMLDivElement).style.zIndex = '4';
            });

            (document.getElementsByClassName(id)[0] as HTMLDivElement).style.zIndex = '5';
        }else {
            window.classList.remove('opening');
            window.classList.add('closing');
        }
    }
  }
}

export function nameToID(name: string) {
  return 'sa-'+name.toLowerCase().replace(/[\W_]+/g,"-");
}

const StoreApps = () => {
  const [apps, setApps] = useState<any[]>([]);

  useEffect(() => {
    // Simulating fetching data from AppListHelper
    const fetchData = async () => {
      // Assuming AppListHelper.fetchApps() is an asynchronous function that fetches the apps
      const appsData = await getApps();
      setApps(appsData);
    };

    fetchData();
  }, []); // Empty dependency array means this effect runs once after the initial render

  return (
    <div>
      {apps.map((app, index) => (
        <>{!app.url.startsWith('glacier://') ? <FrameWindow key={index} defaultUseUV={process.env.NODE_ENV=='development' ? false : app.unblock} id={(nameToID(app.name))} url={app.url} title={app.name}/> : null}</>
      ))}
    </div>
  );
};

export default StoreApps;
