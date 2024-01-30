'use client';
import { Sheet, Typography } from "@mui/joy";
import { ReactNode } from "react";

export default function TitleZone(props: {bottom: string, bottom2: string}) {
    return (
        <Sheet sx={{
            width: '100%',
            ml: '0',
            height: '70vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            background: 'transparent'
          }}
          variant="plain">
            <img src="/de_logo.png" height="242" alt="" style={{height:'25vh',width:'auto',marginBottom:'2vh'}} />
            <h2 className='paddingForTinyScreen' style={{textAlign: 'center',fontWeight:'400',color:'#F2F2FD',fontSize:'1.8vw'}}>{props.bottom}<br/>{props.bottom2}</h2>
          </Sheet>
    );
}