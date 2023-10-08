import * as React from 'react';
import { CssVarsProvider, useColorScheme } from '@mui/joy/styles';
import Sheet from '@mui/joy/Sheet';
import Typography from '@mui/joy/Typography';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Button from '@mui/joy/Button';
import Link from '@mui/joy/Link';
import LoginPane from './components/LoginPane';
import type { Metadata } from 'next'
import Navigation from './components/Navigation'
import HrefButton from './components/HrefBtn';

export const metadata = {
  title: "Home | Klash",
  description: "A modern software development company planning to revolutionize the industry.",
};

export default function Page() {
  return (
    <CssVarsProvider defaultMode='dark'><main>
      <Navigation/>
     <Sheet sx={{
      width: '100%',
      ml: '0', // margin left & right
      height: '30vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      gap: 2,
      zIndex: 2,
      boxShadow: 'md',
    }}
    variant="plain">
      <div style={{display:'flex',justifyContent:'center',alignItems:'center',position:'relative'}}>
        <h1>KlashDevelopment</h1>
        <h3 style={{position:'absolute',margin:'auto',marginBottom:'45px'}}>We are</h3>
      </div>
      <h5 className='paddingForTinyScreen' style={{textAlign: 'center',fontWeight:'400',color:'#555'}}>A modern software development company planning to revolutionize the industry.</h5>
    </Sheet>
    <Sheet sx={{padding:'30px',borderRadius:'lg',marginTop:'10px',marginLeft:'calc(50% - (150px / 2))',width:'fit-content'}} variant="outlined">
      <HrefButton url="/about" content="About Us"/>
      
    </Sheet>
   </main></CssVarsProvider>
  );
}