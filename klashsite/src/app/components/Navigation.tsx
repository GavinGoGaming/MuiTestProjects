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
import { DarkModeOutlined, LightModeOutlined } from '@mui/icons-material';
import HrefBtn from './HrefBtn';
import SwapVerticalCircleRoundedIcon from '@mui/icons-material/SwapVerticalCircleRounded';
import SwapCallsRounded from '@mui/icons-material/SwapCallsRounded';

function ModeToggle2() {
  const { mode, setMode } = useColorScheme();
  return (
    <Button onClick={() => setMode(mode === 'dark' ? 'light' : 'dark')} variant='plain' size='sm' color='primary'>
      <Typography suppressHydrationWarning={true} sx={{mr:'5px',display:'inline-flex'}}>
      {mode === 'dark' || mode === undefined ? <LightModeOutlined sx={{mr:'5px'}}></LightModeOutlined> : <DarkModeOutlined sx={{mr:'5px'}}></DarkModeOutlined>}
      {mode == 'dark' ? 'Light' : 'Dark'}
      </Typography>
      <SwapVerticalCircleRoundedIcon style={{fontSize:'32px'}}></SwapVerticalCircleRoundedIcon>
    </Button>
  );
}
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
function ModeToggle1() {
  const { mode, setMode } = useColorScheme();
  return (
    <Button onClick={() => setMode(mode === 'dark' ? 'light' : 'dark')} variant='plain' size='sm' color='primary'>
      <Typography suppressHydrationWarning={true} sx={{mr:'5px',display:'inline-flex'}}>
      <SwapCallsRounded sx={{mr:'5px'}}></SwapCallsRounded>
      {mode == 'dark' ? 'Light' : 'Dark'}
      </Typography>
      {mode === 'dark' || mode === undefined ? <LightModeOutlined sx={{fontSize:'32px'}}></LightModeOutlined> : <DarkModeOutlined sx={{fontSize:'32px'}}></DarkModeOutlined>}
    </Button>
  );
}

export default function LoginPane() {
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
            <h2 style={{cursor: 'pointer',marginTop: '5px'}} className='hoverUnderline' onClick={function(){window.location.href='/#'}}><img alt="logo" width="150" height="54" style={{marginTop:'5px',scale:'0.9'}} src="/klash/Klash.png"/></h2>
            <span style={{display:'inline-flex',width:'100%'}} id="navbuttons">
              <div style={{display:'inline-block',width:'100%'}}>
                <HrefBtn variant='plain' color='primary' url="/about" content="About Us"/>
                <HrefBtn variant='plain' color='primary' url="https://discord.gg/Smb9wMWadU" content="fa-brands fa-discord" faSize={20}/>
              </div>
              <div style={{display:'inline-block'}}>
                <ModeToggle/>
              </div>
              <div style={{display:'inline-block'}}>
                <Button onClick={function(){window.location.href='/login';}} variant='plain' style={{float:'right'}} size='sm' color='danger'><NoAccountsIcon style={{fontSize:'32px'}}></NoAccountsIcon></Button>
              </div>
            </span>
        </Sheet>
    </CssVarsProvider>
  );
}