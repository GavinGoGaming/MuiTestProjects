// Page with simple login form asking for just an access code. If access code is correct, set localstorage "auth" to "true" and redirect to home page.
'use client';
import { useState } from "react";
import { useRouter } from "next/router";
import { FluentProvider, webDarkTheme, Button, Input } from "@fluentui/react-components";
import Head from "next/head";

export default function Login() {
    const [code, setCode] = useState("");
    const router = useRouter();
    const handleSubmit = (e: any) => {
        e.preventDefault();
        if (code === "fuckyou") {
            window.localStorage.setItem("auth", "true");
            router.push("/");
        }
    }
    return (
        <FluentProvider theme={webDarkTheme}>
            <Head>
                <title>Glacier OS</title>
            </Head>
            <div className="login">
                <form onSubmit={handleSubmit}>
                    <Input
                        placeholder="Access Code..."
                        value={code}
                        type="password"
                        onChange={(e) => setCode(e.target.value)}
                    />
                    <Button type="submit">Login</Button>
                </form>
            </div>
        </FluentProvider>
    );
}