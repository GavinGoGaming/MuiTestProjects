'use client';
import react, { useEffect, useRef } from 'react';

import { Button, Input, LinearProgress, Modal, ModalClose, Option, Select, Sheet, Typography } from '@mui/joy';
import Image from 'next/image';

import modelList from '../utils/horde_models';

declare const window: any;

export default function Vision() {
    var init = useRef(0);
    const [open, setOpen] = react.useState(false);

    useEffect(() => {
        if(!window.selModel) {
            window.selModel = 'stable_diffusion';
        }
        document.querySelector('#progress')?.classList.add('hidden');
        if (init.current == 0) {
            init.current = 1;
            const generateImage = (igen: string) => {
                document.querySelector('#progress')?.classList.remove('hidden');
                (document.querySelector('#gen') as HTMLButtonElement).classList.toggle('Mui-disabled');
                fetch('/api/image', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ prompt: (document.querySelector('#prompt') as HTMLInputElement).value, stage: 1, model: window.selModel })
                }).then(res => res.json()).then(x => {
                    var i = setInterval(async () => {
                        var res = await fetch('/api/image', {
                            method: 'POST',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify({ id: x.result, stage: 2 })
                        }).then(res => res.json());
                        if (res.result != "incomplete") {
                            clearInterval(i);
                            var image = res.result;
                            console.log(res);
                            document.querySelector('#progress')?.classList.add('hidden');
                            (document.querySelector('#gen') as HTMLButtonElement).classList.toggle('Mui-disabled');
                            (document.querySelector(igen) as HTMLImageElement).src = image;
                        }
                    }, 3000);
                });
            }

            const generateImagesClick = () => {
                generateImage('#igen');
                generateImage('#igen4');
            }

            document.querySelector('#gen')?.addEventListener('click', generateImagesClick);
        }
    });

    function formatModelName(model: string) {
        var words = model.replaceAll('_',' ').split(' ');
        var formatted = '';
        words.forEach((word)=>{
            formatted += word.charAt(0).toUpperCase() + word.substring(1) + ' ';
        });
        return formatted;
    }

    return (
        <div>
            <h2>Vision Beta</h2>
            All models are provided by StableHorde. Pick a model (or leave blank for Stable Diffusion):
            <Select name="Vision Model" onChange={(x, v) => {window.selModel = (v as string)}}>
                {modelList.map((model, index) => {
                    return <Option key={index} value={model}>{formatModelName(model)}</Option>
                })}
            </Select><br />
            Input Prompt: <Input type="text" name="prompt" id="prompt" defaultValue="A white cat laying on a bed of snow." /><br />
            <Button id="gen">Generate Image</Button><br />
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <LinearProgress className="hidden" id="progress" color="warning" sx={{ my: '10px', width: '80%' }} value={25} determinate={false} />
            </div>
            <div style={{ display: 'flex', gap: '5px', alignItems: 'center', justifyContent: 'center' }}>
                <img style={{ marginTop: '10px' }} height={128} width={128} src="https://placehold.jp/333333/fffff/512x512.png?text=Example%20512x512&css=%7B%22border-top-left-radius%22%3A%2235px%22%2C%22border-bottom-left-radius%22%3A%2235px%22%7D" id="igen" alt="Image Generation" />
                <img style={{ marginTop: '10px' }} height={128} width={128} src="https://placehold.jp/333333/fffff/512x512.png?text=Example%20512x512&css=%7B%22border-top-right-radius%22%3A%2235px%22%2C%22border-bottom-right-radius%22%3A%2235px%22%7D" id="igen4" alt="Image Generation" />
            </div>

            <Modal
                aria-labelledby="error"
                open={open}
                onClose={(_event: React.MouseEvent<HTMLButtonElement>, reason: string) => {
                    setOpen(false);
                }}
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <Sheet
                    variant="outlined"
                    sx={{
                        minWidth: 300,
                        borderRadius: 'md',
                        p: 3,
                    }}
                >
                    <ModalClose variant="outlined" />
                    <Typography
                        component="h2"
                        id="close-modal-title"
                        level="h4"
                        textColor="inherit"
                        fontWeight="lg"
                    >
                        Something went wrong
                    </Typography>
                    <Typography
                        component="h2"
                        id="err"
                        level="body-md"
                        textColor="inherit"
                        fontWeight="lg"
                    >
                        Something has gone wrong making your image. Please try again later.
                    </Typography>
                </Sheet>
            </Modal>

        </div>
    )
}