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
import ImageCardPanel from './components/ImageCardPanel';
import TitleZone from './components/TitleZone';
import Footer from './components/Footer';
import Head from 'next/head';

export const metadata = {
  title: "Designing Empires",
  description: "A parody web series about the worst client ever.... coming February 25th to YouTube",
};

export default function Page() {
  return (
    <CssVarsProvider defaultMode='dark'><main style={{height:'100vh'}}>
      <Navigation active="home"/>
      <TitleZone bottom="A parody web series about the worst client ever...." bottom2="coming February 25th to YouTube" key='title'/>
      <Sheet sx={{marginTop:'10px',width:'100%',background:'#F2F2FD',display:'flex',justifyContent:'center',alignItems:'center',height:'fit-content',paddingBottom:'35.7vh',color:'black'}}>
            <iframe width="560" height="315" style={{zIndex:'100',position:'absolute',top:'-12.2vh',border:'0.2vw solid white'}} src="https://www.youtube-nocookie.com/embed/TiJbeO0mbZk?si=3105pg12Pbi-mOex&amp;controls=0" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
            <Typography sx={{
              width:'100%',
              px:'15vw',
              fontSize:'2.1vw',
              position:'relative',
              top:'30.6vh',
              color: 'black',
            }} textAlign={'center'} className={"deschome"}>
            Set a long time ago, in a galaxy far far away, <a className='bolded'>Designing Empires</a> follows intrepid design agency Empathos, whose account with the Galactic Empire has been placed under review following the epic failure of a certain space station exhaust port.<br/><br/>

Armed with a mood board, a wild-eyed creative director, and a trusty HR droid, this ragtag team of designers, engineers and middle managers attempts to save their account (and their lives) with the biggest pitch of their lives... a total galactic re-brand.
            </Typography>
      </Sheet>
      <Footer/>
   </main></CssVarsProvider>
  );
}