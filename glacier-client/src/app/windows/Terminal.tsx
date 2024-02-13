import { Dropdown, Input, Option, OptionOnSelectData, SelectionEvents } from "@fluentui/react-components";
import Window from "../components/Window";

export default function TerminalApp() {
    return (
        <Window title="Terminal - Command Prompt" id="terminal" taskbarIconID="terminal" color={'black'} seperateBorder="1px solid #ffffff0a">
        <textarea className="window-padding mono" style={{color:'white',height:'100%'}} rows={25}>
          Microsoft Windows [Version 10.0.22621.3007]

          (c) Microsoft Corporation. All rights reserved.


          C:\Users\user&gt;
        </textarea>
      </Window>
    );
}