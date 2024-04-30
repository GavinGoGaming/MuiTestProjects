import { Button, Dropdown, Input, Option, OptionOnSelectData, Persona, SelectionEvents } from "@fluentui/react-components";
import Window from "../components/Window";
import './settings.css';
import { useEffect, useState } from "react";
import Emoji from "../components/Emoji";
import xor from "../utils/XOR";
let wallpapers = ["Motion Layered", "Sphere Green", "Sphere Purple", "Light Wave", "Light Fluent", "Dark Fluent", "Light Sand", "Windows Kali", "Motion Cones", "Motion Ribbon", "Motion Blobs", "Sun Daytime", "Sun Mountain", "Sun Setting", "Sun Desert", "Fluent Blue", "Fluent Green", "Fluent Pink", "Fluent Gray", "Windows 11 Dark", "Windows 11 Light", "Sun Nighttime", "Mac Mojave", "Mac Catalina", "Mac Big Sur", "Mac Monterey", "Chrome OS Default", "Frosty Glaciers"];
function Personalization() {
  
  const onChange = (event: SelectionEvents, data: OptionOnSelectData): void => {
    document.body.style.backgroundImage = `url("/windows/wallpaper${data.optionValue}.jpg")`;
    window.localStorage.setItem('background', `wallpaper${data.optionValue}.jpg`);
  };

  return (
    <>
    <h1>Personalization</h1>
    <b>Titles</b>
    <br />
    Window Title: <Input placeholder="glacier..." onChange={function(event, data) {
      window.localStorage.setItem('title', data.value);
      document.title = data.value;
    }} appearance="underline"/><br/>
    Window Icon: <Button onClick={()=>{
      document.querySelector('.moreicons')?.classList.remove('closing');
      document.querySelector('.moreicons')?.classList.add('opening');
    }}>Edit Icon</Button>
    <br />
    <br />
    <b>Themes</b><br/>
    Background: <Dropdown id="background-select" onOptionSelect={onChange} placeholder="Choose a new wallpaper..." appearance="underline">
      {wallpapers.map((wallpaper, index) => {
        return <Option key={index+1} value={`${index+1}`} text={wallpaper}>
          <Persona
          name={wallpaper}
          secondaryText={`#${index+1}`}
          avatar={{
              image: {
                  src: `/windows/wallpaper${index+1}.jpg`
              },
              style: {
                  borderRadius: '8px',
                  width: '50px'
              }
          }}
          />
      </Option>
      })}
    </Dropdown>
    <br/>
    OS Style: <Dropdown onOptionSelect={(event, data) => {
      window.localStorage.setItem('os', data.optionValue as string);
      window.location.reload();
    }}>
      <Option value={'windows'}>Windows 11</Option>
      <Option value={'macos'}>Mac OS</Option>
      <Option value={'chromeos'}>Chrome OS</Option>
      <Option value={'glacieros'}>Glacier</Option>
    </Dropdown>
    </>
  )
}

function Accounts() {
  return (
    <>
      <h1>"glacier"</h1>
      <p>is this thing on?</p>
      <p style={{fontSize:'4px'}}>i hope so</p>
    </>
  );
}

function Apps() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  return (
    <>
      <h1>Apps</h1>
      <b>Input</b><br/>
      <Input placeholder="XOR Input" onChange={(event, data)=>{setInput(data.value)}}/><br/><br/>
      <b>Output</b><br/>
      <Input placeholder="XOR Output" readOnly={true} value={output}/><br/>
      <a id="xor_output_url" target="_blank" style={{color:'#57575B'}}>Open URL Output</a>
      <br />
      <br />
      <Button onClick={()=>{
        setOutput(xor.decode(input));
        (document.getElementById('xor_output_url') as HTMLAnchorElement).style.color = '#57575B';
      }}>Decode</Button>
      <Button onClick={()=>{
        setOutput(xor.encode(input));
        (document.getElementById('xor_output_url') as HTMLAnchorElement).style.color = '#57575B';
      }}>Encode</Button>
      <Button onClick={()=>{
        setOutput(xor.quickURL(input));
        document.getElementById('xor_output_url')?.setAttribute('href', xor.quickURL(input));
        (document.getElementById('xor_output_url') as HTMLAnchorElement).style.color = '#28A9FF';
      }}>Encode to URL</Button>
    </>
  );
}

export default function SettingsApp() {
  const [tab, setTab] = useState('personalization');

  useEffect(() => {
    var title = window.localStorage.getItem('title');
    var icon = window.localStorage.getItem('icon');

    if (title) {
      document.title = title;
    } else {
      document.title = 'Glacier';
      window.localStorage.setItem('title', 'Glacier');
    }
    if (icon) {
      document.querySelector('link[rel="shortcut icon"]')?.setAttribute('href', `/windows/${icon}.png`);
    }else {
      window.localStorage.setItem('icon', 'glacierwhite');
    }
  },[]);
    return (
        <Window title="Settings" id="settings" taskbarIconID="settings" color={'gray'} seperateBorder="1px solid #cccccc0a">
        <div className="window-padding">
          <div className="settings-split">
            <div className="left">
              <Input placeholder="Search settings..." />
              <div className="settings-section disabled">
                <img src="/windows/icons/System.webp" alt="" />
                <p>System</p>
              </div>
              <div className="settings-section disabled">
                <img src="/windows/icons/Bluetooth & devices.webp" alt="" />
                <p>Bluetooth & Devices</p>
              </div>
              <div className="settings-section disabled">
                <img src="/windows/icons/Network & internet.webp" alt="" />
                <p>Network & Internet</p>
              </div>
              <div className={`settings-section ${tab === 'personalization' && 'active'}`} onClick={()=>{setTab('personalization')}}>
                <img src="/windows/icons/Personalisation.webp" alt="" />
                <p>Personalization</p>
              </div>
              <div  className={`settings-section ${tab === 'apps' && 'active'}`} onClick={()=>{setTab('apps')}}>
                <img src="/windows/icons/Apps.webp" alt="" />
                <p>Apps</p>
              </div>
              <div  className={`settings-section ${tab === 'accounts' && 'active'}`} onClick={()=>{setTab('accounts')}}>
                <img src="/windows/icons/Accounts.webp" alt="" />
                <p>Accounts</p>
              </div>
              <div className="settings-section disabled">
                <img src="/windows/icons/Time & language.webp" alt="" />
                <p>Time & Language</p>
              </div>
              <div className="settings-section disabled">
                <img src="/windows/icons/Gaming.webp" alt="" />
                <p>Gaming</p>
              </div>
              <div className="settings-section disabled">
                <img src="/windows/icons/Accessibility.webp" alt="" />
                <p>Accessibility</p>
              </div>
              <div className="settings-section disabled">
                <img src="/windows/icons/Privacy & security.webp" alt="" />
                <p>Privacy & Security</p>
              </div>
            </div>
            <div className="right">
              {tab === 'personalization' && <Personalization />}
              {tab === 'accounts' && <Accounts />}
              {tab === 'apps' && <Apps />}
            </div>
          </div>
        </div>
      </Window>
    );
}