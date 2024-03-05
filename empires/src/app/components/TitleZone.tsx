'use client';
import { Button, Sheet, Typography } from "@mui/joy";
import { ReactNode } from "react";

export default function TitleZone({bottom, bottom2, isHome=false}: Readonly<{bottom: string, bottom2: string, isHome?: boolean}>) {
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
            <h2 className='paddingForTinyScreen' style={{textAlign: 'center',fontWeight:'400',color:'#F2F2FD',fontSize:'1.8vw'}}>{bottom}<br/>{bottom2}</h2>
            {isHome ? <Button className="bigsizemobile buytix" size={'lg'} sx={{background:'#5ECFFA',color:'black',marginTop:'40px',marginBottom:'80px',marginLeft:'15px',borderRadius:'1.4vw',height:'2.7vh',width:'auto',fontSize:'1.15vw'}} onClick={function(){window.open('https://www.youtube.com/watch?v=lLQdJ59U53o&list=PL_LjAo92qZzd_q7zY8cNIk6G6t1gDEF4X&pp=iAQB');}}>WATCH EPISODES NOW</Button> : null}
            </Sheet>
    );
}