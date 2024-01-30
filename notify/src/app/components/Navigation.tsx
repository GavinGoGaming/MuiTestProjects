'use client';

import * as React from 'react';
import { CssVarsProvider, useColorScheme } from '@mui/joy/styles';
import Sheet from '@mui/joy/Sheet';
import Typography from '@mui/joy/Typography';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Image from 'next/image';
import Button from '@mui/joy/Button';
import IconButton from '@mui/joy/IconButton'
import Link from '@mui/joy/Link';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import NoAccountsIcon from '@mui/icons-material/NoAccounts';
import { Camera, DarkModeOutlined, FileUpload, Folder, FolderOpen, LightModeOutlined, MusicNote } from '@mui/icons-material';
import HrefBtn from './HrefBtn';
import SwapVerticalCircleRoundedIcon from '@mui/icons-material/SwapVerticalCircleRounded';
import SwapCallsRounded from '@mui/icons-material/SwapCallsRounded';

function ModeToggle() {
  const { mode, setMode } = useColorScheme();
  return (
    <Button onClick={() => setMode(mode === 'dark' ? 'light' : 'dark')} variant='plain' size='sm' color='primary'>
      <Typography suppressHydrationWarning={true} sx={{mr:'5px',display:'inline-flex'}}>
      {mode == 'dark' ? 'Light' : 'Dark'}
      </Typography>
      {mode === 'dark' || mode === undefined ? <LightModeOutlined sx={{fontSize:'32px'}}></LightModeOutlined> : <DarkModeOutlined sx={{fontSize:'32px'}}></DarkModeOutlined>}
    </Button>
  );
}
function Logo() {
  const { mode, setMode } = useColorScheme();
  return (
    <img alt="logo" width="150" height="54" style={{marginTop:'5px',scale:'0.9'}} src={`/klash/notify-full-${mode === 'dark' || mode === undefined?'light':'dark'}.svg`}/>
  );
}

export default function Navigation() {
  return (
    <CssVarsProvider defaultColorScheme={'dark'}>
        <Sheet sx={{
            width:'100%',
            height:'70px',
            boxShadow: 'md',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            position:'sticky',
            px: '20px',
        }} variant='soft'>
            <h2 style={{cursor: 'pointer',marginTop: '5px'}} className='hoverUnderline' onClick={function(){window.location.href='/#'}}><Logo/></h2>
            <span style={{display:'inline-flex',width:'100%'}} id="navbuttons">
              <div style={{display:'inline-block',width:'100%'}}>
                <Button onClick={function(){window.location.href='/files';}} variant='plain' size='sm' color='warning'><MusicNote style={{fontSize:'32px'}}></MusicNote> My Music</Button>
                <Button onClick={function(){window.location.href='/files';}} variant='plain' size='sm' color='warning'><Camera style={{fontSize:'32px'}}></Camera> Media Integration</Button>
              </div>
              <div style={{display:'inline-block'}}>
                <ModeToggle/>
              </div>
              <div style={{display:'inline-block'}}>
                <Button onClick={function(){window.location.href='/files';}} variant='plain' style={{float:'right'}} size='sm' color='success'><FileUpload style={{fontSize:'32px'}}></FileUpload></Button>
              </div>
            </span>
        </Sheet>
    </CssVarsProvider>
  );
}