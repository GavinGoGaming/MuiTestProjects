import React from 'react';
import { Card, CardContent, Typography, AspectRatio } from '@mui/joy';

export default function Usercard(props: { image:string, title:string, name:string, description:string, top:boolean, titleColor:string }) {
    return (
        <span>
            <div style={{display:'flex',flexDirection:'row',justifyContent:'center',alignItems:'center',paddingBottom:'10px',paddingTop:'10px'}} className='dontDisplayOnMobile'>
                <div style={{width:'17vw',height:'25vh',paddingBottom:'0px',marginBottom:'25px'}}>
                    <img src={props.image} style={{width:'100%'}}/>
                </div>
                <div style={{width:'70%',marginLeft:'40px',paddingTop:'50px',paddingBottom:'20px',borderTop:(props.top?'none':'1px solid white')}}>
                    <div style={{display:'flex',justifyContent:'left',paddingBottom:'2px'}}><Typography fontFamily={'ITC'} textColor={props.titleColor} fontSize={'1.4vw'}>{props.name}</Typography></div>
                    <div style={{display:'flex',justifyContent:'left',paddingBottom:'10px'}}><Typography fontFamily={'ITC'} textColor={props.titleColor} fontSize={'1.4vw'} level='h4'>{props.title}</Typography></div>
                    <div style={{display:'flex',justifyContent:'left',paddingBottom:'10px'}}><Typography fontFamily={'ITC'} textColor={'#FFFFFF'} fontSize={'1.1vw'}><span dangerouslySetInnerHTML={{__html:props.description}}></span></Typography></div>
                </div>
            </div>
            <div style={{width:'100%',paddingTop:'35px',borderTop:(props.top?'none':'1px solid white'),position:'relative'}} className='dontDisplayOnDesktop'>
                <div style={{display:'flex',justifyContent:'left',paddingBottom:'2px',maxWidth:'65%'}}><Typography fontFamily={'ITC'} textColor={props.titleColor} level='h4'>{props.name}</Typography></div>
                <div style={{display:'flex',justifyContent:'left',paddingBottom:'10px',maxWidth:'65%'}}><Typography fontFamily={'ITC'} textColor={props.titleColor} level='h4'>{props.title}</Typography></div>
                <div style={{display:'flex',justifyContent:'left',paddingBottom:'10px',position:'relative'}}>
                    <img src={props.image} style={{position:'absolute',top:'-100px',right:'0px',width:'28%'}} alt="" />
                    <Typography fontFamily={'ITC'} textColor={'#FFFFFF'} level='body-sm'><span dangerouslySetInnerHTML={{__html:props.description}}></span></Typography>
                </div>
                
            </div>
        </span>
    );
};