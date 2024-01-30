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
                <title>Crew | Designing Empires</title>
                <meta name="title" content="Crew | Designing Empires"/>
                <meta name="description" content="A parody web series about the worst client ever.... coming February 25th to YouTube"/>
                <meta name="keywords" content="starwars,parody,fanfilm,comedy,theforce,yoda,grogu,mandolorian,skywalker,darthvader,firstorder,empire,designingempires,lucas,jedi"/>
                <meta name="robots" content="index, follow"/>
                <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
                <meta name="language" content="English"/>
                <meta property="og:title" content="Crew | Designing Empires" />
                <meta property="og:url" content="https://designingempires.com/crew" />
                <meta property="og:image" content="/de_square.png" />
                <meta property="twitter:title" content="Crew | Designing Empires" />
                <meta property="twitter:image" content="/de_square.png" />
                <meta property="twitter:description" content="A parody web series about the worst client ever.... coming February 25th to YouTube"/>
            </Head>
            <main style={{ height: '100vh' }}>
                <Navigation active='team' />
                <TitleZone bottom="A parody web series about the worst client ever...." bottom2="coming February 25th to YouTube" key='title' />
                <Sheet sx={{ marginTop: '10px', width: '100%', background: 'transparent', display: 'flex', justifyContent: 'center', alignItems: 'center', height: 'fit-content', paddingBottom: '50px', color: 'black' }}>
                    <Button onClick={function(){window.location.href='/cast';}} size={'lg'} variant='plain' sx={{color:'white',width:'7vw',fontSize:'1.15vw',marginRight:'15px',borderRadius:'1.4vw',height:'2.7vh'}}>CAST</Button>
                    <Button color='danger' size={'lg'} sx={{background:'#E70015',color:'black',marginLeft:'15px',borderRadius:'1.4vw',height:'2.7vh',width:'7vw',fontSize:'1.15vw'}} onClick={function(){window.location.href='/crew';}}>CREW</Button>
                </Sheet>
                <Sheet sx={{ marginTop: '10px', width: '100%', background: '#181824', display: 'flex', justifyContent: 'center', alignItems: 'center', height: 'fit-content', paddingBottom: '50px', color: 'black' }}>
                    <Typography sx={{
                        width: '70%',
                        padding: '20px',
                        fontSize: '24px',
                        position: 'relative',
                        color: 'black'
                    }} textAlign={'left'} className={"deschome crew"}>
                        <Usercard titleColor='#5ECFFA' top={true} name='Jon Fox' title='Creator / Producer / Showrunner' description="Jon Fox graduated film school in 1997 but hasn't made his own film project until now. In the meantime, he has been a trailblazer and influencer in user experience and product design. Overseeing design teams across various industries, Jon is dedicated to driving digital innovation and transformation. Notably, he played a pivotal role in introducing Los Angeles to the nation's most advanced voting system. With experience collaborating both for and with design agencies, this series draws inspiration from his diverse professional journey. Beyond his professional life, Jon is a passionate sci-fi enthusiast, as evidenced by this show." image='/profile/crew_jon.png'/>
                        <Usercard titleColor='#5ECFFA' top={false} name='Otto Penzato' title='Director / Producer' description='Otto Penzato is a director, writer and producer, with a substantial history in filmmaking running film sets as an Assistant Director. His directing credits include episodes of Just Add Magic for Amazon, Puppy Place for Apple, and an award winning series of political satire spots, The Most Influential Man in America. He is at least 3-4 different kinds of nerd, and is currently working on adding one more.' image='/profile/crew_otto.png'/>
                        <Usercard titleColor='#5ECFFA' top={false} name='Cooper Griggs' title='Director / Producer / Director of Photography' description='Cooper is a director, producer, & editor of movies, television, commercials, and more, including the short film "jOSHUA," (Winner, Best Short Film at Global Shorts festival) , "Finding Normal" Comedy web series, television shows “Just Seen It” (PBS), "CARS.tv", "The American Athlete" and feature film, "Overdue.” "The American Athlete" was nominated for a daytime Emmy. His work in commercials includes: Fantastic Sams, Nissan, Cheerios, Sleep Number, Netflix, Facebook, and Target. <a href="http://portfolio.coopergriggs.com/">portfolio.coopergriggs.com</a>' image='/profile/crew_cooper.png'/>
                        <Usercard titleColor='#5ECFFA' top={false} name='Bill Missett' title='Producer / Editor' description='Bill has a 42 year career in the film and television industries and possesses an extensive working knowledge of current production and post-production techniques. An editor by trade, he has worked on over 75 episodic series, numerous features and short films and is also a consultant in the development of editorial systems, post-production workflow and facility construction. He is currently workshopping a pithy comment for this bio.' image='/profile/crew_bill.png'/>
                        <Usercard titleColor='#5ECFFA' top={false} name='Toby Karlin' title='Composer' description='Toby Karlin is a composer, producer, performer, and educator, formerly of Los Angeles and currently based in Placitas, New Mexico.  A multi-instrumentalist, his main areas of focus are songwriting and development,  production and editing, and sound healing with his wife and partner, Kyle Holllingsworth.  He also bakes bread, hikes, and loves dogs.  May the Force be with you.' image='/profile/crew_toby.png'/>
                    </Typography>
                </Sheet>
                <Footer />
            </main></CssVarsProvider>
    );
}