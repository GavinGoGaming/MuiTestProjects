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
import TwosideExtras, { OnesideExtras, ThreesideExtras, ThreesideExtrasWithTitle } from '@/app/components/ExtrasUsers';

export default function Page() {
    return (
        <CssVarsProvider defaultMode='dark'>
            <Head>
                <title>Crew | Designing Empires</title>
                <meta name="title" content="Crew | Designing Empires"/>
                <meta name="description" content="A parody web series about the worst client ever.... coming February 25th to YouTube"/>
                <meta name="keywords" content="starwars,parody,fanfilm,comedy,theforce,yoda,grogu,mandolorian,skywalker,darthvader,firstorder,empire,designingempires,lucas,jedi"/>
                <meta name="robots" content="index, follow"/>
                <meta httpEquiv="Content-Type" content="text/html; charset=utf-8"/>
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
                    <Button className="bigsizemobile" onClick={function(){window.location.href='/cast';}} size={'lg'} variant='plain' sx={{color:'white',width:'7vw',fontSize:'1.15vw',marginRight:'15px',borderRadius:'1.4vw',height:'2.7vh'}}>CAST</Button>
                    <Button className="bigsizemobile" color='danger' size={'lg'} sx={{background:'#E70015',color:'black',marginLeft:'15px',borderRadius:'1.4vw',height:'2.7vh',width:'7vw',fontSize:'1.15vw'}} onClick={function(){window.location.href='/crew';}}>CREW</Button>
                </Sheet>
                <Sheet sx={{ marginTop: '10px', width: '100%', background: '#181824', display: 'flex', justifyContent: 'center', alignItems: 'center', height: 'fit-content', paddingBottom: '50px', color: 'black' }}>
                    <Typography sx={{
                        width: '70%',
                        padding: '20px',
                        fontSize: '24px',
                        position: 'relative',
                        color: 'black'
                    }} textAlign={'left'} className={"deschome crew"}>
                        <Usercard titleColor='#5ECFFA' bottom={false} top={true} name='Jon Fox' title='Creator / Producer / Showrunner' description="Jon Fox graduated film school in 1997 but hasn't made his own film project until now. In the meantime, he has been a trailblazer and influencer in user experience and product design. Overseeing design teams across various industries, Jon is dedicated to driving digital innovation and transformation. Notably, he played a pivotal role in introducing Los Angeles to the nation's most advanced voting system. With experience collaborating both for and with design agencies, this series draws inspiration from his diverse professional journey. Beyond his professional life, Jon is a passionate sci-fi enthusiast, as evidenced by this show." image='/profile/crew_jon.png'/>
                        <Usercard titleColor='#5ECFFA' bottom={false} top={false} name='Otto Penzato' title='Director / Producer' description='Otto Penzato is a director, writer and producer, with a substantial history in filmmaking running film sets as an Assistant Director. His directing credits include episodes of Just Add Magic for Amazon, Puppy Place for Apple, and an award winning series of political satire spots, The Most Influential Man in America. He is at least 3-4 different kinds of nerd, and is currently working on adding one more.' image='/profile/crew_otto.png'/>
                        <Usercard titleColor='#5ECFFA' bottom={false} top={false} name='Cooper Griggs' title='Director / Producer / Director of Photography' description='Cooper is a director, producer, & editor of movies, television, commercials, and more, including the short film "jOSHUA," (Winner, Best Short Film at Global Shorts festival) , "Finding Normal" Comedy web series, television shows “Just Seen It” (PBS), "CARS.tv", "The American Athlete" and feature film, "Overdue.” "The American Athlete" was nominated for a daytime Emmy. His work in commercials includes: Fantastic Sams, Nissan, Cheerios, Sleep Number, Netflix, Facebook, and Target. <a href="http://portfolio.coopergriggs.com/">portfolio.coopergriggs.com</a>' image='/profile/crew_cooper.png'/>
                        <Usercard titleColor='#5ECFFA' bottom={false} top={false} name='Bill Missett' title='Producer / Editor' description='Bill has a 42 year career in the film and television industries and possesses an extensive working knowledge of current production and post-production techniques. An editor by trade, he has worked on over 75 episodic series, numerous features and short films and is also a consultant in the development of editorial systems, post-production workflow and facility construction. He is currently workshopping a pithy comment for this bio.' image='/profile/crew_bill.png'/>
                        <Usercard titleColor='#5ECFFA' bottom={true} top={false} name='Toby Karlin' title='Composer' description='Toby Karlin is a composer, producer, performer, and educator, formerly of Los Angeles and currently based in Placitas, New Mexico.  A multi-instrumentalist, his main areas of focus are songwriting and development,  production and editing, and sound healing with his wife and partner, Kyle Holllingsworth.  He also bakes bread, hikes, and loves dogs.  May the Force be with you.' image='/profile/crew_toby.png'/>
                        
                        <OnesideExtras border={false} left={{ sections: [{ title: 'Written By', users: ['LISA COOMBS, DANI JAE, RICH PRUGH'] }]}} />
                        <ThreesideExtrasWithTitle title={"Additional Story By"} border={true} left={{ sections: [{ title: '', users: ['KEVIN ALLEN', 'LISA COOMBS'] }] }} middle={{ sections: [{ title: '', users: ['JON FOX', 'DANI JAE', 'GARRETT SCHWEIGHAUSER'] }] }} right={{ sections: [{ title: '', users: ['RICH PRUGH', 'KATIE KOTULAK'] }] }} />
                        <OnesideExtras border={false} left={{ sections: [{ title: 'Produced By', users: ['JON FOX, OTTO PENZATO, BILL MISSETT, LISA COOMBS'] }] }} />
                        <OnesideExtras border={true} left={{ sections: [{ title: 'Executive Produced By', users: ['JON FOX, BRADEN KUHLMAN, BILL MISSETT, ','LISA COOMBS, RICH PRUGH, COOPER GRIGGS'] }] }} />
                        {/* Oneside "Editor" with users "BILL MISSET" */}
                        <OnesideExtras border={false} left={{ sections: [{ title: 'Editor', users: ['BILL MISSET'] }] }} />
                        {/* TwosideExtras with sections: Director of Photography - OTTO PENZATO and Production Design JON FOX */}
                        <TwosideExtras border={false} left={{ sections: [{ title: 'Director of Photography', users: ['COOPER GRIGGS'] }] }} right={{ sections: [{ title: 'Production Design', users: ['JON FOX'] }] }} />
                        <TwosideExtras border={true} left={{ sections: [{ title: 'Costume Designer', users: ['TERESA SHEA'] }] }} right={{ sections: [{ title: 'Makeup', users: ['KATIE KOTULAK'] }] }} />
                        {/* Oneside "VFX Builds and Compositing" with user "ZEN UNLIMITED" */}
                        <OnesideExtras border={false} left={{ sections: [{ title: 'VFX Builds and Compositing', users: ['ZEN UNLIMITED'] }] }} />
                        {/* Threeside no-title with "3D Visual FX"=[PATRICK CONNELLY] "Motion Graphics"=[JEFFERSON BALLEW,GAVIN FOX,ELLIOTT WORMAN] "Colorist"=[TOM OVERTON] */}
                        <ThreesideExtras border={true} left={{ sections: [{ title: '3D Visual FX', users: ['PATRICK CONNELLY'] }] }} middle={{ sections: [{ title: 'Motion Graphics', users: ['JEFFERSON BALLEW', 'GAVIN FOX', 'ELLIOTT WORMAN'] }] }} right={{ sections: [{ title: 'Colorist', users: ['TOM OVERTON'] }] }} />
                        <OnesideExtras border={false} left={{ sections: [{ title: 'Audio Post Production by', users: ['UGOSOUND STUDIO','<a href="https://www.ugosound.com/">https://www.ugosound.com/</a>'] }] }} />
                        <ThreesideExtras border={false} left={{ sections: [{ title: 'Production Sound Recording', users: ['JASON SAYADA','ALEXANDER WILLIAMS'] }] }} middle={{ sections: [{ title: 'Re-recording Mixer', users: ['UGO DEROUARD'] }] }} right={{ sections: [{ title: 'Dialogue Editor', users: ['ZOE ESTES'] }] }} />
                        <ThreesideExtras border={true} left={{ sections: [{ title: 'Supervising Sound Editor', users: ['UGO DEROUARD CAS, MPSE'] }] }} middle={{ sections: [{ title: 'Sound Designer', users: ['DONALD FLICK'] }] }} right={{ sections: [{ title: 'Studio Assistant', users: ['DARRICK HOLMES'] }] }} />
                        
                        <ThreesideExtras border={false} left={{ sections: [{ title: 'Post Production Coordinator', users: ['COOPER GRIGGS'] }] }} middle={{ sections: [{ title: 'Promotion and Marketing', users: ['TRISHA PANCIO'] }] }} right={{ sections: [{ title: 'Webmaster', users: ['GAVIN FOX', '<a href="https://klash.dev/" target="_blank">(www.klash.dev)</a>'] }] }} />
                        <ThreesideExtras border={false} left={{ sections: [{ title: 'Credits by', users: ['JEFFERSON BALLEW'] }] }} middle={{sections:[{title:'',users:[]}]}} right={{ sections: [{ title: 'Trailer Editor', users: ['ADAM DAVID'] }] }} />
                        <OnesideExtras border={false} left={{ sections: [{ title: 'Production Jedi', users: ['ERNEST BELDING, EUGENE DAVIS, BRADEN KUHLMAN', 'SHERRI MIRANDA, MONICA MADER, LINDA WONG'] }] }} />
                    </Typography>
                </Sheet>
                <Footer />
            </main></CssVarsProvider>
    );
}