import '../app/globals.css'
import * as React from 'react';
import LoginPane from '../app/components/LoginPane';
import Head from 'next/head';
import { CssVarsProvider } from '@mui/joy';

export default function Page() {
  return (
    <div>
      <CssVarsProvider defaultColorScheme={'dark'}>
        <Head>
          <title>Login | Klash</title>
          <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
        </Head>
        <LoginPane callback={function(){}}/>
      </CssVarsProvider>
    </div>
  );
}