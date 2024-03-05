import { Dropdown, Input, Option, OptionOnSelectData, SelectionEvents } from "@fluentui/react-components";
import Window from "../components/Window";
import './settings.css';

export default function SettingsApp() {
    const onChange = (event: SelectionEvents, data: OptionOnSelectData): void => {
        document.body.style.backgroundImage = `url("/windows/wallpaper${data.optionValue}.jpg")`;
        window.localStorage.setItem('background', `wallpaper${data.optionValue}.jpg`);
      };
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
              <div className="settings-section active">
                <img src="/windows/icons/Personalisation.webp" alt="" />
                <p>Personalization</p>
              </div>
              <div className="settings-section">
                <img src="/windows/icons/Apps.webp" alt="" />
                <p>Apps</p>
              </div>
              <div className="settings-section">
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
              <h1>Personalization</h1>
              <h4>Operating System Theme</h4>
              <p>Select a different full-OS-theme for the window.</p>
              <Dropdown id="theme-select" placeholder="Choose a new OS...">
                <Option value="windows">Windows 11</Option>
                <Option value="macos" disabled>Mac OS</Option>
                <Option value="chrome" disabled>Chrome OS</Option>
              </Dropdown>
              <br/><br/>
              <p>Choose a new wallpaper from a huge selection.</p>
              <Dropdown id="background-select" onOptionSelect={onChange} placeholder="Choose a new wallpaper..." >
                <Option value="23">Mac Mojave</Option>
                <Option value="24">Mac Ocean</Option>
                <Option value="25">Mac Big Sur</Option>
                <Option value="26">Mac Monterey</Option>
                <Option value="2">Sphere (Blue/Green)</Option>
                <Option value="3">Sphere (Blue/Red)</Option>
                <Option value="1">Motion Layers</Option>
                <Option value="9">Motion Cones</Option>
                <Option value="10">Motion Ribbon</Option>
                <Option value="11">Motion Liquid</Option>
                <Option value="14">Sunrise Ocean</Option>
                <Option value="12">Daytime Ocean</Option>
                <Option value="22">Sunset Ocean</Option>
                <Option value="13">Sunrise Lake</Option>
                <Option value="15">Sunrise Desert</Option>
                <Option value="16">Fluent Blue</Option>
                <Option value="17">Fluent Green</Option>
                <Option value="18">Fluent Pink</Option>
                <Option value="19">Fluent Gray</Option>
                <Option value="6">Fluent Black</Option>
                <Option value="20">Windows Dark</Option>
                <Option value="21">Windows Light</Option>
                <Option value="8">Windows Kali</Option>
              </Dropdown>
            </div>
          </div>
        </div>
      </Window>
    );
}