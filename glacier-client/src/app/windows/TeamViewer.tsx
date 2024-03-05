'use client';
import { Dropdown, Input, Option, OptionOnSelectData, SelectionEvents } from "@fluentui/react-components";
import Window from "../components/Window";
import xor from "../utils/XOR";
import useWindowDimensions from "../utils/WindowSizes";

export default function TeamViewerApp() {
  const {width, height} = useWindowDimensions();

    return (
      <Window title="TeamViewer Desktop" id="teamviewer" defaultPosition={{x: 0, y:0}} defaultSize={{width: width, height: height-40}} taskbarIconID="teamviewer" color={'glass'} seperateBorder="1px solid #ffffff0a">
        <div className="window-full">
          <iframe src={xor.quickURL('https://web.teamviewer.com/')} style={{border:'0px',position:'absolute',width:'100%',height:'calc(100% - 40px)'}}></iframe>
        </div>
      </Window>
    );
}