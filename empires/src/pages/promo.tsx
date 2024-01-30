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

function PromoImage(props: {imageURL:string, title:string, type:string}) {
    return (
        <div className='promoPageObject' style={{marginTop:'40px',marginBottom:'40px'}}>
            {props.title}
            <a className="link" style={{float:'right'}} download href={props.imageURL}>Download {props.type}</a>
            <img src={props.imageURL} style={{width:'100%',border:'1px solid white',marginTop:'10px'}} alt="" />
        </div>
    )
}
export default function Page() {
    return (
        <CssVarsProvider defaultMode='dark'>
            <Head>
                <title>Promo | Designing Empires</title>
                <meta name="title" content="Promo | Designing Empires"/>
                <meta name="description" content="A parody web series about the worst client ever.... coming February 25th to YouTube"/>
                <meta property="og:title" content="Promo | Designing Empires" />
                <meta property="og:url" content="https://designingempires.com/promo" />
                <meta property="og:image" content="/de.png" />
            </Head>
            <main style={{ height: '100vh' }}>
                <Navigation active='promo' />
                <TitleZone bottom="A parody web series about the worst client ever...." bottom2="streaming soon on YouTube" key='title' />
                <Sheet sx={{ marginTop: '10px', width: '100%', background: '#181824', display: 'flex', justifyContent: 'center', alignItems: 'center', height: 'fit-content', paddingBottom: '50px', color: 'black' }}>
                    <Typography sx={{
                        width: '70%',
                        padding: '20px',
                        fontSize: '2.2vw',
                        position: 'relative',
                        color: 'white',
                        height: '100%'
                    }} textAlign={'center'} className={"deschome promo mobileDo24px"}>
                        <h4 style={{color: '#5ECFFA'}}>Download these graphics for promotional purposes:</h4>
                        <h5>or click to <a className='link' style={{fontFamily:'ITC'}} download href="/promo/Promo Media.zip">download all media</a></h5>
                        <br/>
                        <PromoImage title="Facebook Cover Photo" imageURL='/promo/Facebook_Banner.png' type='PNG'/>
                        <PromoImage title="LinkedIn Cover Photo" imageURL='/promo/LinkedIn_Banner.png' type='PNG'/>
                        <PromoImage title="Twitter Cover Photo" imageURL='/promo/Twitter_Banner.png' type='PNG'/>
                        <PromoImage title="Designing Empires Poster" imageURL='/promo/Poster.png' type='PNG'/>
                        <div style={{borderTop:'1px solid white',marginTop:'10px',marginBottom:'10px',paddingTop:'20px'}}>
                            <span>Logos</span>
                            <div style={{display:'flex'}}>
                                <div style={{width:'50%',alignItems:'center',display:'flex',flexDirection:'column',justifyContent:'center'}}>
                                    <img src="/promo/DE Logo Wide.png" style={{width:'80%'}}></img>
                                    <a className='link' download href="/promo/DE Logo Wide.png">Download PNG</a>
                                </div>
                                <div style={{width:'50%',height:'100%'}}>
                                    <img src="/promo/DE Logo Square.png" style={{width:'80%'}}></img>
                                    <a className='link' download href="/promo/DE Logo Square.png">Download PNG</a>
                                </div>
                            </div>
                        </div>
                    </Typography>
                </Sheet>
                <Footer />
            </main></CssVarsProvider>
    );
}