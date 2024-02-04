'use client';
import Image from "next/image";
import { useEffect } from "react";
import Draggable from "react-draggable";
import Window from "./components/Window";
import {
  FluentProvider,
  webDarkTheme,
  Button,
  Dropdown,
  Option,
  OptionOnSelectData,
  SelectionEvents,
  Label
} from "@fluentui/react-components";
import { IDropdownOption, Icon } from "@fluentui/react";
import Taskbar from "./components/Taskbar";
import "./windows.css";

export default function Home() {
  useEffect(() => {
    if(window.localStorage.getItem('background')) {
      // set body.style.backgroundImage to window.localStorage.getItem('background')
      document.body.style.backgroundImage = `url("/${window.localStorage.getItem('background')}")`;
    }else {
      // set to background1.jpg
      window.localStorage.setItem('background', 'wallpaper1.jpg');
    }
  }, []);

  const onChange = (event: SelectionEvents, data: OptionOnSelectData): void => {
    document.body.style.backgroundImage = `url("/wallpaper${data.optionValue}.jpg")`;
    window.localStorage.setItem('background', `wallpaper${data.optionValue}.jpg`);
  };

  return (
    <FluentProvider theme={webDarkTheme}>
    <main>
      <Taskbar apps={[
        {name: "Background Swapper", icon: "/settings.svg", window: "background-swapper"}
      ]}/>
      <Window title="Windows 11 Settings" id="background-swapper" taskbarIconID="tb-settings">
        <div className="window-padding">
          <h1>Settings</h1>
          <h4>Personalization</h4>
          <Dropdown id="theme-select" placeholder="Choose a new theme...">
            <Option value="windows">Windows 11</Option>
            <Option value="macos" disabled>Mac OS</Option>
            <Option value="kali" disabled>Kali Linux</Option>
          </Dropdown>
          <br/><br/>
          <Dropdown id="background-select" onOptionSelect={onChange} placeholder="Choose a new wallpaper...">
            <Option value="1">Layers</Option>
            <Option value="4">Mac Vibrant</Option>
            <Option value="7">Mac Cloud</Option>
            <Option value="5">TBD</Option>
            <Option value="6">Dark Weaved</Option>
            <Option value="8">Dark Windows</Option>
            <Option value="2">Sphere (Blue/Green)</Option>
            <Option value="3">Sphere (Blue/Red)</Option>
          </Dropdown>
        </div>
      </Window>
    </main>
    </FluentProvider>
  );
}
