'use client';
import { Button, CssVarsProvider, Input } from "@mui/joy";
import Image from "next/image";
import { useEffect, useState } from "react";

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
  return (
    <CssVarsProvider defaultMode="dark">
      <main style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
        <h1>Upload Pane</h1>
        <Input type="url" placeholder="Google Drive URL" onChange={(e)=>{
          setDriveId(extractGoogleDriveId(e.target.value));
        }} />
        <Button disabled={driveId === null}>Upload <i className="fa-brands fa-google-drive"></i></Button>
      </main>
    </CssVarsProvider>
  );
}
