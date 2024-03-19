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
import Navigation from './components/Navigation'
import HrefButton from './components/HrefBtn';
import { Folder } from '@mui/icons-material';
import { TextField } from '@mui/material';
import SoundcloudBox from './components/SoundcloudBox';
import { SpotifyEmbed } from 'spotify-embed';

export default function Page() {
  React.useEffect(() => {
    document.title = "Notify.";
    const enableButton=(id:string)=>{document.querySelector('#'+id+'_button')?.classList.remove('Mui-disabled');document.querySelector('#'+id+'_button')?.removeAttribute('disabled');};
      window.developerMode = {local:{},spotify:{},youtube:{},soundcloud:{}};
      window.developerMode.local.enableButton = ()=>{enableButton('local');};
      window.developerMode.spotify.enableButton = ()=>{enableButton('spotify');};
      window.developerMode.youtube.enableButton = ()=>{enableButton('youtube');};
      window.developerMode.soundcloud.enableButton = ()=>{enableButton('soundcloud');};

    if(window.localStorage.getItem('token')){
      var tokens = JSON.parse(window.localStorage.getItem('token')||'{}');

      if(tokens.local){
        setTimeout(()=>{enableButton('local');},300);
      }
      if(tokens.spotify){
        setTimeout(()=>{enableButton('spotify');},300);
      }
      if(tokens.youtube){
        setTimeout(()=>{enableButton('youtube');},300);
      }
      if(tokens.soundcloud){
        setTimeout(()=>{enableButton('soundcloud');},300);
      }
    }else {
      window.localStorage.setItem('token', JSON.stringify({'local':null,'spotify':null,'youtube':null,'soundcloud':null}));
    }
  });
  return (
    <CssVarsProvider defaultMode='dark'><main>
      <Navigation/>
      <Sheet sx={{marginTop:'10px',width:'100%',textAlign:'center'}}>
        <h1 style={{fontSize:'4rem'}}>Welcome to Notify.</h1>
        <h2>What do you want to listen to today?</h2>
        <div style={{marginTop:'2rem',display:'flex',justifyContent:'center'}}>
          <Button onClick={function(){window.location.href='/local';}} id='local_button' disabled size='lg' color='primary' style={{marginRight:'10px'}}><Folder style={{marginRight:'10px',fontSize:'50px'}}/>My Own Music</Button>
          <Button onClick={function(){window.location.href='/spotify';}} id='spotify_button' disabled size='lg' color='success'><img src="/Spotify_icon.svg" alt="" style={{marginRight:'10px'}} width="50px"/>Spotify</Button>
          {/* <Button id='youtube_button' disabled size='lg' color='danger' style={{marginLeft:'10px'}}><img src="/Youtube_Music_icon.svg" alt="" style={{marginRight:'10px'}} height="50px"/>YouTube Music</Button> */}
          <Button onClick={function(){window.location.href='/soundcloud';}} id='soundcloud_button' disabled size='lg' color='danger' style={{marginLeft:'10px'}}><img src="/soundcloud-logo-icon.svg" alt="" style={{marginRight:'10px'}} height="50px"/>SoundCloud</Button>
        </div>
        <SoundcloudBox id={1106398864} width={'40%'} height={20}/>
        <SpotifyEmbed src='https://open.spotify.com/album/4gc3hBMuSMWNYfXgxuhp0Y' size={'compact'}/>
      </Sheet>


      <div className="developer_panel hidden">
        <h2>spooky developer box</h2>
        <Input id="developer_sppoky" placeholder='spooky command' defaultValue='developerMode' sx={{fontFamily:'monospace'}} spellCheck={false}/><br/>
        <Button onClick={function(){eval((document.querySelector('#developer_sppoky') as HTMLInputElement).value);}}>do magic!!!</Button>
      </div>
   </main></CssVarsProvider>
  );
}