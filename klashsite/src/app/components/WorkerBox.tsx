'use client';

import * as React from 'react';
import { CssVarsProvider, useColorScheme } from '@mui/joy/styles';
import Sheet from '@mui/joy/Sheet';
import Typography from '@mui/joy/Typography';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Button from '@mui/joy/Button';
import Link from '@mui/joy/Link';



export default function WorkerBox(props: {color: string, name: string, imageUrl: string, title: string, blurb: string, url: string}) {
  return (
    <CssVarsProvider defaultMode='dark'>
     <Sheet className="wbhg" onClick={function(){window.location.href=props.url}} sx={{
      width: '150px',
      height: '150px',
      display: 'inline-flex',
      float: 'left',
      alignSelf: 'baseline',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      gap: 2,
      zIndex: 1,
      borderRadius: 'lg',
      boxShadow: '0px 0px 20px '+props.color
    }}
    variant="outlined">
        <Sheet sx={{
            width: '95%',
            height: '95%',
            zIndex: 2,
            py: '50px',
            px: '50px',
            display: 'inline',
            borderRadius: 'lg',
            backgroundImage: `url(${props.imageUrl})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            }}
            variant="outlined">
            </Sheet>
            <div
    style={{
      marginLeft: '430px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      justifyContent: 'center',
      position: 'absolute',
      height: '100%',
    }}
  >
    <h3
      style={{
        padding: '10px',
        color: 'white',
        width: '250px',
      }}
    >
      <div style={{marginRight:'5px',display: 'inline',padding:'5px',paddingLeft:'8px',paddingRight:'8px',backgroundColor:props.color,borderRadius:'8px'}}>{props.title}</div>
      {props.name}
    </h3>
    
    <p
      style={{
        padding: '10px',
        color: 'white',
        width: '200%',
      }}
    >
      {props.blurb}
    </p>
  </div>
    </Sheet></CssVarsProvider>
  );
}