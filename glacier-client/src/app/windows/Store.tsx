import { Dropdown, Input, Option, OptionOnSelectData, SelectionEvents } from "@fluentui/react-components";
import Window from "../components/Window";
import useWindowDimensions from "../utils/WindowSizes";
import { ArrowDownloadFilled, HomeFilled, GlobeRegular, GridFilled, XboxControllerFilled } from '@fluentui/react-icons';
import './store.css';
import { useState } from "react";
import Home from "./store/Home";
import Games from "./store/Games";
import Apps from "./store/Apps";
import Movies from "./store/Movies";

export default function StoreApp() {
  const {width, height} = useWindowDimensions();
  const [currentPanel, setCurrentPanel] = useState<string>('home');

  function getCurrentPanel() {
    return (
      <div className="store-right">
        {(currentPanel === 'home') ? <Home/> : null}
        {(currentPanel === 'games') ? <Games/> : null}
        {(currentPanel === 'apps') ? <Apps/> : null}
        {(currentPanel === 'movies') ? <Movies/> : null}
      </div>
    );
  }

  function enable(panel: string) {
    return () => {
      setCurrentPanel(panel);
    }
  }

  return (
    <Window title="Microsoft Store" defaultSize={{width: width-20, height: height-70}} id="store" taskbarIconID="store" color={'gray'}>
      <div className="window-full">
        <div className="store-left">
          <div className={"store-nav-icon sni-home " + (currentPanel==='home'?'active':'')} onClick={enable('home')}><HomeFilled fontSize={'22px'}/></div>
          <div className={"store-nav-icon sni-movies " + (currentPanel==='movies'?'active':'')} onClick={enable('movies')}><GlobeRegular fontSize={'22px'}/></div>
          <div className={"store-nav-icon sni-apps " + (currentPanel==='apps'?'active':'')} onClick={enable('apps')}><GridFilled fontSize={'22px'}/></div>
          <div className={"store-nav-icon sni-games " + (currentPanel==='games'?'active':'')} onClick={enable('games')}><XboxControllerFilled fontSize={'22px'}/></div>
          {/* <div className="store-nav-icon active sni-download"><ArrowDownloadFilled fontSize={'22px'}/></div> */}
        </div>
        {getCurrentPanel()}
      </div>
    </Window>
  );
}