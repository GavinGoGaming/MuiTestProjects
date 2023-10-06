import * as React from 'react';
import { CssVarsProvider, useColorScheme } from '@mui/joy/styles';
import Sheet from '@mui/joy/Sheet';
import Typography from '@mui/joy/Typography';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Button from '@mui/joy/Button';
import Link from '@mui/joy/Link';

export default function LoginPane() {
  return (
    <CssVarsProvider defaultMode='dark'>
      <main>
        <Sheet sx={{
            width:'100%',
            height:'70px',
            boxShadow: 'md',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            px: '20px',
        }} variant='soft'>
            <h2 style={{cursor: 'pointer'}} className='hoverUnderline'>klash</h2>
        </Sheet>
      </main>
    </CssVarsProvider>
  );
}