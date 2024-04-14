'use client';
import { auth } from "@/utils/firebase";
import { Button, Input } from "@mui/joy";
import { sendPasswordResetEmail } from "firebase/auth";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import '../logins.css';

export default function ForgotPassword() {
    const [email, setEmail] = React.useState("");

    const resetEmail = () => {
        sendPasswordResetEmail(auth, email);
    };

    return (
        <div style={{display:'flex',justifyContent:'center',alignItems:'center',width:'100%',height:'100%',background:'#111'}}>
            <img className="brainbase-logo" src="/logo/logo_wide.svg"></img>
            <div className="login-pane">
                <h3>Forgot Password</h3><br/>
                <Input type="email" sx={{width:'90%'}} placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
                <br/>
                <Button sx={{width:'90%'}} onClick={()=>{
                    resetEmail();
                }} disabled={!email} color="primary">Reset Password</Button>
                <br/>
                <Link href="/signup" style={{fontSize:"14px",color:"#0B6BCB",margin:'5px'}}>No account? Sign up</Link>
                <Link href="/signin" style={{fontSize:"14px",color:"#0B6BCB"}}>Remember? Sign in</Link>
            </div>
        </div>
    )
}