'use client';
import { CssVarsProvider, Sheet, Tab, TabList, Tabs } from '@mui/joy'
import React from 'react';
export default function ChatBot() {
    const [index, setIndex] = React.useState(0);
    return (
        <Sheet className="chatbox_zone" sx={{float:'right',borderTopRightRadius:'10px',borderTopLeftRadius:'10px'}} variant="plain">
            <Tabs
            id="tab"
          aria-label="Soft tabs"
          value={index}
          onChange={(event, value) => {setIndex(value as number);document.querySelectorAll('.content').forEach(e=>e.classList.add('hidden'));document.querySelector('.content-'+value)?.classList.remove('hidden')}}
          sx={{borderTopRightRadius:'10px'}}
        >
          <TabList variant="soft"
          sx={{borderTopRightRadius:'10px', borderTopLeftRadius:'10px'}}>
            <Tab
              variant={index === 0 ? 'solid' : 'plain'}
              color={index === 0 ? 'primary' : 'neutral'}
              sx={{borderTopLeftRadius:'10px'}}
              className="tab"
            >
              Chatbot
              <i className="fa-solid fa-message-smile"></i>
            </Tab>
            <Tab
              variant={index === 1 ? 'solid' : 'plain'}
              color={index === 1 ? 'primary' : 'neutral'}
              className="tab"
            >
              Vision
              <i className="fa-solid fa-image"></i>
            </Tab>
            <Tab
              variant={index === 2 ? 'solid' : 'plain'}
              color={index === 2 ? 'primary' : 'neutral'}
              className="tab"
            >
              Boxgen
              <i className="fa-solid fa-input-text"></i>
            </Tab>
          </TabList>
        </Tabs>
        <Sheet className="content content-0" sx={{padding: '20px'}}>
            <h1>AI Chatbot</h1>
        </Sheet>
        <Sheet className="content content-1 hidden" sx={{padding: '20px'}}>
            <h1>Vision (AI Image Gen)</h1>
        </Sheet>
        <Sheet className="content content-2 hidden" sx={{padding: '20px'}}>
            <h1>Boxgen (Mass Generation)</h1>
        </Sheet>
        </Sheet>
    )
}