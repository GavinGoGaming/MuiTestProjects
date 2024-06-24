'use client';
import { Button, CssVarsProvider, ThemeProvider } from "@mui/joy";
import {Warning, PlayArrow} from "@mui/icons-material"
import Image from "next/image";
import { useState } from "react";

const videos = [
  ["/memorized.mp4", "Alec", "Alec memorized a fanfic", "video"],
  ["/koengay.mp4", "KeiKa", "KeiKa said \"Gay sex\" in vc", "video"],
  ["/thehell.mp4", "Alec", "WHAT DID HE SAY!?!?!??!?!?", "video"],
  ["/gayitback.mp4", "Alec", "If i gay it gay it back", "video"],
  ["/gergballs.mp4", "Bluurii", "Testicular cancerous man", "video"],
  ["/grindmelons.mp4", "Alec", "ALec loves to grind on melons", "video"],
  ["/halfandhalf.mp4", "Alec", "Saved by the half-and-half trick", "video"],
  ["/lovemelons.mp4", "Alec", "Alec LOVES MELONS", "video"],
  ["/loveminors.mp4", "Alec", "Alec LOVES MIN(E/O)RS", "video"],
  ["/moan.mp4", "Alec", "Alec being sus man", "video"]
]

export default function Home() {
  const [current, setCurrent] = useState<string[]>(["", "", "", ""]);

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
          {videos.map(([src, name, desc, type, index]) => (
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
        {current[0] == "" ? <h1>No Video</h1> : 
        <>
        
        {current[3] == "video" ? <video src={current[0]} className="video_player" controls autoPlay></video> : <iframe src={current[0]} allow="autoplay" className="video_player"></iframe>}
        
        <h1>{current[1]}</h1><p>{current[2]}</p><a href={current[0]} target="_blank" style={{color:'lightblue'}} download={`clip_${current[1].toLowerCase()}.mp4`}>Download clip of <b>{current[1]}</b></a></>
        }
      </div>
    </CssVarsProvider>
  );
}
