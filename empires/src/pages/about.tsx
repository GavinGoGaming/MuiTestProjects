'use client';
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
import TitleZone from '@/app/components/TitleZone';
import Footer from '@/app/components/Footer';
import Usercard from '@/app/components/Usercard';

export default function Page() {
    return (
        <CssVarsProvider defaultMode='dark'>
            <Head>
                <title>About | Designing Empires</title>
                <meta name="title" content="About | Designing Empires"/>
                <meta name="description" content="A parody web series about the worst client ever.... coming February 25th to YouTube"/>
                <meta name="keywords" content="starwars,parody,fanfilm,comedy,theforce,yoda,grogu,mandolorian,skywalker,darthvader,firstorder,empire,designingempires,lucas,jedi"/>
                <meta name="robots" content="index, follow"/>
                <meta httpEquiv="Content-Type" content="text/html; charset=utf-8"/>
                <meta name="language" content="English"/>
                <meta property="og:title" content="About | Designing Empires" />
                <meta property="og:url" content="https://designingempires.com/about" />
                <meta property="og:image" content="/de_square.png" />
                <meta property="twitter:title" content="About | Designing Empires" />
                <meta property="twitter:image" content="/de_square.png" />
                <meta property="twitter:description" content="A parody web series about the worst client ever.... coming February 25th to YouTube"/>
            </Head>
            <main style={{ height: '100vh' }}>
                <Navigation active='about' />
                <TitleZone bottom="A parody web series about the worst client ever...." bottom2="streaming soon on YouTube" key='title' />
                <Sheet sx={{ marginTop: '10px', width: '100%', background: '#181824', display: 'flex', justifyContent: 'center', alignItems: 'center', height: 'fit-content', paddingBottom: '50px', color: 'black' }}>
                    <Typography sx={{
                        width: '70%',
                        padding: '20px',
                        fontSize: '24px',
                        position: 'relative',
                        color: 'white'
                    }} textAlign={'center'} className={"deschome about"}>
                        
                    </Typography>
                </Sheet>
                <Footer />
            </main></CssVarsProvider>
    );
}