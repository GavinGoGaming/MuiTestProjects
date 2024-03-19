import { Button, Dropdown, Input, Option, OptionOnSelectData, SelectionEvents } from "@fluentui/react-components";
import Window from "../components/Window";

export default function MoreIconsApp() {
    return (
      <Window title="Window Icons" id="moreicons" taskbarIconID="moreicons" color={'gray'} seperateBorder="1px solid #ffffff0a">
        <div className="window-padding">
          edit your <b>window icon</b> to customize glacier<br/>
          {['old_start','start','store','icons/edge','icons/camera','icons/folder','icons/explorer','icons/calculator','icons/terminal','icons/close','icons/minimize','icons/maximize','blank',
          'favicon_blue','favicon_darkblue','favicon_orange','favicon_green','favicon_pink','favicon_purple','favicon_cyan','favicon_black','classroom','glacier','glacierwhite','google','drive','microsoft','minecraft','sugar','green_circle','yellow_circle','red_circle']
          .map((icon,idx)=>(
            <Button onClick={(e)=>{
              document.querySelector('link[rel="shortcut icon"]')?.setAttribute('href', `/windows/${icon}.png`);
              window.localStorage.setItem('icon', icon as string);
            }} style={{minWidth:'25px',padding:'10px',margin:'5px'}}><img src={`/windows/${icon}.png`} alt="" style={{width:'25px'}} /></Button>
          ))}
        </div>
      </Window>
    );
}