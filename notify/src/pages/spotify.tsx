'use client';
declare const window: any;
import * as React from 'react';
import { CssVarsProvider, useColorScheme } from '@mui/joy/styles';
import Sheet from '@mui/joy/Sheet';
import Typography from '@mui/joy/Typography';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Button from '@mui/joy/Button';
import Link from '@mui/joy/Link';
import type { Metadata } from 'next'
import Navigation from '../app/components/Navigation'
import HrefButton from '../app/components/HrefBtn';
import { Folder } from '@mui/icons-material';
import { TextField } from '@mui/material';
import SoundcloudBox from '../app/components/SoundcloudBox';
import { SpotifyEmbed } from 'spotify-embed';

export default function Page() {
  React.useEffect(() => {
    document.title = "Notify [Spotify[";
    
  });
  return (
    <CssVarsProvider defaultMode='dark'><main>
      <Navigation/>
      <Sheet sx={{marginTop:'10px',width:'100%',textAlign:'center'}}>
        <h1 style={{fontSize:'4rem'}}>Notify - Spotify Music</h1>
        <h2>Due to Spotify Restrictions, we can only display 30 seconds of Spotify music on Notify.</h2>
        <div style={{display:'block'}}>
            <SoundcloudBox id={1106398864} width={'40%'} height={20}/>
            <SpotifyEmbed src='https://open.spotify.com/album/4gc3hBMuSMWNYfXgxuhp0Y' size={'compact'}/>
        </div>
      </Sheet>


      <div className="developer_panel hidden">
        <h2>spooky developer box</h2>
        <Input id="developer_sppoky" placeholder='spooky command' defaultValue='developerMode' sx={{fontFamily:'monospace'}} spellCheck={false}/><br/>
        <Button onClick={function(){eval((document.querySelector('#developer_sppoky') as HTMLInputElement).value);}}>do magic!!!</Button>
      </div>
   </main></CssVarsProvider>
  );
}