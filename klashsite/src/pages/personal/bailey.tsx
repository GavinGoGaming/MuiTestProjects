import * as React from 'react';
import { CssVarsProvider, useColorScheme } from '@mui/joy/styles';
import Sheet from '@mui/joy/Sheet';
import Typography from '@mui/joy/Typography';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Button from '@mui/joy/Button';
import '../../app/globals.css'
import Link from '@mui/joy/Link';
import type { Metadata } from 'next'
import Navigation from '../../app/components/Navigation'
import Head from 'next/head';


export default function Page() {
  return (
    <CssVarsProvider defaultMode='dark'>
    <Navigation/>
    <Sheet>
      <Head>
        <title>About Bailey | Klash</title>
      </Head>
     <Sheet sx={{
      width: '100%',
      ml: '0', // margin left & right
      height: '25vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      gap: 2,
      zIndex: 2,
      boxShadow: 'md',
    }}
    variant="plain">
      <div style={{display:'flex',justifyContent:'center',alignItems:'center',position:'relative',width:'232px'}}>
        <img style={{borderRadius:'10px',marginBottom:'70px'}} src="https://cdn.discordapp.com/avatars/896539895449939979/a392e88256e482f75c65867491f478de.webp?size=128" alt="Profile" />
        <h1 style={{position:'absolute',margin:'auto',width:'100%',marginTop:'170px'}}>Bailey / Ropoid</h1>
        <h3 style={{position:'absolute',margin:'auto',width:'220%',marginTop:'90px'}}>
        I'm an aspiring game developer with a knack for writing.</h3>
      </div>
    </Sheet>
    
    <Sheet sx={{display:'flex',alignItems:'center',justifyContent:'center'}}>
    <Sheet sx={{padding:'20px',borderRadius:'lg',width:'30vw',height:'20vh',mx:'10px',marginTop:'20px',display:'flex',alignItems:'center',justifyContent:'center'}} variant='outlined'>
      <ul>
        <h3>Sub-companies I'm In</h3>
        <li>Ropoid Studios</li>
        <li>Klash Games</li>
      </ul>
    </Sheet>
    <Sheet sx={{padding:'20px',borderRadius:'lg',width:'30vw',height:'20vh',mx:'10px',marginTop:'20px',display:'flex',alignItems:'center',justifyContent:'center'}} variant='outlined'>
      <ul>
        <h3>Projects I'm In</h3>
        <li><a>Aetheria and Beyond (Mana & Majik)</a></li>
        <li><a>Mythos Beyond the Third Axis</a></li>
      </ul>
    </Sheet>
    </Sheet>
   </Sheet></CssVarsProvider>
  );
}