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
import MobileNav from '../MobileNav';


export default function Navigation(props: {active:string}) {
  return (
    <div style={{height:'10%'}}>
      <img alt="logo" id="logoimg" height="146" style={{position:'absolute',top:'10px',left:'10px',zIndex:'99',height:'14vh',width:'auto'}} src="/de_square.png"/>
        <Sheet sx={{
            width:'100%',
            height:'100%',
            boxShadow: 'md',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            position:'sticky',
            px: '20px',
            backgroundColor:"black"
        }} variant='soft'>
            <span style={{display:'inline-flex',width:'100%'}} id="navbuttons">
              <div style={{display:'inline-block',width:'100%'}}>
              </div>
              <div style={{display:'inline-flex',marginRight:'1vw'}} className='btn'>
                <Button onClick={function(){window.location.href='/';}} variant='plain' sx={{float:'right',fontSize:'1.3vw',width:'10vw',color:(props.active=='home'?'#5ECFFA':'inherit')}} size='lg' color='neutral'>HOME</Button>
              </div>
              {/* <div style={{display:'inline-flex',marginRight:'1vw'}} className='btn'>
                <Button onClick={function(){window.location.href='/about';}} variant='plain' sx={{float:'right',fontSize:'1.3vw',width:'10vw',color:(props.active=='about'?'#5ECFFA':'inherit')}} size='lg' color='neutral'>ABOUT</Button>
              </div> */}
              <div style={{display:'inline-flex',marginRight:'1vw'}} className='btn'>
                <Button onClick={function(){window.location.href='https://www.youtube.com/@designingempires/videos';}} variant='plain' style={{float:'right',fontSize:'1.3vw',width:'10vw'}} size='lg' color='neutral'>EPISODES</Button>
              </div>
              <div style={{display:'inline-flex',marginRight:'1vw'}} className='btn'>
                <Button onClick={function(){window.location.href='/cast';}} variant='plain' sx={{float:'right',fontSize:'1.3vw',width:'10vw',color:(props.active=='team'?'#5ECFFA':'inherit')}} size='lg' color='neutral'>TEAM</Button>
              </div>
              <div style={{display:'inline-flex',marginRight:'1vw'}} className='btn'>
                <Button onClick={function(){window.location.href='/contest';}} variant='plain' sx={{float:'right',fontSize:'1.3vw',width:'10vw',color:(props.active=='contest'?'#5ECFFA':'inherit')}} size='lg' color='neutral'>CONTEST</Button>
              </div>
              <div style={{display:'inline-flex',marginRight:'1vw'}} className='btn'>
                <Button onClick={function(){window.open('https://www.patreon.com/designingempires')}} variant='plain' sx={{float:'right',fontSize:'1.3vw',width:'10vw'}} size='lg' color='neutral'>PATREON</Button>
              </div>
              <MobileNav/>
            </span>
        </Sheet>
    </div>
  );
}