import * as React from 'react';
import { CssVarsProvider, useColorScheme } from '@mui/joy/styles';
import Sheet from '@mui/joy/Sheet';
import Typography from '@mui/joy/Typography';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Button from '@mui/joy/Button';
import '../app/globals.css'
import Link from '@mui/joy/Link';
import LoginPane from '../app/components/LoginPane';
import type { Metadata } from 'next'
import Navigation from '../app/components/Navigation'
import WorkersPane from '../app/components/WorkersPane'
import Head from 'next/head';

export const metadata = {
  title: "Home | Klash",
  description: "A modern software development company planning to revolutionize the industry.",
};

export default function Page() {
  return (
    <CssVarsProvider defaultMode='dark'><main>
      
      <Head>
        <title>About Us | Klash</title>
      </Head>
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
        <h1>About Us</h1>
        <h3 style={{position:'absolute',margin:'auto',marginBottom:'45px'}}>Klash</h3>
      </div>
      <h5 className='paddingForTinyScreen' style={{textAlign: 'center',fontWeight:'400',color:'#555'}}>Meet the crew!</h5>
    </Sheet>
    <Sheet className="dontDisplayOnMobile" sx={{width:'690px',padding:'30px',borderRadius:'lg',marginTop:'10px',marginLeft:'calc(50% - (690px / 2))'}} variant="outlined">
      <WorkersPane/>
    </Sheet>
   </main></CssVarsProvider>
  );
}