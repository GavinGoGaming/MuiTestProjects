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

export default function Serverlist() {
    return (
        <>
        <div className="topdrawer">
            <Button variant="plain"><LanguageRounded /></Button>
            <Button variant="plain"><SupervisedUserCircle /></Button>
            <Button variant="plain"><SupervisedUserCircle /></Button>
            <Button variant="plain"><LanguageRounded /></Button>
            <Button variant="plain"><SupervisedUserCircle /></Button>
        </div>
            <Drawer open={true} sx={{width:'350px'}}>
                <DialogTitle>my drill zones</DialogTitle>
                <DialogContent>
                    <List>
                            <ListItem key={1}>
                                <ListItemButton>
                                    <ListItemDecorator><LanguageRounded /></ListItemDecorator>
                                    <ListItemContent>name</ListItemContent>
                                    <Typography level="body-sm">space</Typography>
                                </ListItemButton>
                            </ListItem>
                            <ListItem key={2}>
                                <ListItemButton>
                                    <ListItemDecorator><SupervisedUserCircle /></ListItemDecorator>
                                    <ListItemContent>name</ListItemContent>
                                    <Typography level="body-sm">user</Typography>
                                </ListItemButton>
                            </ListItem>
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
            <Serverchatbox/>
        </>
    );
}