// news page in tsx using dummy content and joy ui
'use client';
import React from 'react'
import { AspectRatio, Button, Card, CardContent, CssVarsProvider, Input, LinearProgress, Link, Modal, ModalClose, Option, Select, Sheet, ThemeProvider, Typography, extendTheme } from '@mui/joy';
import Image from 'next/image';
import { useState } from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';
import '@/app/globals.css';
import Head from 'next/head';
import { json } from 'stream/consumers';
var theme = extendTheme({
    colorSchemes: {
        dark: {
            palette: {
                primary: {
                    "100": "#622004",
                    "200": "#943005",
                    "300": "#c54007",
                    "400": "#F86C30",
                    "500": "#f8733a",
                    "600": "#fa966b",
                    "700": "#F86C30",
                }
            }
        }
    }
});

export default function News() {
    function href(x: string) {
        window.location.href = x;
    }
    return (
        <div>
            <Head>
                <title>Brainbase News & Changelog</title>
            </Head>
            <CssVarsProvider defaultMode="dark" theme={theme}>
                <ThemeProvider theme={theme}>
                    <main>
                        <Sheet className="nav_small" sx={{ borderRadius: 'md', height: 'calc(100% - 20px)', width: '60px', position: 'absolute', top: '10px', left: '10px' }}>
                            <Button color="neutral" variant='plain' onClick={function () { href('/#'); }}><i className="fa-solid fa-brain"></i></Button>
                            <Button color="neutral" variant='plain' onClick={function () { href('/news/#'); }}><i className="fa-solid fa-newspaper"></i></Button>
                        </Sheet>
                        <Sheet className="nav_big" sx={{ borderRadius: 'md', height: 'calc(100% - 20px)', width: '20vw', position: 'absolute', top: '10px', left: '10px' }}>
                            <img src="/logo/logo_wide.svg" style={{ filter: 'brightness(0) invert(1)' }} alt="" />
                            <Button color="neutral" variant='plain' onClick={function () { href('/#'); }}><i className="fa-solid fa-brain"></i> AI Utilities</Button>
                            <Button color="neutral" variant='plain' onClick={function () { href('/news/#'); }}><i className="fa-solid fa-newspaper"></i> News/Changelog</Button>
                        </Sheet>
                        <Sheet className="chatbox_zone" sx={{float:'right',borderTopRightRadius:'10px',borderTopLeftRadius:'10px',p:'20px'}} variant='plain'>
                        {[{
                            id: 'new_ui_story', title: 'Brand New UI & Brand New Features',
                            release_date: 'October 29, 2023', image: 'https://i.imgur.com/lSkRTw5.png',
                            author: 'Gavin from Klash',
                            content: `Hey all!<br />
                            I wanted to write about our brand new UI! We have added tons of great new features that
                            we will describe in this article. Before we start, I want to remind you that you can check
                            these out yourself by visiting the <a href="/#" class="MuiLink-root MuiLink-colorPrimary MuiLink-body-md MuiLink-underlineHover css-prd5ci-JoyLink-root">home page</a> and trying the features yourself.
                            Lets discuss these features, shall we?<br /><br />

                            <div class="MuiTypography-root MuiTypography-title-md css-ar9ysw-JoyTypography-root">New UI</div><br />
                            First of all, we have our brand new UI. We have rewritten all of our code and made it much more efficient
                            to keep our members happy. We have also made a new dark theme.
                            <br /><br />
                            <div class="MuiTypography-root MuiTypography-title-md css-ar9ysw-JoyTypography-root">New Features</div><br />
                            First feature that we have added is Live Configuration updates. Before, you had to reset your entire conversation just to
                            be able to edit a configuration option! Now we give you the ability to modify the AI's system prompt in real time as a chat is going on. Simply
                            head to the quick configuration box, select system prompt, and edit away! You may share your prompts over at the <a href="https://discord.gg/Smb9wMWadU" class="MuiLink-root MuiLink-colorPrimary MuiLink-body-md MuiLink-underlineHover css-prd5ci-JoyLink-root">Discord</a> server.
                            <br /><br />
                            <div class="MuiTypography-root MuiTypography-title-md css-ar9ysw-JoyTypography-root">New Models</div><br />
                            We now support many AI models, such as gpt-2 (Boxgen), gpt-4 (Beta), and gpt-3.5 (Chats).
                            Along with this, we have a wide range of AI Image models avalible over at the Vision section of
                            our AI Utilities. Currently these models include StableDiffusion, DallE, Brainart, and we are working on bringing more.
                            <br /><br />
                            We hope you enjoy the brand new features that brainbase brings you! We are working on bringing even more content in the future, and its gonna be
                            great.<br />
                            Anyways, thats it from me!`
                        }].map((element) => {
                            return (
                                <div>
                                <Modal open={true}
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                    }}
                                    id={element.id}
                                    className="hidden"
                                    onClose={(_event: React.MouseEvent<HTMLButtonElement>, reason: string) => {
                                        document.querySelector('#'+element.id)?.classList.add('hidden');
                                    }}
                                >
                                    <Sheet sx={{ borderRadius: 'lg', p: 3, width: '70vw', minHeight: 500, maxHeight: 650, overflowY: 'scroll' }} variant='outlined'>
                                        <Typography level="title-lg">{element.title}</Typography>
                                        <Typography level="body-sm">{element.release_date}</Typography>

                                        <ModalClose></ModalClose>

                                        <AspectRatio minHeight="120px" maxHeight="200px" sx={{ borderRadius: 'md' }}>
                                            <img
                                                src={element.image}
                                                srcSet={element.image + ' 2x'}
                                                loading="lazy"
                                                alt=""
                                            />
                                        </AspectRatio>
                                        <br />
                                        <Typography level="body-md">
                                            <div dangerouslySetInnerHTML={{ __html: element.content }}></div>

                                            <br />
                                            <b>- {element.author}</b>
                                        </Typography>
                                    </Sheet>
                                </Modal>
                                    <Card>
                                        <div>
                                            <Typography level="title-lg">{element.title}</Typography>
                                            <Typography level="body-sm">{element.release_date}</Typography>
                                        </div>
                                        <AspectRatio minHeight="120px" maxHeight="200px">
                                            <img
                                            src={element.image}
                                            srcSet={element.image + ' 2x'}
                                            loading="lazy"
                                            alt=""
                                            />
                                        </AspectRatio>
                                        <CardContent orientation="horizontal">
                                            <div>
                                            <Typography level="body-xs">Author:</Typography>
                                            <Typography fontSize="lg" fontWeight="lg">
                                                {element.author}
                                            </Typography>
                                            </div>
                                            <Button
                                            variant="solid"
                                            size="md"
                                            color="primary"
                                            aria-label="Read More"
                                            sx={{ ml: 'auto', alignSelf: 'center', fontWeight: 600 }}
                                            onClick={function(){document.querySelector('#' + element.id)?.classList.remove('hidden');}}
                                            >
                                            Read More
                                            </Button>
                                        </CardContent>
                                    </Card>
                                </div>
                            )
                        })}
                        </Sheet>
                    </main>
                </ThemeProvider>
            </CssVarsProvider>
        </div>
    );
}