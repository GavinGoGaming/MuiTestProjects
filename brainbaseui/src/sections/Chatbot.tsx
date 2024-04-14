'use client';
import react from 'react';

import { Button, Sheet, Skeleton, Typography } from '@mui/joy';
import AccordionGroup from '@mui/joy/AccordionGroup';
import Accordion from '@mui/joy/Accordion';
import AccordionDetails from '@mui/joy/AccordionDetails';
import AccordionSummary from '@mui/joy/AccordionSummary';

declare const window: any;

export default function Chatbot() {
    const initialized = react.useRef(false)

    react.useEffect(() => {
        if (!initialized.current) {
            initialized.current = true;
            var messages: any[] = [{role: 'system', content: window.localStorage.systemprompt||'You are a friendly human named Brainbase. You can speak in markdown if needed.'}];
            
            var syspro: HTMLTextAreaElement = document.querySelector('#syspro') || new HTMLTextAreaElement();
            window.generationEnabled = true;
            if(window.localStorage.systemprompt == null || window.localStorage.systemprompt == undefined || window.localStorage.systemprompt == "" || window.localStorage.systemprompt == " ") {
                window.localStorage.systemprompt = 'You are a friendly human named Brainbase. You can speak in markdown if needed.';
                syspro.value = 'You are a friendly human named Brainbase. You can speak in markdown if needed.';
            }else {
                syspro.value = window.localStorage.systemprompt;
            }

            var md = async (c: string)=>{
                var r = await fetch('/api/md', {
                    method: 'POST',
                    body: c
                }).then(res=>res.json());
                return r.result;
            }
            
            const messageInput: HTMLInputElement = document.querySelector('#message_data')||new HTMLInputElement(),
                messageButton= document.querySelector('#send_message');
            var addMessageBubble = async (content: string, type: string) => {
                var ele = document.createElement('div');
                ele.className = "MuiSheet-root MuiSheet-variantPlain MuiSheet-colorNeutral chat-bubble css-1dxa6bh-JoySheet-root "+type;
                var par = document.createElement('div')
                par.className = "bubblecontent";
                if(type == "ai") {
                    par.innerHTML = await md(content);
                }else {
                    par.innerHTML = (content);
                }
                ele.appendChild(par);

                document.querySelector('.chatbox-messages')?.insertAdjacentElement(`beforeend`, ele);
                window.hljs = window.hljs || null;
                window.hljs.highlightAll();

                ele.scrollIntoView();
            }
            var addLoadingMessageBtn = async (type: string) => {
                var ele = document.createElement('div');
                ele.className = "MuiSheet-root MuiSheet-variantPlain MuiSheet-colorNeutral chat-bubble css-1dxa6bh-JoySheet-root "+type;
                var par = document.createElement('div')
                par.className = "bubblecontent";
                ele.appendChild(par);

                document.querySelector('.chatbox-messages')?.insertAdjacentElement(`beforeend`, ele);
                window.hljs = window.hljs || null;
                window.hljs.highlightAll();

                ele.scrollIntoView();

                var skeleton = document.createElement('span');
                skeleton.className = "MuiSkeleton-root MuiSkeleton-variantOverlay MuiSkeleton-levelInherit css-1nh6cob-JoySkeleton-root";
                skeleton.setAttribute('style', 'border-radius:inherit !important;position:absolute !important;top:0;left:0;width:100%;height:100%;');
                skeleton.textContent = "Hey! I'm brainbase. This is dummy content."
                par.textContent = "Hey! I'm brainbase. This is dummy content.";
                par.appendChild(skeleton)

                return {setText: async(content:string)=>{
                    par.innerHTML = await md(content);
                }, skeleton};
            }
            var sendUserMessage = async ()=>{
                if(messageInput.value == "" || messageInput.value == " " || messageInput.value.trim() == "" || messageInput.value.trim() == " ") {
                    return;
                }
                messages.push({role: 'user', content: messageInput.value})
                await addMessageBubble(messageInput.value, 'user');
                messageInput.value = "";
                if(window.generationEnabled){
                    setTimeout(async()=>{
                    var msg: {skeleton: HTMLSpanElement, setText: Function} = await addLoadingMessageBtn('ai');
                    fetch('/api/generate', {
                        method: 'POST',
                        headers: {'Content-Type': 'application/json'},
                        body: JSON.stringify({messages: messages})
                    }).then(res=>res.json()).then(async res=>{
                        messages.push({role: 'assistant', content: res.message});
                        msg.setText(res.message);
                        msg.skeleton.remove();
                    });
                    },500);
                }
            }
            messageInput?.addEventListener('keydown', async (e)=>{
                if(e.key == "Enter") {
                    e.preventDefault();
                    await sendUserMessage();
                }
            })
            messageButton?.addEventListener('click', sendUserMessage);

            document.querySelector('#update_system_prompt')?.addEventListener('click', function(){
                window.localStorage.systemprompt = syspro.value;
                messages[0].content = syspro.value;
            })

            document.querySelector('#quick_toggle')?.addEventListener('click', ()=>{
                // Disable visibility of both .chatbox-messages and .chatbox-controls and enable visibility of .chatbox-right
                document.querySelector('.chatbox-messages')?.classList.toggle('hidden');
                document.querySelector('.chatbox-controls')?.classList.toggle('hidden');
                document.querySelector('.chatbox-right')?.classList.toggle('visible');
                document.querySelector('#quick')?.classList.toggle('bottom-sticky');
            })

            document.querySelector('#generate')?.addEventListener('change', ()=>{
                window.generationEnabled = (document.querySelector('#generate') as HTMLInputElement).checked;
            })
            document.querySelector('#export_chat')?.addEventListener('click', ()=>{
                prompt("Copy this and keep it safe.", JSON.stringify(messages));
            })
            document.querySelector('#import_chat')?.addEventListener('click', ()=>{
                var data = prompt("Enter save data", "");
                if(data == null || data == undefined || data == "" || data == " ") {
                    return;
                }
                // check if its valid json with each entry being of type {role: string, content: string}
                if(!data.startsWith("[") || !data.endsWith("]")) {
                    alert("Invalid save data.");
                    return;
                }
                var parsed = JSON.parse(data);
                if(!Array.isArray(parsed)) {
                    alert("Invalid save data.");
                    return;
                }
                for(var i = 0; i < parsed.length; i++) {
                    if(!parsed[i].role || !parsed[i].content) {
                        alert("Invalid save data.");
                        return;
                    }
                    // check types
                    if(typeof parsed[i].role != "string" || typeof parsed[i].content != "string") {
                        alert("Invalid save data.");
                        return;
                    }
                }
                messages = JSON.parse(data);

                (document.querySelector('.chatbox-messages')||new HTMLSpanElement()).innerHTML = "";
                messages.forEach(async (e)=>{
                    if(e.role == "assistant" || e.role == "user") {
                        await addMessageBubble(e.content, e.role=="assistant"?'ai':e.role);
                    }
                })
            })

            document.querySelectorAll('.skele_loading').forEach(e=>{
                // var p=e.parentElement;
                // for(var i = 0; i <= e.childElementCount; i++) {
                //     p?.appendChild(e.children[0]);
                // }
                e.remove();
            });
        }
    }, []);
    return (
        <div>
            <div className="chatbox-left">
                <div className="chatbox-messages">
                    <Sheet className="chat-bubble ai">
                        <div className="bubblecontent">
                            Welcome to Brainbase AI!
                        </div>
                    </Sheet>
                </div>
                <div className="chatbox-controls">
                    <input type="text" id="message_data" />
                    <Button id="send_message" sx={{fontSize: '18px',marginLeft:'10px'}}>Send</Button><br/>
                </div>
                <Sheet id="quick" variant='outlined' sx={{my:'20px',p:'10px',borderRadius:'md'}}>
                    <Button id="quick_toggle" style={{cursor:'pointer'}}>
                        <i className="fa-solid fa-palette fa-2x"></i> {/* <span style={{fontSize:'20px'}}></span> */}
                    </Button>
                </Sheet>
            </div>
            <div className="chatbox-right">
                <Skeleton className="skele_loading">
                </Skeleton>

                <h2><i className="fa-solid fa-palette"></i> Configuration</h2>
                
                <AccordionGroup sx={{ maxWidth: '100%' }}>
                <Accordion>
                    <AccordionSummary>System Prompt</AccordionSummary>
                    <AccordionDetails>
                        <textarea name="System Prompt" id="syspro" cols={30} style={{padding:'10px',resize: 'none',borderRadius:'inherit',outline:'none',border:'none',width:'calc(100% - 0px)'}} defaultValue="Loading..."></textarea>
                        <Button id="update_system_prompt" sx={{width:'calc(100% - 0px)'}}>Update System Prompt</Button>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary>Settings</AccordionSummary>
                    <AccordionDetails>
                        <label style={{width:'fit-content'}} htmlFor="generate">Do Generating
                        <input style={{width:'fit-content'}} id="generate" type='checkbox' defaultChecked={true}/></label>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary>Saving / Loading</AccordionSummary>
                    <AccordionDetails>
                        <Button id="export_chat" sx={{width:'90%',ml:'5%',marginTop:'5px'}}>Export Chat</Button>
                        <Button id="import_chat" sx={{width:'90%',ml:'5%',marginTop:'5px'}}>Import Chat</Button>
                    </AccordionDetails>
                </Accordion>
                </AccordionGroup>
            </div>
        </div>
    )
}