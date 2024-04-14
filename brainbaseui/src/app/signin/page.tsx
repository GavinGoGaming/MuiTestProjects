'use client';
import { Button, Input } from "@mui/joy";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import '../logins.css';

export default function Signin() {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const router = useRouter();

    return (
        <div style={{display:'flex',justifyContent:'center',alignItems:'center',width:'100%',height:'100%',background:'#111'}}>
            <img className="brainbase-logo" src="/logo/logo_wide.svg"></img>
            <div className="pane-split">
            <div className="login-pane-left">
                <h3>Email & Password</h3><br/>
                <Input type="email" sx={{width:'90%',margin:'5px'}} placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
                <Input type="password" sx={{width:'90%',margin:'5px'}} placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
                <Button sx={{width:'90%',margin:'5px'}} onClick={()=>{
                    signIn('credentials', {email, password, redirect: true, callbackUrl: '/'})
                }} disabled={!email || !password} color="primary">Sign In</Button>
                <br/>
                <Link href="/signup" style={{fontSize:"14px",color:"#0B6BCB",margin:'5px'}}>Create an account</Link>
                <Link href="/forgot-password" style={{fontSize:"14px",color:"#0B6BCB"}}>Reset password</Link>
            </div>
            <div className="login-pane-right">
                <h3>Social Sign In</h3><br/>
                <Button sx={{width:'90%',display:'flex',alignItems:'center',margin:'5px'}} onClick={()=>{
                    signIn('patreon', {redirect: true, callbackUrl: '/'})
                }} color="primary"><i className="fa-brands fa-patreon" style={{margin:'3px'}}></i>Patreon</Button>
                <Button sx={{width:'90%',display:'flex',alignItems:'center',margin:'5px'}} onClick={()=>{
                    signIn('google', {redirect: true, callbackUrl: '/'})
                }} color="primary"><i className="fa-brands fa-google" style={{margin:'3px'}}></i>Google</Button>
            </div>
            </div>
        </div>
    )
}