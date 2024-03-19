import { MessageRounded } from "@mui/icons-material";
import { Button, Sheet, Typography } from "@mui/joy";
import Input from '@mui/joy/Input';
import { useEffect, useState } from "react";

function BubbleLeft({message}: Readonly<{message: string}>) {
    return (
        <div style={{display: 'flex', gap: '10px', justifyContent: 'flex-start'}}>
            <div style={{backgroundColor: '#333', borderRadius: '10px', padding: '10px', maxWidth: '50%'}}>
                <p>{message}</p>
            </div>
        </div>
    );
}
function BubbleRight({message}: Readonly<{message: string}>) {
    return (
        <div style={{display: 'flex', gap: '10px', justifyContent: 'flex-end'}}>
            <div style={{backgroundColor: '#333', borderRadius: '10px', padding: '10px', maxWidth: '50%'}}>
                <p>{message}</p>
            </div>
        </div>
    );
}

export default function Serverchatbox({open}: Readonly<{open: string}>) {
    const [data, setData] = useState({pms: [] as any[], servers: [] as any[]});

    useEffect(() => {
        fetch('/api/get_chat_data')
        .then(response => response.json())
        .then(json => setData(json))
        .catch(error => console.error(error));
    }, []);

    return (
        <Sheet sx={{width: 'calc(100% - 450px)', height: '94vh', marginTop:'3vh', left: '400px', position: 'absolute', borderRadius:'md', boxShadow: 'lg',px:'20px',py:'13px'}} variant={"outlined"} color={"neutral"}>
            <div style={{display:'flex',justifyContent:'space-between'}}>
                <h4>{open.startsWith('P') ? data.pms[parseInt(open.substring(1))].name : data.servers[parseInt(open.substring(1))].name}</h4>
                <Typography level="body-sm">{open.startsWith('P')?'private message - ':'space - '}#{open}</Typography>
            </div>
            <div style={{display: 'flex', flexDirection: 'column', gap: '10px', height: 'calc(100% - 80px)', marginTop:'10px',paddingTop:'10px',borderTop:'1px solid #cccccc20'}}>
                {open.startsWith('P') ? data.pms[parseInt(open.substring(1))].messages.map((message: any,idx: number)=> (
                    message.from === '' ? <BubbleRight message={message.message}/> : <BubbleLeft message={message.message}/>
                )) : data.servers[parseInt(open.substring(1))].messages.map((message: any,idx: number)=> (
                    message.from === '' ? <BubbleRight message={message.message}/> : <BubbleLeft message={message.message}/>
                ))}
                <BubbleLeft message={""}/>
                <BubbleRight message={"drill is a new chatapp, designed for Glacier"}/>
                <BubbleLeft message={"any trackers/data collection?"}/>
                <BubbleRight message={"Nope."}/>
                <BubbleLeft message={"damn. nice"}/>
            </div>
            <Input defaultValue={'non'} variant="soft" endDecorator={<Button color={"neutral"}><MessageRounded/></Button>} />
        </Sheet>
    );
}