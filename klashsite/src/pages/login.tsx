import '../app/globals.css'
import * as React from 'react';
import LoginPane from '../app/components/LoginPane';
import Head from 'next/head';

export default function Page() {
  return (
    <div>
      <Head>
        <title>Login | Klash</title>
      </Head>
      <LoginPane/>
    </div>
  );
}