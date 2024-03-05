'use client';
import Image from "next/image";
import { useEffect, useState } from "react";
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
import {
  Dialog,
  DialogTrigger,
  DialogSurface,
  DialogTitle,
  DialogBody,
  DialogActions,
  DialogContent
} from "@fluentui/react-components";
import TerminalApp from "./windows/Terminal";
import SettingsApp from "./windows/Settings";
import CalculatorApp from "./windows/Calculator";
import TeamViewerApp from './windows/TeamViewer';
import EdgeApp from "./windows/MicrosoftEdge";
import CameraApp from "./windows/Camera";
import StoreApp from "./windows/Store";
import AppListHelper, { getApps } from "./utils/AppListHelper";
import FrameWindow from "./components/FrameWindow";
import StoreApps from "./windows/store/StoreApps";

export default function Home() {
  useEffect(() => {
    if(window.localStorage.getItem('background')) {
      // set body.style.backgroundImage to window.localStorage.getItem('background')
      document.body.style.backgroundImage = `url("/windows/${window.localStorage.getItem('background')}")`;
    }else {
      // set to background1.jpg
      window.localStorage.setItem('background', 'wallpaper1.jpg');
    }

    // window.addEventListener('beforeunload', function (e) {
    //   // Cancel the event
    //   e.preventDefault(); // If you prevent default behavior in Mozilla Firefox prompt will always be shown
    //   // Chrome requires returnValue to be set
    //   e.returnValue = '';
    // });
  }, []);

  return (
    <FluentProvider theme={webDarkTheme}>
    <main>
      <AppListHelper/>
      <Taskbar apps={[
        {name: "Settings", icon: "/windows/settings.svg", window: "settings"},
        {name: "File Explorer", icon: "/windows/icons/explorer.png", window: "file-explorer"},
        {name: "Terminal", icon: "/windows/icons/terminal.png", window: "terminal"},
        {name: "Microsoft Edge", icon: "/windows/icons/edge.png", window: "edge"},
        {name: "Calculator", icon: "/windows/icons/calculator.png", window: "calculator"},
        {name: "Camera", icon: "/windows/icons/camera.png", window: "camera"},
        {name: "Microsoft Store", icon: "/windows/store.png", window: "store"},
      ]}/>
      <SettingsApp/>
      <CalculatorApp/>
      <TerminalApp/>
      <EdgeApp/>
      <CameraApp/>
      <StoreApp/>
      <StoreApps/>
    </main>
    </FluentProvider>
  );
}