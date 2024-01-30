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

declare const window: any;
declare const fnames: any;
declare const ftypes: any;

export default function Footer() {
    React.useEffect(()=>{
        (function($) {window.fnames = new Array(); window.ftypes = new Array();fnames[0]='EMAIL';ftypes[0]='email';fnames[1]='FNAME';ftypes[1]='text';fnames[2]='LNAME';ftypes[2]='text';fnames[3]='ADDRESS';ftypes[3]='address';fnames[4]='PHONE';ftypes[4]='phone';}(null));
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
            <div style={{width:'100%',display: 'flex',justifyContent: 'center',paddingBottom:'80px'}}>
                <Typography className="topftrtitle" textAlign={'center'}>
                Sign up for the latest updates.
                </Typography>
            </div>
            <div style={{width:'100%',display: 'flex',justifyContent: 'center'}}>
                                            <div id="mc_embed_shell">
                                <div id="mc_embed_signup">
                                    <form action="https://designingempires.us14.list-manage.com/subscribe/post?u=2b517453c18f2b9116743dc12&amp;id=f7483c0cad&amp;f_id=00d1a4e0f0" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank">
                                        <div id="mc_embed_signup_scroll">
                                            <div className="indicates-required"><span className="asterisk">*</span> indicates required</div>
                                            <div className="mc-field-group"><label htmlFor="mce-EMAIL">Email Address <span className="asterisk">*</span></label><input type="email" name="EMAIL" className="required email" id="mce-EMAIL" required={true} defaultValue=""/><span id="mce-EMAIL-HELPERTEXT" className="helper_text"></span></div><div className="mc-field-group"><label htmlFor="mce-FNAME">First Name <span className="asterisk">*</span></label><input type="text" name="FNAME" className="required text" id="mce-FNAME" required={true} defaultValue=""/></div><div className="mc-field-group"><label htmlFor="mce-LNAME">Last Name <span className="asterisk">*</span></label><input type="text" name="LNAME" className="required text" required={true} id="mce-LNAME" defaultValue=""/></div>
                                        <div id="mce-responses" className="clear foot">
                                            <div className="response" id="mce-error-response" style={{display: "none"}}></div>
                                            <div className="response" id="mce-success-response" style={{display: "none"}}></div>
                                        </div>
                                    <div aria-hidden="true" style={{position: "absolute", left: "-5000px"}}>
                                        /* real people should not fill this in and expect good things - do not remove this or risk form bot signups */
                                        <input type="text" name="b_2b517453c18f2b9116743dc12_f7483c0cad" tabIndex={-1} defaultValue=""/>
                                    </div>
                                        <div className="optionalParent">
                                            <div className="clear foot">
                                                <input type="submit" name="subscribe" id="mc-embedded-subscribe" className="button" value="Subscribe"/>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                                </div>
                                <script type="text/javascript" src="//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js"></script></div>

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