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

export default function LoginPane() {
  return (
    <CssVarsProvider defaultMode='dark'>
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
            {/* Login Buttons (coming soon) */}
            <div style={{display:'inline-block',width:'100%'}}><Button onClick={function(){window.location.href='/login';}} variant='plain' style={{float:'right'}} size='sm' color='danger'><NoAccountsIcon style={{fontSize:'32px'}}></NoAccountsIcon></Button></div>

        </Sheet>
    </CssVarsProvider>
  );
}