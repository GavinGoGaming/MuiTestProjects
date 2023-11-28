import * as React from 'react';
import { CssVarsProvider, useColorScheme } from '@mui/joy/styles';
import Sheet from '@mui/joy/Sheet';
import Typography from '@mui/joy/Typography';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Button from '@mui/joy/Button';
import Link from '@mui/joy/Link';
import { DarkModeOutlined, LightModeOutlined } from '@mui/icons-material';
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';

function ModeToggle(props: {textEnabled: boolean}) {
  const { mode, setMode } = useColorScheme();
  return (
    <Button onClick={() => setMode(mode === 'dark' ? 'light' : 'dark')} variant='plain' sx={{position:'absolute',top:'25px',right:'20px'}} size='sm' color='neutral'>
      {props.textEnabled ? <Typography sx={{pr:'5px'}}>{mode == 'dark' ? 'Light Mode' : 'Dark Mode'}</Typography> : <></>}
      {mode === 'dark' || mode === undefined ? <LightModeOutlined style={{fontSize:'32px'}}></LightModeOutlined> : <DarkModeOutlined style={{fontSize:'32px'}}></DarkModeOutlined>}
    </Button>
  );
}

export default function LoginPane(props: {callback: Function}) {
  return (
    <div>
        <Sheet
          className="loginPaneLeftSide"
          variant="plain"
        >
          <Button onClick={function(){window.history.back()}} variant='plain' sx={{position:'absolute',top:'25px',left:'20px'}} size='sm' color='neutral'>
            <ArrowBackRoundedIcon style={{fontSize:'32px'}}></ArrowBackRoundedIcon>
            <Typography sx={{pl:'5px'}}>Back</Typography>
          </Button>
          <ModeToggle textEnabled={true}/>
          <div>
            <Typography level="title-lg">
              Klash Development
            </Typography>
            <Typography level="body-sm">The content you are trying to access requires a login to continue.</Typography>
          </div>
          <FormControl>
            <FormLabel>Email</FormLabel>
            <Input
              // html input attribute
              name="email"
              type="email"
              placeholder="johndoe@klash.dev"
            />
          </FormControl>
          <FormControl>
            <FormLabel>Password</FormLabel>
            <Input
              // html input attribute
              name="password"
              type="password"
              placeholder="password"
            />
          </FormControl>

          <Button sx={{ mt: 1 /* margin top */ }}>Log in</Button>
          <Typography
            endDecorator={<Link href="/sign-up">Sign up</Link>}
            fontSize="sm"
            sx={{ alignSelf: 'center' }}
          >
            Don&apos;t have an account?
          </Typography>
        </Sheet>
        <Sheet
          className="loginPaneRightSide"
        >
          <span style={{
            position: 'absolute',
            right: '5px',
            bottom: '5px',
            color: '#222',
            fontSize: '14px'
          }}>Photo by <a className='creditLink' href="https://unsplash.com/@rpnickson?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Roberto Nickson</a> on <a className='creditLink' href="https://unsplash.com/photos/vZ1JAXUO3-0?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a></span>

        </Sheet>
    </div>
  );
}