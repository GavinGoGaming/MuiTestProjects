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
import { DarkModeOutlined, LightModeOutlined } from '@mui/icons-material';
import HrefBtn from './HrefBtn';
import SwapVerticalCircleRoundedIcon from '@mui/icons-material/SwapVerticalCircleRounded';
import SwapCallsRounded from '@mui/icons-material/SwapCallsRounded';
import MailChimp from './Mailchimp';

export default function Footer() {
    React.useEffect(()=>{
        var script = document.createElement("script");
        script.src = "https://widget-prime.rafflecopter.com/launch.js";
        document.body.appendChild(script);
    });
  return (
    <div>
        <Sheet sx={{
            width:'100%',
            py:'50px',
            boxShadow: 'md',
            position:'sticky',
            px: '20px',
            backgroundColor:"#181824"
        }} variant='soft'>
            <div style={{width:'100%',paddingBottom:'20px'}}>
                <Typography className="topftrtitle" textAlign={'center'}>
                Sign Up to our mailing list
                </Typography>
                </div>
            <div style={{width:'100%',paddingBottom:'80px'}}>
                    <Typography className="btmftrevent" textAlign={'center'}>
                    to get updates about Designing Empires!
                    </Typography>
            </div>
            <div style={{width:'100%',display: 'flex',justifyContent: 'center'}}>
                {/* MailChimp moved to component and unused */}
                {/* <a className="rcptr" href="http://www.rafflecopter.com/rafl/display/7e9ea52b1/" rel="nofollow" data-raflid="7e9ea52b1" data-theme="classic" data-template="65d1070792573a04270e64bc" id="rcwidget_d2ti91ic">a Rafflecopter giveaway</a> */}
                {/* <iframe id="rcwidget_rafldisplaypage" frameBorder="0" style={{width: "402px", height: "759px", margin: "0px auto", display: "block"}} src="https://widget-prime.rafflecopter.com/classic/19dbbbb/main.html"></iframe> */}
                <MailChimp/>
            </div>
            <div style={{width:'100%',display: 'flex',justifyContent: 'center',paddingTop:'80px'}}>
                <Typography className="topftrtitle">
                Subscribe and follow us:
                </Typography>
            </div>
            <div style={{width:'100%',display: 'flex',justifyContent: 'center'}} className='follow'>
                <i className="fa-brands fa-youtube fa-fw fa-fh" onClick={function(){window.open('https://youtube.com/@designingempires/');}}></i>
                <i className="fa-brands fa-facebook-f fa-fw fa-fh" onClick={function(){window.open('https://www.facebook.com/designingempires');}}></i>
                <i className="fa-brands fa-instagram fa-fw fa-fh" onClick={function(){window.open('https://www.instagram.com/designingempires/');}}></i>
                <i className="fa-brands fa-twitter fa-fw fa-fh" onClick={function(){window.open('https://twitter.com/designinempires/');}}></i>
                <i className="fa-brands fa-threads fa-fw fa-fh" onClick={function(){window.open('https://www.threads.net/@designingempires');}}></i>
            </div>
        </Sheet>
        <Sheet sx={{
            width:'100%',
            py:'75px',
            boxShadow: 'md',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            position:'sticky',
            px: '20px',
            backgroundColor:"black",
            fontFamily:'Inter'
        }} variant='soft'>
            <Typography id="bottomftr" sx={{fontFamily:'Roboto'}} fontFamily={'Roboto'}>
            This is an unofficial parody fan film not intended for commercial use. It was created solely for entertainment purposes.<br/>Some characters are owned by Lucasfilm/Disney and this product is not connected in any way to said companies.<br/><br/>
            Website created with <a style={{color:'tomato'}}>❤️</a> by <a href="https://klash.dev" style={{color:'lightblue'}}>Klash Development</a>
            </Typography>
        </Sheet>
    </div>
  );
}