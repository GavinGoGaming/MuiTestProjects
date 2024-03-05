'use client';
import { Dropdown, Input, Option, OptionOnSelectData, SelectionEvents } from "@fluentui/react-components";
import Window from "./Window";
import xor from "../utils/XOR";
import useWindowDimensions from "../utils/WindowSizes";
import { useEffect } from "react";

export default function FrameWindow({
  title,
  url,
  id,
  taskbarIconID="none",
  color="glass",
  seperateBorder="none",
  className="",
  defaultClosed=true,
  defaultPosition={x:40,y:40},
  defaultSize={width:useWindowDimensions().width,height:useWindowDimensions().height-40},
  defaultUseUV=true,
  onClose=()=>{}
}: Readonly<{
  title: string;
  url: string;
  id: string;
  taskbarIconID?: string;
  color?: string;
  seperateBorder?: string;
  className?: string;
  defaultClosed?: boolean;
  defaultPosition?: {x:number,y:number};
  defaultSize?: {width:number,height:number};
  defaultUseUV?: boolean;
  onClose?: ()=>void;
}>) {
    return (
      <Window title={title} id={id} defaultPosition={defaultPosition} defaultSize={defaultSize} taskbarIconID={id} color={color} seperateBorder={seperateBorder} onClose={onClose} defaultClosed={defaultClosed} className={className}>
        <div className="window-full">
          <iframe src={defaultUseUV ? xor.quickURL(url) : url} style={{border:'0px',position:'absolute',width:'100%',height:'calc(100% - 40px)'}}></iframe>
        </div>
      </Window>
    );
}