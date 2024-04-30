'use client';
import { Button, CssVarsProvider, ThemeProvider } from "@mui/joy";
import {Warning, PlayArrow} from "@mui/icons-material"
import Image from "next/image";
import { useState } from "react";

const videos = [
  ["/memorized.mp4", "Alec", "Alec memorized a fanfic"],
  ["/koengay.mp4", "KeiKa", "KeiKa said \"Gay sex\" in vc"],
  ["/thehell.mp4", "Alec", "WHAT DID HE SAY!?!?!??!?!?"],
  ["/gayitback.mp4", "Alec", "If i gay it gay it back"],
  ["/gergballs.mp4", "Bluurii", "Testicular cancerous man"],
  ["/grindmelons.mp4", "Alec", "ALec loves to grind on melons"],
  ["/halfandhalf.mp4", "Alec", "Saved by the half-and-half trick"],
  ["/lovemelons.mp4", "Alec", "Alec LOVES MELONS"],
  ["/loveminors.mp4", "Alec", "Alec LOVES MIN(E/O)RS"],
  ["/moan.mp4", "Alec", "Alec being sus man"]
]

export default function Home() {
  const [current, setCurrent] = useState<string[]>(["", "", ""]);

  function startViewing() {
    // add class "viewing" to body
    document.body.classList.add("viewing");
  }
  function select(video: string[]) {
    setCurrent(video);
  }
  return (
    <CssVarsProvider defaultMode="dark">
      <div className="left">
        <h1>Klips</h1>
        <h6>Everytime we've hit Alt+F10.</h6>
        <Button onClick={startViewing} id="start">Start Viewing</Button>
        <div className="klips">
          {videos.map(([src, name, desc, index]) => (
            <div className="klip" key={index} onClick={()=>{select([src, name, desc])}}>
              <PlayArrow className="play-icon"/>
              <video src={src} controls={false}></video>
              <div className="info">
                <h4>{name}</h4>
                <p>{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="right">
        <div className="warning"><Warning/></div>
        <div className="warning">Start viewing a klip to use the video player.</div>
        {current[0] == "" ? <h1>No Video</h1> : <><video src={current[0]} controls autoPlay></video><h1>{current[1]}</h1><p>{current[2]}</p><a href={current[0]} target="_blank" style={{color:'lightblue'}} download={`clip_${current[1].toLowerCase()}.mp4`}>Download clip of <b>{current[1]}</b></a></>}
      </div>
    </CssVarsProvider>
  );
}
