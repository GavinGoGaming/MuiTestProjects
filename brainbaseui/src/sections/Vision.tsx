'use client';
import react, { useEffect, useRef } from 'react';

import { Button, Input, LinearProgress, Modal, ModalClose, Option, Select, Sheet, Typography } from '@mui/joy';
import Image from 'next/image';
export default function Vision() {
    var init = useRef(0);
    var [open, setOpen] = react.useState(false);
    useEffect(() => {
        if (init.current == 0) {
            init.current = 1;
            const generateImage = ()=> {
                document.querySelector('#progress')?.classList.remove('hidden');
                (document.querySelector('#gen') as HTMLButtonElement).classList.toggle('Mui-disabled');
                fetch('/api/image', {
                    method: 'POST',
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify({prompt: (document.querySelector('#prompt') as HTMLInputElement).value, stage: 1})
                }).then(res=>res.json()).then(x=>{
                    var i = setInterval(async ()=>{
                        var res = await fetch('/api/image', {
                            method: 'POST',
                            headers: {'Content-Type': 'application/json'},
                            body: JSON.stringify({id: x.result, stage: 2})
                        }).then(res=>res.json());
                        if(res.result != "incomplete") {
                            clearInterval(i);
                            var image = res.result;
                            console.log(res);
                            document.querySelector('#progress')?.classList.add('hidden');
                            (document.querySelector('#gen') as HTMLButtonElement).classList.toggle('Mui-disabled');
                            (document.querySelector('#igen') as HTMLImageElement).src = image;
                        }
                    },3000);
                });
            }

            document.querySelector('#gen')?.addEventListener('click', generateImage);
        }
    });
    return (
        <div>
        <h2>Vision Beta</h2>
        All models are provided by StableHorde and/or AIHorde. Pick a model: 
        <Select name="Vision Model" id="model" defaultValue="stable_diffusion">
            <Option value="stable_diffusion">StableDiffusion</Option>
        </Select><br/>
        Input Prompt: <Input type="text" name="prompt" id="prompt" defaultValue="A white cat laying on a bed of snow."/><br/>
        <Button id="gen">Generate Image</Button><br/>
        <div style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
        <LinearProgress className="hidden" id="progress" color="warning" sx={{my:'10px',width:'80%'}} value={25} determinate={false} />
        </div>
        <div style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
        <img style={{marginTop:'10px'}} height={256} width={256} src="https://placehold.jp/9fa5fe/000000/150x150.png?text=Brainbase%20512x512&css=%7B%22border-radius%22%3A%2215px%22%7D" id="igen" alt="Image Generation"/></div>
        

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