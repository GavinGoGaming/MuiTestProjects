'use client';
import Image from 'next/image'
import styles from './page.module.css'
import { CssVarsProvider, Tab, TabList, Tabs, Sheet, Button } from '@mui/joy'
import React from 'react';
import ChatBot from '@/components/chatbot';
import { signOut, useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';

export default function Home() {
  const session = useSession({
    required: true,
    onUnauthenticated() {
      redirect('/signin');
    },
  });

  function href(x: string) {
      window.location.href = x;
  }
  var [index, setIndex] = React.useState(0);
  return (
    <main className={styles.main}>
    <Sheet className="nav_small" sx={{borderRadius: 'md',height:'calc(100% - 20px)',width:'60px',position:'absolute',top:'10px',left:'10px'}}>
        <Button color="neutral" variant='plain' onClick={function(){href('/#');}}><i className="fa-solid fa-brain"></i></Button>
        <Button color="neutral" variant='plain' onClick={function(){href('/news/#');}}><i className="fa-solid fa-newspaper"></i></Button>
    </Sheet>
    <Sheet className="nav_big" sx={{borderRadius: 'md',height:'calc(100% - 20px)',width:'20vw',position:'absolute',top:'10px',left:'10px'}}>
        <img src="/logo/logo_wide.svg" style={{filter: 'brightness(0) invert(1)'}} alt="" />
        <Button color="neutral" variant='plain' onClick={function(){href('/#');}}><i className="fa-solid fa-brain"></i> AI Utilities</Button>
        <Button color="neutral" variant='plain' onClick={function(){href('/news/#');}}><i className="fa-solid fa-newspaper"></i> Changelog</Button>
        <Button color="neutral" variant='plain' disabled><i className="fa-solid fa-envelope"></i> {(session.data?.user?.name || session.data?.user?.email)}</Button>
        <Button color="neutral" variant='plain' onClick={function(){signOut({redirect: true, callbackUrl: '/'});}}><i className="fa-solid fa-arrow-left-from-bracket"></i> Sign Out</Button>
    </Sheet>
      <ChatBot/>
    </main>
  )
}

Home.requireAuth = true;