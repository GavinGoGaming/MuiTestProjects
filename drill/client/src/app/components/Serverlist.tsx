"use client";

import * as React from 'react';
import Avatar from '@mui/joy/Avatar';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Drawer from '@mui/joy/Drawer';
import DialogTitle from '@mui/joy/DialogTitle';
import DialogContent from '@mui/joy/DialogContent';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import ListItemButton from '@mui/joy/ListItemButton';
import Typography from '@mui/joy/Typography';
import ModalClose from '@mui/joy/ModalClose';
import { ListItemContent, ListItemDecorator } from '@mui/joy';
import { LanguageRounded, SupervisedUserCircle } from '@mui/icons-material';
import Serverchatbox from './Serverchatbox';

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

export default function Serverlist({servers, pms}: Readonly<{servers: {name: string, id: number}[],pms: {name: string, uid: number}[]}>) {
    const [open, setOpen] = React.useState('S0');

    return (
        <React.Fragment>
            <Drawer open={true} sx={{width:'350px'}}>
                <DialogTitle>my drill zones</DialogTitle>
                <DialogContent>
                    <List>
                        {servers.map((server, index) => (
                            <ListItem key={index}>
                                <ListItemButton onClick={() => {setOpen('S'+server.id)}}>
                                    <ListItemDecorator><LanguageRounded /></ListItemDecorator>
                                    <ListItemContent>{server.name}</ListItemContent>
                                    <Typography level="body-sm">space</Typography>
                                </ListItemButton>
                            </ListItem>
                        ))}
                        {pms.map((pm, index) => (
                            <ListItem key={index}>
                                <ListItemButton onClick={() => setOpen('P'+pm.uid)}>
                                    <ListItemDecorator><SupervisedUserCircle /></ListItemDecorator>
                                    <ListItemContent>{pm.name}</ListItemContent>
                                    <Typography level="body-sm">user</Typography>
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                </DialogContent>
                <Box
                    sx={{
                        display: 'flex',
                        gap: 1,
                        p: 1.5,
                        pb: 2,
                        borderTop: '1px solid',
                        borderColor: 'divider',
                    }}
                >
                    <Avatar size="lg" />
                    <div>
                        <Typography level="title-md">gavin<a style={{color:'#777'}}> on drill</a></Typography>
                        <Typography level="body-sm">joined {months[new Date().getMonth()]} {new Date().getDay()}, {new Date().getFullYear()}</Typography>
                    </div>
                </Box>
            </Drawer>
            <Serverchatbox open={open}/>
        </React.Fragment>
    );
}