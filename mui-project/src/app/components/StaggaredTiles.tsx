import * as React from 'react';
import { CssVarsProvider, useColorScheme } from '@mui/joy/styles';
import Sheet from '@mui/joy/Sheet';
import Typography from '@mui/joy/Typography';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Button from '@mui/joy/Button';
import Link from '@mui/joy/Link';
import doc from 'next/document'

export default function StaggaredTiles() {
    return (
        <CssVarsProvider defaultMode='dark'><main>
            <Sheet id='tiles'>
                <div className="tile"></div>
                <div className="tile"></div>
                <div className="tile"></div>
                <div className="tile"></div>
                <div className="tile"></div>
                <div className="tile"></div>
                <div className="tile"></div>
                <div className="tile"></div>
                <div className="tile"></div>
                <div className="tile"></div>
                <div className="tile"></div>
                <div className="tile"></div>
                <div className="tile"></div>
                <div className="tile"></div>
                <div className="tile"></div>
                <div className="tile"></div>
                <div className="tile"></div>
                <div className="tile"></div>
                <div className="tile"></div>
            </Sheet>
        </main></CssVarsProvider>
    )
}