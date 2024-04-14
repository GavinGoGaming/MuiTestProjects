'use client';
import { auth } from "@/utils/firebase";
import { Button, Input } from "@mui/joy";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import '../logins.css';

export default function Signup() {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");

    return (
        <div style={{display:'flex',justifyContent:'center',alignItems:'center',width:'100%',height:'100%',background:'#111'}}>
            <img className="brainbase-logo" src="/logo/logo_wide.svg"></img>
            <div className="login-pane">
                <h3>Sign Up</h3><br/>
                <Input type="email" sx={{width:'90%'}} placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
                <br/>
                <Input type="password" sx={{width:'90%'}} placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
                <br/>
                <Button sx={{width:'90%'}} onClick={()=>{
                    createUserWithEmailAndPassword(auth, email, password);
                }} disabled={!email || !password} color="primary">Sign Up</Button>
                <br/>
                <Link href="/signin" style={{fontSize:"14px",color:"#0B6BCB",margin:'5px'}}>Have an account? Sign in</Link>
            </div>
        </div>
    )
}