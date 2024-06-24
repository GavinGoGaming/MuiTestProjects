'use client';
import { Button, CssVarsProvider, Dropdown, Input, Option, Select } from "@mui/joy";
import Image from "next/image";
import { useEffect, useState } from "react";
import '../globals.css';
import axios from 'axios';
// redirects to / once done, we need to use next.js router for this
import { useRouter } from 'next/navigation';

function extractGoogleDriveId(url: string) {
  // Split the URL by '/' and get the 5th element (index 4)
  const parts = url.split('/');
  if (parts.length > 5) {
      return parts[5];
  } else {
      return null;
  }
}


export default function Upload() {
  const [driveId, setDriveId] = useState<string|null>(null);
  const [user, setUser] = useState<string|null>(null);
  const [description, setDescription] = useState<string|null>(null);
  const router = useRouter();
  const addClip = () => {
    const newClip = { "url": `https://drive.google.com/file/d/${driveId}/preview`, user, description, "type": "drive" };

    setUser(null); setDescription(null); setDriveId(null);

    fetch('https://klipsapi.fly.dev/entries', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newClip)
    })
      .then(response => {
        if (response.ok) {
          console.log("OK");
          router.push('/');
        } else {
          return response.text().then(text => { throw new Error(text) });
        }
      })
      .catch(error => console.error('Error adding clip:', error));
  };
  return (
    <CssVarsProvider defaultMode="dark">
      <main style={{display:'flex',gap:'10px',flexDirection:'column',justifyContent:'center',alignItems:'center',height:'100vh'}}>
        <h1>Upload Pane</h1>
        <Input type="url" placeholder="Google Drive URL" onChange={(e)=>{
          if(e.target.value.startsWith("https://drive.google.com/file/d/")) {
            setDriveId(extractGoogleDriveId(e.target.value));
          }else {
            setDriveId(null);
          }
        }} />
        <Input type="text" placeholder="Description" slotProps={{ input: {maxLength: 70} }} onChange={(e)=>{
          setDescription(e.target.value);
        }} />
        <Select sx={{width:'207px'}} onChange={(e, v) => {
          setUser(v as string);
        }} placeholder="Clip Target">
          <Option value="Alec">Alec</Option>
          <Option value="KeiKa">KeiKa</Option>
          <Option value="Bluurii">Bluurii</Option>
          <Option value="Lazer">Lazer</Option>
          <Option value="Gavin">Gavin</Option>
          <Option value="Other">Other</Option>
        </Select>
        <Button sx={{width:'207px'}} disabled={driveId === null || user == null || description == null} onClick={(e)=>{
          addClip();
        }}>Upload <i className="fa-brands fa-google-drive" style={{margin: '5px'}}></i></Button> 
        <br/>
        
        <code>{driveId == null ? "Drive URL invalid" : "Detected drive ID " + driveId}</code>
        <code>{user == null ? "No target selected" : "Target set as " + user}</code>
        <code>{description == null ? "Description not set" : "Description set"}</code>
      </main>
    </CssVarsProvider>
  );
}
