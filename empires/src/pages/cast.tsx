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
                <title>Cast | Designing Empires</title>
                <meta name="title" content="Cast | Designing Empires"/>
                <meta name="description" content="A parody web series about the worst client ever.... coming February 25th to YouTube"/>
                <meta name="keywords" content="starwars,parody,fanfilm,comedy,theforce,yoda,grogu,mandolorian,skywalker,darthvader,firstorder,empire,designingempires,lucas,jedi"/>
                <meta name="robots" content="index, follow"/>
                <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
                <meta name="language" content="English"/>
                <meta property="og:title" content="Cast | Designing Empires" />
                <meta property="og:url" content="https://designingempires.com/cast" />
                <meta property="og:image" content="/de_square.png" />
                <meta property="twitter:title" content="Cast | Designing Empires" />
                <meta property="twitter:image" content="/de_square.png" />
                <meta property="twitter:description" content="A parody web series about the worst client ever.... coming February 25th to YouTube"/>
            </Head>
            <main style={{ height: '100vh' }}>
                <Navigation active='team' />
                <TitleZone bottom="A parody web series about the worst client ever...." bottom2="coming February 25th to YouTube" key='title' />
                <Sheet sx={{ marginTop: '10px', width: '100%', background: 'transparent', display: 'flex', justifyContent: 'center', alignItems: 'center', height: 'fit-content', paddingBottom: '50px', color: 'black' }}>
                    <Button size={'lg'} sx={{background:'#5ECFFA',color:'black',marginRight:'15px',borderRadius:'1.4vw',height:'2.7vh',width:'7vw',fontSize:'1.15vw'}} onClick={function(){window.location.href='/cast';}}>CAST</Button> <Button color='danger' onClick={function(){window.location.href='/crew';}} size={'lg'} variant='plain' sx={{color:'white',width:'7vw',fontSize:'1.15vw',marginLeft:'15px',borderRadius:'1.4vw',height:'2.7vh'}}>CREW</Button>
                </Sheet>
                <Sheet sx={{ marginTop: '10px', width: '100%', background: '#181824', display: 'flex', justifyContent: 'center', alignItems: 'center', height: 'fit-content', paddingBottom: '50px', color: 'black' }}>
                    <Typography sx={{
                        width: '70%',
                        padding: '20px',
                        fontSize: '24px',
                        position: 'relative',
                        color: 'black'
                    }} textAlign={'left'} className={"deschome crew"}>
                        <Usercard titleColor='#FED900' top={true} name='Michael Paul King' title='Lon Halcyon, CEO and fearless leader of Empathos' description='Michael Paul King might the only member of the main Designing Empires crew who has been a legit, OG Star Wars fan from the very start. It thrust him into a career path where he has written and acted for stage and television, plus produced and directed numerous films and high-profile television shows. He can recently be seen (as 70s talk show host Mike Douglas) opposite Julia Roberts in the limited series, Gaslit as well in countless national commercials. He has studied with The Groundlings, The Upright Citizens Brigade (UCB), and with legendary actor, James Caan. IG: <a href="https://www.instagram.com/mikekingjr/">@mikekingjr</a> and Facebook: <a href="https://www.facebook.com/MichaelPaulKingActor">MichaelPaulKingActor</a>' image='/profile/character_LON.png'/>
                        <Usercard titleColor='#FED900' top={false} name='Lisa Coombs' title='Coria Talo, Lead Designer and Force-curious' description='Lisa Coombs is a Los Angeles based actor and standup comedian whose screen and stage performances have included Romeo and Juliet, Twelfth Night, The Merchant of Venice, and standup shows with Flappers and Tao Comedy Studio. She has appeared in numerous national television commercials and her self-produced web series Finding Normal on YouTube. <a href="//www.lisacoombs.com">lisacoombs.com</a>' image='/profile/character_coria.png' />
                        <Usercard titleColor='#FED900' top={false} name='Garrett Schweighauser' title='Nax Madar, Lead Engineer and the voice of reason' description="Garrett Schweighauser is a Los Angeles based actor and small dog owner. He can be found on T.V in Blindspotting, The Rookie, Strange Angel and How I Met Your Father. If the internet is more your speed, find him on YouTube in Severus Snape and The Marauders, The Bachelor Princess Edition and Finding Normal. His dog's name is Whiskey and she is nine pounds of fury. IG: <a href='//instagram.com/gschwei'>@gschwei</a>" image='/profile/character_nax.png' />
                        <Usercard titleColor='#FED900' top={false} name='Kevin Allen' title='Junior Moff Wainhuff Tarkin, getting fast-tracked to the top' description={`Kevin Allen is a long-time Star Wars fan and screen actor featured in more than a dozen fan films including "Severus Snape and the Marauders", "Batman: Immortal", "Tank!" and Whitney Avalon's "Princess Rap Battles". He has appeared in original productions as well; most notably "Ouija Bro", "The Once and Future Smash", and Nickelodeon's Henry Danger. <a href="//www.kevinallenacts.com">kevinallenacts.com</a>`} image='/profile/character_tarkin.png' />
                        <Usercard titleColor='#FED900' top={false} name='Rich Prugh' title='The one and only, Mott Adama, Creative Director' description="Rich Prugh is a Syracuse University Drama alum, wedding/event/portrait photographer, and full time goofball! Onstage appearances have included A Midsummer Night's Dream, Wild Party, and Rhinoceros. You can also find him on the YouTube series Finding Normal when he's not snapping pics!" image='/profile/character_mott.png' />
                        <Usercard titleColor='#FED900' top={false} name='Dani Jae' title="Ka'aren Keysekk, Account Manager and conspiracy theorist" description="Dani Jae is a long-time film/theater actor, red carpet host/Emcee, retired model and improv dork, recently branched into voiceover, and making new steps into writing - with Designing Empires as the first venture. With nerdiness in her heart, a farmer's ambition, and jokes at the ready, she's done groovy things and will do even groovier things yet. <a href='//www.danijae.com'>danijae.com</a>" image='/profile/character_kaaren.png' />
                        <Usercard titleColor='#FED900' top={false} name='Katie Kotulak' title='HR-2GO (voice), the seductive Benta' description="Katie Kotulak is an actor living in Los Angeles with her husband (you may know him as Nax) and dog, Whiskey. She has been in numerous national commercials over the years including brands like Adidas, Powerade, Nike, Lamborghini, and Smithfield Ham, just to name a few. Her credits range from the from indie films to Nickelodeon movies to webseries' (check out The Bachelor: Princess Edition) to podcast plays (keep an eye out for Incursion) and everything in between." image='/profile/character_droid.png' />
                    </Typography>
                </Sheet>
                <Footer />
            </main></CssVarsProvider>
    );
}